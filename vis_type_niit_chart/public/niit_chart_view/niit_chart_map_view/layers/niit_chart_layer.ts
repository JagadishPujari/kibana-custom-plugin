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
  niit_chartView: View;
  updateNiitChartView: (map: Map, view: View) => void;
  niit_chartControls: any;
}

export function initNiitChartLayer({
  id,
  map: mapInstance,
  context: { niit_chartView, niit_chartControls, updateNiitChartView },
}: LayerParameters<ChartLayerContext>) {
  const niit_chartLayer: CustomLayerInterface = {
    id,
    type: 'custom',
    onAdd(map: Map) {
      const mapContainer = map.getCanvasContainer();
      const mapCanvas = map.getCanvas();
      const niit_chartContainer = document.createElement('div');

      niit_chartContainer.style.position = 'absolute';
      niit_chartContainer.style.top = '0px';
      niit_chartContainer.style.width = mapCanvas.style.width;
      niit_chartContainer.style.height = mapCanvas.style.height;

      mapContainer.appendChild(niit_chartContainer);
      niit_chartView.initialize(niit_chartContainer, niit_chartControls);
    },
    render() {
      updateNiitChartView(mapInstance, niit_chartView);
    },
  };

  mapInstance.addLayer(niit_chartLayer);
}
