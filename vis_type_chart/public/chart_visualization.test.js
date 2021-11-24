/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import 'jest-canvas-mock';

import $ from 'jquery';

import { createChartVisualization } from './chart_visualization';

import chartliteGraph from './test_utils/chartlite_graph.json';
import chartGraph from './test_utils/chart_graph.json';

import { ChartParser } from './data_model/chart_parser';
import { SearchAPI } from './data_model/search_api';

import { setInjectedVars, setData, setNotifications } from './services';
import { coreMock } from '../../../core/public/mocks';
import { dataPluginMock } from '../../data/public/mocks';

jest.mock('./default_spec', () => ({
  getDefaultSpec: () => jest.requireActual('./test_utils/default.spec.json'),
}));

// FLAKY: https://github.com/elastic/kibana/issues/71713
describe('ChartVisualizations', () => {
  let domNode;
  let ChartVisualization;
  let chartVisualizationDependencies;

  let mockWidth;
  let mockedWidthValue;
  let mockHeight;
  let mockedHeightValue;

  const coreStart = coreMock.createStart();
  const dataPluginStart = dataPluginMock.createStartContract();

  const setupDOM = (width = 512, height = 512) => {
    mockedWidthValue = width;
    mockedHeightValue = height;
    domNode = document.createElement('div');

    mockWidth = jest.spyOn($.prototype, 'width').mockImplementation(() => mockedWidthValue);
    mockHeight = jest.spyOn($.prototype, 'height').mockImplementation(() => mockedHeightValue);
  };

  const mockGetServiceSettings = async () => {
    return {};
  };

  beforeEach(() => {
    setInjectedVars({
      emsTileLayerId: {},
      enableExternalUrls: true,
    });
    setData(dataPluginStart);
    setNotifications(coreStart.notifications);

    chartVisualizationDependencies = {
      core: coreMock.createSetup(),
      plugins: {
        data: dataPluginMock.createSetupContract(),
      },
      getServiceSettings: mockGetServiceSettings,
    };

    ChartVisualization = createChartVisualization(chartVisualizationDependencies);
  });

  describe('ChartVisualization - basics', () => {
    beforeEach(async () => {
      setupDOM();
    });

    afterEach(() => {
      mockWidth.mockRestore();
      mockHeight.mockRestore();
    });

    // SKIP: https://github.com/elastic/kibana/issues/83385
    test.skip('should show chartlite graph and update on resize (may fail in dev env)', async () => {
      let chartVis;
      try {
        chartVis = new ChartVisualization(domNode, jest.fn());

        const chartParser = new ChartParser(
          JSON.stringify(chartliteGraph),
          new SearchAPI({
            search: dataPluginStart.search,
            indexPatterns: dataPluginStart.indexPatterns,
            uiSettings: coreStart.uiSettings,
            injectedMetadata: coreStart.injectedMetadata,
          }),
          0,
          0,
          mockGetServiceSettings
        );
        await chartParser.parseAsync();
        await chartVis.render(chartParser);
        expect(domNode.innerHTML).toMatchSnapshot();

        mockedWidthValue = 256;
        mockedHeightValue = 256;

        await chartVis.chartView.resize();

        expect(domNode.innerHTML).toMatchSnapshot();
      } finally {
        chartVis.destroy();
      }
    });

    // SKIP: https://github.com/elastic/kibana/issues/83385
    test.skip('should show chart graph (may fail in dev env)', async () => {
      let chartVis;
      try {
        chartVis = new ChartVisualization(domNode, jest.fn());
        const chartParser = new ChartParser(
          JSON.stringify(chartGraph),
          new SearchAPI({
            search: dataPluginStart.search,
            indexPatterns: dataPluginStart.indexPatterns,
            uiSettings: coreStart.uiSettings,
            injectedMetadata: coreStart.injectedMetadata,
          }),
          0,
          0,
          mockGetServiceSettings
        );
        await chartParser.parseAsync();

        await chartVis.render(chartParser);
        expect(domNode.innerHTML).toMatchSnapshot();
      } finally {
        chartVis.destroy();
      }
    });
  });
});
