import { ChartBaseView } from '../niit_chart_base_view';
import './niit_chart_map_view.scss';
export declare class ChartMapView extends ChartBaseView {
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