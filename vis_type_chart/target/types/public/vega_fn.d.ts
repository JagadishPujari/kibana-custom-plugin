import { ExecutionContextSearch } from '../../data/public';
import { ExecutionContext, ExpressionFunctionDefinition, Render } from '../../expressions/public';
import { VegaVisualizationDependencies } from './plugin';
import { VegaInspectorAdapters } from './vega_inspector/index';
import { KibanaContext } from '../../data/public';
import { VegaParser } from './data_model/vega_parser';
declare type Input = KibanaContext | {
    type: 'null';
};
declare type Output = Promise<Render<RenderValue>>;
interface Arguments {
    spec: string;
}
export declare type VisParams = Required<Arguments>;
export interface RenderValue {
    visData: VegaParser;
    visType: 'vega';
    visConfig: VisParams;
}
export declare type VegaExpressionFunctionDefinition = ExpressionFunctionDefinition<'vega', Input, Arguments, Output, ExecutionContext<VegaInspectorAdapters, ExecutionContextSearch>>;
export declare const createVegaFn: (dependencies: VegaVisualizationDependencies) => VegaExpressionFunctionDefinition;
export {};
//# sourceMappingURL=vega_fn.d.ts.map