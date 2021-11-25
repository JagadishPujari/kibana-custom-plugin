import type { KibanaExecutionContext } from 'src/core/public';
import { Filter, TimeRange, Query } from '../../data/public';
import { ChartVisualizationDependencies } from './plugin';
import { VisParams } from './chart_fn';
import { ChartInspectorAdapters } from './chart_inspector';
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
export declare function createChartRequestHandler({ plugins: { data }, core: { uiSettings }, getServiceSettings }: ChartVisualizationDependencies, context?: ChartRequestHandlerContext): ({ timeRange, filters, query, visParams, searchSessionId, executionContext, }: ChartRequestHandlerParams) => Promise<import("./data_model/chart_parser").ChartParser>;
export {};
//# sourceMappingURL=chart_request_handler.d.ts.map