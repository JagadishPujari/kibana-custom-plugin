import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from '../../../core/public';
import { Plugin as ExpressionsPublicPlugin } from '../../expressions/public';
import { DataPublicPluginSetup, DataPublicPluginStart } from '../../data/public';
import { VisualizationsSetup } from '../../visualizations/public';
import { Setup as InspectorSetup } from '../../inspector/public';
import { IServiceSettings, MapsEmsPluginSetup } from '../../maps_ems/public';
import { ConfigSchema } from '../config';
/** @internal */
export interface VegaVisualizationDependencies {
    core: CoreSetup;
    plugins: {
        data: DataPublicPluginSetup;
    };
    getServiceSettings: () => Promise<IServiceSettings>;
}
/** @internal */
export interface VegaPluginSetupDependencies {
    expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
    visualizations: VisualizationsSetup;
    inspector: InspectorSetup;
    data: DataPublicPluginSetup;
    mapsEms: MapsEmsPluginSetup;
}
/** @internal */
export interface VegaPluginStartDependencies {
    data: DataPublicPluginStart;
}
/** @internal */
export declare class VegaPlugin implements Plugin<void, void> {
    initializerContext: PluginInitializerContext<ConfigSchema>;
    constructor(initializerContext: PluginInitializerContext<ConfigSchema>);
    setup(core: CoreSetup, { inspector, data, expressions, visualizations, mapsEms }: VegaPluginSetupDependencies): void;
    start(core: CoreStart, { data }: VegaPluginStartDependencies): void;
}
//# sourceMappingURL=plugin.d.ts.map