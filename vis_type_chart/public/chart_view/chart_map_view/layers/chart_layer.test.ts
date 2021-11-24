/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { initChartLayer } from './chart_layer';
import type { View } from 'vega';

type InitChartLayerParams = Parameters<typeof initChartLayer>[0];

type IdType = InitChartLayerParams['id'];
type MapType = InitChartLayerParams['map'];
type ContextType = InitChartLayerParams['context'];

describe('chart_map_view/tms_raster_layer', () => {
  let id: IdType;
  let map: MapType;
  let context: ContextType;

  beforeEach(() => {
    id = 'foo_chart_layer_id';
    map = ({
      getCanvasContainer: () => document.createElement('div'),
      getCanvas: () => ({
        style: {
          width: 100,
          height: 100,
        },
      }),
      addLayer: jest.fn(),
    } as unknown) as MapType;
    context = {
      chartView: ({
        initialize: jest.fn(),
      } as unknown) as View,
      chartControls: 'element',
      updateChartView: jest.fn(),
    };
  });

  test('should register a new custom layer', () => {
    initChartLayer({ id, map, context });

    const calledWith = (map.addLayer as jest.MockedFunction<any>).mock.calls[0][0];
    expect(calledWith).toHaveProperty('id', 'foo_chart_layer_id');
    expect(calledWith).toHaveProperty('type', 'custom');
  });

  test('should initialize chart container on "onAdd" hook', () => {
    initChartLayer({ id, map, context });
    const { onAdd } = (map.addLayer as jest.MockedFunction<any>).mock.calls[0][0];

    onAdd(map);
    expect(context.chartView.initialize).toHaveBeenCalled();
  });

  test('should update chart view on "render" hook', () => {
    initChartLayer({ id, map, context });
    const { render } = (map.addLayer as jest.MockedFunction<any>).mock.calls[0][0];

    expect(context.updateChartView).not.toHaveBeenCalled();
    render();
    expect(context.updateChartView).toHaveBeenCalled();
  });
});
