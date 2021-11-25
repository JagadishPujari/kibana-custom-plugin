import { IInterpreterRenderHandlers } from 'src/plugins/expressions';
import { ChartParser } from './data_model/chart_parser';
import { ChartVisualizationDependencies } from './plugin';
declare type ChartVisType = new (el: HTMLDivElement, fireEvent: IInterpreterRenderHandlers['event']) => {
    render(visData: ChartParser): Promise<void>;
    destroy(): void;
};
export declare const createChartVisualization: ({ getServiceSettings, }: ChartVisualizationDependencies) => ChartVisType;
export {};
//# sourceMappingURL=chart_visualization.d.ts.map