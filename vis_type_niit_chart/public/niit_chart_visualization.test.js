/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import 'jest-canvas-mock';

import $ from 'jquery';

import { createNiitChartVisualization } from './niit_chart_visualization';

import niit_chartliteGraph from './test_utils/niit_chartlite_graph.json';
import niit_chartGraph from './test_utils/niit_chart_graph.json';

import { NiitChartParser } from './data_model/niit_chart_parser';
import { SearchAPI } from './data_model/search_api';

import { setInjectedVars, setData, setNotifications } from './services';
import { coreMock } from '../../../core/public/mocks';
import { dataPluginMock } from '../../data/public/mocks';

jest.mock('./default_spec', () => ({
  getDefaultSpec: () => jest.requireActual('./test_utils/default.spec.json'),
}));

// FLAKY: https://github.com/elastic/kibana/issues/71713
describe('NiitChartVisualizations', () => {
  let domNode;
  let NiitChartVisualization;
  let niit_chartVisualizationDependencies;

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

    niit_chartVisualizationDependencies = {
      core: coreMock.createSetup(),
      plugins: {
        data: dataPluginMock.createSetupContract(),
      },
      getServiceSettings: mockGetServiceSettings,
    };

    NiitChartVisualization = createNiitChartVisualization(niit_chartVisualizationDependencies);
  });

  describe('NiitChartVisualization - basics', () => {
    beforeEach(async () => {
      setupDOM();
    });

    afterEach(() => {
      mockWidth.mockRestore();
      mockHeight.mockRestore();
    });

    // SKIP: https://github.com/elastic/kibana/issues/83385
    test.skip('should show niit_chartlite graph and update on resize (may fail in dev env)', async () => {
      let niit_chartVis;
      try {
        niit_chartVis = new NiitChartVisualization(domNode, jest.fn());

        const niit_chartParser = new NiitChartParser(
          JSON.stringify(niit_chartliteGraph),
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
        await niit_chartParser.parseAsync();
        await niit_chartVis.render(niit_chartParser);
        expect(domNode.innerHTML).toMatchSnapshot();

        mockedWidthValue = 256;
        mockedHeightValue = 256;

        await niit_chartVis.niit_chartView.resize();

        expect(domNode.innerHTML).toMatchSnapshot();
      } finally {
        niit_chartVis.destroy();
      }
    });

    // SKIP: https://github.com/elastic/kibana/issues/83385
    test.skip('should show niit_chart graph (may fail in dev env)', async () => {
      let niit_chartVis;
      try {
        niit_chartVis = new NiitChartVisualization(domNode, jest.fn());
        const niit_chartParser = new NiitChartParser(
          JSON.stringify(niit_chartGraph),
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
        await niit_chartParser.parseAsync();

        await niit_chartVis.render(niit_chartParser);
        expect(domNode.innerHTML).toMatchSnapshot();
      } finally {
        niit_chartVis.destroy();
      }
    });
  });
});
