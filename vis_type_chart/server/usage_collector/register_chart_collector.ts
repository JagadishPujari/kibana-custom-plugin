/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { UsageCollectionSetup } from 'src/plugins/usage_collection/server';
import { first } from 'rxjs/operators';
import { getStats, ChartUsage } from './get_usage_collector';
import { ConfigObservable, VisTypeChartPluginSetupDependencies } from '../types';

export function registerChartUsageCollector(
  collectorSet: UsageCollectionSetup,
  config: ConfigObservable,
  dependencies: Pick<VisTypeChartPluginSetupDependencies, 'home'>
) {
  const collector = collectorSet.makeUsageCollector<ChartUsage | undefined>({
    type: 'vis_type_chart',
    isReady: () => true,
    schema: {
      chart_lib_specs_total: { type: 'long' },
      chart_lite_lib_specs_total: { type: 'long' },
      chart_use_map_total: { type: 'long' },
    },
    fetch: async ({ esClient }) => {
      const { index } = (await config.pipe(first()).toPromise()).kibana;

      return await getStats(esClient, index, dependencies);
    },
  });

  collectorSet.registerCollector(collector);
}
