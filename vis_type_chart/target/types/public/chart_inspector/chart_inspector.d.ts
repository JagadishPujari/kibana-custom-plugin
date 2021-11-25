import { IUiSettingsClient } from 'kibana/public';
import { Adapters, RequestAdapter, InspectorViewDescription } from '../../../inspector/public';
import { ChartAdapter } from './chart_adapter';
export interface ChartInspectorAdapters extends Adapters {
    requests: RequestAdapter;
    chart: ChartAdapter;
}
interface ChartInspectorViewDependencies {
    uiSettings: IUiSettingsClient;
}
export declare const getChartInspectorView: (dependencies: ChartInspectorViewDependencies) => InspectorViewDescription;
export declare const createInspectorAdapters: () => ChartInspectorAdapters;
export {};
//# sourceMappingURL=chart_inspector.d.ts.map