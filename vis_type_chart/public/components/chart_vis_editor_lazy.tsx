/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { lazy } from 'react';

import { VisEditorOptionsProps } from 'src/plugins/visualizations/public';
import { VisParams } from '../chart_fn';

const ChartVisEditor = lazy(() => import('./chart_vis_editor'));

export const ChartVisEditorComponent = (props: VisEditorOptionsProps<VisParams>) => (
  <ChartVisEditor {...props} />
);
