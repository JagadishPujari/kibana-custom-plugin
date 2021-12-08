import type { Map } from '@kbn/mapbox-gl';
import type { View } from 'vega';
import type { LayerParameters } from './types';
export interface VegaLayerContext {
    vegaView: View;
    updateVegaView: (map: Map, view: View) => void;
    vegaControls: any;
}
export declare function initVegaLayer({ id, map: mapInstance, context: { vegaView, vegaControls, updateVegaView }, }: LayerParameters<VegaLayerContext>): void;
//# sourceMappingURL=vega_layer.d.ts.map