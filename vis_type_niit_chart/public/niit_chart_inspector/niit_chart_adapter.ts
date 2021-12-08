/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { Observable, ReplaySubject, fromEventPattern, merge, timer } from 'rxjs';
import { map, switchMap, filter, debounce } from 'rxjs/operators';
import { View, Runtime, Spec } from 'vega';
import { i18n } from '@kbn/i18n';
import { Assign } from '@kbn/utility-types';

interface DebugValues {
  view: View;
  spec: Spec;
}

export interface NiitChartRuntimeData {
  columns: Array<{
    id: string;
  }>;
  data: Array<Record<string, string>>;
}

export type InspectDataSets = Assign<NiitChartRuntimeData, { id: string }>;
export type InspectSignalsSets = NiitChartRuntimeData;

const niit_chartAdapterSignalLabel = i18n.translate('visTypeNiitChart.inspector.niit_chartAdapter.signal', {
  defaultMessage: 'Signal',
});

const niit_chartAdapterValueLabel = i18n.translate('visTypeNiitChart.inspector.niit_chartAdapter.value', {
  defaultMessage: 'Value',
});

/** Get Runtime Scope for Chart View
 * @link https://niit_chart.github.io/niit_chart/docs/api/debugging/#scope
 **/
const getChartRuntimeScope = (debugValues: DebugValues) =>
  (debugValues.view as any)._runtime as Runtime;

const serializeColumns = (item: Record<string, unknown>, columns: string[]) => {
  const nonSerializableFieldLabel = '(..)';

  return columns.reduce((row: Record<string, string>, column) => {
    try {
      const cell = item[column];
      row[column] = typeof cell === 'object' ? JSON.stringify(cell) : `${cell}`;
    } catch (e) {
      row[column] = nonSerializableFieldLabel;
    }
    return row;
  }, {});
};

export class NiitChartAdapter {
  private debugValuesSubject = new ReplaySubject<DebugValues>();

  bindInspectValues(debugValues: DebugValues) {
    this.debugValuesSubject.next(debugValues);
  }

  getDataSetsSubscription(): Observable<InspectDataSets[]> {
    return this.debugValuesSubject.pipe(
      filter((debugValues) => Boolean(debugValues)),
      map((debugValues) => {
        const runtimeScope = getChartRuntimeScope(debugValues);

        return Object.keys(runtimeScope.data || []).reduce((acc: InspectDataSets[], key) => {
          const value = runtimeScope.data[key].values.value;

          if (value && value[0]) {
            const columns = Object.keys(value[0]);
            acc.push({
              id: key,
              columns: columns.map((column) => ({ id: column, schema: 'json' })),
              data: value.map((item: Record<string, unknown>) => serializeColumns(item, columns)),
            });
          }
          return acc;
        }, []);
      })
    );
  }

  getSignalsSetsSubscription(): Observable<InspectSignalsSets> {
    const signalsListener = this.debugValuesSubject.pipe(
      filter((debugValues) => Boolean(debugValues)),
      switchMap((debugValues) => {
        const runtimeScope = getChartRuntimeScope(debugValues);

        return merge(
          ...Object.keys(runtimeScope.signals).map((key: string) =>
            fromEventPattern(
              (handler) => debugValues.view.addSignalListener(key, handler),
              (handler) => debugValues.view.removeSignalListener(key, handler)
            )
          )
        ).pipe(
          debounce((val) => timer(350)),
          map(() => debugValues)
        );
      })
    );

    return merge(this.debugValuesSubject, signalsListener).pipe(
      filter((debugValues) => Boolean(debugValues)),
      map((debugValues) => {
        const runtimeScope = getChartRuntimeScope(debugValues);

        return {
          columns: [
            { id: niit_chartAdapterSignalLabel, schema: 'text' },
            { id: niit_chartAdapterValueLabel, schema: 'json' },
          ],
          data: Object.keys(runtimeScope.signals).map((key: string) =>
            serializeColumns(
              {
                [niit_chartAdapterSignalLabel]: key,
                [niit_chartAdapterValueLabel]: runtimeScope.signals[key].value,
              },
              [niit_chartAdapterSignalLabel, niit_chartAdapterValueLabel]
            )
          ),
        };
      })
    );
  }

  getSpecSubscription(): Observable<string> {
    return this.debugValuesSubject.pipe(
      filter((debugValues) => Boolean(debugValues)),
      map((debugValues) => JSON.stringify(debugValues.spec, null, 2))
    );
  }
}
