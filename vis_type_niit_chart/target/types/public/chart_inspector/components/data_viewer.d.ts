/// <reference types="react" />
import { CommonProps } from '@elastic/eui';
import { ChartAdapter } from '../niit_chart_adapter';
interface DataViewerProps extends CommonProps {
    niit_chartAdapter: ChartAdapter;
}
export declare const DataViewer: ({ niit_chartAdapter, ...rest }: DataViewerProps) => JSX.Element;
export {};
//# sourceMappingURL=data_viewer.d.ts.map