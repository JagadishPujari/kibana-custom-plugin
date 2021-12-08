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
import { NiitChartParser } from '../data_model/niit_chart_parser';
import { createNiitChartStateRestorer } from '../lib/niit_chart_state_restorer';

interface NiitChartViewParams {
  parentEl: HTMLDivElement;
  fireEvent: IInterpreterRenderHandlers['event'];
  niit_chartParser: NiitChartParser;
  serviceSettings: IServiceSettings;
  filterManager: DataPublicPluginStart['query']['filterManager'];
  timefilter: DataPublicPluginStart['query']['timefilter']['timefilter'];
  niit_chartStateRestorer: ReturnType<typeof createNiitChartStateRestorer>;
}

export class NiitChartBaseView {
  constructor(params: NiitChartViewParams);
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
  _niit_chartViewConfig: any;
  _serviceSettings: NiitChartViewParams['serviceSettings'];
  _niit_chartStateRestorer: NiitChartViewParams['niit_chartStateRestorer'];
}
