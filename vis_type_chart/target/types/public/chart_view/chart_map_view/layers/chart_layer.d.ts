import type { Map } from '@kbn/mapbox-gl';
import type { View } from 'vega';
import type { LayerParameters } from './types';
export interface ChartLayerContext {
    chartView: View;
    updateChartView: (map: Map, view: View) => void;
    chartControls: any;
}
export declare function initChartLayer({ id, map: mapInstance, context: { chartView, chartControls, updateChartView }, }: LayerParameters<ChartLayerContext>): void;
//# sourceMappingURL=chart_layer.d.ts.map