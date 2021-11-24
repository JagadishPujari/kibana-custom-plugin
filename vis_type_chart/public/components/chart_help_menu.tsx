/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useCallback, useState } from 'react';
import { EuiButtonIcon, EuiContextMenuPanel, EuiContextMenuItem, EuiPopover } from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n/react';
import { i18n } from '@kbn/i18n';

import { getDocLinks } from '../services';

function ChartHelpMenu() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const onButtonClick = useCallback(() => setIsPopoverOpen(!isPopoverOpen), [isPopoverOpen]);

  const closePopover = useCallback(() => setIsPopoverOpen(false), []);

  const button = (
    <EuiButtonIcon
      iconType="questionInCircle"
      onClick={onButtonClick}
      aria-label={i18n.translate('visTypeChart.editor.chartHelpButtonAriaLabel', {
        defaultMessage: 'Chart plugin  help',
      })}
    />
  );

  const items = [
    <EuiContextMenuItem
      key="chartHelp"
      href={getDocLinks().links.visualize.chart}
      target="_blank"
      onClick={closePopover}
    >
      <FormattedMessage
        id="visTypeChart.editor.chartHelpLinkText"
        defaultMessage="Kibana Chart help"
      />
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="chartLiteDocs"
      href="https://chart.github.io/chart-lite/docs/"
      target="_blank"
      onClick={closePopover}
    >
      <FormattedMessage
        id="visTypeChart.editor.chartLiteDocumentationLinkText"
        defaultMessage="Chart-Lite documentation"
      />
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="chartDoc"
      href="https://chart.github.io/chart/docs/"
      target="_blank"
      onClick={closePopover}
    >
      <FormattedMessage
        id="visTypeChart.editor.ChartDocumentationLinkText"
        defaultMessage="Chart documentation"
      />
    </EuiContextMenuItem>,
  ];

  return (
    <EuiPopover
      id="helpMenu"
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      panelPaddingSize="none"
      anchorPosition="downLeft"
    >
      <EuiContextMenuPanel items={items} />
    </EuiPopover>
  );
}

export { ChartHelpMenu };
