import type { KibanaExecutionContext } from 'src/core/public';
import { Filter, TimeRange, Query } from '../../data/public';
import { VegaVisualizationDependencies } from './plugin';
import { VisParams } from './vega_fn';
import { VegaInspectorAdapters } from './vega_inspector';
interface VegaRequestHandlerParams {
    query: Query;
    filters: Filter;
    timeRange: TimeRange;
    visParams: VisParams;
    searchSessionId?: string;
    executionContext?: KibanaExecutionContext;
}
interface VegaRequestHandlerContext {
    abortSignal?: AbortSignal;
    inspectorAdapters?: VegaInspectorAdapters;
}
export declare function createVegaRequestHandler({ plugins: { data }, core: { uiSettings }, getServiceSettings }: VegaVisualizationDependencies, context?: VegaRequestHandlerContext): ({ timeRange, filters, query, visParams, searchSessionId, executionContext, }: VegaRequestHandlerParams) => Promise<import("./data_model/vega_parser").VegaParser>;
export {};
//# sourceMappingURL=vega_request_handler.d.ts.map