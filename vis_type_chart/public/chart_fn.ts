/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { get } from 'lodash';
import { i18n } from '@kbn/i18n';
import { ExecutionContextSearch } from '../../data/public';
import { ExecutionContext, ExpressionFunctionDefinition, Render } from '../../expressions/public';
import { ChartVisualizationDependencies } from './plugin';
import { createChartRequestHandler } from './chart_request_handler';
import { ChartInspectorAdapters } from './chart_inspector/index';
import { KibanaContext, TimeRange, Query } from '../../data/public';
import { ChartParser } from './data_model/chart_parser';

type Input = KibanaContext | { type: 'null' };
type Output = Promise<Render<RenderValue>>;

interface Arguments {
  spec: string;
}

export type VisParams = Required<Arguments>;

export interface RenderValue {
  visData: ChartParser;
  visType: 'chart';
  visConfig: VisParams;
}

export type ChartExpressionFunctionDefinition = ExpressionFunctionDefinition<
  'chart',
  Input,
  Arguments,
  Output,
  ExecutionContext<ChartInspectorAdapters, ExecutionContextSearch>
>;

export const createChartFn = (
  dependencies: ChartVisualizationDependencies
): ChartExpressionFunctionDefinition => ({
  name: 'chart',
  type: 'render',
  inputTypes: ['kibana_context', 'null'],
  help: i18n.translate('visTypeChart.function.help', {
    defaultMessage: 'Chart visualization',
  }),
  args: {
    spec: {
      types: ['string'],
      default: '',
      help: '',
    },
  },
  async fn(input, args, context) {
    const chartRequestHandler = createChartRequestHandler(dependencies, context);

    const response = await chartRequestHandler({
      timeRange: get(input, 'timeRange') as TimeRange,
      query: get(input, 'query') as Query,
      filters: get(input, 'filters') as any,
      visParams: { spec: args.spec },
      searchSessionId: context.getSearchSessionId(),
      executionContext: context.getExecutionContext(),
    });

    return {
      type: 'render',
      as: 'chart_vis',
      value: {
        visData: response,
        visType: 'chart',
        visConfig: {
          spec: args.spec,
        },
      },
    };
  },
});
