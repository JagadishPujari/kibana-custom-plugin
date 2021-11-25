import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from '../../../core/server';
import { VisTypeChartPluginSetupDependencies, VisTypeChartPluginSetup, VisTypeChartPluginStart } from './types';
export declare class VisTypeChartPlugin implements Plugin<VisTypeChartPluginSetup, VisTypeChartPluginStart> {
    private readonly config;
    constructor(initializerContext: PluginInitializerContext);
    setup(core: CoreSetup, { home, usageCollection }: VisTypeChartPluginSetupDependencies): {};
    start(core: CoreStart): {};
    stop(): void;
}
//# sourceMappingURL=plugin.d.ts.map