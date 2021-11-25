import type { ElasticsearchClient } from 'src/core/server';
import { VisTypeChartPluginSetupDependencies } from '../types';
declare type UsageCollectorDependencies = Pick<VisTypeChartPluginSetupDependencies, 'home'>;
export interface ChartUsage {
    chart_lib_specs_total: number;
    chart_lite_lib_specs_total: number;
    chart_use_map_total: number;
}
export declare const getStats: (esClient: ElasticsearchClient, index: string, { home }: UsageCollectorDependencies) => Promise<ChartUsage | undefined>;
export {};
//# sourceMappingURL=get_usage_collector.d.ts.map