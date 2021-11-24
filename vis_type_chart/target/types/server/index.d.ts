import { PluginConfigDescriptor, PluginInitializerContext } from 'kibana/server';
import { ConfigSchema } from '../config';
import { VisTypeVegaPlugin } from './plugin';
export declare const config: PluginConfigDescriptor<ConfigSchema>;
export declare function plugin(initializerContext: PluginInitializerContext): VisTypeVegaPlugin;
export { VisTypeVegaPluginStart, VisTypeVegaPluginSetup } from './types';
//# sourceMappingURL=index.d.ts.map