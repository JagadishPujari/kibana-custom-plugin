/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { Map, CustomLayerInterface } from '@kbn/mapbox-gl';
import type { View } from 'vega';
import type { LayerParameters } from './types';

export interface ChartLayerContext {
  chartView: View;
  updateChartView: (map: Map, view: View) => void;
  chartControls: any;
}

export function initChartLayer({
  id,
  map: mapInstance,
  context: { chartView, chartControls, updateChartView },
}: LayerParameters<ChartLayerContext>) {
  const chartLayer: CustomLayerInterface = {
    id,
    type: 'custom',
    onAdd(map: Map) {
      const mapContainer = map.getCanvasContainer();
      const mapCanvas = map.getCanvas();
      const chartContainer = document.createElement('div');

      chartContainer.style.position = 'absolute';
      chartContainer.style.top = '0px';
      chartContainer.style.width = mapCanvas.style.width;
      chartContainer.style.height = mapCanvas.style.height;

      mapContainer.appendChild(chartContainer);
      chartView.initialize(chartContainer, chartControls);
    },
    render() {
      updateChartView(mapInstance, chartView);
    },
  };

  mapInstance.addLayer(chartLayer);
}
