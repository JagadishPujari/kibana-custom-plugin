/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { getStats } from './get_usage_collector';
import { HomeServerPluginSetup } from '../../../home/server';
import { createCollectorFetchContextMock } from 'src/plugins/usage_collection/server/mocks';

const mockedSavedObjects = [
  // chart-lite lib spec
  {
    _id: 'visualization:chart-1',
    _source: {
      type: 'visualization',
      visualization: {
        visState: JSON.stringify({
          type: 'chart',
          params: {
            spec: '{"$schema": "https://chart.github.io/schema/chart-lite/v5.json" }',
          },
        }),
      },
    },
  },
  // chart lib spec
  {
    _id: 'visualization:chart-2',
    _source: {
      type: 'visualization',
      visualization: {
        visState: JSON.stringify({
          type: 'chart',
          params: {
            spec: '{"$schema": "https://chart.github.io/schema/chart/v5.json" }',
          },
        }),
      },
    },
  },
  // map layout
  {
    _id: 'visualization:chart-3',
    _source: {
      type: 'visualization',
      visualization: {
        visState: JSON.stringify({
          type: 'chart',
          params: {
            spec:
              '{"$schema": "https://chart.github.io/schema/chart/v3.json" \n "config": { "kibana" : { "type": "map" }} }',
          },
        }),
      },
    },
  },
];

const getMockCollectorFetchContext = (hits?: unknown[]) => {
  const fetchParamsMock = createCollectorFetchContextMock();

  fetchParamsMock.esClient.search = jest.fn().mockResolvedValue({ body: { hits: { hits } } });
  return fetchParamsMock;
};

describe('CHART visualization usage collector', () => {
  const mockIndex = 'mock_index';
  const mockDeps = {
    home: ({
      sampleData: {
        getSampleDatasets: jest.fn().mockReturnValue([
          {
            savedObjects: [
              {
                type: 'visualization',
                attributes: {
                  visState: JSON.stringify({
                    type: 'chart',
                    title: 'sample chart visualization',
                    params: {
                      spec: '{"$schema": "https://chart.github.io/schema/chart/v5.json" }',
                    },
                  }),
                },
              },
            ],
          },
        ]),
      },
    } as unknown) as HomeServerPluginSetup,
  };

  test('Returns undefined when no results found (undefined)', async () => {
    const result = await getStats(getMockCollectorFetchContext().esClient, mockIndex, mockDeps);

    expect(result).toBeUndefined();
  });

  test('Returns undefined when no results found (0 results)', async () => {
    const result = await getStats(getMockCollectorFetchContext([]).esClient, mockIndex, mockDeps);

    expect(result).toBeUndefined();
  });

  test('Returns undefined when no chart saved objects found', async () => {
    const mockCollectorFetchContext = getMockCollectorFetchContext([
      {
        _id: 'visualization:myvis-123',
        _source: {
          type: 'visualization',
          visualization: { visState: '{"type": "area"}' },
        },
      },
    ]);
    const result = await getStats(mockCollectorFetchContext.esClient, mockIndex, mockDeps);

    expect(result).toBeUndefined();
  });

  test('Should ingnore sample data visualizations', async () => {
    const mockCollectorFetchContext = getMockCollectorFetchContext([
      {
        _id: 'visualization:sampledata-123',
        _source: {
          type: 'visualization',
          visualization: {
            visState: JSON.stringify({
              type: 'chart',
              title: 'sample chart visualization',
              params: {
                spec: '{"$schema": "https://chart.github.io/schema/chart/v5.json" }',
              },
            }),
          },
        },
      },
    ]);

    const result = await getStats(mockCollectorFetchContext.esClient, mockIndex, mockDeps);

    expect(result).toBeUndefined();
  });

  test('Summarizes visualizations response data', async () => {
    const mockCollectorFetchContext = getMockCollectorFetchContext(mockedSavedObjects);
    const result = await getStats(mockCollectorFetchContext.esClient, mockIndex, mockDeps);

    expect(result).toMatchObject({
      chart_lib_specs_total: 2,
      chart_lite_lib_specs_total: 1,
      chart_use_map_total: 1,
    });
  });
});
