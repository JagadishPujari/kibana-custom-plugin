/// <reference types="react" />
import { CommonProps } from '@elastic/eui';
import { VegaAdapter } from '../vega_adapter';
interface SpecViewerProps extends CommonProps {
    vegaAdapter: VegaAdapter;
}
export declare const SpecViewer: ({ vegaAdapter, ...rest }: SpecViewerProps) => JSX.Element;
export {};
//# sourceMappingURL=spec_viewer.d.ts.map