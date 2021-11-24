import { VegaBaseView } from '../vega_base_view';
import './vega_map_view.scss';
export declare class VegaMapView extends VegaBaseView {
    private mapServiceSettings;
    private emsTileLayer;
    private getEmsTileLayer;
    private get shouldShowZoomControl();
    private getMapParams;
    private initMapContainer;
    private initControls;
    private initLayers;
    protected _initViewCustomizations(): Promise<void>;
}
//# sourceMappingURL=view.d.ts.map