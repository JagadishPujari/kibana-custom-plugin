/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { createNiitChartStateRestorer } from './niit_chart_state_restorer';

describe('extractIndexPatternsFromSpec', () => {
  test('should create vega state restorer ', async () => {
    expect(createNiitChartStateRestorer()).toMatchInlineSnapshot(`
      Object {
        "clear": [Function],
        "restore": [Function],
        "save": [Function],
      }
    `);
  });

  test('should save state', async () => {
    const vegaStateRestorer = createNiitChartStateRestorer();

    vegaStateRestorer.save({
      signals: { foo: 'foo' },
      data: { test: 'test' },
    });

    expect(vegaStateRestorer.restore()).toMatchInlineSnapshot(`
      Object {
        "signals": Object {
          "foo": "foo",
        },
      }
    `);
  });

  test('should restore of "data" if "restoreData" is true', () => {
    const vegaStateRestorer = createNiitChartStateRestorer();

    vegaStateRestorer.save({
      signals: { foo: 'foo' },
      data: { test: 'test' },
    });

    expect(vegaStateRestorer.restore(true)).toMatchInlineSnapshot(`
      Object {
        "data": Object {
          "test": "test",
        },
        "signals": Object {
          "foo": "foo",
        },
      }
    `);
  });

  test('should clear saved state', () => {
    const vegaStateRestorer = createNiitChartStateRestorer();

    vegaStateRestorer.save({
      signals: { foo: 'foo' },
      data: { test: 'test' },
    });
    vegaStateRestorer.clear();

    expect(vegaStateRestorer.restore(true)).toMatchInlineSnapshot(`null`);
  });

  test('should omit signals', () => {
    const vegaStateRestorer = createNiitChartStateRestorer({ omitSignals: ['foo'] });

    vegaStateRestorer.save({
      signals: { foo: 'foo' },
    });

    expect(vegaStateRestorer.restore()).toMatchInlineSnapshot(`
      Object {
        "signals": Object {},
      }
    `);
  });
  test('should not save state if isActive is false', () => {
    const vegaStateRestorer = createNiitChartStateRestorer({ isActive: () => false });

    vegaStateRestorer.save({
      signals: { foo: 'foo' },
    });

    expect(vegaStateRestorer.restore()).toMatchInlineSnapshot(`null`);
  });
});
