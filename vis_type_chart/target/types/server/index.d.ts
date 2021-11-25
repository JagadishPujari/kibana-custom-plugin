import { PluginConfigDescriptor, PluginInitializerContext } from 'kibana/server';
import { ConfigSchema } from '../config';
import { VisTypeChartPlugin } from './plugin';
export declare const config: PluginConfigDescriptor<ConfigSchema>;
export declare function plugin(initializerContext: PluginInitializerContext): VisTypeChartPlugin;
export { VisTypeChartPluginStart, VisTypeChartPluginSetup } from './types';
//# sourceMappingURL=index.d.ts.map