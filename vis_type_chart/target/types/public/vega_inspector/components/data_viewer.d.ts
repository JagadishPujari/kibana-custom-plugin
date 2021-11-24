/// <reference types="react" />
import { CommonProps } from '@elastic/eui';
import { VegaAdapter } from '../vega_adapter';
interface DataViewerProps extends CommonProps {
    vegaAdapter: VegaAdapter;
}
export declare const DataViewer: ({ vegaAdapter, ...rest }: DataViewerProps) => JSX.Element;
export {};
//# sourceMappingURL=data_viewer.d.ts.map