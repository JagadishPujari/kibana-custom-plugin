/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useEffect, useState } from 'react';

import { EuiSpacer } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { ChartAdapter, InspectSignalsSets } from '../chart_adapter';
import { InspectorDataGrid } from './inspector_data_grid';

interface SignalViewerProps {
  chartAdapter: ChartAdapter;
}

const initialSignalColumnWidth = 150;

const signalDataGridAriaLabel = i18n.translate('visTypeChart.inspector.signalViewer.gridAriaLabel', {
  defaultMessage: 'Signal values data grid',
});

export const SignalViewer = ({ chartAdapter }: SignalViewerProps) => {
  const [inspectSignalsSets, setInspectSignalsSets] = useState<InspectSignalsSets>();

  useEffect(() => {
    const subscription = chartAdapter.getSignalsSetsSubscription().subscribe((signalSets) => {
      if (signalSets) {
        setInspectSignalsSets(signalSets);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [chartAdapter]);

  if (!inspectSignalsSets) {
    return null;
  }

  return (
    <div>
      <EuiSpacer size="s" />
      <InspectorDataGrid
        columns={inspectSignalsSets.columns.map((column, index) => {
          if (index === 0) {
            return {
              ...column,
              initialWidth: initialSignalColumnWidth,
            };
          }
          return column;
        })}
        data={inspectSignalsSets.data}
        dataGridAriaLabel={signalDataGridAriaLabel}
      />
    </div>
  );
};
