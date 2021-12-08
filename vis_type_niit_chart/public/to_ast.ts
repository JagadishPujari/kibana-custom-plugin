/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { buildExpression, buildExpressionFunction } from '../../expressions/public';
import { Vis } from '../../visualizations/public';
import { ChartExpressionFunctionDefinition, VisParams } from './niit_chart_fn';

export const toExpressionAst = (vis: Vis<VisParams>) => {
  const niit_chart = buildExpressionFunction<ChartExpressionFunctionDefinition>('niit_chart', {
    spec: vis.params.spec,
  });

  const ast = buildExpression([niit_chart]);

  return ast.toAst();
};
