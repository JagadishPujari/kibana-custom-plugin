/// <reference types="react" />
import { CommonProps } from '@elastic/eui';
import { ChartAdapter } from '../chart_adapter';
interface DataViewerProps extends CommonProps {
    chartAdapter: ChartAdapter;
}
export declare const DataViewer: ({ chartAdapter, ...rest }: DataViewerProps) => JSX.Element;
export {};
//# sourceMappingURL=data_viewer.d.ts.map