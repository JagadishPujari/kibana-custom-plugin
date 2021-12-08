/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { omit } from 'lodash';

interface ChartStateRestorerOptions {
  /**
   *  List of excluded signals
   *
   *  By default, all Build-in signals (width,height,padding,autosize,background) were excluded
   *  @see https://niit_chart.github.io/niit_chart/docs/signals/
   */
  omitSignals?: string[];
  /**
   * Gets a value that indicates whether the ChartStateRestorer is active.
   */
  isActive?: () => boolean;
}

type State = Partial<{
  signals: Record<string, any>;
  data: Record<string, any>;
}>;

export const createNiitChartStateRestorer = ({
  omitSignals = ['width', 'height', 'padding', 'autosize', 'background'],
  isActive = () => true,
}: ChartStateRestorerOptions = {}) => {
  let state: State | null;

  return {
    /**
     * Save Chart state
     * @public
     * @param newState - new state value
     */
    save: (newState: State) => {
      if (newState && isActive()) {
        state = {
          signals: omit(newState.signals, omitSignals || []),
          data: newState.data,
        };
      }
    },

    /**
     * Restore Chart state
     * @public
     * @param restoreData - by default, we only recover signals,
     *        but if the data also needs to be recovered, this option should be set to true
     */
    restore: (restoreData = false) =>
      isActive() && state ? omit(state, restoreData ? undefined : 'data') : null,

    /**
     *  Clear saved Chart state
     *
     *  @public
     */
    clear: () => {
      state = null;
    },
  };
};
