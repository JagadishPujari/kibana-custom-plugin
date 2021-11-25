import { Observable } from 'rxjs';
import { SharedGlobalConfig } from 'kibana/server';
import { HomeServerPluginSetup } from '../../home/server';
import { UsageCollectionSetup } from '../../usage_collection/server';
export declare type ConfigObservable = Observable<SharedGlobalConfig>;
export interface ChartSavedObjectAttributes {
    title: string;
    type: string;
    params: {
        spec: string;
    };
}
export interface VisTypeChartPluginSetupDependencies {
    usageCollection?: UsageCollectionSetup;
    home?: HomeServerPluginSetup;
}
export interface VisTypeChartPluginSetup {
}
export interface VisTypeChartPluginStart {
}
//# sourceMappingURL=types.d.ts.map