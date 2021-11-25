/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { i18n } from '@kbn/i18n';
import { parse } from 'hjson';

import { DefaultEditorSize } from '../../vis_default_editor/public';
import { VIS_EVENT_TO_TRIGGER, VisGroups, VisTypeDefinition } from '../../visualizations/public';

import { getDefaultSpec } from './default_spec';
import { extractIndexPatternsFromSpec } from './lib/extract_index_pattern';
import { createInspectorAdapters } from './chart_inspector/chart_inspector';
import { toExpressionAst } from './to_ast';
import { getInfoMessage } from './components/experimental_map_vis_info';
import { ChartVisEditorComponent } from './components/chart_vis_editor_lazy';

import type { VisParams } from './chart_fn';

export const createChartTypeDefinition = (): VisTypeDefinition<VisParams> => {
  return {
    name: 'chart',
    title: 'Chart', 
    getInfoMessage,
    description: i18n.translate('visTypeChart.type.chartDescription', {
      defaultMessage: 'chart kibana plugin',
      description: 'Chart and Chart-Lite are product names and should not be translated',
    }),
    note: i18n.translate('visTypeChart.type.chartNote', {
      defaultMessage: 'Requires knowledge of Chart syntax.',
    }),
    icon: 'visChart',
    group: VisGroups.PROMOTED,
    titleInWizard: i18n.translate('visTypeChart.type.chartTitleInWizard', {
      defaultMessage: 'Chart visualization',
    }),
    visConfig: { defaults: { spec: getDefaultSpec() } },
    editorConfig: {
      optionsTemplate: ChartVisEditorComponent,
      enableAutoApply: true,
      defaultSize: DefaultEditorSize.MEDIUM,
    },
    toExpressionAst,
    options: {
      showIndexSelection: true,
      showQueryBar: true,
      showFilterBar: true,
    },
    getSupportedTriggers: () => {
      return [VIS_EVENT_TO_TRIGGER.applyFilter];
    },
    getUsedIndexPattern: async (visParams) => {
      try {
        const spec = parse(visParams.spec, { legacyRoot: false, keepWsc: true });

        return extractIndexPatternsFromSpec(spec);
      } catch (e) {
        // spec is invalid
      }
      return [];
    },
    inspectorAdapters: createInspectorAdapters,
    /**
     * This is necessary for showing actions bar in top of chart editor
     */
    requiresSearch: true,
  };
};
