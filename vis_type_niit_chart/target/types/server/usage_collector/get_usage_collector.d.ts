import type { ElasticsearchClient } from 'src/core/server';
import { VisTypeNiitChartPluginSetupDependencies } from '../types';
declare type UsageCollectorDependencies = Pick<VisTypeNiitChartPluginSetupDependencies, 'home'>;
export interface ChartUsage {
    niit_chart_lib_specs_total: number;
    niit_chart_lite_lib_specs_total: number;
    niit_chart_use_map_total: number;
}
export declare const getStats: (esClient: ElasticsearchClient, index: string, { home }: UsageCollectorDependencies) => Promise<ChartUsage | undefined>;
export {};
//# sourceMappingURL=get_usage_collector.d.ts.map