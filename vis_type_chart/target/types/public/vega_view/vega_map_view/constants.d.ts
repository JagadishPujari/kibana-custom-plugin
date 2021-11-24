import type { Style } from '@kbn/mapbox-gl';
export declare const vegaLayerId = "vega";
export declare const userConfiguredLayerId = "TMS in config/kibana.yml";
export declare const defaultMapConfig: {
    maxZoom: number;
    minZoom: number;
    tileSize: number;
};
export declare const defaultMabBoxStyle: Style;
export declare const defaultProjection: {
    name: string;
    type: string;
    scale: {
        signal: string;
    };
    rotate: (number | {
        signal: string;
    })[];
    center: (number | {
        signal: string;
    })[];
    translate: {
        signal: string;
    }[];
    fit: boolean;
};
//# sourceMappingURL=constants.d.ts.map