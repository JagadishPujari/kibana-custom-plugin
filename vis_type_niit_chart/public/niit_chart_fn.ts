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
import { NiitChartVisualizationDependencies } from './plugin';
import { createChartRequestHandler } from './niit_chart_request_handler';
import { NiitChartInspectorAdapters } from './niit_chart_inspector/index';
import { KibanaContext, TimeRange, Query } from '../../data/public';
import { NiitChartParser } from './data_model/niit_chart_parser';

type Input = KibanaContext | { type: 'null' };
type Output = Promise<Render<RenderValue>>;

interface Arguments {
  spec: string;
}

export type VisParams = Required<Arguments>;

export interface RenderValue {
  visData: NiitChartParser;
  visType: 'niit_chart';
  visConfig: VisParams;
}

export type ChartExpressionFunctionDefinition = ExpressionFunctionDefinition<
  'niit_chart',
  Input,
  Arguments,
  Output,
  ExecutionContext<NiitChartInspectorAdapters, ExecutionContextSearch>
>;

export const createNiitChartFn = (
  dependencies: NiitChartVisualizationDependencies
): ChartExpressionFunctionDefinition => ({
  name: 'niit_chart',
  type: 'render',
  inputTypes: ['kibana_context', 'null'],
  help: i18n.translate('visTypeNiitChart.function.help', {
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
    const niit_chartRequestHandler = createChartRequestHandler(dependencies, context);

    const response = await niit_chartRequestHandler({
      timeRange: get(input, 'timeRange') as TimeRange,
      query: get(input, 'query') as Query,
      filters: get(input, 'filters') as any,
      visParams: { spec: args.spec },
      searchSessionId: context.getSearchSessionId(),
      executionContext: context.getExecutionContext(),
    });
    console.log("Final search result", response)
    return {
      type: 'render',
      as: 'niit_chart_vis',
      value: {
        visData: response,
        visType: 'niit_chart',
        visConfig: {
          spec: args.spec,
        },
      },
    };
  },
});
