/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import 'jest-canvas-mock';

import type { TMSService } from '@elastic/ems-client';
import { NiitChartMapView } from './view';
import { NiitChartViewParams } from '../niit_chart_base_view';
import { NiitChartParser } from '../../data_model/niit_chart_parser';
import { TimeCache } from '../../data_model/time_cache';
import { SearchAPI } from '../../data_model/search_api';
import niit_chartMap from '../../test_utils/niit_chart_map_test.json';
import { coreMock } from '../../../../../core/public/mocks';
import { dataPluginMock } from '../../../../data/public/mocks';
import type { IServiceSettings, MapsEmsConfig } from '../../../../maps_ems/public';
import { MapServiceSettings } from './map_service_settings';
import { userConfiguredLayerId } from './constants';
import {
  setInjectedVars,
  setData,
  setNotifications,
  setMapServiceSettings,
  setUISettings,
} from '../../services';
import { initNiitChartLayer, initTmsRasterLayer } from './layers';

import { mapboxgl } from '@kbn/mapbox-gl';

jest.mock('@kbn/mapbox-gl', () => ({
  mapboxgl: {
    setRTLTextPlugin: jest.fn(),
    Map: jest.fn().mockImplementation(() => ({
      getLayer: () => '',
      removeLayer: jest.fn(),
      once: (eventName: string, handler: Function) => handler(),
      remove: () => jest.fn(),
      getCanvas: () => ({ clientWidth: 512, clientHeight: 512 }),
      getCenter: () => ({ lat: 20, lng: 20 }),
      getZoom: () => 3,
      addControl: jest.fn(),
      addLayer: jest.fn(),
      dragRotate: {
        disable: jest.fn(),
      },
      touchZoomRotate: {
        disableRotation: jest.fn(),
      },
    })),
    MapboxOptions: jest.fn(),
    NavigationControl: jest.fn(),
  },
}));

jest.mock('./layers', () => ({
  initNiitChartLayer: jest.fn(),
  initTmsRasterLayer: jest.fn(),
}));

describe('niit_chart_map_view/view', () => {
  describe('NiitChartMapView', () => {
    const coreStart = coreMock.createStart();
    const dataPluginStart = dataPluginMock.createStartContract();
    const mockGetServiceSettings = async () => {
      return {} as IServiceSettings;
    };
    let niit_chartParser: NiitChartParser;

    setInjectedVars({
      emsTileLayerId: {},
      enableExternalUrls: true,
    });
    setData(dataPluginStart);
    setNotifications(coreStart.notifications);
    setUISettings(coreStart.uiSettings);

    const getTmsService = jest.fn().mockReturnValue(({
      getVectorStyleSheet: () => ({
        version: 8,
        sources: {},
        // @ts-expect-error
        layers: [],
      }),
      getMaxZoom: async () => 20,
      getMinZoom: async () => 0,
      getAttributions: () => [{ url: 'tms_attributions' }],
    } as unknown) as TMSService);
    const config = {
      tilemap: {
        url: 'test',
        options: {
          attribution: 'tilemap-attribution',
          minZoom: 0,
          maxZoom: 20,
        },
      },
    } as MapsEmsConfig;

    function setMapService(defaultTmsLayer: string) {
      setMapServiceSettings(({
        getTmsService,
        defaultTmsLayer: () => defaultTmsLayer,
        config,
      } as unknown) as MapServiceSettings);
    }

    async function createNiitChartMapView() {
      await niit_chartParser.parseAsync();
      return new NiitChartMapView(({
        niit_chartParser,
        filterManager: dataPluginStart.query.filterManager,
        timefilter: dataPluginStart.query.timefilter.timefilter,
        fireEvent: (event: any) => {},
        parentEl: document.createElement('div'),
        niit_chartStateRestorer: {
          save: jest.fn(),
          restore: jest.fn(),
          clear: jest.fn(),
        },
      } as unknown) as NiitChartViewParams);
    }

    beforeEach(() => {
      niit_chartParser = new NiitChartParser(
        JSON.stringify(niit_chartMap),
        new SearchAPI({
          search: dataPluginStart.search,
          indexPatterns: dataPluginStart.indexPatterns,
          uiSettings: coreStart.uiSettings,
          injectedMetadata: coreStart.injectedMetadata,
        }),
        new TimeCache(dataPluginStart.query.timefilter.timefilter, 0),
        {},
        mockGetServiceSettings
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should be added TmsRasterLayer and do not use tmsService if mapStyle is "user_configured"', async () => {
      setMapService(userConfiguredLayerId);
      const niit_chartMapView = await createNiitChartMapView();

      await niit_chartMapView.init();

      const { longitude, latitude, scrollWheelZoom } = niit_chartMapView._parser.mapConfig;
      expect(mapboxgl.Map).toHaveBeenCalledWith({
        style: {
          version: 8,
          sources: {},
          layers: [],
        },
        customAttribution: 'tilemap-attribution',
        container: niit_chartMapView._$container.get(0),
        minZoom: 0,
        maxZoom: 20,
        zoom: 3,
        scrollZoom: scrollWheelZoom,
        center: [longitude, latitude],
      });
      expect(getTmsService).not.toHaveBeenCalled();
      expect(initTmsRasterLayer).toHaveBeenCalled();
      expect(initNiitChartLayer).toHaveBeenCalled();
    });

    test('should not be added TmsRasterLayer and use tmsService if mapStyle is not "user_configured"', async () => {
      setMapService('road_map_desaturated');
      const niit_chartMapView = await createNiitChartMapView();

      await niit_chartMapView.init();

      const { longitude, latitude, scrollWheelZoom } = niit_chartMapView._parser.mapConfig;
      expect(mapboxgl.Map).toHaveBeenCalledWith({
        style: {
          version: 8,
          sources: {},
          layers: [],
        },
        customAttribution: ['<a rel="noreferrer noopener" href="tms_attributions"></a>'],
        container: niit_chartMapView._$container.get(0),
        minZoom: 0,
        maxZoom: 20,
        zoom: 3,
        scrollZoom: scrollWheelZoom,
        center: [longitude, latitude],
      });
      expect(getTmsService).toHaveBeenCalled();
      expect(initTmsRasterLayer).not.toHaveBeenCalled();
      expect(initNiitChartLayer).toHaveBeenCalled();
    });

    test('should be added NavigationControl', async () => {
      setMapService('road_map_desaturated');
      const niit_chartMapView = await createNiitChartMapView();

      await niit_chartMapView.init();

      expect(mapboxgl.NavigationControl).toHaveBeenCalled();
    });
  });
});
