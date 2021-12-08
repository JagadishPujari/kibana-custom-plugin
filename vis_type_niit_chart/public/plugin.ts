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

import { createNiitChartFn } from './niit_chart_fn';
import { createNiitChartTypeDefinition } from './niit_chart_type';
import { IServiceSettings, MapsEmsPluginSetup } from '../../maps_ems/public';
import { ConfigSchema } from '../config';

import { getNiitChartInspectorView } from './niit_chart_inspector/niit_chart_inspector';
import { getNiitChartVisRenderer } from './niit_chart_vis_renderer';
import { MapServiceSettings } from './niit_chart_view/niit_chart_map_view/map_service_settings';

/** @internal */
export interface NiitChartVisualizationDependencies {
  core: CoreSetup;
  plugins: {
    data: DataPublicPluginSetup;
  };
  getServiceSettings: () => Promise<IServiceSettings>;
}

/** @internal */
export interface NiitChartPluginSetupDependencies {
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  visualizations: VisualizationsSetup;
  inspector: InspectorSetup;
  data: DataPublicPluginSetup;
  mapsEms: MapsEmsPluginSetup;
}

/** @internal */
export interface NiitChartPluginStartDependencies {
  data: DataPublicPluginStart;
}

/** @internal */
export class NiitChartPlugin implements Plugin<void, void> {
  initializerContext: PluginInitializerContext<ConfigSchema>;

  constructor(initializerContext: PluginInitializerContext<ConfigSchema>) {
    this.initializerContext = initializerContext;
  }

  public setup(
    core: CoreSetup,
    { inspector, data, expressions, visualizations, mapsEms }: NiitChartPluginSetupDependencies
  ) {
    setInjectedVars({
      enableExternalUrls: this.initializerContext.config.get().enableExternalUrls,
      emsTileLayerId: core.injectedMetadata.getInjectedVar('emsTileLayerId', true),
    });

    setUISettings(core.uiSettings);

    setMapServiceSettings(
      new MapServiceSettings(mapsEms.config, this.initializerContext.env.packageInfo.version)
    );

    const visualizationDependencies: Readonly<NiitChartVisualizationDependencies> = {
      core,
      plugins: {
        data,
      },
      getServiceSettings: mapsEms.getServiceSettings,
    };

    inspector.registerView(getNiitChartInspectorView({ uiSettings: core.uiSettings }));

    expressions.registerFunction(() => createNiitChartFn(visualizationDependencies));
    expressions.registerRenderer(getNiitChartVisRenderer(visualizationDependencies));

    visualizations.createBaseVisualization(createNiitChartTypeDefinition());
  }

  public start(core: CoreStart, { data }: NiitChartPluginStartDependencies) {
    setNotifications(core.notifications);
    setData(data);
    setInjectedMetadata(core.injectedMetadata);
    setDocLinks(core.docLinks);
  }
}
