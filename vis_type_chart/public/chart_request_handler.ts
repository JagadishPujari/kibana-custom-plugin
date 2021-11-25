/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import type { KibanaExecutionContext } from 'src/core/public';
import { Filter, esQuery, TimeRange, Query } from '../../data/public';

import { SearchAPI } from './data_model/search_api';
import { TimeCache } from './data_model/time_cache';

import { ChartVisualizationDependencies } from './plugin';
import { VisParams } from './chart_fn';
import { getData, getInjectedMetadata } from './services';
import { ChartInspectorAdapters } from './chart_inspector';

interface ChartRequestHandlerParams {
  query: Query;
  filters: Filter;
  timeRange: TimeRange;
  visParams: VisParams;
  searchSessionId?: string;
  executionContext?: KibanaExecutionContext;
}

interface ChartRequestHandlerContext {
  abortSignal?: AbortSignal;
  inspectorAdapters?: ChartInspectorAdapters;
}

export function createChartRequestHandler(
  { plugins: { data }, core: { uiSettings }, getServiceSettings }: ChartVisualizationDependencies,
  context: ChartRequestHandlerContext = {}
) {
  let searchAPI: SearchAPI;
  const { timefilter } = data.query.timefilter;
  const timeCache = new TimeCache(timefilter, 3 * 1000);
  console.log("Im in chart api handler");
  return async function chartRequestHandler({
    timeRange,
    filters,
    query,
    visParams,
    searchSessionId,
    executionContext,
  }: ChartRequestHandlerParams) {
    if (!searchAPI) {
      const { search, indexPatterns } = getData();

      searchAPI = new SearchAPI(
        {
          uiSettings,
          search,
          indexPatterns,
          injectedMetadata: getInjectedMetadata(),
        },
        context.abortSignal,
        context.inspectorAdapters,
        searchSessionId,
        executionContext
      );
    }

    timeCache.setTimeRange(timeRange);

    const esQueryConfigs = esQuery.getEsQueryConfig(uiSettings);
    const filtersDsl = esQuery.buildEsQuery(undefined, query, filters, esQueryConfigs);
    const { ChartParser } = await import('./data_model/chart_parser');
    const vp = new ChartParser(visParams.spec, searchAPI, timeCache, filtersDsl, getServiceSettings);
    // console.log("data", searchAPI);
    return await vp.parseAsync();
  };
}
