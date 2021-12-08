/// <reference types="react" />
import { ChartVisualizationDependencies } from '../plugin';
import { ChartParser } from '../data_model/niit_chart_parser';
import './niit_chart_vis.scss';
import { IInterpreterRenderHandlers } from 'src/plugins/expressions';
interface ChartVisComponentProps {
    deps: ChartVisualizationDependencies;
    fireEvent: IInterpreterRenderHandlers['event'];
    renderComplete: () => void;
    visData: ChartParser;
}
export declare const options: {
    responsive: boolean;
    plugins: {
        legend: {
            position: "top";
        };
        title: {
            display: boolean;
            text: string;
        };
    };
};
export declare const data: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
    }[];
};
declare const ChartVisComponent: ({ visData, fireEvent, renderComplete, deps, }: ChartVisComponentProps) => JSX.Element;
export { ChartVisComponent as default };
//# sourceMappingURL=niit_chart_vis_component.d.ts.map