import type { KibanaExecutionContext } from 'src/core/public';
import { Filter, TimeRange, Query } from '../../data/public';
import { ChartVisualizationDependencies } from './plugin';
import { VisParams } from './niit_chart_fn';
import { ChartInspectorAdapters } from './niit_chart_inspector';
interface ChartRequestHandlerParams {
    query: Query;
    filters: Filter;
    timeRange: TimeRange;
    visParams: VisParams;
    searchSessionId?: string;
    executionContext?: KibanaExecutionContext;
}
interface ChartRequestHandlerContext {
    abortSignal?: AbortSignal;
    inspectorAdapters?: ChartInspectorAdapters;
}
export declare function createChartRequestHandler({ plugins: { data }, core: { uiSettings }, getServiceSettings }: ChartVisualizationDependencies, context?: ChartRequestHandlerContext): ({ timeRange, filters, query, visParams, searchSessionId, executionContext, }: ChartRequestHandlerParams) => Promise<import("./data_model/niit_chart_parser").ChartParser>;
export {};
//# sourceMappingURL=niit_chart_request_handler.d.ts.map