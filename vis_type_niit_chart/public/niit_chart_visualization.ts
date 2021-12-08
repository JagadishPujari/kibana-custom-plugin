/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { i18n } from '@kbn/i18n';
import { IInterpreterRenderHandlers } from 'src/plugins/expressions';
import { NiitChartParser } from './data_model/niit_chart_parser';
import { NiitChartVisualizationDependencies } from './plugin';
import { getNotifications, getData } from './services';
import type { NiitChartView } from './niit_chart_view/niit_chart_view';
import { createNiitChartStateRestorer } from './lib/niit_chart_state_restorer';

type NiitChartVisType = new (el: HTMLDivElement, fireEvent: IInterpreterRenderHandlers['event']) => {
  render(visData: NiitChartParser): Promise<void>;
  destroy(): void;
};

export const createNiitChartVisualization = ({
  getServiceSettings,
}: NiitChartVisualizationDependencies): NiitChartVisType =>
  class NiitChartVisualization {
    private readonly dataPlugin = getData();
    private niit_chartView: InstanceType<typeof NiitChartView> | null = null;
    private niit_chartStateRestorer = createNiitChartStateRestorer({
      isActive: () => Boolean(this.niit_chartView?._parser?.restoreSignalValuesOnRefresh),
    });

    constructor(
      private el: HTMLDivElement,
      private fireEvent: IInterpreterRenderHandlers['event']
    ) {}

    async render(visData: NiitChartParser) {
      const { toasts } = getNotifications();
      if (!visData && !this.niit_chartView) {
        toasts.addWarning(
          i18n.translate('visTypeNiitChart.visualization.unableToRenderWithoutDataWarningMessage', {
            defaultMessage: 'Unable to render without data',
          })
        );
        return;
      }

      try {
        await this._render(visData);
      } catch (error) {
        if (this.niit_chartView) {
          this.niit_chartView.onError(error);
        } else {
          
        }
      }
    }

    async _render(niit_chartParser: NiitChartParser) {
      if (niit_chartParser) {
        // New data received, rebuild the graph
        if (this.niit_chartView) {
          await this.niit_chartView.destroy();
          this.niit_chartView = null;
        }

        const serviceSettings = await getServiceSettings();
        const { filterManager } = this.dataPlugin.query;
        const { timefilter } = this.dataPlugin.query.timefilter;
        const niit_chartViewParams = {
          parentEl: this.el,
          fireEvent: this.fireEvent,
          niit_chartStateRestorer: this.niit_chartStateRestorer,
          niit_chartParser,
          serviceSettings,
          filterManager,
          timefilter,
        };

        if (niit_chartParser.useMap) {
          const { NiitChartMapView } = await import('./niit_chart_view/niit_chart_map_view/view');
          this.niit_chartView = new NiitChartMapView(niit_chartViewParams);
        } else {
          const { NiitChartView: NiitChartViewClass } = await import('./niit_chart_view/niit_chart_view');
          this.niit_chartView = new NiitChartViewClass(niit_chartViewParams);
        }
        await this.niit_chartView?.init();
      }
    }

    destroy() {
      this.niit_chartStateRestorer.clear();
      this.niit_chartView?.destroy();
    }
  };
