/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useEffect, useRef, useCallback } from 'react';

import { createChartVisualization } from '../chart_visualization';
import { ChartVisualizationDependencies } from '../plugin';
import { ChartParser } from '../data_model/chart_parser';
import { EuiResizeObserver, throttle } from '@elastic/eui';
import './chart_vis.scss';
import { IInterpreterRenderHandlers } from 'src/plugins/expressions';

interface ChartVisComponentProps {
  deps: ChartVisualizationDependencies;
  fireEvent: IInterpreterRenderHandlers['event'];
  renderComplete: () => void;
  visData: ChartParser;
}

type ChartVisController = InstanceType<ReturnType<typeof createChartVisualization>>;

const ChartVisComponent = ({ visData, fireEvent, renderComplete, deps }: ChartVisComponentProps) => {
  const chartDiv = useRef<HTMLDivElement>(null);
  const visController = useRef<ChartVisController | null>(null);

  useEffect(() => {
    if (chartDiv.current) {
      const ChartVis = createChartVisualization(deps);
      visController.current = new ChartVis(chartDiv.current, fireEvent);
    }

    return () => {
      visController.current?.destroy();
      visController.current = null;
    };
  }, [deps, fireEvent]);

  useEffect(() => {
    if (visController.current) {
      visController.current.render(visData).then(renderComplete);
    }
  }, [visData, renderComplete]);

  const updateChartSize = useCallback(
    () =>
      throttle(() => {
        if (visController.current) {
          visController.current.render(visData).then(renderComplete);
        }
      }, 300),
    [renderComplete, visData]
  );
  return (
    <EuiResizeObserver onResize={updateChartSize}>
      {(resizeRef) => (
        <div className="vgaVis__wrapper" ref={resizeRef}>
          <p>Place charts here</p>
        </div>
      )}
    </EuiResizeObserver>
  );
};

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { ChartVisComponent as default };
