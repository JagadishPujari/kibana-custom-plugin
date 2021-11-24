/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from '../../../core/public';
import { Plugin as ExpressionsPublicPlugin } from '../../expressions/public';
import { DataPublicPluginSetup, DataPublicPluginStart } from '../../data/public';
import { VisualizationsSetup } from '../../visualizations/public';
import { Setup as InspectorSetup } from '../../inspector/public';

import {
  setNotifications,
  setData,
  setInjectedVars,
  setUISettings,
  setInjectedMetadata,
  setMapServiceSettings,
  setDocLinks,
} from './services';

import { createChartFn } from './chart_fn';
import { createChartTypeDefinition } from './chart_type';
import { IServiceSettings, MapsEmsPluginSetup } from '../../maps_ems/public';
import { ConfigSchema } from '../config';

import { getChartInspectorView } from './chart_inspector/chart_inspector';
import { getChartVisRenderer } from './chart_vis_renderer';
import { MapServiceSettings } from './chart_view/chart_map_view/map_service_settings';

/** @internal */
export interface ChartVisualizationDependencies {
  core: CoreSetup;
  plugins: {
    data: DataPublicPluginSetup;
  };
  getServiceSettings: () => Promise<IServiceSettings>;
}

/** @internal */
export interface ChartPluginSetupDependencies {
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  visualizations: VisualizationsSetup;
  inspector: InspectorSetup;
  data: DataPublicPluginSetup;
  mapsEms: MapsEmsPluginSetup;
}

/** @internal */
export interface ChartPluginStartDependencies {
  data: DataPublicPluginStart;
}

/** @internal */
export class ChartPlugin implements Plugin<void, void> {
  initializerContext: PluginInitializerContext<ConfigSchema>;

  constructor(initializerContext: PluginInitializerContext<ConfigSchema>) {
    this.initializerContext = initializerContext;
  }

  public setup(
    core: CoreSetup,
    { inspector, data, expressions, visualizations, mapsEms }: ChartPluginSetupDependencies
  ) {
    setInjectedVars({
      enableExternalUrls: this.initializerContext.config.get().enableExternalUrls,
      emsTileLayerId: core.injectedMetadata.getInjectedVar('emsTileLayerId', true),
    });

    setUISettings(core.uiSettings);

    setMapServiceSettings(
      new MapServiceSettings(mapsEms.config, this.initializerContext.env.packageInfo.version)
    );

    const visualizationDependencies: Readonly<ChartVisualizationDependencies> = {
      core,
      plugins: {
        data,
      },
      getServiceSettings: mapsEms.getServiceSettings,
    };

    inspector.registerView(getChartInspectorView({ uiSettings: core.uiSettings }));

    expressions.registerFunction(() => createChartFn(visualizationDependencies));
    expressions.registerRenderer(getChartVisRenderer(visualizationDependencies));

    visualizations.createBaseVisualization(createChartTypeDefinition());
  }

  public start(core: CoreStart, { data }: ChartPluginStartDependencies) {
    setNotifications(core.notifications);
    setData(data);
    setInjectedMetadata(core.injectedMetadata);
    setDocLinks(core.docLinks);
  }
}
