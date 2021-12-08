/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { EuiComboBox } from '@elastic/eui';
import React, { useState } from 'react';

import { VisEditorOptionsProps } from 'src/plugins/visualizations/public';
import { VisParams } from '../niit_chart_fn';

import './niit_chart_editor.scss';

function ChartVisEditor({ stateParams, setValue }: VisEditorOptionsProps<VisParams>) {
  const options1 = [
    {
      label: 'Bar',
    },
    {
      label: 'Line',
    },
    {
      label: 'Pie',
    },
    {
      label: 'Doughnut',
    },
    {
      label: 'Polar',
    },
    {
      label: 'Radar',
    },
  ];
  const [selectedOptions, setSelected] = useState([options1[2]]);

  const onChange = (selectedOptions: any) => {
    setSelected(selectedOptions);
    console.log('selected option', selectedOptions[0].label);
    document.dispatchEvent(new CustomEvent('typeChanged', { detail: selectedOptions[0].label }));

  };

  return (
    <EuiComboBox
            aria-label="Accessible screen reader label"
            prepend="Chart type"
            placeholder="Select a single option"
            singleSelection={{ asPlainText: true }}
            options={options1}
            selectedOptions={selectedOptions}
            onChange={onChange}
          />
  );
}

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { ChartVisEditor as default };
