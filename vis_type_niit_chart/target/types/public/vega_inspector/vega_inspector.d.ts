import { IUiSettingsClient } from 'kibana/public';
import { Adapters, RequestAdapter, InspectorViewDescription } from '../../../inspector/public';
import { VegaAdapter } from './vega_adapter';
export interface VegaInspectorAdapters extends Adapters {
    requests: RequestAdapter;
    vega: VegaAdapter;
}
interface VegaInspectorViewDependencies {
    uiSettings: IUiSettingsClient;
}
export declare const getVegaInspectorView: (dependencies: VegaInspectorViewDependencies) => InspectorViewDescription;
export declare const createInspectorAdapters: () => VegaInspectorAdapters;
export {};
//# sourceMappingURL=vega_inspector.d.ts.map