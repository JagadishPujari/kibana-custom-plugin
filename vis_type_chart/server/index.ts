/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { PluginConfigDescriptor, PluginInitializerContext } from 'kibana/server';

import { configSchema, ConfigSchema } from '../config';
import { VisTypeChartPlugin } from './plugin';

export const config: PluginConfigDescriptor<ConfigSchema> = {
  exposeToBrowser: {
    enableExternalUrls: true,
  },
  schema: configSchema,
  deprecations: ({ renameFromRoot }) => [
    renameFromRoot('chart.enableExternalUrls', 'vis_type_chart.enableExternalUrls'),
    renameFromRoot('chart.enabled', 'vis_type_chart.enabled'),
  ],
};

export function plugin(initializerContext: PluginInitializerContext) {
  return new VisTypeChartPlugin(initializerContext);
}

export { VisTypeChartPluginStart, VisTypeChartPluginSetup } from './types';
