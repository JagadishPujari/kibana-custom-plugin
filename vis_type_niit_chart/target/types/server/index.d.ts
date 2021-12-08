import { PluginConfigDescriptor, PluginInitializerContext } from 'kibana/server';
import { ConfigSchema } from '../config';
import { VisTypeNiitChartPlugin } from './plugin';
export declare const config: PluginConfigDescriptor<ConfigSchema>;
export declare function plugin(initializerContext: PluginInitializerContext): VisTypeNiitChartPlugin;
export { VisTypeNiitChartPluginStart, VisTypeNiitChartPluginSetup } from './types';
//# sourceMappingURL=index.d.ts.map