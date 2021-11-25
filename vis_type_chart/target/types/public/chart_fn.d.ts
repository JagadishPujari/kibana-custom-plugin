import { ExecutionContextSearch } from '../../data/public';
import { ExecutionContext, ExpressionFunctionDefinition, Render } from '../../expressions/public';
import { ChartVisualizationDependencies } from './plugin';
import { ChartInspectorAdapters } from './chart_inspector/index';
import { KibanaContext } from '../../data/public';
import { ChartParser } from './data_model/chart_parser';
declare type Input = KibanaContext | {
    type: 'null';
};
declare type Output = Promise<Render<RenderValue>>;
interface Arguments {
    spec: string;
}
export declare type VisParams = Required<Arguments>;
export interface RenderValue {
    visData: ChartParser;
    visType: 'chart';
    visConfig: VisParams;
}
export declare type ChartExpressionFunctionDefinition = ExpressionFunctionDefinition<'chart', Input, Arguments, Output, ExecutionContext<ChartInspectorAdapters, ExecutionContextSearch>>;
export declare const createChartFn: (dependencies: ChartVisualizationDependencies) => ChartExpressionFunctionDefinition;
export {};
//# sourceMappingURL=chart_fn.d.ts.map