(window["visTypeNiitChart_bundle_jsonpfunction"] = window["visTypeNiitChart_bundle_jsonpfunction"] || []).push([[7],{

/***/ "./public/niit_chart_view/niit_chart_view.js":
/*!***************************************************!*\
  !*** ./public/niit_chart_view/niit_chart_view.js ***!
  \***************************************************/
/*! exports provided: NiitChartView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NiitChartView", function() { return NiitChartView; });
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega */ "../../../node_modules/vega/build/vega-node.js");
/* harmony import */ var vega__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vega__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _niit_chart_base_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./niit_chart_base_view */ "./public/niit_chart_view/niit_chart_base_view.js");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


class NiitChartView extends _niit_chart_base_view__WEBPACK_IMPORTED_MODULE_1__["NiitChartBaseView"] {
  async _initViewCustomizations() {
    // In some cases, NiitChart may be initialized twice... TBD
    if (!this._$container) return;
    const view = new vega__WEBPACK_IMPORTED_MODULE_0__["View"](Object(vega__WEBPACK_IMPORTED_MODULE_0__["parse"])(this._parser.spec, undefined, {
      ast: true
    }), this._niit_chartViewConfig);
    if (this._parser.useResize) this.updateNiitChartSize(view);
    view.initialize(this._$container.get(0), this._$controls.get(0));
    if (this._parser.useHover) view.hover();
    await this.setView(view);
    this.setDebugValues(view, this._parser.spec, this._parser.vlspec);
  }

}

/***/ })

}]);
//# sourceMappingURL=visTypeNiitChart.chunk.7.js.map