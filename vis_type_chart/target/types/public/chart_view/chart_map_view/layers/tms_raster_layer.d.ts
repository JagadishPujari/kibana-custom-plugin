import type { LayerParameters } from './types';
interface TMSRasterLayerContext {
    tiles: string[];
    maxZoom: number;
    minZoom: number;
    tileSize: number;
}
export declare const initTmsRasterLayer: ({ id, map, context: { tiles, maxZoom, minZoom, tileSize }, }: LayerParameters<TMSRasterLayerContext>) => void;
export {};
//# sourceMappingURL=tms_raster_layer.d.ts.map