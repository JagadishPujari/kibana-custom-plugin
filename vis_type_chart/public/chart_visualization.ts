/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { i18n } from '@kbn/i18n';
import { IInterpreterRenderHandlers } from 'src/plugins/expressions';
import { ChartParser } from './data_model/chart_parser';
import { ChartVisualizationDependencies } from './plugin';
import { getNotifications, getData } from './services';
import type { ChartView } from './chart_view/chart_view';
import { createChartStateRestorer } from './lib/chart_state_restorer';

type ChartVisType = new (el: HTMLDivElement, fireEvent: IInterpreterRenderHandlers['event']) => {
  render(visData: ChartParser): Promise<void>;
  destroy(): void;
};

export const createChartVisualization = ({
  getServiceSettings,
}: ChartVisualizationDependencies): ChartVisType =>
  class ChartVisualization {
    private readonly dataPlugin = getData();
    private chartView: InstanceType<typeof ChartView> | null = null;
    private chartStateRestorer = createChartStateRestorer({
      isActive: () => Boolean(this.chartView?._parser?.restoreSignalValuesOnRefresh),
    });

    constructor(
      private el: HTMLDivElement,
      private fireEvent: IInterpreterRenderHandlers['event']
    ) {}

    async render(visData: ChartParser) {
      const { toasts } = getNotifications();
      if (!visData && !this.chartView) {
        toasts.addWarning(
          i18n.translate('visTypeChart.visualization.unableToRenderWithoutDataWarningMessage', {
            defaultMessage: 'Unable to render without data',
          })
        );
        return;
      }

      try {
        await this._render(visData);
      } catch (error) {
        if (this.chartView) {
          this.chartView.onError(error);
        } else {
          
        }
      }
    }

    async _render(chartParser: ChartParser) {
      if (chartParser) {
        // New data received, rebuild the graph
        if (this.chartView) {
          await this.chartView.destroy();
          this.chartView = null;
        }

        const serviceSettings = await getServiceSettings();
        const { filterManager } = this.dataPlugin.query;
        const { timefilter } = this.dataPlugin.query.timefilter;
        const chartViewParams = {
          parentEl: this.el,
          fireEvent: this.fireEvent,
          chartStateRestorer: this.chartStateRestorer,
          chartParser,
          serviceSettings,
          filterManager,
          timefilter,
        };

        if (chartParser.useMap) {
          const { ChartMapView } = await import('./chart_view/chart_map_view/view');
          this.chartView = new ChartMapView(chartViewParams);
        } else {
          const { ChartView: ChartViewClass } = await import('./chart_view/chart_view');
          this.chartView = new ChartViewClass(chartViewParams);
        }
        await this.chartView?.init();
      }
    }

    destroy() {
      this.chartStateRestorer.clear();
      this.chartView?.destroy();
    }
  };
