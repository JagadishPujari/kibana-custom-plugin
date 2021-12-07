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
import { Pie, Bar, PolarArea, Line, Radar, Doughnut, Bubble } from 'react-chartjs-2';
import _ from 'lodash';
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
  },
];
let filterSearchResponse:any;
type ChartVisController = InstanceType<ReturnType<typeof createChartVisualization>>;

const ChartVisComponent = ({
  visData,
  fireEvent,
  renderComplete,
  deps,
}: ChartVisComponentProps) => {
  const chartDiv = useRef<HTMLDivElement>(null);
  const visController = useRef<ChartVisController | null>(null);
  document.addEventListener('typeChanged', (data:any)=>{
  })
  filterSearchResponse = visData.searchAPI.inspectorAdapters.requests.getRequests()[0].response.json
  
  console.log("Im from backend", visData.searchAPI.inspectorAdapters.requests.getRequests()[0].response.json)
  // add logic to filter object and render
  
  if(filterSearchResponse.hits.hits){
    const getRandomColor = () =>{
      var o = Math.round, r = Math.random, s = 255;
      return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    var  programs = _.groupBy(filterSearchResponse.hits.hits, '_source.programName')
    var labels = _.keys(programs)
     var chartData:any = {
      labels,
      datasets: [],
    };
    _.each(programs, function(val,key){
      var pgm: number[] = [];
      _.each(val, function(v,k){
        pgm.push(v._source.participants.length)
      })
      var set = {label:key, data:pgm, backgroundColor: getRandomColor()}
      chartData.datasets.push(set)
    })
  }
  console.log("CHARTSET", chartData)
  
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
    switch (selectedOptions[0].label) {
      case 'Bar':
        return <Bar options={options} data={chartData} />;
      case 'Pie':
        return <Pie options={options} data={chartData} />;
      case 'Polar':
        return <PolarArea options={options} data={chartData} />;
      case 'Radar':
        return <Radar options={options} data={chartData} />;
      case 'Line':
        return <Line options={options} data={chartData} />;
      case 'Doughnut':
        return <Doughnut data={chartData} />;
      case 'Bubble':
        return <Bubble options={options} data={chartData} />;
      default:
        return <h1>No chart is selected</h1>;
    }
  };
  return (
    <EuiResizeObserver onResize={updateChartSize}>
      {(resizeRef) => (
        <div className="" ref={resizeRef}>
          <EuiComboBox
            aria-label="Accessible screen reader label"
            prepend="Chart type"
            placeholder="Select a single option"
            singleSelection={{ asPlainText: true }}
            options={options1}
            selectedOptions={selectedOptions}
            onChange={onChange}
          />
       <div>{project()}</div>
        </div>
      )}
    </EuiResizeObserver>
  );
};

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { ChartVisComponent as default };
