import { IUiSettingsClient } from 'kibana/public';
import { Adapters, RequestAdapter, InspectorViewDescription } from '../../../inspector/public';
import { ChartAdapter } from './niit_chart_adapter';
export interface ChartInspectorAdapters extends Adapters {
    requests: RequestAdapter;
    niit_chart: ChartAdapter;
}
interface ChartInspectorViewDependencies {
    uiSettings: IUiSettingsClient;
}
export declare const getChartInspectorView: (dependencies: ChartInspectorViewDependencies) => InspectorViewDescription;
export declare const createInspectorAdapters: () => ChartInspectorAdapters;
export {};
//# sourceMappingURL=niit_chart_inspector.d.ts.map