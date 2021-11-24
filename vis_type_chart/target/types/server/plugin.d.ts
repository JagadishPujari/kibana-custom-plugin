import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from '../../../core/server';
import { VisTypeVegaPluginSetupDependencies, VisTypeVegaPluginSetup, VisTypeVegaPluginStart } from './types';
export declare class VisTypeVegaPlugin implements Plugin<VisTypeVegaPluginSetup, VisTypeVegaPluginStart> {
    private readonly config;
    constructor(initializerContext: PluginInitializerContext);
    setup(core: CoreSetup, { home, usageCollection }: VisTypeVegaPluginSetupDependencies): {};
    start(core: CoreStart): {};
    stop(): void;
}
//# sourceMappingURL=plugin.d.ts.map