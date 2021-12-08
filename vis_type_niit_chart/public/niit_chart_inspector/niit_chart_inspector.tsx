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
import { NiitChartAdapter } from './niit_chart_adapter';
import type { NiitChartDataInspectorProps } from './niit_chart_data_inspector';

const NiitChartDataInspector = lazy(() => import('./niit_chart_data_inspector'));

export interface NiitChartInspectorAdapters extends Adapters {
  requests: RequestAdapter;
  niit_chart: NiitChartAdapter;
}

const niit_chartDebugLabel = i18n.translate('visTypeNiitChart.inspector.niit_chartDebugLabel', {
  defaultMessage: 'NiitChart debug',
});

interface NiitChartInspectorViewDependencies {
  uiSettings: IUiSettingsClient;
}

export const getNiitChartInspectorView = (dependencies: NiitChartInspectorViewDependencies) =>
  ({
    title: niit_chartDebugLabel,
    shouldShow(adapters) {
      return Boolean(adapters.niit_chart);
    },
    component: (props) => (
      <KibanaContextProvider services={dependencies}>
        <Suspense fallback={<EuiLoadingSpinner />}>
          <NiitChartDataInspector {...(props as NiitChartDataInspectorProps)} />
        </Suspense>
      </KibanaContextProvider>
    ),
  } as InspectorViewDescription);

export const createInspectorAdapters = (): NiitChartInspectorAdapters => ({
  requests: new RequestAdapter(),
  niit_chart: new NiitChartAdapter(),
});
