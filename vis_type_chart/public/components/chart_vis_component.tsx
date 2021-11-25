/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useEffect, useRef, useCallback, useState } from 'react';

import { createChartVisualization } from '../chart_visualization';
import { ChartVisualizationDependencies } from '../plugin';
import { ChartParser } from '../data_model/chart_parser';
import { EuiComboBox, EuiResizeObserver, throttle } from '@elastic/eui';
import './chart_vis.scss';
import { IInterpreterRenderHandlers } from 'src/plugins/expressions';

// charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie, Bar, PolarArea, Line, Radar, Doughnut, Bubble,  } from 'react-chartjs-2';

interface ChartVisComponentProps {
  deps: ChartVisualizationDependencies;
  fireEvent: IInterpreterRenderHandlers['event'];
  renderComplete: () => void;
  visData: ChartParser;
}
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [6, 2, 8, 9, 10],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
console.log(data);

// dropdown list
const options1 = [
  {
    label: 'Bar',
  },
  {
    label: 'Line',
  },
  {
    label: 'Pie',
  },
  {
    label: 'Doughnut',
  },
  {
    label: 'Polar',
  },
  {
    label: 'Radar',
  }
];
type ChartVisController = InstanceType<ReturnType<typeof createChartVisualization>>;

const ChartVisComponent = ({
  visData,
  fireEvent,
  renderComplete,
  deps,
}: ChartVisComponentProps) => {
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
  const [selectedOptions, setSelected] = useState([options1[2]]);

  const onChange = (selectedOptions: any) => {
    setSelected(selectedOptions);
    console.log('selected option', selectedOptions[0].label);
  };
  const project = () => {
    switch(selectedOptions[0].label) {

      case "Bar":   return <Bar options={options} data={data} />;
      case "Pie":   return <Pie options={options} data={data} />;
      case "Polar":   return <PolarArea options={options} data={data} />;
      case "Radar":   return <Radar options={options} data={data} />;
      case "Line":   return <Line options={options} data={data} />;
      case "Doughnut":   return <Doughnut data={data} />;
      case "Bubble": return <Bubble options={options} data={data} />;
      default:      return <h1>No chart is selected</h1>
    }
  }
  // console.log("Im rendere here", visData)
  return (
    <EuiResizeObserver onResize={updateChartSize}>
      {(resizeRef) => (
        <div className="" ref={resizeRef}>
          <EuiComboBox
            aria-label="Accessible screen reader label"
            placeholder="Select a single option"
            singleSelection={{ asPlainText: true }}
            options={options1}
            selectedOptions={selectedOptions}
            onChange={onChange}
          />
          <div>{ project() }</div>
        </div>
      )}
    </EuiResizeObserver>
  );
};

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { ChartVisComponent as default };
