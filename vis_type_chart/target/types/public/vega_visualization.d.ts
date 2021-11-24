import { IInterpreterRenderHandlers } from 'src/plugins/expressions';
import { VegaParser } from './data_model/vega_parser';
import { VegaVisualizationDependencies } from './plugin';
declare type VegaVisType = new (el: HTMLDivElement, fireEvent: IInterpreterRenderHandlers['event']) => {
    render(visData: VegaParser): Promise<void>;
    destroy(): void;
};
export declare const createVegaVisualization: ({ getServiceSettings, }: VegaVisualizationDependencies) => VegaVisType;
export {};
//# sourceMappingURL=vega_visualization.d.ts.map