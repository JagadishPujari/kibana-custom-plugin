import { Observable } from 'rxjs';
import { SharedGlobalConfig } from 'kibana/server';
import { HomeServerPluginSetup } from '../../home/server';
import { UsageCollectionSetup } from '../../usage_collection/server';
export declare type ConfigObservable = Observable<SharedGlobalConfig>;
export interface VegaSavedObjectAttributes {
    title: string;
    type: string;
    params: {
        spec: string;
    };
}
export interface VisTypeVegaPluginSetupDependencies {
    usageCollection?: UsageCollectionSetup;
    home?: HomeServerPluginSetup;
}
export interface VisTypeVegaPluginSetup {
}
export interface VisTypeVegaPluginStart {
}
//# sourceMappingURL=types.d.ts.map