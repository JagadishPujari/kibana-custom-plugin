import { UrlObject } from './types';
/**
 * This class processes all Vega spec customizations,
 * converting url object parameters into query results.
 */
export declare class UrlParser {
    _onWarning: (...args: string[]) => void;
    constructor(onWarning: (...args: string[]) => void);
    /**
     * Update request object
     */
    parseUrl(obj: UrlObject, urlObj: UrlObject): void;
    /**
     * No-op - the url is already set during the parseUrl
     */
    populateData(): void;
}
//# sourceMappingURL=url_parser.d.ts.map