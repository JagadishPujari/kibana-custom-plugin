/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { lazy } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { ExpressionRenderDefinition } from 'src/plugins/expressions';
import { VisualizationContainer } from '../../visualizations/public';
import { ChartVisualizationDependencies } from './plugin';
import { RenderValue } from './chart_fn';
const ChartVisComponent = lazy(() => import('./components/chart_vis_component'));

export const getChartVisRenderer: (
  deps: ChartVisualizationDependencies
) => ExpressionRenderDefinition<RenderValue> = (deps) => ({
  name: 'chart_vis',
  reuseDomNode: true,
  render: (domNode, { visData }, handlers) => {
    handlers.onDestroy(() => {
      unmountComponentAtNode(domNode);
    });

    render(
      <VisualizationContainer handlers={handlers}>
        <ChartVisComponent
          deps={deps}
          fireEvent={handlers.event}
          renderComplete={handlers.done}
          visData={visData}
        />
      </VisualizationContainer>,
      domNode
    );
  },
});
