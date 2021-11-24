/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { DataPublicPluginStart } from 'src/plugins/data/public';
import { IInterpreterRenderHandlers } from 'src/plugins/expressions';
import { IServiceSettings } from 'src/plugins/maps_ems/public';
import { ChartParser } from '../data_model/chart_parser';
import { createChartStateRestorer } from '../lib/chart_state_restorer';

interface ChartViewParams {
  parentEl: HTMLDivElement;
  fireEvent: IInterpreterRenderHandlers['event'];
  chartParser: ChartParser;
  serviceSettings: IServiceSettings;
  filterManager: DataPublicPluginStart['query']['filterManager'];
  timefilter: DataPublicPluginStart['query']['timefilter']['timefilter'];
  chartStateRestorer: ReturnType<typeof createChartStateRestorer>;
}

export class ChartBaseView {
  constructor(params: ChartViewParams);
  init(): Promise<void>;
  onError(error: any): void;
  onWarn(error: any): void;
  setView(map: any): void;
  setDebugValues(view: any, spec: any, vlspec: any): void;
  _addDestroyHandler(handler: Function): void;

  destroy(): Promise<void>;

  _$container: any;
  _$controls: any;
  _parser: any;
  _chartViewConfig: any;
  _serviceSettings: ChartViewParams['serviceSettings'];
  _chartStateRestorer: ChartViewParams['chartStateRestorer'];
}
