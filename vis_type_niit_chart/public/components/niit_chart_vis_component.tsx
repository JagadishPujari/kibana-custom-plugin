/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useEffect, useRef, useCallback, useState } from 'react';

import { createNiitChartVisualization } from '../niit_chart_visualization';
import { NiitChartVisualizationDependencies } from '../plugin';
import { NiitChartParser } from '../data_model/niit_chart_parser';
import { EuiComboBox, EuiFormRow, EuiResizeObserver, throttle } from '@elastic/eui';
import './niit_chart_vis.scss';
import { IInterpreterRenderHandlers } from 'src/plugins/expressions';

// niit_charts
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
  deps: NiitChartVisualizationDependencies;
  fireEvent: IInterpreterRenderHandlers['event'];
  renderComplete: () => void;
  visData: NiitChartParser;
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
let filterSearchResponse: any;
type ChartVisController = InstanceType<ReturnType<typeof createNiitChartVisualization>>;

const ChartVisComponent = ({
  visData,
  fireEvent,
  renderComplete,
  deps,
}: ChartVisComponentProps) => {
  const niit_chartDiv = useRef<HTMLDivElement>(null);
  const visController = useRef<ChartVisController | null>(null);
  document.addEventListener('typeChanged', (data: any) => {});
  filterSearchResponse = visData.searchAPI.inspectorAdapters.requests.getRequests()[0].response
    .json;

  console.log('Im from backend', filterSearchResponse);
  // add logic to filter object and render
  const hits = filterSearchResponse

  // Filter for sort

  var opt: any[] = [];
  var keys = _.keys(hits[0]._source);
  _.each(keys, function (val) {
    opt.push({ label: val });
  });

  const [selectedOptions1, setSelected1] = useState([opt[0]]);
  const onChangeOfFilter = (selectedOptions1) => {
    // We should only get back either 0 or 1 options.
    setSelected1(selectedOptions1);
  };
  const onCreateOption = (searchValue = []) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    // Select the option.
    setSelected1([newOption]);
  };
  if (hits) {
    const getRandomColor = () => {
      var o = Math.round,
        r = Math.random,
        s = 255;
      return (
        'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')'
      );
    };
    var programs = _.groupBy(hits, '_source.' + selectedOptions1[0].label);
    var labels = _.keys(programs);
    var niit_chartData: any = {
      labels,
      datasets: [],
    };
    console.log('Programs', programs);
    _.each(programs, function (val, key,i) {
      var pgm: number[] = [];
      _.each(val, function (v, k) {
        pgm.push(v._source.participants.length);
      });
      var set = { label: key, data: pgm, backgroundColor: getRandomColor() };
      niit_chartData.datasets.push(set);
    });
  }
  console.log('CHARTSET', niit_chartData);

  useEffect(() => {
    if (niit_chartDiv.current) {
      const ChartVis = createNiitChartVisualization(deps);
      visController.current = new ChartVis(niit_chartDiv.current, fireEvent);
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
  const [selectedOptions, setSelected] = useState([options1[0]]);

  const onChange = (selectedOptions: any) => {
    setSelected(selectedOptions);
    console.log('selected option', selectedOptions[0].label);
  };
  const project = () => {
    switch (selectedOptions[0].label) {
      case 'Bar':
        return <Bar options={options} data={niit_chartData} />;
      case 'Pie':
        return <Pie options={options} data={niit_chartData} />;
      case 'Polar':
        return <PolarArea options={options} data={niit_chartData} />;
      case 'Radar':
        return <Radar options={options} data={niit_chartData} />;
      case 'Line':
        return <Line options={options} data={niit_chartData} />;
      case 'Doughnut':
        return <Doughnut data={niit_chartData} />;
      case 'Bubble':
        return <Bubble options={options} data={niit_chartData} />;
      default:
        return <h1>No niit_chart is selected</h1>;
    }
  };
  // console.log('Selected program', _.keys(hits[0]._source))

  return (
    <EuiResizeObserver onResize={updateChartSize}>
      {(resizeRef) => (
        <div className="" ref={resizeRef}>
          <EuiFormRow label="Please selecte any one option to apply filter">
            <EuiComboBox
              aria-label="Accessible screen reader label"
              placeholder="Select a single option"
              singleSelection={{ asPlainText: true }}
              options={opt}
              selectedOptions={selectedOptions1}
              onChange={onChangeOfFilter}
              onCreateOption={onCreateOption}
              customOptionText="Add {searchValue} as your occupation"
            />
          </EuiFormRow>
          {/* <EuiComboBox
            aria-label="Accessible screen reader label"
            prepend="Chart type"
            placeholder="Select a single option"
            singleSelection={{ asPlainText: true }}
            options={options1}
            selectedOptions={selectedOptions}
            onChange={onChange}
          /> */}
          <div>{project()}</div>
        </div>
      )}
    </EuiResizeObserver>
  );
};

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { ChartVisComponent as default };
