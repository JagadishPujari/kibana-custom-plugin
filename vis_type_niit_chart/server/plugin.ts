/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from '../../../core/server';
import { registerChartUsageCollector } from './usage_collector';
import {
  ConfigObservable,
  VisTypeNiitChartPluginSetupDependencies,
  VisTypeNiitChartPluginSetup,
  VisTypeNiitChartPluginStart,
} from './types';

export class VisTypeNiitChartPlugin implements Plugin<VisTypeNiitChartPluginSetup, VisTypeNiitChartPluginStart> {
  private readonly config: ConfigObservable;

  constructor(initializerContext: PluginInitializerContext) {
    this.config = initializerContext.config.legacy.globalConfig$;
  }

  public setup(core: CoreSetup, { home, usageCollection }: VisTypeNiitChartPluginSetupDependencies) {
    if (usageCollection) {
      registerChartUsageCollector(usageCollection, this.config, { home });
    }
    return {};
  }

  public start(core: CoreStart) {
    return {};
  }
  public stop() {}
}
