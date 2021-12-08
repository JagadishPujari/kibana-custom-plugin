import { Observable } from 'rxjs';
import { View, Spec } from 'vega';
import { Assign } from '@kbn/utility-types';
interface DebugValues {
    view: View;
    spec: Spec;
}
export interface VegaRuntimeData {
    columns: Array<{
        id: string;
    }>;
    data: Array<Record<string, string>>;
}
export declare type InspectDataSets = Assign<VegaRuntimeData, {
    id: string;
}>;
export declare type InspectSignalsSets = VegaRuntimeData;
export declare class VegaAdapter {
    private debugValuesSubject;
    bindInspectValues(debugValues: DebugValues): void;
    getDataSetsSubscription(): Observable<InspectDataSets[]>;
    getSignalsSetsSubscription(): Observable<InspectSignalsSets>;
    getSpecSubscription(): Observable<string>;
}
export {};
//# sourceMappingURL=vega_adapter.d.ts.map