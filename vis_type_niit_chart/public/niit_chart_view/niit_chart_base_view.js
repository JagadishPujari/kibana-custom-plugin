/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import $ from 'jquery';
import moment from 'moment';
import dateMath from '@elastic/datemath';
import { scheme, loader, logger, Warn, version as vegaVersion, expressionFunction } from 'vega';
import { expressionInterpreter } from 'vega-interpreter';
import { version as vegaLiteVersion } from 'vega-lite';
import { Utils } from '../data_model/utils';
import { euiPaletteColorBlind } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { TooltipHandler } from './vega_tooltip';
import { esFilters } from '../../../data/public';

import { getEnableExternalUrls, getData } from '../services';
import { extractIndexPatternsFromSpec } from '../lib/extract_index_pattern';

scheme('elastic', euiPaletteColorBlind());

// Chart's extension functions are global. When called,
// we forward execution to the instance-specific handler
// This functions must be declared in the ChartBaseView class
const niit_chartFunctions = {
  kibanaAddFilter: 'addFilterHandler',
  kibanaRemoveFilter: 'removeFilterHandler',
  kibanaRemoveAllFilters: 'removeAllFiltersHandler',
  kibanaSetTimeFilter: 'setTimeFilterHandler',
};

for (const funcName of Object.keys(niit_chartFunctions)) {
  if (!expressionFunction(funcName)) {
    expressionFunction(funcName, function handlerFwd(...args) {
      const view = this.context.dataflow;
      view.runAfter(() => view._kibanaView.niit_chartFunctionsHandler(funcName, ...args));
    });
  }
}

const bypassToken = Symbol();

export function bypassExternalUrlCheck(url) {
  // processed in the  loader.sanitize  below
  return { url, bypassToken };
}

export class ChartBaseView {
  constructor(opts) {
    this._$parentEl = $(opts.parentEl);
    this._parser = opts.niit_chartParser;
    this._serviceSettings = opts.serviceSettings;
    this._filterManager = opts.filterManager;
    this._fireEvent = opts.fireEvent;
    this._timefilter = opts.timefilter;
    this._view = null;
    this._niit_chartViewConfig = null;
    this._$messages = null;
    this._destroyHandlers = [];
    this._initialized = false;
    this._enableExternalUrls = getEnableExternalUrls();
    this._niit_chartStateRestorer = opts.niit_chartStateRestorer;
  }

  async init() {
    if (this._initialized) throw new Error(); // safety
    this._initialized = true;

    try {
      this._$parentEl.empty().addClass(`vgaVis`).css('flex-direction', this._parser.containerDir);

      // bypass the onWarn warning checks - in some cases warnings may still need to be shown despite being disabled
      for (const warn of this._parser.warnings) {
        this._addMessage('warn', warn);
      }

      if (this._parser.error) {
        this._addMessage('err', this._parser.error);
        return;
      }

      this._$container = $('<div class="vgaVis__view">')
        // Force a height here because css is not loaded in mocha test
        .css('height', '100%')
        .appendTo(this._$parentEl);
      this._$controls = $(
        `<div class="vgaVis__controls vgaVis__controls--${this._parser.controlsDir}">`
      ).appendTo(this._$parentEl);

      this._addDestroyHandler(() => {
        if (this._$container) {
          this._$container.remove();
          this._$container = null;
        }
        if (this._$controls) {
          this._$controls.remove();
          this._$controls = null;
        }
        if (this._$messages) {
          this._$messages.remove();
          this._$messages = null;
        }
        if (this._view) {
          const state = this._view.getState();
          if (state) {
            this._niit_chartStateRestorer.save(state);
          }
          this._view.finalize();
        }
        this._view = null;
      });

      this._niit_chartViewConfig = this.createViewConfig();

      // The derived class should create this method
      await this._initViewCustomizations();
    } catch (err) {
      this.onError(err);
    }
  }

  /**
   * Find index pattern by its title, if not given, gets it from spec or a defaults one
   * @param {string} [index]
   * @returns {Promise<string>} index id
   */
  async findIndex(index) {
    const { indexPatterns } = getData();
    let idxObj;

    if (index) {
      [idxObj] = await indexPatterns.find(index);
      if (!idxObj) {
        throw new Error(
          i18n.translate('visTypeNiitChart.niit_chartParser.baseView.indexNotFoundErrorMessage', {
            defaultMessage: 'Index {index} not found',
            values: { index: `"${index}"` },
          })
        );
      }
    } else {
      [idxObj] = await extractIndexPatternsFromSpec(
        this._parser.isChartLite ? this._parser.vlspec : this._parser.spec
      );

      if (!idxObj) {
        const defaultIdx = await indexPatterns.getDefault();

        if (defaultIdx) {
          idxObj = defaultIdx;
        } else {
          throw new Error(
            i18n.translate('visTypeNiitChart.niit_chartParser.baseView.unableToFindDefaultIndexErrorMessage', {
              defaultMessage: 'Unable to find default index',
            })
          );
        }
      }
    }

    return idxObj.id;
  }

  createViewConfig() {
    const config = {
      expr: expressionInterpreter,
      renderer: this._parser.renderer,
    };

    // Override URL sanitizer to prevent external data loading (if disabled)
    const niit_chartLoader = loader();
    const originalSanitize = niit_chartLoader.sanitize.bind(niit_chartLoader);
    niit_chartLoader.sanitize = async (uri, options) => {
      if (uri.bypassToken === bypassToken) {
        // If uri has a bypass token, the uri was encoded by bypassExternalUrlCheck() above.
        // because user can only supply pure JSON data structure.
        uri = uri.url;
      } else if (!this._enableExternalUrls) {
        throw new Error(
          i18n.translate('visTypeNiitChart.niit_chartParser.baseView.externalUrlsAreNotEnabledErrorMessage', {
            defaultMessage:
              'External URLs are not enabled. Add   {enableExternalUrls}   to {kibanaConfigFileName}',
            values: {
              enableExternalUrls: 'vis_type_niit_chart.enableExternalUrls: true',
              kibanaConfigFileName: 'kibana.yml',
            },
          })
        );
      }
      const result = await originalSanitize(uri, options);
      // This will allow Chart users to load images from any domain.
      result.crossOrigin = null;

      return result;
    };
    config.loader = niit_chartLoader;

    const niit_chartLogger = logger(Warn);

    niit_chartLogger.warn = this.onWarn.bind(this);
    niit_chartLogger.error = this.onError.bind(this);

    config.logger = niit_chartLogger;

    return config;
  }

  onError() {
    this._addMessage('err', Utils.formatErrorToStr(...arguments));
  }

  onWarn() {
    if (!this._parser || !this._parser.hideWarnings) {
      this._addMessage('warn', Utils.formatWarningToStr(...arguments));
    }
  }

  _addMessage(type, text) {
    if (!this._$messages) {
      this._$messages = $(`<ul class="vgaVis__messages">`).appendTo(this._$parentEl);
    }
    this._$messages.append(
      $(`<li class="vgaVis__message vgaVis__message--${type}">`).append(
        $(`<pre class="vgaVis__messageCode">`).text(text)
      )
    );
  }

  resize() {
    if (this._parser.useResize && this._view) {
      this.updateChartSize(this._view);
      return this._view.runAsync();
    }
  }

  updateChartSize(view) {
    const width = Math.floor(Math.max(0, this._$container.width()));
    const height = Math.floor(Math.max(0, this._$container.height()));

    if (view.width() !== width || view.height() !== height) {
      view.width(width).height(height);
      return true;
    }
    return false;
  }

  setView(view) {
    if (this._view === view) return;

    if (this._view) {
      this._view.finalize();
    }

    this._view = view;

    if (view) {
      // Global niit_chart expression handler uses it to call custom functions
      view._kibanaView = this;

      if (this._parser.tooltips) {
        // position and padding can be specified with
        // {config:{kibana:{tooltips: {position: 'top', padding: 15 } }}}
        const tthandler = new TooltipHandler(this._$container[0], view, this._parser.tooltips);

        // Chart bug workaround - need to destroy tooltip by hand
        this._addDestroyHandler(() => tthandler.hideTooltip());
      }

      const state = this._niit_chartStateRestorer.restore();

      if (state) {
        return view.setState(state);
      } else {
        return view.runAsync();
      }
    }
  }

  /**
   * Handle
   * @param funcName
   * @param args
   * @returns {Promise<void>}
   */
  async niit_chartFunctionsHandler(funcName, ...args) {
    try {
      const handlerFunc = niit_chartFunctions[funcName];
      if (!handlerFunc || !this[handlerFunc]) {
        // in case functions don't match the list above
        throw new Error(
          i18n.translate(
            'visTypeNiitChart.niit_chartParser.baseView.functionIsNotDefinedForGraphErrorMessage',
            {
              defaultMessage: '{funcName} is not defined for this graph',
              values: { funcName: `${funcName}()` },
            }
          )
        );
      }
      await this[handlerFunc](...args);
    } catch (err) {
      this.onError(err);
    }
  }

  /**
   * @param {object} query Elastic Query DSL snippet, as used in the query DSL editor
   * @param {string} [index] as defined in Kibana, or default if missing
   */
  async addFilterHandler(query, index) {
    const indexId = await this.findIndex(index);
    const filter = esFilters.buildQueryFilter(query, indexId);

    this._fireEvent({ name: 'applyFilter', data: { filters: [filter] } });
  }

  /**
   * @param {object} query Elastic Query DSL snippet, as used in the query DSL editor
   * @param {string} [index] as defined in Kibana, or default if missing
   */
  async removeFilterHandler(query, index) {
    const indexId = await this.findIndex(index);
    const filterToRemove = esFilters.buildQueryFilter(query, indexId);

    const currentFilters = this._filterManager.getFilters();
    const existingFilter = currentFilters.find((filter) =>
      esFilters.compareFilters(filter, filterToRemove)
    );

    if (!existingFilter) return;

    try {
      this._filterManager.removeFilter(existingFilter);
    } catch (err) {
      this.onError(err);
    }
  }

  removeAllFiltersHandler() {
    this._filterManager.removeAll();
  }

  /**
   * Update dashboard time filter to the new values
   * @param {number|string|Date} start
   * @param {number|string|Date} end
   */
  setTimeFilterHandler(start, end) {
    const { from, to, mode } = ChartBaseView._parseTimeRange(start, end);

    this._fireEvent({
      name: 'applyFilter',
      data: {
        timeFieldName: '*',
        filters: [
          {
            range: {
              '*': {
                mode,
                gte: from,
                lte: to,
              },
            },
          },
        ],
      },
    });
  }

  /**
   * Parse start and end values, determining the mode, and if order should be reversed
   * @private
   */
  static _parseTimeRange(start, end) {
    const absStart = moment(start);
    const absEnd = moment(end);
    const isValidAbsStart = absStart.isValid();
    const isValidAbsEnd = absEnd.isValid();
    let mode = 'absolute';
    let from;
    let to;
    let reverse;

    if (isValidAbsStart && isValidAbsEnd) {
      // Both are valid absolute dates.
      from = absStart;
      to = absEnd;
      reverse = absStart.isAfter(absEnd);
    } else {
      // Try to parse as relative dates too (absolute dates will also be accepted)
      const startDate = dateMath.parse(start);
      const endDate = dateMath.parse(end);
      if (!startDate || !endDate || !startDate.isValid() || !endDate.isValid()) {
        throw new Error(
          i18n.translate('visTypeNiitChart.niit_chartParser.baseView.timeValuesTypeErrorMessage', {
            defaultMessage:
              'Error setting time filter: both time values must be either relative or absolute dates. {start}, {end}',
            values: {
              start: `start=${JSON.stringify(start)}`,
              end: `end=${JSON.stringify(end)}`,
            },
          })
        );
      }
      reverse = startDate.isAfter(endDate);
      if (isValidAbsStart || isValidAbsEnd) {
        // Mixing relative and absolute - treat them as absolute
        from = startDate;
        to = endDate;
      } else {
        // Both dates are relative
        mode = 'relative';
        from = start;
        to = end;
      }
    }

    if (reverse) {
      [from, to] = [to, from];
    }

    return { from, to, mode };
  }

  /**
   * Set global debug variable to simplify niit_chart debugging in console. Show info message first time
   */
  setDebugValues(view, spec, vlspec) {
    this._parser.searchAPI.inspectorAdapters?.niit_chart.bindInspectValues({
      view,
      spec: vlspec || spec,
    });

    if (window) {
      if (window.CHART_DEBUG === undefined && console) {
        console.log('%cWelcome to Kibana Chart Plugin!', 'font-size: 16px; font-weight: bold;');
        console.log(
          'You can access the Chart view with CHART_DEBUG. ' +
            'Learn more at https://vega.github.io/vega/docs/api/debugging/.'
        );
      }
      const debugObj = {};
      window.CHART_DEBUG = debugObj;
      window.CHART_DEBUG.CHART_VERSION = vegaVersion;
      window.CHART_DEBUG.CHART_LITE_VERSION = vegaLiteVersion;
      window.CHART_DEBUG.view = view;
      window.CHART_DEBUG.niit_chart_spec = spec;
      window.CHART_DEBUG.niit_chartlite_spec = vlspec;

      // On dispose, clean up, but don't use undefined to prevent repeated debug statements
      this._addDestroyHandler(() => {
        if (debugObj === window.CHART_DEBUG) {
          window.CHART_DEBUG = null;
        }
      });
    }
  }

  destroy() {
    // properly handle multiple destroy() calls by converting this._destroyHandlers
    // into the _ongoingDestroy promise, while handlers are being disposed
    if (this._destroyHandlers) {
      // If no destroy is yet running, execute all handlers and wait for all of them to resolve.
      this._ongoingDestroy = Promise.all(this._destroyHandlers.map((v) => v()));
      this._destroyHandlers = null;
    }
    return this._ongoingDestroy;
  }

  _addDestroyHandler(handler) {
    // If disposing hasn't started yet, enqueue it, otherwise dispose right away
    // This creates a minor issue - if disposing has started but not yet finished,
    // and we dispose the new handler right away, the destroy() does not wait for it.
    // This behavior is no different from the case when disposing has already completed,
    // so it shouldn't create any issues.
    if (this._destroyHandlers) {
      this._destroyHandlers.push(handler);
    } else {
      handler();
    }
  }
}