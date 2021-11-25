/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, {  } from 'react';

import { VisEditorOptionsProps } from 'src/plugins/visualizations/public';
import { VisParams } from '../chart_fn';

import './chart_editor.scss';

// const aceOptions = {
//   maxLines: Infinity,
//   highlightActiveLine: false,
//   showPrintMargin: false,
//   tabSize: 2,
//   useSoftTabs: true,
//   wrap: true,
// };

// const hjsonStringifyOptions = {
//   bracesSameLine: true,
//   keepWsc: true,
// };

// function format(
//   value: string,
//   stringify: typeof hjson.stringify | typeof compactStringify,
//   options?: any
// ) {
//   try {
//     const spec = hjson.parse(value, { legacyRoot: false, keepWsc: true });
//     return stringify(spec, options);
//   } catch (err) {
//     // This is a common case - user tries to format an invalid HJSON text
//     getNotifications().toasts.addError(err, {
//       title: i18n.translate('visTypeChart.editor.formatError', {
//         defaultMessage: 'Error formatting spec',
//       }),
//     });

//     return value;
//   }
// }

function ChartVisEditor({ stateParams, setValue }: VisEditorOptionsProps<VisParams>) {
  // const onChange = useCallback(
  //   (value: string) => {
  //     setValue('spec', value);
  //   },
  //   [setValue]
  // );

  // const formatJson = useCallback(
  //   () => setValue('spec', format(stateParams.spec, compactStringify)),
  //   [setValue, stateParams.spec]
  // );

  // const formatHJson = useCallback(
  //   () => setValue('spec', format(stateParams.spec, hjson.stringify, hjsonStringifyOptions)),
  //   [setValue, stateParams.spec]
  // );

  return (
    <p>ChartJS</p>
  );
}

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { ChartVisEditor as default };