import type { ElasticsearchClient } from 'src/core/server';
import { VisTypeVegaPluginSetupDependencies } from '../types';
declare type UsageCollectorDependencies = Pick<VisTypeVegaPluginSetupDependencies, 'home'>;
export interface VegaUsage {
    vega_lib_specs_total: number;
    vega_lite_lib_specs_total: number;
    vega_use_map_total: number;
}
export declare const getStats: (esClient: ElasticsearchClient, index: string, { home }: UsageCollectorDependencies) => Promise<VegaUsage | undefined>;
export {};
//# sourceMappingURL=get_usage_collector.d.ts.map