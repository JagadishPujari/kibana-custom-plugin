(window["visTypeChart_bundle_jsonpfunction"] = window["visTypeChart_bundle_jsonpfunction"] || []).push([[6],{

/***/ "../../../node_modules/compare-versions/index.js":
/*!**********************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/compare-versions/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */
(function (root, factory) {
  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

  var semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

  function indexOrEnd(str, q) {
    return str.indexOf(q) === -1 ? str.length : str.indexOf(q);
  }

  function split(v) {
    var c = v.replace(/^v/, '').replace(/\+.*$/, '');
    var patchIndex = indexOrEnd(c, '-');
    var arr = c.substring(0, patchIndex).split('.');
    arr.push(c.substring(patchIndex + 1));
    return arr;
  }

  function tryParse(v) {
    return isNaN(Number(v)) ? v : Number(v);
  }

  function validate(version) {
    if (typeof version !== 'string') {
      throw new TypeError('Invalid argument expected string');
    }
    if (!semver.test(version)) {
      throw new Error('Invalid argument not valid semver (\''+version+'\' received)');
    }
  }

  function compareVersions(v1, v2) {
    [v1, v2].forEach(validate);

    var s1 = split(v1);
    var s2 = split(v2);

    for (var i = 0; i < Math.max(s1.length - 1, s2.length - 1); i++) {
      var n1 = parseInt(s1[i] || 0, 10);
      var n2 = parseInt(s2[i] || 0, 10);

      if (n1 > n2) return 1;
      if (n2 > n1) return -1;
    }

    var sp1 = s1[s1.length - 1];
    var sp2 = s2[s2.length - 1];

    if (sp1 && sp2) {
      var p1 = sp1.split('.').map(tryParse);
      var p2 = sp2.split('.').map(tryParse);

      for (i = 0; i < Math.max(p1.length, p2.length); i++) {
        if (p1[i] === undefined || typeof p2[i] === 'string' && typeof p1[i] === 'number') return -1;
        if (p2[i] === undefined || typeof p1[i] === 'string' && typeof p2[i] === 'number') return 1;

        if (p1[i] > p2[i]) return 1;
        if (p2[i] > p1[i]) return -1;
      }
    } else if (sp1 || sp2) {
      return sp1 ? -1 : 1;
    }

    return 0;
  };

  var allowedOperators = [
    '>',
    '>=',
    '=',
    '<',
    '<='
  ];

  var operatorResMap = {
    '>': [1],
    '>=': [0, 1],
    '=': [0],
    '<=': [-1, 0],
    '<': [-1]
  };

  function validateOperator(op) {
    if (typeof op !== 'string') {
      throw new TypeError('Invalid operator type, expected string but got ' + typeof op);
    }
    if (allowedOperators.indexOf(op) === -1) {
      throw new TypeError('Invalid operator, expected one of ' + allowedOperators.join('|'));
    }
  }

  compareVersions.compare = function (v1, v2, operator) {
    // Validate operator
    validateOperator(operator);

    // since result of compareVersions can only be -1 or 0 or 1
    // a simple map can be used to replace switch
    var res = compareVersions(v1, v2);
    return operatorResMap[operator].indexOf(res) > -1;
  }

  return compareVersions;
}));


/***/ }),

/***/ "../../../node_modules/vega-schema-url-parser/dist/parser.js":
/*!**********************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/vega-schema-url-parser/dist/parser.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e){const[n,o]=/\/schema\/([\w-]+)\/([\w\.\-]+)\.json$/g.exec(e).slice(1,3);return{library:n,version:o}};
//# sourceMappingURL=parser.js.map


/***/ }),

/***/ "./public/chart_view/chart_view.js":
/*!*****************************************!*\
  !*** ./public/chart_view/chart_view.js ***!
  \*****************************************/
/*! exports provided: ChartView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartView", function() { return ChartView; });
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "../../../node_modules/vega/build/vega-node.js");
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vega__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chart_base_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart_base_view */ "./public/chart_view/chart_base_view.js");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


class ChartView extends _chart_base_view__WEBPACK_IMPORTED_MODULE_1__["ChartBaseView"] {
  async _initViewCustomizations() {
    // In some cases, Chart may be initialized twice... TBD
    if (!this._$container) return;
    const view = new vega__WEBPACK_IMPORTED_MODULE_0__["View"](Object(vega__WEBPACK_IMPORTED_MODULE_0__["parse"])(this._parser.spec, undefined, {
      ast: true
    }), this._chartViewConfig);
    if (this._parser.useResize) this.updateChartSize(view);
    view.initialize(this._$container.get(0), this._$controls.get(0));
    if (this._parser.useHover) view.hover();
    await this.setView(view);
    this.setDebugValues(view, this._parser.spec, this._parser.vlspec);
  }

}

/***/ }),

/***/ "./public/data_model/chart_parser.ts":
/*!*******************************************!*\
  !*** ./public/data_model/chart_parser.ts ***!
  \*******************************************/
/*! exports provided: ChartParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartParser", function() { return ChartParser; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vega_schema_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-schema-url-parser */ "../../../node_modules/vega-schema-url-parser/dist/parser.js");
/* harmony import */ var vega_schema_url_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vega_schema_url_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var compare_versions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compare-versions */ "../../../node_modules/compare-versions/index.js");
/* harmony import */ var compare_versions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compare_versions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hjson */ "../../../node_modules/hjson/lib/hjson.js");
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hjson__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kbn_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kbn/ui-shared-deps/theme */ "@kbn/ui-shared-deps/theme");
/* harmony import */ var _kbn_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_kbn_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vega */ "../../../node_modules/vega/build/vega-node.js");
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vega__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vega-lite */ "../../../node_modules/vega-lite/build/vega-lite.js");
/* harmony import */ var vega_lite__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vega_lite__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _es_query_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./es_query_parser */ "./public/data_model/es_query_parser.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./public/data_model/utils.ts");
/* harmony import */ var _ems_file_parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ems_file_parser */ "./public/data_model/ems_file_parser.ts");
/* harmony import */ var _url_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./url_parser */ "./public/data_model/url_parser.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */













// Set default single color to match other Kibana visualizations
const defaultColor = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["euiPaletteColorBlind"])()[0];
const locToDirMap = {
  left: 'row-reverse',
  right: 'row',
  top: 'column-reverse',
  bottom: 'column'
}; // If there is no "%type%" parameter, use this parser

const DEFAULT_PARSER = 'elasticsearch';
class ChartParser {
  constructor(spec, searchAPI, timeCache, filters, getServiceSettings) {
    _defineProperty(this, "spec", void 0);

    _defineProperty(this, "hideWarnings", void 0);

    _defineProperty(this, "restoreSignalValuesOnRefresh", void 0);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "warnings", void 0);

    _defineProperty(this, "_urlParsers", void 0);

    _defineProperty(this, "isVegaLite", void 0);

    _defineProperty(this, "useHover", void 0);

    _defineProperty(this, "_config", void 0);

    _defineProperty(this, "useMap", void 0);

    _defineProperty(this, "renderer", void 0);

    _defineProperty(this, "tooltips", void 0);

    _defineProperty(this, "mapConfig", void 0);

    _defineProperty(this, "vlspec", void 0);

    _defineProperty(this, "useResize", void 0);

    _defineProperty(this, "containerDir", void 0);

    _defineProperty(this, "controlsDir", void 0);

    _defineProperty(this, "searchAPI", void 0);

    _defineProperty(this, "getServiceSettings", void 0);

    _defineProperty(this, "filters", void 0);

    _defineProperty(this, "timeCache", void 0);

    this.spec = spec;
    this.hideWarnings = false;
    this.error = undefined;
    this.warnings = [];
    this.searchAPI = searchAPI;
    this.getServiceSettings = getServiceSettings;
    this.filters = filters;
    this.timeCache = timeCache;
  }

  async parseAsync() {
    try {
      await this._parseAsync();
    } catch (err) {
      // if we reject current promise, it will use the standard Kibana error handling
      this.error = _utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].formatErrorToStr(err);
    }

    return this;
  }

  async _parseAsync() {
    if (this.isVegaLite !== undefined) throw new Error();

    if (typeof this.spec === 'string') {
      const spec = hjson__WEBPACK_IMPORTED_MODULE_3___default.a.parse(this.spec, {
        legacyRoot: false
      });

      if (!spec.$schema) {
        throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.inputSpecDoesNotSpecifySchemaErrorMessage', {
          defaultMessage: `Your specification requires a {schemaParam} field with a valid URL for
Chart (see {chartSchemaUrl}) or
Chart-Lite (see {chartLiteSchemaUrl}).
The URL is an identifier only. Kibana and your browser will never access this URL.`,
          values: {
            schemaParam: '"$schema"',
            chartLiteSchemaUrl: 'https://chart.github.io/chart-lite/docs/spec.html#top-level',
            chartSchemaUrl: 'https://chart.github.io/chart/docs/specification/#top-level-specification-properties'
          }
        }));
      }

      this.spec = spec;
    }

    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(this.spec)) {
      throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.invalidChartSpecErrorMessage', {
        defaultMessage: 'Invalid Vega specification'
      }));
    }

    this.isVegaLite = this.parseSchema(this.spec).isVegaLite;
    this.useHover = !this.isVegaLite;
    this._config = this._parseConfig();
    this.hideWarnings = !!this._config.hideWarnings;

    this._parseBool('restoreSignalValuesOnRefresh', this._config, false);

    this.restoreSignalValuesOnRefresh = this._config.restoreSignalValuesOnRefresh;
    this.useMap = this._config.type === 'map';
    this.renderer = this._config.renderer === 'svg' ? 'svg' : 'canvas';
    this.tooltips = this._parseTooltips();

    this._setDefaultColors();

    this._parseControlPlacement();

    if (this.useMap) {
      this.mapConfig = this._parseMapConfig();
      this.useResize = false;
    }

    await this._resolveDataUrls();

    if (this.isVegaLite) {
      this._compileVegaLite();
    } else {
      this._compileWithAutosize();
    }
  }
  /**
   * Ensure that Vega and Vega-Lite will take the full width of the container unless
   * the user has explicitly disabled this setting by setting it to "none".
   * Also sets the default width to include the padding. This creates the least configuration
   * needed for most cases, with the option to do more.
   */


  _compileWithAutosize() {
    const defaultAutosize = {
      type: 'fit',
      contains: 'padding'
    };
    let autosize = this.spec.autosize;
    let useResize = true;

    if (!this.isVegaLite && autosize && typeof autosize === 'object' && 'signal' in autosize) {
      // Vega supports dynamic autosize information, so we ignore it
      return;
    }

    if (!autosize && typeof autosize !== 'undefined') {
      this._onWarning(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.autoSizeDoesNotAllowFalse', {
        defaultMessage: '{autoSizeParam} is enabled, it can only be disabled by setting {autoSizeParam} to {noneParam}',
        values: {
          autoSizeParam: '"autosize"',
          noneParam: '"none"'
        }
      }));
    }

    if (typeof autosize === 'string') {
      useResize = autosize !== 'none';
      autosize = { ...defaultAutosize,
        type: autosize
      };
    } else if (typeof autosize === 'object') {
      var _autosize, _autosize2;

      autosize = { ...defaultAutosize,
        ...autosize
      };
      useResize = Boolean(((_autosize = autosize) === null || _autosize === void 0 ? void 0 : _autosize.type) && ((_autosize2 = autosize) === null || _autosize2 === void 0 ? void 0 : _autosize2.type) !== 'none');
    } else {
      autosize = defaultAutosize;
    }

    if (useResize && (this.spec.width && this.spec.width !== 'container' || this.spec.height && this.spec.height !== 'container')) {
      this._onWarning(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.widthAndHeightParamsAreIgnored', {
        defaultMessage: '{widthParam} and {heightParam} params are ignored because {autoSizeParam} is enabled. Set {autoSizeParam}: {noneParam} to disable',
        values: {
          widthParam: '"width"',
          heightParam: '"height"',
          autoSizeParam: '"autosize"',
          noneParam: '"none"'
        }
      }));
    }

    if (useResize) {
      this.spec.width = 'container';
      this.spec.height = 'container';
    }

    this.spec.autosize = autosize;
    this.useResize = useResize;
  }
  /**
   * Convert VegaLite to Vega spec
   */


  _compileVegaLite() {
    if (!this.useMap) {
      // Compile without warnings to get the normalized spec, this simplifies the autosize detection
      const normalized = Object(vega_lite__WEBPACK_IMPORTED_MODULE_8__["compile"])(this.spec, {
        logger: Object(vega__WEBPACK_IMPORTED_MODULE_7__["logger"])(vega__WEBPACK_IMPORTED_MODULE_7__["None"])
      }).normalized; // Vega-Lite allows autosize when there is a single mark or layered chart, but
      // does not allow autosize for other specs.

      if ('mark' in normalized || 'layer' in normalized) {
        this._compileWithAutosize();
      } else {
        this.useResize = false;

        if (normalized.autosize && typeof normalized.autosize !== 'string' && normalized.autosize.type === 'none') {
          this._onWarning(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.widthAndHeightParamsAreRequired', {
            defaultMessage: 'Nothing is rendered when {autoSizeParam} is set to {noneParam} while using faceted or repeated {chartLiteParam} specs. To fix, remove {autoSizeParam} or use {chartParam}.',
            values: {
              autoSizeParam: '"autosize"',
              noneParam: '"none"',
              chartLiteParam: 'Vega-Lite',
              chartParam: 'Vega'
            }
          }));
        }
      }
    }

    this.vlspec = this.spec;
    const chartLogger = Object(vega__WEBPACK_IMPORTED_MODULE_7__["logger"])(vega__WEBPACK_IMPORTED_MODULE_7__["Warn"]); // note: eslint has a false positive here

    chartLogger.warn = this._onWarning.bind(this);
    this.spec = Object(vega_lite__WEBPACK_IMPORTED_MODULE_8__["compile"])(this.vlspec, {
      logger: chartLogger
    }).spec; // When using VL with the type=map and user did not provid their own projection settings,
    // remove the default projection that was generated by VegaLite compiler.
    // This way we let leaflet-chart library inject a different default projection for tile maps.
    // Also, VL injects default padding and autosize values, but neither should be set for chart-leaflet.

    if (this.useMap) {
      if (!this.spec || !this.vlspec) return;

      const hasConfig = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(this.vlspec.config);

      if (this.vlspec.config === undefined || hasConfig && !this.vlspec.config.projection) {
        // Assume VL generates spec.projections = an array of exactly one object named 'projection'
        if (!Array.isArray(this.spec.projections) || this.spec.projections.length !== 1 || this.spec.projections[0].name !== 'projection') {
          throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.VLCompilerShouldHaveGeneratedSingleProtectionObjectErrorMessage', {
            defaultMessage: 'Internal error: Vega-Lite compiler should have generated a single projection object'
          }));
        }

        delete this.spec.projections;
      } // todo: sizing cleanup might need to be rethought and consolidated


      if (!this.vlspec.width) delete this.spec.width;
      if (!this.vlspec.height) delete this.spec.height;

      if (!this.vlspec.padding && (this.vlspec.config === undefined || hasConfig && !this.vlspec.config.padding)) {
        delete this.spec.padding;
      }

      if (!this.vlspec.autosize && (this.vlspec.config === undefined || hasConfig && !this.vlspec.config.autosize)) {
        delete this.spec.autosize;
      }
    }
  }
  /**
   * Calculate container-direction CSS property for binding placement
   * @private
   */


  _parseControlPlacement() {
    var _this$_config, _this$_config2;

    this.containerDir = (_this$_config = this._config) !== null && _this$_config !== void 0 && _this$_config.controlsLocation ? locToDirMap[this._config.controlsLocation] : undefined;

    if (this.containerDir === undefined) {
      if (this._config && this._config.controlsLocation === undefined) {
        this.containerDir = 'column';
      } else {
        throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.unrecognizedControlsLocationValueErrorMessage', {
          defaultMessage: 'Unrecognized {controlsLocationParam} value. Expecting one of [{locToDirMap}]',
          values: {
            locToDirMap: `"${Object.keys(locToDirMap).join('", "')}"`,
            controlsLocationParam: 'controlsLocation'
          }
        }));
      }
    }

    const dir = (_this$_config2 = this._config) === null || _this$_config2 === void 0 ? void 0 : _this$_config2.controlsDirection;

    if (dir !== undefined && dir !== 'horizontal' && dir !== 'vertical') {
      throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.unrecognizedDirValueErrorMessage', {
        defaultMessage: 'Unrecognized {dirParam} value. Expecting one of [{expectedValues}]',
        values: {
          expectedValues: '"horizontal", "vertical"',
          dirParam: 'dir'
        }
      }));
    }

    this.controlsDir = dir === 'horizontal' ? 'row' : 'column';
  }
  /**
   * Parse {config: kibana: {...}} portion of the Vega spec (or root-level _hostConfig for backward compat)
   * @returns {object} kibana config
   * @private
   */


  _parseConfig() {
    let result = null;

    if (this.spec) {
      if (this.spec._hostConfig !== undefined) {
        result = this.spec._hostConfig;
        delete this.spec._hostConfig;

        if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(result)) {
          throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.hostConfigValueTypeErrorMessage', {
            defaultMessage: 'If present, {configName} must be an object',
            values: {
              configName: '"_hostConfig"'
            }
          }));
        }

        this._onWarning(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.hostConfigIsDeprecatedWarningMessage', {
          defaultMessage: '{deprecatedConfigName} has been deprecated. Use {newConfigName} instead.',
          values: {
            deprecatedConfigName: '"_hostConfig"',
            newConfigName: 'config.kibana'
          }
        }));
      }

      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(this.spec.config) && this.spec.config.kibana !== undefined) {
        result = this.spec.config.kibana;
        delete this.spec.config.kibana;

        if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(result)) {
          throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.kibanaConfigValueTypeErrorMessage', {
            defaultMessage: 'If present, {configName} must be an object',
            values: {
              configName: 'config.kibana'
            }
          }));
        }
      }
    }

    return result || {};
  }

  _parseTooltips() {
    var _this$_config3;

    if (this._config && this._config.tooltips === false) {
      return false;
    }

    const result = ((_this$_config3 = this._config) === null || _this$_config3 === void 0 ? void 0 : _this$_config3.tooltips) || {};

    if (result.position === undefined) {
      result.position = 'top';
    } else if (['top', 'right', 'bottom', 'left'].indexOf(result.position) === -1) {
      throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.unexpectedValueForPositionConfigurationErrorMessage', {
        defaultMessage: 'Unexpected value for the {configurationName} configuration',
        values: {
          configurationName: 'result.position'
        }
      }));
    }

    if (result.padding === undefined) {
      result.padding = 16;
    } else if (typeof result.padding !== 'number') {
      throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.paddingConfigValueTypeErrorMessage', {
        defaultMessage: '{configName} is expected to be a number',
        values: {
          configName: 'config.kibana.result.padding'
        }
      }));
    }

    if (result.textTruncate === undefined) {
      result.textTruncate = false;
    } else if (typeof result.textTruncate !== 'boolean') {
      throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.textTruncateConfigValueTypeErrorMessage', {
        defaultMessage: '{configName} is expected to be a boolean',
        values: {
          configName: 'textTruncate'
        }
      }));
    }

    if (result.centerOnMark === undefined) {
      // if mark's width & height is less than this value, center on it
      result.centerOnMark = 50;
    } else if (typeof result.centerOnMark === 'boolean') {
      result.centerOnMark = result.centerOnMark ? Number.MAX_VALUE : -1;
    } else if (typeof result.centerOnMark !== 'number') {
      throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.centerOnMarkConfigValueTypeErrorMessage', {
        defaultMessage: '{configName} is expected to be {trueValue}, {falseValue}, or a number',
        values: {
          configName: 'config.kibana.result.centerOnMark',
          trueValue: 'true',
          falseValue: 'false'
        }
      }));
    }

    return result;
  }
  /**
   * Parse map-specific configuration
   * @returns {{mapStyle: *|string, delayRepaint: boolean, latitude: number, longitude: number, zoom, minZoom, maxZoom, zoomControl: *|boolean, maxBounds: *}}
   * @private
   */


  _parseMapConfig() {
    var _this$_config4, _this$_config6;

    const res = {
      delayRepaint: ((_this$_config4 = this._config) === null || _this$_config4 === void 0 ? void 0 : _this$_config4.delayRepaint) === undefined ? true : this._config.delayRepaint
    };

    const validate = (name, isZoom) => {
      const val = this._config ? this._config[name] : undefined;

      if (val !== undefined) {
        const parsed = parseFloat(val);

        if (Number.isFinite(parsed) && (!isZoom || parsed >= 0 && parsed <= 30)) {
          res[name] = parsed;
          return;
        }

        this._onWarning(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.someKibanaConfigurationIsNoValidWarningMessage', {
          defaultMessage: '{configName} is not valid',
          values: {
            configName: `config.kibana.${name}`
          }
        }));
      }

      if (!isZoom) res[name] = 0;
    };

    validate(`latitude`, false);
    validate(`longitude`, false);
    validate(`zoom`, true);
    validate(`minZoom`, true);
    validate(`maxZoom`, true);

    this._parseBool('mapStyle', res, true);

    if (res.mapStyle) {
      var _this$_config5;

      res.emsTileServiceId = (_this$_config5 = this._config) === null || _this$_config5 === void 0 ? void 0 : _this$_config5.emsTileServiceId;
    }

    this._parseBool('zoomControl', res, true);

    this._parseBool('scrollWheelZoom', res, false);

    const maxBounds = (_this$_config6 = this._config) === null || _this$_config6 === void 0 ? void 0 : _this$_config6.maxBounds;

    if (maxBounds !== undefined) {
      if (!Array.isArray(maxBounds) || maxBounds.length !== 4 || !maxBounds.every(v => typeof v === 'number' && Number.isFinite(v))) {
        this._onWarning(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.maxBoundsValueTypeWarningMessage', {
          defaultMessage: '{maxBoundsConfigName} must be an array with four numbers',
          values: {
            maxBoundsConfigName: 'config.kibana.maxBounds'
          }
        }));
      } else {
        res.maxBounds = maxBounds;
      }
    }

    return res;
  }

  _parseBool(paramName, dstObj, dflt) {
    const val = this._config ? this._config[paramName] : undefined;

    if (val === undefined) {
      dstObj[paramName] = dflt;
    } else if (typeof val !== 'boolean') {
      this._onWarning(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.someKibanaParamValueTypeWarningMessage', {
        defaultMessage: '{configName} must be a boolean value',
        values: {
          configName: `config.kibana.${paramName}`
        }
      }));

      dstObj[paramName] = dflt;
    } else {
      dstObj[paramName] = val;
    }
  }
  /**
   * Parse Vega schema element
   * @returns {object} isVegaLite, libVersion
   * @private
   */


  parseSchema(spec) {
    const schema = vega_schema_url_parser__WEBPACK_IMPORTED_MODULE_1___default()(spec.$schema);
    const isVegaLite = schema.library === 'chart-lite';
    const libVersion = isVegaLite ? vega_lite__WEBPACK_IMPORTED_MODULE_8__["version"] : vega__WEBPACK_IMPORTED_MODULE_7__["version"];

    if (compare_versions__WEBPACK_IMPORTED_MODULE_2___default()(schema.version, libVersion) > 0) {
      this._onWarning(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.notValidLibraryVersionForInputSpecWarningMessage', {
        defaultMessage: 'The input spec uses {schemaLibrary} {schemaVersion}, but current version of {schemaLibrary} is {libraryVersion}.',
        values: {
          schemaLibrary: schema.library,
          schemaVersion: schema.version,
          libraryVersion: libVersion
        }
      }));
    }

    return {
      isVegaLite,
      libVersion
    };
  }
  /**
   * Replace all instances of ES requests with raw values.
   * Also handle any other type of url: {type: xxx, ...}
   * @private
   */


  async _resolveDataUrls() {
    if (!this._urlParsers) {
      const serviceSettings = await this.getServiceSettings();

      const onWarn = this._onWarning.bind(this);

      this._urlParsers = {
        elasticsearch: new _es_query_parser__WEBPACK_IMPORTED_MODULE_9__["EsQueryParser"](this.timeCache, this.searchAPI, this.filters, onWarn),
        emsfile: new _ems_file_parser__WEBPACK_IMPORTED_MODULE_11__["EmsFileParser"](serviceSettings),
        url: new _url_parser__WEBPACK_IMPORTED_MODULE_12__["UrlParser"](onWarn)
      };
    }

    const pending = {};
    this.searchAPI.resetSearchStats();

    this._findObjectDataUrls(this.spec, obj => {
      const url = obj.url;
      delete obj.url;
      let type = url['%type%'];
      delete url['%type%'];

      if (type === undefined) {
        type = DEFAULT_PARSER;
      }

      const parser = this._urlParsers[type];

      if (parser === undefined) {
        throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.notSupportedUrlTypeErrorMessage', {
          defaultMessage: '{urlObject} is not supported',
          values: {
            urlObject: 'url: {"%type%": "${type}"}'
          }
        }));
      }

      let pendingArr = pending[type];

      if (pendingArr === undefined) {
        pending[type] = pendingArr = [];
      }

      pendingArr.push(parser.parseUrl(obj, url));
    });

    const pendingParsers = Object.keys(pending);

    if (pendingParsers.length > 0) {
      // let each parser populate its data in parallel
      await Promise.all(pendingParsers.map(type => this._urlParsers[type].populateData(pending[type])));
    }
  }
  /**
   * Recursively find and callback every instance of the data.url as an object
   * @param {*} obj current location in the object tree
   * @param {function({object})} onFind Call this function for all url objects
   * @param {string} [key] field name of the current object
   * @private
   */


  _findObjectDataUrls(obj, onFind, key) {
    if (Array.isArray(obj)) {
      for (const elem of obj) {
        this._findObjectDataUrls(elem, onFind, key);
      }
    } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(obj)) {
      if (key === 'data' && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(obj.url)) {
        // Assume that any  "data": {"url": {...}}  is a request for data
        if (obj.values !== undefined || obj.source !== undefined) {
          throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeChart.chartParser.dataExceedsSomeParamsUseTimesLimitErrorMessage', {
            defaultMessage: 'Data must not have more than one of {urlParam}, {valuesParam}, and {sourceParam}',
            values: {
              urlParam: '"url"',
              valuesParam: '"values"',
              sourceParam: '"source"'
            }
          }));
        }

        onFind(obj);
      } else {
        for (const k of Object.keys(obj)) {
          this._findObjectDataUrls(obj[k], onFind, k);
        }
      }
    }
  }
  /**
   * Inject default colors into the spec.config
   * @private
   */


  _setDefaultColors() {
    // Default category coloring to the Elastic color scheme
    this._setDefaultValue({
      scheme: 'elastic'
    }, 'config', 'range', 'category');

    if (this.isVegaLite) {
      // Vega-Lite: set default color, works for fill and strike --  config: { mark:  { color: '#54B399' }}
      this._setDefaultValue(defaultColor, 'config', 'mark', 'color');
    } else {
      var _this$spec;

      // Vega - global mark has very strange behavior, must customize each mark type individually
      // https://github.com/chart/chart/issues/1083
      // Don't set defaults if spec.config.mark.color or fill are set
      if (!((_this$spec = this.spec) !== null && _this$spec !== void 0 && _this$spec.config.mark) || this.spec.config.mark.color === undefined && this.spec.config.mark.fill === undefined) {
        this._setDefaultValue(defaultColor, 'config', 'arc', 'fill');

        this._setDefaultValue(defaultColor, 'config', 'area', 'fill');

        this._setDefaultValue(defaultColor, 'config', 'line', 'stroke');

        this._setDefaultValue(defaultColor, 'config', 'path', 'stroke');

        this._setDefaultValue(defaultColor, 'config', 'rect', 'fill');

        this._setDefaultValue(defaultColor, 'config', 'rule', 'stroke');

        this._setDefaultValue(defaultColor, 'config', 'shape', 'stroke');

        this._setDefaultValue(defaultColor, 'config', 'symbol', 'fill');

        this._setDefaultValue(defaultColor, 'config', 'trail', 'fill');
      }
    } // provide right colors for light and dark themes


    this._setDefaultValue(_kbn_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].euiColorDarkestShade, 'config', 'title', 'color');

    this._setDefaultValue(_kbn_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].euiColorDarkShade, 'config', 'style', 'guide-label', 'fill');

    this._setDefaultValue(_kbn_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].euiColorDarkestShade, 'config', 'style', 'guide-title', 'fill');

    this._setDefaultValue(_kbn_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].euiColorDarkestShade, 'config', 'style', 'group-title', 'fill');

    this._setDefaultValue(_kbn_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].euiColorDarkestShade, 'config', 'style', 'group-subtitle', 'fill');

    this._setDefaultValue(_kbn_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].euiColorChartLines, 'config', 'axis', 'tickColor');

    this._setDefaultValue(_kbn_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].euiColorChartLines, 'config', 'axis', 'domainColor');

    this._setDefaultValue(_kbn_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].euiColorChartLines, 'config', 'axis', 'gridColor');

    this._setDefaultValue('transparent', 'config', 'background');
  }
  /**
   * Set default value if it doesn't exist.
   * Given an object, and an array of fields, ensure that obj.fld1.fld2. ... .fldN is set to value if it doesn't exist.
   * @param {*} value
   * @param {string} fields
   * @private
   */


  _setDefaultValue(value, ...fields) {
    let o = this.spec;

    for (let i = 0; i < fields.length - 1; i++) {
      const field = fields[i];
      const subObj = o[field];

      if (subObj === undefined) {
        o[field] = {};
      } else if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(subObj)) {
        return;
      }

      o = o[field];
    }

    const lastField = fields[fields.length - 1];

    if (o[lastField] === undefined) {
      o[lastField] = value;
    }
  }
  /**
   * Add a warning to the warnings array
   * @private
   */


  _onWarning(...args) {
    if (!this.hideWarnings) {
      this.warnings.push(_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].formatWarningToStr(args));
      return _utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].formatWarningToStr(args);
    }
  }

}

/***/ }),

/***/ "./public/data_model/ems_file_parser.ts":
/*!**********************************************!*\
  !*** ./public/data_model/ems_file_parser.ts ***!
  \**********************************************/
/*! exports provided: EmsFileParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmsFileParser", function() { return EmsFileParser; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chart_view_chart_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart_view/chart_view */ "./public/chart_view/chart_view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
 // @ts-ignore



/**
 * This class processes all Chart spec customizations,
 * converting url object parameters into query results.
 */
class EmsFileParser {
  constructor(serviceSettings) {
    _defineProperty(this, "_serviceSettings", void 0);

    _defineProperty(this, "_fileLayersP", void 0);

    this._serviceSettings = serviceSettings;
  } // noinspection JSMethodCanBeStatic

  /**
   * Update request object, expanding any context-aware keywords
   */


  parseUrl(obj, url) {
    if (typeof url.name !== 'string') {
      throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeChart.emsFileParser.missingNameOfFileErrorMessage', {
        defaultMessage: '{dataUrlParam} with {dataUrlParamValue} requires {nameParam} parameter (name of the file)',
        values: {
          dataUrlParam: '"data.url"',
          dataUrlParamValue: '{"%type%": "emsfile"}',
          nameParam: '"name"'
        }
      }));
    } // Optimization: so initiate remote request as early as we know that we will need it


    if (!this._fileLayersP) {
      this._fileLayersP = this._serviceSettings.getFileLayers();
    }

    return {
      obj,
      name: url.name
    };
  }
  /**
   * Process items generated by parseUrl()
   * @param {object[]} requests each object is generated by parseUrl()
   * @returns {Promise<void>}
   */


  async populateData(requests) {
    if (requests.length === 0) return;
    const layers = await this._fileLayersP;

    for (const {
      obj,
      name
    } of requests) {
      const foundLayer = layers === null || layers === void 0 ? void 0 : layers.find(v => v.name === name);

      if (!foundLayer) {
        throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeChart.emsFileParser.emsFileNameDoesNotExistErrorMessage', {
          defaultMessage: '{emsfile} {emsfileName} does not exist',
          values: {
            emsfileName: JSON.stringify(name),
            emsfile: 'emsfile'
          }
        }));
      } // This URL can bypass loader sanitization at the later stage


      const url = await this._serviceSettings.getUrlForRegionLayer(foundLayer);
      obj.url = Object(_chart_view_chart_view__WEBPACK_IMPORTED_MODULE_1__["bypassExternalUrlCheck"])(url);
    }
  }

}

/***/ }),

/***/ "./public/data_model/es_query_parser.ts":
/*!**********************************************!*\
  !*** ./public/data_model/es_query_parser.ts ***!
  \**********************************************/
/*! exports provided: EsQueryParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsQueryParser", function() { return EsQueryParser; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



const TIMEFILTER = '%timefilter%';
const AUTOINTERVAL = '%autointerval%';
const MUST_CLAUSE = '%dashboard_context-must_clause%';
const MUST_NOT_CLAUSE = '%dashboard_context-must_not_clause%';
const FILTER_CLAUSE = '%dashboard_context-filter_clause%'; // These values may appear in the  'url': { ... }  object

const LEGACY_CONTEXT = '%context_query%';
const CONTEXT = '%context%';
const TIMEFIELD = '%timefield%';

const getRequestName = (request, index) => request.dataObject.name || _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.esQueryParser.unnamedRequest', {
  defaultMessage: 'Unnamed request #{index}',
  values: {
    index
  }
});
/**
 * This class parses ES requests specified in the data.url objects.
 */


class EsQueryParser {
  constructor(timeCache, searchAPI, filters, onWarning) {
    _defineProperty(this, "_timeCache", void 0);

    _defineProperty(this, "_searchAPI", void 0);

    _defineProperty(this, "_filters", void 0);

    _defineProperty(this, "_onWarning", void 0);

    this._timeCache = timeCache;
    this._searchAPI = searchAPI;
    this._filters = filters;
    this._onWarning = onWarning;
  } // noinspection JSMethodCanBeStatic

  /**
   * Update request object, expanding any context-aware keywords
   */


  parseUrl(dataObject, url) {
    let body = url.body;
    let context = url[CONTEXT];
    delete url[CONTEXT];
    let timefield = url[TIMEFIELD];
    delete url[TIMEFIELD];
    let usesContext = context !== undefined || timefield !== undefined;

    if (body === undefined) {
      url.body = body = {};
    } else if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(body)) {
      throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.esQueryParser.urlBodyValueTypeErrorMessage', {
        defaultMessage: '{configName} must be an object',
        values: {
          configName: 'url.body'
        }
      }));
    } // Migrate legacy %context_query% into context & timefield values


    const legacyContext = url[LEGACY_CONTEXT];
    delete url[LEGACY_CONTEXT];

    if (legacyContext !== undefined) {
      if (body.query !== undefined) {
        throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.esQueryParser.dataUrlMustNotHaveLegacyAndBodyQueryValuesAtTheSameTimeErrorMessage', {
          defaultMessage: '{dataUrlParam} must not have legacy {legacyContext} and {bodyQueryConfigName} values at the same time',
          values: {
            legacyContext: `"${LEGACY_CONTEXT}"`,
            bodyQueryConfigName: '"body.query"',
            dataUrlParam: '"data.url"'
          }
        }));
      } else if (usesContext) {
        throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.esQueryParser.dataUrlMustNotHaveLegacyContextTogetherWithContextOrTimefieldErrorMessage', {
          defaultMessage: '{dataUrlParam} must not have {legacyContext} together with {context} or {timefield}',
          values: {
            legacyContext: `"${LEGACY_CONTEXT}"`,
            context: `"${CONTEXT}"`,
            timefield: `"${TIMEFIELD}"`,
            dataUrlParam: '"data.url"'
          }
        }));
      } else if (legacyContext !== true && (typeof legacyContext !== 'string' || legacyContext.length === 0)) {
        throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.esQueryParser.legacyContextCanBeTrueErrorMessage', {
          defaultMessage: 'Legacy {legacyContext} can either be {trueValue} (ignores time range picker), or it can be the name of the time field, e.g. {timestampParam}',
          values: {
            legacyContext: `"${LEGACY_CONTEXT}"`,
            trueValue: 'true',
            timestampParam: '"@timestamp"'
          }
        }));
      }

      usesContext = true;
      context = true;
      let result = `"url": {"${CONTEXT}": true`;

      if (typeof legacyContext === 'string') {
        timefield = legacyContext;
        result += `, "${TIMEFIELD}": ${JSON.stringify(timefield)}`;
      }

      result += '}';

      this._onWarning(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.esQueryParser.legacyUrlShouldChangeToWarningMessage', {
        defaultMessage: 'Legacy {urlParam}: {legacyUrl} should change to {result}',
        values: {
          legacyUrl: `"${LEGACY_CONTEXT}": ${JSON.stringify(legacyContext)}`,
          result,
          urlParam: '"url"'
        }
      }));
    }

    if (body.query !== undefined) {
      if (usesContext) {
        throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.esQueryParser.urlContextAndUrlTimefieldMustNotBeUsedErrorMessage', {
          defaultMessage: '{urlContext} and {timefield} must not be used when {queryParam} is set',
          values: {
            timefield: `url.${TIMEFIELD}`,
            urlContext: `url.${CONTEXT}`,
            queryParam: 'url.body.query'
          }
        }));
      }

      this._injectContextVars(body.query, true);
    } else if (usesContext) {
      if (timefield) {
        // Inject range filter based on the timefilter values
        body.query = {
          range: {
            [timefield]: this._createRangeFilter({
              [TIMEFILTER]: true
            })
          }
        };
      }

      if (context) {
        // Use dashboard context
        const newQuery = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._filters);

        if (timefield) {
          newQuery.bool.must.push(body.query);
        }

        body.query = newQuery;
      }
    }

    this._injectContextVars(body.aggs, false);

    return {
      dataObject,
      url
    };
  }
  /**
   * Process items generated by parseUrl()
   * @param {object[]} requests each object is generated by parseUrl()
   * @returns {Promise<void>}
   */


  async populateData(requests) {
    const esSearches = requests.map((r, index) => ({ ...r.url,
      name: getRequestName(r, index)
    }));

    const data$ = this._searchAPI.search(esSearches);

    const results = await data$.toPromise();
    results.forEach((data, index) => {
      const requestObject = requests.find(item => getRequestName(item, index) === data.name);

      if (requestObject) {
        requestObject.dataObject.url = requestObject.url;
        requestObject.dataObject.values = data.rawResponse;
      }
    });
  }
  /**
   * Modify ES request by processing magic keywords
   * @param {*} obj
   * @param {boolean} isQuery - if true, the `obj` belongs to the req's query portion
   */


  _injectContextVars(obj, isQuery) {
    if (obj && typeof obj === 'object') {
      if (Array.isArray(obj)) {
        // For arrays, replace MUST_CLAUSE and MUST_NOT_CLAUSE string elements
        for (let pos = 0; pos < obj.length;) {
          const item = obj[pos];

          if (isQuery && (item === FILTER_CLAUSE || item === MUST_CLAUSE || item === MUST_NOT_CLAUSE)) {
            let ctxTag = '';

            switch (item) {
              case FILTER_CLAUSE:
                ctxTag = 'filter';
                break;

              case MUST_CLAUSE:
                ctxTag = 'must';
                break;

              case MUST_NOT_CLAUSE:
                ctxTag = 'must_not';
                break;
            }

            const ctx = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._filters);

            if (ctx && ctx.bool && ctx.bool[ctxTag]) {
              if (Array.isArray(ctx.bool[ctxTag])) {
                // replace one value with an array of values
                obj.splice(pos, 1, ...ctx.bool[ctxTag]);
                pos += ctx.bool[ctxTag].length;
              } else {
                obj[pos++] = ctx.bool[ctxTag];
              }
            } else {
              obj.splice(pos, 1); // remove item, keep pos at the same position
            }
          } else {
            this._injectContextVars(item, isQuery);

            pos++;
          }
        }
      } else {
        for (const prop of Object.keys(obj)) {
          const subObj = obj[prop];
          if (!subObj || typeof obj !== 'object') continue; // replace "interval": { "%autointerval%": true|integer } with
          // auto-generated range based on the timepicker

          if (prop === 'interval' && subObj[AUTOINTERVAL]) {
            let size = subObj[AUTOINTERVAL];

            if (size === true) {
              size = 50; // by default, try to get ~80 values
            } else if (typeof size !== 'number') {
              throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.esQueryParser.autointervalValueTypeErrorMessage', {
                defaultMessage: '{autointerval} must be either {trueValue} or a number',
                values: {
                  autointerval: `"${AUTOINTERVAL}"`,
                  trueValue: 'true'
                }
              }));
            }

            const bounds = this._timeCache.getTimeBounds();

            obj.interval = EsQueryParser._roundInterval((bounds.max - bounds.min) / size);
            continue;
          } // handle %timefilter%


          switch (subObj[TIMEFILTER]) {
            case 'min':
            case 'max':
              // Replace {"%timefilter%": "min|max", ...} object with a timestamp
              obj[prop] = this._getTimeBound(subObj, subObj[TIMEFILTER]);
              continue;

            case true:
              // Replace {"%timefilter%": true, ...} object with the "range" object
              this._createRangeFilter(subObj);

              continue;

            case undefined:
              this._injectContextVars(subObj, isQuery);

              continue;

            default:
              throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.esQueryParser.timefilterValueErrorMessage', {
                defaultMessage: '{timefilter} property must be set to {trueValue}, {minValue}, or {maxValue}',
                values: {
                  timefilter: `"${TIMEFILTER}"`,
                  trueValue: 'true',
                  minValue: '"min"',
                  maxValue: '"max"'
                }
              }));
          }
        }
      }
    }
  }
  /**
   * replaces given object that contains `%timefilter%` key with the timefilter bounds and optional shift & unit parameters
   * @param {object} obj
   * @return {object}
   */


  _createRangeFilter(obj) {
    obj.gte = moment__WEBPACK_IMPORTED_MODULE_0___default()(this._getTimeBound(obj, 'min')).toISOString();
    obj.lte = moment__WEBPACK_IMPORTED_MODULE_0___default()(this._getTimeBound(obj, 'max')).toISOString();
    obj.format = 'strict_date_optional_time';
    delete obj[TIMEFILTER];
    delete obj.shift;
    delete obj.unit;
    return obj;
  }
  /**
   *
   * @param {object} opts
   * @param {number} [opts.shift]
   * @param {string} [opts.unit]
   * @param {'min'|'max'} type
   * @returns {*}
   */


  _getTimeBound(opts, type) {
    var _bounds$type;

    const bounds = this._timeCache.getTimeBounds();

    let result = ((_bounds$type = bounds[type]) === null || _bounds$type === void 0 ? void 0 : _bounds$type.valueOf()) || 0;

    if (opts.shift) {
      const shift = opts.shift;

      if (typeof shift !== 'number') {
        throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.esQueryParser.shiftMustValueTypeErrorMessage', {
          defaultMessage: '{shiftParam} must be a numeric value',
          values: {
            shiftParam: '"shift"'
          }
        }));
      }

      let multiplier;

      switch (opts.unit || 'd') {
        case 'w':
        case 'week':
          multiplier = 1000 * 60 * 60 * 24 * 7;
          break;

        case 'd':
        case 'day':
          multiplier = 1000 * 60 * 60 * 24;
          break;

        case 'h':
        case 'hour':
          multiplier = 1000 * 60 * 60;
          break;

        case 'm':
        case 'minute':
          multiplier = 1000 * 60;
          break;

        case 's':
        case 'second':
          multiplier = 1000;
          break;

        default:
          throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.esQueryParser.unknownUnitValueErrorMessage', {
            defaultMessage: 'Unknown {unitParamName} value. Must be one of: [{unitParamValues}]',
            values: {
              unitParamName: '"unit"',
              unitParamValues: '"week", "day", "hour", "minute", "second"'
            }
          }));
      }

      result += shift * multiplier;
    }

    return result;
  }
  /**
   * Adapted from src/legacy/core_plugins/timelion/common/lib/calculate_interval.js
   * @param interval (ms)
   * @returns {string}
   */


  static _roundInterval(interval) {
    switch (true) {
      case interval <= 500:
        // <= 0.5s
        return '100ms';

      case interval <= 5000:
        // <= 5s
        return '1s';

      case interval <= 7500:
        // <= 7.5s
        return '5s';

      case interval <= 15000:
        // <= 15s
        return '10s';

      case interval <= 45000:
        // <= 45s
        return '30s';

      case interval <= 180000:
        // <= 3m
        return '1m';

      case interval <= 450000:
        // <= 9m
        return '5m';

      case interval <= 1200000:
        // <= 20m
        return '10m';

      case interval <= 2700000:
        // <= 45m
        return '30m';

      case interval <= 7200000:
        // <= 2h
        return '1h';

      case interval <= 21600000:
        // <= 6h
        return '3h';

      case interval <= 86400000:
        // <= 24h
        return '12h';

      case interval <= 604800000:
        // <= 1w
        return '24h';

      case interval <= 1814400000:
        // <= 3w
        return '1w';

      case interval < 3628800000:
        // <  2y
        return '30d';

      default:
        return '1y';
    }
  }

}

/***/ }),

/***/ "./public/data_model/url_parser.ts":
/*!*****************************************!*\
  !*** ./public/data_model/url_parser.ts ***!
  \*****************************************/
/*! exports provided: UrlParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlParser", function() { return UrlParser; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



/**
 * This class processes all Vega spec customizations,
 * converting url object parameters into query results.
 */
class UrlParser {
  constructor(onWarning) {
    _defineProperty(this, "_onWarning", void 0);

    this._onWarning = onWarning;
  } // noinspection JSMethodCanBeStatic

  /**
   * Update request object
   */


  parseUrl(obj, urlObj) {
    let url = urlObj.url;

    if (!url) {
      throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVega.urlParser.dataUrlRequiresUrlParameterInFormErrorMessage', {
        defaultMessage: '{dataUrlParam} requires a {urlParam} parameter in a form "{formLink}"',
        values: {
          dataUrlParam: '"data.url"',
          urlParam: '"url"',
          formLink: 'https://example.org/path/subpath'
        }
      }));
    }

    const query = urlObj.query;

    if (!query) {
      this._onWarning(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVega.urlParser.urlShouldHaveQuerySubObjectWarningMessage', {
        defaultMessage: 'Using a {urlObject} should have a {subObjectName} sub-object',
        values: {
          urlObject: '"url": {"%type%": "url", "url": ...}',
          subObjectName: '"query"'
        }
      }));
    } else {
      url += (url.includes('?') ? '&' : '?') + jquery__WEBPACK_IMPORTED_MODULE_0___default.a.param(query);
    }

    obj.url = url;
  }
  /**
   * No-op - the url is already set during the parseUrl
   */


  populateData() {}

}

/***/ })

}]);
//# sourceMappingURL=visTypeChart.chunk.6.js.map