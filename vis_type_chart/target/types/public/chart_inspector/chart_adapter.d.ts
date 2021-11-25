import { Observable } from 'rxjs';
import { View, Spec } from 'vega';
import { Assign } from '@kbn/utility-types';
interface DebugValues {
    view: View;
    spec: Spec;
}
export interface ChartRuntimeData {
    columns: Array<{
        id: string;
    }>;
    data: Array<Record<string, string>>;
}
export declare type InspectDataSets = Assign<ChartRuntimeData, {
    id: string;
}>;
export declare type InspectSignalsSets = ChartRuntimeData;
export declare class ChartAdapter {
    private debugValuesSubject;
    bindInspectValues(debugValues: DebugValues): void;
    getDataSetsSubscription(): Observable<InspectDataSets[]>;
    getSignalsSetsSubscription(): Observable<InspectSignalsSets>;
    getSpecSubscription(): Observable<string>;
}
export {};
//# sourceMappingURL=chart_adapter.d.ts.map