/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { lazy, Suspense } from 'react';
import { EuiLoadingSpinner } from '@elastic/eui';

import { i18n } from '@kbn/i18n';
import { IUiSettingsClient } from 'kibana/public';
import { KibanaContextProvider } from '../../../kibana_react/public';
import { Adapters, RequestAdapter, InspectorViewDescription } from '../../../inspector/public';
import { ChartAdapter } from './chart_adapter';
import type { ChartDataInspectorProps } from './chart_data_inspector';

const ChartDataInspector = lazy(() => import('./chart_data_inspector'));

export interface ChartInspectorAdapters extends Adapters {
  requests: RequestAdapter;
  chart: ChartAdapter;
}

const chartDebugLabel = i18n.translate('visTypeChart.inspector.chartDebugLabel', {
  defaultMessage: 'Chart debug',
});

interface ChartInspectorViewDependencies {
  uiSettings: IUiSettingsClient;
}

export const getChartInspectorView = (dependencies: ChartInspectorViewDependencies) =>
  ({
    title: chartDebugLabel,
    shouldShow(adapters) {
      return Boolean(adapters.chart);
    },
    component: (props) => (
      <KibanaContextProvider services={dependencies}>
        <Suspense fallback={<EuiLoadingSpinner />}>
          <ChartDataInspector {...(props as ChartDataInspectorProps)} />
        </Suspense>
      </KibanaContextProvider>
    ),
  } as InspectorViewDescription);

export const createInspectorAdapters = (): ChartInspectorAdapters => ({
  requests: new RequestAdapter(),
  chart: new ChartAdapter(),
});
