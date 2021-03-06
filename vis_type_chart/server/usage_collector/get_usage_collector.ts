/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { parse } from 'hjson';
import type { ElasticsearchClient } from 'src/core/server';

import { ChartSavedObjectAttributes, VisTypeChartPluginSetupDependencies } from '../types';

type UsageCollectorDependencies = Pick<VisTypeChartPluginSetupDependencies, 'home'>;

type ChartType = 'chart' | 'chart-lite';

function isChartType(attributes: any): attributes is ChartSavedObjectAttributes {
  return attributes && attributes.type === 'chart' && attributes.params?.spec;
}

const checkChartSchemaType = (schemaURL: string, type: ChartType) =>
  schemaURL.includes(`//chart.github.io/schema/${type}/`);

const getDefaultChartVisualizations = (home: UsageCollectorDependencies['home']) => {
  const titles: string[] = [];
  const sampleDataSets = home?.sampleData.getSampleDatasets() ?? [];

  sampleDataSets.forEach((sampleDataSet) =>
    sampleDataSet.savedObjects.forEach((savedObject) => {
      try {
        if (savedObject.type === 'visualization') {
          const visState = JSON.parse(savedObject.attributes?.visState);

          if (isChartType(visState)) {
            titles.push(visState.title);
          }
        }
      } catch (e) {
        // Let it go, visState is invalid and we'll don't need to handle it
      }
    })
  );

  return titles;
};

export interface ChartUsage {
  chart_lib_specs_total: number;
  chart_lite_lib_specs_total: number;
  chart_use_map_total: number;
}

export const getStats = async (
  esClient: ElasticsearchClient,
  index: string,
  { home }: UsageCollectorDependencies
): Promise<ChartUsage | undefined> => {
  let shouldPublishTelemetry = false;

  const chartUsage = {
    chart_lib_specs_total: 0,
    chart_lite_lib_specs_total: 0,
    chart_use_map_total: 0,
  };

  const searchParams = {
    size: 10000,
    index,
    ignoreUnavailable: true,
    filterPath: ['hits.hits._id', 'hits.hits._source.visualization'],
    body: {
      query: {
        bool: {
          filter: { term: { type: 'visualization' } },
        },
      },
    },
  };

  const { body: esResponse } = await esClient.search<{ visualization: { visState: string } }>(
    searchParams
  );
  const size = esResponse?.hits?.hits?.length ?? 0;

  if (!size) {
    return;
  }

  // we want to exclude the Chart Sample Data visualizations from the stats
  // in order to have more accurate results
  const excludedFromStatsVisualizations = getDefaultChartVisualizations(home);
  for (const hit of esResponse.hits.hits) {
    const visualization = hit._source?.visualization;
    const visState = JSON.parse(visualization?.visState ?? '{}');

    if (isChartType(visState) && !excludedFromStatsVisualizations.includes(visState.title)) {
      try {
        const spec = parse(visState.params.spec, { legacyRoot: false });

        if (spec) {
          shouldPublishTelemetry = true;

          if (checkChartSchemaType(spec.$schema, 'chart')) {
            chartUsage.chart_lib_specs_total++;
          }
          if (checkChartSchemaType(spec.$schema, 'chart-lite')) {
            chartUsage.chart_lite_lib_specs_total++;
          }
          if (spec.config?.kibana?.type === 'map') {
            chartUsage.chart_use_map_total++;
          }
        }
      } catch (e) {
        // Let it go, the data is invalid and we'll don't need to handle it
      }
    }
  }

  return shouldPublishTelemetry ? chartUsage : undefined;
};
