/// <reference types="react" />
import { IInterpreterRenderHandlers } from 'src/plugins/expressions';
import { VegaVisualizationDependencies } from '../plugin';
import { VegaParser } from '../data_model/vega_parser';
import './vega_vis.scss';
interface VegaVisComponentProps {
    deps: VegaVisualizationDependencies;
    fireEvent: IInterpreterRenderHandlers['event'];
    renderComplete: () => void;
    visData: VegaParser;
}
declare const VegaVisComponent: ({ visData, fireEvent, renderComplete, deps }: VegaVisComponentProps) => JSX.Element;
export { VegaVisComponent as default };
//# sourceMappingURL=vega_vis_component.d.ts.map