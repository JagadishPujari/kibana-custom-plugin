import type { CoreStart, IUiSettingsClient, KibanaExecutionContext } from 'kibana/public';
import { getSearchParamsFromRequest, SearchRequest, DataPublicPluginStart } from '../../../data/public';
import type { VegaInspectorAdapters } from '../vega_inspector';
/** @internal **/
export declare const extendSearchParamsWithRuntimeFields: (indexPatterns: SearchAPIDependencies['indexPatterns'], requestParams: ReturnType<typeof getSearchParamsFromRequest>, indexPatternString?: string) => Promise<import("../../../data/common").ISearchRequestParams>;
export interface SearchAPIDependencies {
    uiSettings: IUiSettingsClient;
    injectedMetadata: CoreStart['injectedMetadata'];
    search: DataPublicPluginStart['search'];
    indexPatterns: DataPublicPluginStart['indexPatterns'];
}
export declare class SearchAPI {
    private readonly dependencies;
    private readonly abortSignal?;
    readonly inspectorAdapters?: VegaInspectorAdapters;
    private readonly searchSessionId?;
    private readonly executionContext?;
    constructor(dependencies: SearchAPIDependencies, abortSignal?: AbortSignal, inspectorAdapters?: VegaInspectorAdapters, searchSessionId?: string, executionContext?: KibanaExecutionContext);
    search(searchRequests: SearchRequest[]): import("rxjs").Observable<{
        name: any;
        rawResponse: import("@elastic/elasticsearch/api/types").SearchResponse<any>;
    }[]>;
    resetSearchStats(): void;
    private inspectSearchResult;
}
//# sourceMappingURL=search_api.d.ts.map