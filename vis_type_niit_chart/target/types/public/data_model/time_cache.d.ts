import { TimefilterContract } from '../../../data/public';
import { TimeRange } from '../../../data/common';
import { CacheBounds } from './types';
/**
 * This class caches timefilter's bounds to minimize number of server requests
 */
export declare class TimeCache {
    _timefilter: TimefilterContract;
    _maxAge: number;
    _cachedBounds?: CacheBounds;
    _cacheTS: number;
    _timeRange?: TimeRange;
    constructor(timefilter: TimefilterContract, maxAge: number);
    _now(): number;
    /**
     * Get cached time range values
     * @returns {{min: number, max: number}}
     */
    getTimeBounds(): CacheBounds;
    setTimeRange(timeRange: TimeRange): void;
    /**
     * Get parsed min/max values
     * @returns {{min: number, max: number}}
     * @private
     */
    _getBounds(): CacheBounds;
}
//# sourceMappingURL=time_cache.d.ts.map