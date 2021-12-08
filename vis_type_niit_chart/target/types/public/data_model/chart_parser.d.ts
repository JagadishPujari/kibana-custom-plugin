import { SearchAPI } from './search_api';
import { TimeCache } from './time_cache';
import { IServiceSettings } from '../../../maps_ems/public';
import { Bool, Data, VegaSpec, VegaConfig, TooltipConfig, DstObj, UrlParserConfig, ControlsLocation, ControlsDirection, KibanaConfig } from './types';
export declare class ChartParser {
    spec: VegaSpec;
    hideWarnings: boolean;
    restoreSignalValuesOnRefresh: boolean;
    error?: string;
    warnings: string[];
    _urlParsers: UrlParserConfig | undefined;
    isVegaLite?: boolean;
    useHover?: boolean;
    _config?: VegaConfig;
    useMap?: boolean;
    renderer?: string;
    tooltips?: boolean | TooltipConfig;
    mapConfig?: object;
    vlspec?: VegaSpec;
    useResize?: boolean;
    containerDir?: ControlsLocation | ControlsDirection;
    controlsDir?: ControlsLocation;
    searchAPI: SearchAPI;
    getServiceSettings: () => Promise<IServiceSettings>;
    filters: Bool;
    timeCache: TimeCache;
    constructor(spec: VegaSpec | string, searchAPI: SearchAPI, timeCache: TimeCache, filters: Bool, getServiceSettings: () => Promise<IServiceSettings>);
    parseAsync(): Promise<this>;
    _parseAsync(): Promise<void>;
    /**
     * Ensure that Vega and Vega-Lite will take the full width of the container unless
     * the user has explicitly disabled this setting by setting it to "none".
     * Also sets the default width to include the padding. This creates the least configuration
     * needed for most cases, with the option to do more.
     */
    private _compileWithAutosize;
    /**
     * Convert VegaLite to Vega spec
     */
    private _compileVegaLite;
    /**
     * Calculate container-direction CSS property for binding placement
     * @private
     */
    _parseControlPlacement(): void;
    /**
     * Parse {config: kibana: {...}} portion of the Vega spec (or root-level _hostConfig for backward compat)
     * @returns {object} kibana config
     * @private
     */
    _parseConfig(): KibanaConfig | {};
    _parseTooltips(): false | TooltipConfig;
    /**
     * Parse map-specific configuration
     * @returns {{mapStyle: *|string, delayRepaint: boolean, latitude: number, longitude: number, zoom, minZoom, maxZoom, zoomControl: *|boolean, maxBounds: *}}
     * @private
     */
    _parseMapConfig(): VegaConfig;
    _parseBool(paramName: string, dstObj: DstObj, dflt: boolean | string | number): void;
    /**
     * Parse Vega schema element
     * @returns {object} isVegaLite, libVersion
     * @private
     */
    private parseSchema;
    /**
     * Replace all instances of ES requests with raw values.
     * Also handle any other type of url: {type: xxx, ...}
     * @private
     */
    _resolveDataUrls(): Promise<void>;
    /**
     * Recursively find and callback every instance of the data.url as an object
     * @param {*} obj current location in the object tree
     * @param {function({object})} onFind Call this function for all url objects
     * @param {string} [key] field name of the current object
     * @private
     */
    _findObjectDataUrls(obj: VegaSpec | Data, onFind: (data: Data) => void, key?: unknown): void;
    /**
     * Inject default colors into the spec.config
     * @private
     */
    _setDefaultColors(): void;
    /**
     * Set default value if it doesn't exist.
     * Given an object, and an array of fields, ensure that obj.fld1.fld2. ... .fldN is set to value if it doesn't exist.
     * @param {*} value
     * @param {string} fields
     * @private
     */
    _setDefaultValue(value: unknown, ...fields: string[]): void;
    /**
     * Add a warning to the warnings array
     * @private
     */
    _onWarning(...args: any[]): any;
}
//# sourceMappingURL=niit_chart_parser.d.ts.map