import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from '../../../core/server';
import { VisTypeNiitChartPluginSetupDependencies, VisTypeNiitChartPluginSetup, VisTypeNiitChartPluginStart } from './types';
export declare class VisTypeNiitChartPlugin implements Plugin<VisTypeNiitChartPluginSetup, VisTypeNiitChartPluginStart> {
    private readonly config;
    constructor(initializerContext: PluginInitializerContext);
    setup(core: CoreSetup, { home, usageCollection }: VisTypeNiitChartPluginSetupDependencies): {};
    start(core: CoreStart): {};
    stop(): void;
}
//# sourceMappingURL=plugin.d.ts.map