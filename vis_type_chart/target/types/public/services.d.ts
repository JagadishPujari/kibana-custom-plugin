import { NotificationsStart, IUiSettingsClient, DocLinksStart } from 'src/core/public';
import { DataPublicPluginStart } from '../../data/public';
import { MapServiceSettings } from './chart_view/chart_map_view/map_service_settings';
export declare const getData: import("../../kibana_utils/public").Get<DataPublicPluginStart>, setData: import("../../kibana_utils/public").Set<DataPublicPluginStart>;
export declare const getNotifications: import("../../kibana_utils/public").Get<NotificationsStart>, setNotifications: import("../../kibana_utils/public").Set<NotificationsStart>;
export declare const getUISettings: import("../../kibana_utils/public").Get<IUiSettingsClient>, setUISettings: import("../../kibana_utils/public").Set<IUiSettingsClient>;
export declare const getInjectedMetadata: import("../../kibana_utils/public").Get<{
    getInjectedVar: (name: string, defaultValue?: any) => unknown;
}>, setInjectedMetadata: import("../../kibana_utils/public").Set<{
    getInjectedVar: (name: string, defaultValue?: any) => unknown;
}>;
export declare const getMapServiceSettings: import("../../kibana_utils/public").Get<MapServiceSettings>, setMapServiceSettings: import("../../kibana_utils/public").Set<MapServiceSettings>;
export declare const getInjectedVars: import("../../kibana_utils/public").Get<{
    enableExternalUrls: boolean;
    emsTileLayerId: unknown;
}>, setInjectedVars: import("../../kibana_utils/public").Set<{
    enableExternalUrls: boolean;
    emsTileLayerId: unknown;
}>;
export declare const getEnableExternalUrls: () => boolean;
export declare const getDocLinks: import("../../kibana_utils/public").Get<DocLinksStart>, setDocLinks: import("../../kibana_utils/public").Set<DocLinksStart>;
//# sourceMappingURL=services.d.ts.map