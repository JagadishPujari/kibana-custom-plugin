import type { TMSService } from '@elastic/ems-client';
import type { MapsEmsConfig } from '../../../../maps_ems/public';
export declare class MapServiceSettings {
    config: MapsEmsConfig;
    private appVersion;
    private emsClient?;
    private isDarkMode;
    constructor(config: MapsEmsConfig, appVersion: string);
    private isInitialized;
    hasUserConfiguredTmsLayer(): boolean;
    defaultTmsLayer(): string;
    private initialize;
    getTmsService(tmsTileLayer: string): Promise<TMSService>;
}
export declare function getAttributionsForTmsService(tmsService: TMSService): string[];
//# sourceMappingURL=map_service_settings.d.ts.map