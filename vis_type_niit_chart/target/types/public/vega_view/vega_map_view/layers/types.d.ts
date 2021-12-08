import type { Map } from '@kbn/mapbox-gl';
export interface LayerParameters<TContext extends Record<string, any> = {}> {
    id: string;
    map: Map;
    context: TContext;
}
//# sourceMappingURL=types.d.ts.map