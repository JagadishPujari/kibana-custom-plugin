/// <reference types="react" />
import 'brace/mode/hjson';
import { VisEditorOptionsProps } from 'src/plugins/visualizations/public';
import { VisParams } from '../vega_fn';
import './vega_editor.scss';
declare function VegaVisEditor({ stateParams, setValue }: VisEditorOptionsProps<VisParams>): JSX.Element;
export { VegaVisEditor as default };
//# sourceMappingURL=vega_vis_editor.d.ts.map