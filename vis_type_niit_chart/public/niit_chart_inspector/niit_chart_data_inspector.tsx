/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import './niit_chart_data_inspector.scss';

import React from 'react';
import { EuiTabbedContent } from '@elastic/eui';

import { i18n } from '@kbn/i18n';
import { NiitChartInspectorAdapters } from './niit_chart_inspector';
import { DataViewer, SignalViewer, SpecViewer } from './components';
import { InspectorViewProps } from '../../../inspector/public';

export type NiitChartDataInspectorProps = InspectorViewProps<NiitChartInspectorAdapters>;

const dataSetsLabel = i18n.translate('visTypeNiitChart.inspector.dataSetsLabel', {
  defaultMessage: 'Data sets',
});

const signalValuesLabel = i18n.translate('visTypeNiitChart.inspector.signalValuesLabel', {
  defaultMessage: 'Signal values',
});

const specLabel = i18n.translate('visTypeNiitChart.inspector.specLabel', {
  defaultMessage: 'Spec',
});

const NiitChartDataInspector = ({ adapters }: NiitChartDataInspectorProps) => {
  const tabs = [
    {
      id: 'data-viewer--id',
      name: dataSetsLabel,
      content: <DataViewer niit_chartAdapter={adapters.niit_chart} />,
      'data-test-subj': 'niit_chartDataInspectorDataViewerButton',
    },
    {
      id: 'signal-viewer--id',
      name: signalValuesLabel,
      content: <SignalViewer niit_chartAdapter={adapters.niit_chart} />,
      'data-test-subj': 'niit_chartDataInspectorSignalViewerButton',
    },
    {
      id: 'spec-viewer--id',
      name: specLabel,
      content: (
        <SpecViewer className="vgaNiitChartDataInspector__specViewer" niit_chartAdapter={adapters.niit_chart} />
      ),
      'data-test-subj': 'niit_chartDataInspectorSpecViewerButton',
    },
  ];

  return (
    <EuiTabbedContent
      className="vgaNiitChartDataInspector"
      size="s"
      tabs={tabs}
      initialSelectedTab={tabs[0]}
      autoFocus="selected"
    />
  );
};

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { NiitChartDataInspector as default };
