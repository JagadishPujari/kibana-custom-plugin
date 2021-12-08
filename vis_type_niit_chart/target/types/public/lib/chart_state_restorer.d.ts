interface ChartStateRestorerOptions {
    /**
     *  List of excluded signals
     *
     *  By default, all Build-in signals (width,height,padding,autosize,background) were excluded
     *  @see https://vega.github.io/vega/docs/signals/
     */
    omitSignals?: string[];
    /**
     * Gets a value that indicates whether the VegaStateRestorer is active.
     */
    isActive?: () => boolean;
}
declare type State = Partial<{
    signals: Record<string, any>;
    data: Record<string, any>;
}>;
export declare const createChartStateRestorer: ({ omitSignals, isActive, }?: ChartStateRestorerOptions) => {
    /**
     * Save Vega state
     * @public
     * @param newState - new state value
     */
    save: (newState: State) => void;
    /**
     * Restore Vega state
     * @public
     * @param restoreData - by default, we only recover signals,
     *        but if the data also needs to be recovered, this option should be set to true
     */
    restore: (restoreData?: boolean) => Pick<Partial<{
        signals: Record<string, any>;
        data: Record<string, any>;
    }>, "signals">;
    /**
     *  Clear saved Vega state
     *
     *  @public
     */
    clear: () => void;
};
export {};
//# sourceMappingURL=niit_chart_state_restorer.d.ts.map