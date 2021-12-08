import type { Map } from '@kbn/mapbox-gl';
import type { View } from 'vega';
import type { LayerParameters } from './types';
export interface ChartLayerContext {
    niit_chartView: View;
    updateChartView: (map: Map, view: View) => void;
    niit_chartControls: any;
}
export declare function initChartLayer({ id, map: mapInstance, context: { niit_chartView, niit_chartControls, updateChartView }, }: LayerParameters<ChartLayerContext>): void;
//# sourceMappingURL=niit_chart_layer.d.ts.map