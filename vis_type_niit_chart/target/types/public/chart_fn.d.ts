import { ExecutionContextSearch } from '../../data/public';
import { ExecutionContext, ExpressionFunctionDefinition, Render } from '../../expressions/public';
import { ChartVisualizationDependencies } from './plugin';
import { ChartInspectorAdapters } from './niit_chart_inspector/index';
import { KibanaContext } from '../../data/public';
import { ChartParser } from './data_model/niit_chart_parser';
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
    visType: 'niit_chart';
    visConfig: VisParams;
}
export declare type ChartExpressionFunctionDefinition = ExpressionFunctionDefinition<'niit_chart', Input, Arguments, Output, ExecutionContext<ChartInspectorAdapters, ExecutionContextSearch>>;
export declare const createChartFn: (dependencies: ChartVisualizationDependencies) => ChartExpressionFunctionDefinition;
export {};
//# sourceMappingURL=niit_chart_fn.d.ts.map