/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import './chart_data_inspector.scss';

import React from 'react';
import { EuiTabbedContent } from '@elastic/eui';

import { i18n } from '@kbn/i18n';
import { ChartInspectorAdapters } from './chart_inspector';
import { DataViewer, SignalViewer, SpecViewer } from './components';
import { InspectorViewProps } from '../../../inspector/public';

export type ChartDataInspectorProps = InspectorViewProps<ChartInspectorAdapters>;

const dataSetsLabel = i18n.translate('visTypeChart.inspector.dataSetsLabel', {
  defaultMessage: 'Data sets',
});

const signalValuesLabel = i18n.translate('visTypeChart.inspector.signalValuesLabel', {
  defaultMessage: 'Signal values',
});

const specLabel = i18n.translate('visTypeChart.inspector.specLabel', {
  defaultMessage: 'Spec',
});

const ChartDataInspector = ({ adapters }: ChartDataInspectorProps) => {
  const tabs = [
    {
      id: 'data-viewer--id',
      name: dataSetsLabel,
      content: <DataViewer chartAdapter={adapters.chart} />,
      'data-test-subj': 'chartDataInspectorDataViewerButton',
    },
    {
      id: 'signal-viewer--id',
      name: signalValuesLabel,
      content: <SignalViewer chartAdapter={adapters.chart} />,
      'data-test-subj': 'chartDataInspectorSignalViewerButton',
    },
    {
      id: 'spec-viewer--id',
      name: specLabel,
      content: (
        <SpecViewer className="vgaChartDataInspector__specViewer" chartAdapter={adapters.chart} />
      ),
      'data-test-subj': 'chartDataInspectorSpecViewerButton',
    },
  ];

  return (
    <EuiTabbedContent
      className="vgaChartDataInspector"
      size="s"
      tabs={tabs}
      initialSelectedTab={tabs[0]}
      autoFocus="selected"
    />
  );
};

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { ChartDataInspector as default };
