/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { initNiitChartLayer } from './niit_chart_layer';
import type { View } from 'vega';

type InitNiitChartLayerParams = Parameters<typeof initNiitChartLayer>[0];

type IdType = InitNiitChartLayerParams['id'];
type MapType = InitNiitChartLayerParams['map'];
type ContextType = InitNiitChartLayerParams['context'];

describe('niit_chart_map_view/tms_raster_layer', () => {
  let id: IdType;
  let map: MapType;
  let context: ContextType;

  beforeEach(() => {
    id = 'foo_niit_chart_layer_id';
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
      niit_chartView: ({
        initialize: jest.fn(),
      } as unknown) as View,
      niit_chartControls: 'element',
      updateNiitChartView: jest.fn(),
    };
  });

  test('should register a new custom layer', () => {
    initNiitChartLayer({ id, map, context });

    const calledWith = (map.addLayer as jest.MockedFunction<any>).mock.calls[0][0];
    expect(calledWith).toHaveProperty('id', 'foo_niit_chart_layer_id');
    expect(calledWith).toHaveProperty('type', 'custom');
  });

  test('should initialize niit_chart container on "onAdd" hook', () => {
    initNiitChartLayer({ id, map, context });
    const { onAdd } = (map.addLayer as jest.MockedFunction<any>).mock.calls[0][0];

    onAdd(map);
    expect(context.niit_chartView.initialize).toHaveBeenCalled();
  });

  test('should update niit_chart view on "render" hook', () => {
    initNiitChartLayer({ id, map, context });
    const { render } = (map.addLayer as jest.MockedFunction<any>).mock.calls[0][0];

    expect(context.updateNiitChartView).not.toHaveBeenCalled();
    render();
    expect(context.updateNiitChartView).toHaveBeenCalled();
  });
});
