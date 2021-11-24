(window["visTypeChart_bundle_jsonpfunction"] = window["visTypeChart_bundle_jsonpfunction"] || []).push([[4],{

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/chart_vis.scss?v8dark":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/components/chart_vis.scss?v8dark ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.vgaVis__wrapper {\n  scrollbar-color: rgba(152, 162, 179, 0.5) transparent;\n  scrollbar-width: thin;\n  display: flex;\n  flex: 1 1 0;\n  overflow: auto; }\n  .vgaVis__wrapper::-webkit-scrollbar {\n    width: 16px;\n    height: 16px; }\n  .vgaVis__wrapper::-webkit-scrollbar-thumb {\n    background-color: rgba(152, 162, 179, 0.5);\n    background-clip: content-box;\n    border-radius: 16px;\n    border: 6px solid transparent; }\n  .vgaVis__wrapper::-webkit-scrollbar-corner, .vgaVis__wrapper::-webkit-scrollbar-track {\n    background-color: transparent; }\n\n.vgaVis {\n  display: flex;\n  flex: 1 1 100%;\n  position: relative; }\n\n.vgaVis__view {\n  z-index: 0;\n  flex: 1 1 100%;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  width: 100%;\n  height: 100%; }\n  .vgaVis__view .vega-bindings {\n    display: none !important; }\n\n.vgaVis__controls {\n  font-size: 14px;\n  font-size: 1rem;\n  line-height: 1.71429rem;\n  display: flex; }\n  .vgaVis__controls:not(:empty) {\n    padding: 8px 0; }\n  .vgaVis__controls.vgaVis__controls--column {\n    flex-direction: column; }\n  .vgaVis__controls.vgaVis__controls--row {\n    flex-direction: row; }\n    .vgaVis__controls.vgaVis__controls--row > .vega-bind {\n      flex-grow: 1; }\n  .vgaVis__controls > .vega-bind .vega-bind-name {\n    display: inline-block;\n    width: 104px; }\n  .vgaVis__controls > .vega-bind input[type='range'] {\n    width: 120px;\n    display: inline-block;\n    vertical-align: middle; }\n  .vgaVis__controls > .vega-bind label {\n    margin: 0 0 0 8px; }\n  .vgaVis__controls > .vega-bind select {\n    max-width: 160px; }\n  .vgaVis__controls > .vega-bind .vega-bind-radio label {\n    margin: 0 8px 0 4px; }\n\n.vgaVis__messages {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  margin: auto;\n  opacity: .8;\n  z-index: 1;\n  list-style: none; }\n\n.vgaVis__message {\n  margin: 8px; }\n  .vgaVis__message .vgaVis__messageCode {\n    white-space: pre-wrap;\n    padding: 8px; }\n\n.vgaVis__message--warn .vgaVis__messageCode {\n  background-color: #493f22;\n  color: #F3D371; }\n\n.vgaVis__message--err .vgaVis__messageCode {\n  background-color: #4a201e;\n  color: #F86B63; }\n\n.vgaVis__tooltip {\n  max-width: 100%;\n  position: fixed; }\n  .vgaVis__tooltip h2 {\n    margin-bottom: 8px; }\n  .vgaVis__tooltip--textTruncate td {\n    max-width: 100%;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    word-wrap: normal !important; }\n  .vgaVis__tooltip td {\n    padding-top: 4px;\n    padding-bottom: 4px; }\n    .vgaVis__tooltip td.key {\n      max-width: 160px;\n      color: #535966;\n      text-align: right;\n      padding-right: 4px; }\n    .vgaVis__tooltip td.value {\n      max-width: 240px;\n      text-align: left; }\n  @media only screen and (max-width: 768px) {\n    .vgaVis__tooltip td.key {\n      max-width: 96px; }\n    .vgaVis__tooltip td.value {\n      max-width: 160px; } }\n", "",{"version":3,"sources":["chart_vis.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,qDAAqD;EACrD,qBAAqB;EACrB,aAAa;EACb,WAAW;EACX,cAAc,EAAE;EAChB;IACE,WAAW;IACX,YAAY,EAAE;EAChB;IACE,0CAA0C;IAC1C,4BAA4B;IAC5B,mBAAmB;IACnB,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;;AAEnC;EACE,aAAa;EACb,cAAc;EACd,kBAAkB,EAAE;;AAEtB;EACE,UAAU;EACV,cAAc;EACd,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,YAAY,EAAE;EACd;IACE,wBAAwB,EAAE;;AAE9B;EACE,eAAe;EACf,eAAe;EACf,uBAAuB;EACvB,aAAa,EAAE;EACf;IACE,cAAc,EAAE;EAClB;IACE,sBAAsB,EAAE;EAC1B;IACE,mBAAmB,EAAE;IACrB;MACE,YAAY,EAAE;EAClB;IACE,qBAAqB;IACrB,YAAY,EAAE;EAChB;IACE,YAAY;IACZ,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,iBAAiB,EAAE;EACrB;IACE,gBAAgB,EAAE;EACpB;IACE,mBAAmB,EAAE;;AAEzB;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,YAAY;EACZ,WAAW;EACX,UAAU;EACV,gBAAgB,EAAE;;AAEpB;EACE,WAAW,EAAE;EACb;IACE,qBAAqB;IACrB,YAAY,EAAE;;AAElB;EACE,yBAAyB;EACzB,cAAc,EAAE;;AAElB;EACE,yBAAyB;EACzB,cAAc,EAAE;;AAElB;EACE,eAAe;EACf,eAAe,EAAE;EACjB;IACE,kBAAkB,EAAE;EACtB;IACE,eAAe;IACf,2BAA2B;IAC3B,kCAAkC;IAClC,8BAA8B;IAC9B,4BAA4B,EAAE;EAChC;IACE,gBAAgB;IAChB,mBAAmB,EAAE;IACrB;MACE,gBAAgB;MAChB,cAAc;MACd,iBAAiB;MACjB,kBAAkB,EAAE;IACtB;MACE,gBAAgB;MAChB,gBAAgB,EAAE;EACtB;IACE;MACE,eAAe,EAAE;IACnB;MACE,gBAAgB,EAAE,EAAE","file":"chart_vis.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.vgaVis__wrapper {\n  scrollbar-color: rgba(152, 162, 179, 0.5) transparent;\n  scrollbar-width: thin;\n  display: flex;\n  flex: 1 1 0;\n  overflow: auto; }\n  .vgaVis__wrapper::-webkit-scrollbar {\n    width: 16px;\n    height: 16px; }\n  .vgaVis__wrapper::-webkit-scrollbar-thumb {\n    background-color: rgba(152, 162, 179, 0.5);\n    background-clip: content-box;\n    border-radius: 16px;\n    border: 6px solid transparent; }\n  .vgaVis__wrapper::-webkit-scrollbar-corner, .vgaVis__wrapper::-webkit-scrollbar-track {\n    background-color: transparent; }\n\n.vgaVis {\n  display: flex;\n  flex: 1 1 100%;\n  position: relative; }\n\n.vgaVis__view {\n  z-index: 0;\n  flex: 1 1 100%;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  width: 100%;\n  height: 100%; }\n  .vgaVis__view .vega-bindings {\n    display: none !important; }\n\n.vgaVis__controls {\n  font-size: 14px;\n  font-size: 1rem;\n  line-height: 1.71429rem;\n  display: flex; }\n  .vgaVis__controls:not(:empty) {\n    padding: 8px 0; }\n  .vgaVis__controls.vgaVis__controls--column {\n    flex-direction: column; }\n  .vgaVis__controls.vgaVis__controls--row {\n    flex-direction: row; }\n    .vgaVis__controls.vgaVis__controls--row > .vega-bind {\n      flex-grow: 1; }\n  .vgaVis__controls > .vega-bind .vega-bind-name {\n    display: inline-block;\n    width: 104px; }\n  .vgaVis__controls > .vega-bind input[type='range'] {\n    width: 120px;\n    display: inline-block;\n    vertical-align: middle; }\n  .vgaVis__controls > .vega-bind label {\n    margin: 0 0 0 8px; }\n  .vgaVis__controls > .vega-bind select {\n    max-width: 160px; }\n  .vgaVis__controls > .vega-bind .vega-bind-radio label {\n    margin: 0 8px 0 4px; }\n\n.vgaVis__messages {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  margin: auto;\n  opacity: .8;\n  z-index: 1;\n  list-style: none; }\n\n.vgaVis__message {\n  margin: 8px; }\n  .vgaVis__message .vgaVis__messageCode {\n    white-space: pre-wrap;\n    padding: 8px; }\n\n.vgaVis__message--warn .vgaVis__messageCode {\n  background-color: #493f22;\n  color: #F3D371; }\n\n.vgaVis__message--err .vgaVis__messageCode {\n  background-color: #4a201e;\n  color: #F86B63; }\n\n.vgaVis__tooltip {\n  max-width: 100%;\n  position: fixed; }\n  .vgaVis__tooltip h2 {\n    margin-bottom: 8px; }\n  .vgaVis__tooltip--textTruncate td {\n    max-width: 100%;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    word-wrap: normal !important; }\n  .vgaVis__tooltip td {\n    padding-top: 4px;\n    padding-bottom: 4px; }\n    .vgaVis__tooltip td.key {\n      max-width: 160px;\n      color: #535966;\n      text-align: right;\n      padding-right: 4px; }\n    .vgaVis__tooltip td.value {\n      max-width: 240px;\n      text-align: left; }\n  @media only screen and (max-width: 768px) {\n    .vgaVis__tooltip td.key {\n      max-width: 96px; }\n    .vgaVis__tooltip td.value {\n      max-width: 160px; } }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/chart_vis.scss?v8light":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/components/chart_vis.scss?v8light ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.vgaVis__wrapper {\n  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;\n  scrollbar-width: thin;\n  display: flex;\n  flex: 1 1 0;\n  overflow: auto; }\n  .vgaVis__wrapper::-webkit-scrollbar {\n    width: 16px;\n    height: 16px; }\n  .vgaVis__wrapper::-webkit-scrollbar-thumb {\n    background-color: rgba(105, 112, 125, 0.5);\n    background-clip: content-box;\n    border-radius: 16px;\n    border: 6px solid transparent; }\n  .vgaVis__wrapper::-webkit-scrollbar-corner, .vgaVis__wrapper::-webkit-scrollbar-track {\n    background-color: transparent; }\n\n.vgaVis {\n  display: flex;\n  flex: 1 1 100%;\n  position: relative; }\n\n.vgaVis__view {\n  z-index: 0;\n  flex: 1 1 100%;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  width: 100%;\n  height: 100%; }\n  .vgaVis__view .vega-bindings {\n    display: none !important; }\n\n.vgaVis__controls {\n  font-size: 14px;\n  font-size: 1rem;\n  line-height: 1.71429rem;\n  display: flex; }\n  .vgaVis__controls:not(:empty) {\n    padding: 8px 0; }\n  .vgaVis__controls.vgaVis__controls--column {\n    flex-direction: column; }\n  .vgaVis__controls.vgaVis__controls--row {\n    flex-direction: row; }\n    .vgaVis__controls.vgaVis__controls--row > .vega-bind {\n      flex-grow: 1; }\n  .vgaVis__controls > .vega-bind .vega-bind-name {\n    display: inline-block;\n    width: 104px; }\n  .vgaVis__controls > .vega-bind input[type='range'] {\n    width: 120px;\n    display: inline-block;\n    vertical-align: middle; }\n  .vgaVis__controls > .vega-bind label {\n    margin: 0 0 0 8px; }\n  .vgaVis__controls > .vega-bind select {\n    max-width: 160px; }\n  .vgaVis__controls > .vega-bind .vega-bind-radio label {\n    margin: 0 8px 0 4px; }\n\n.vgaVis__messages {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  margin: auto;\n  opacity: .8;\n  z-index: 1;\n  list-style: none; }\n\n.vgaVis__message {\n  margin: 8px; }\n  .vgaVis__message .vgaVis__messageCode {\n    white-space: pre-wrap;\n    padding: 8px; }\n\n.vgaVis__message--warn .vgaVis__messageCode {\n  background-color: #fff9e8;\n  color: #8a6a0a; }\n\n.vgaVis__message--err .vgaVis__messageCode {\n  background-color: #f8e9e9;\n  color: #BD271E; }\n\n.vgaVis__tooltip {\n  max-width: 100%;\n  position: fixed; }\n  .vgaVis__tooltip h2 {\n    margin-bottom: 8px; }\n  .vgaVis__tooltip--textTruncate td {\n    max-width: 100%;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    word-wrap: normal !important; }\n  .vgaVis__tooltip td {\n    padding-top: 4px;\n    padding-bottom: 4px; }\n    .vgaVis__tooltip td.key {\n      max-width: 160px;\n      color: #98A2B3;\n      text-align: right;\n      padding-right: 4px; }\n    .vgaVis__tooltip td.value {\n      max-width: 240px;\n      text-align: left; }\n  @media only screen and (max-width: 768px) {\n    .vgaVis__tooltip td.key {\n      max-width: 96px; }\n    .vgaVis__tooltip td.value {\n      max-width: 160px; } }\n", "",{"version":3,"sources":["chart_vis.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,qDAAqD;EACrD,qBAAqB;EACrB,aAAa;EACb,WAAW;EACX,cAAc,EAAE;EAChB;IACE,WAAW;IACX,YAAY,EAAE;EAChB;IACE,0CAA0C;IAC1C,4BAA4B;IAC5B,mBAAmB;IACnB,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;;AAEnC;EACE,aAAa;EACb,cAAc;EACd,kBAAkB,EAAE;;AAEtB;EACE,UAAU;EACV,cAAc;EACd,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,YAAY,EAAE;EACd;IACE,wBAAwB,EAAE;;AAE9B;EACE,eAAe;EACf,eAAe;EACf,uBAAuB;EACvB,aAAa,EAAE;EACf;IACE,cAAc,EAAE;EAClB;IACE,sBAAsB,EAAE;EAC1B;IACE,mBAAmB,EAAE;IACrB;MACE,YAAY,EAAE;EAClB;IACE,qBAAqB;IACrB,YAAY,EAAE;EAChB;IACE,YAAY;IACZ,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,iBAAiB,EAAE;EACrB;IACE,gBAAgB,EAAE;EACpB;IACE,mBAAmB,EAAE;;AAEzB;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,YAAY;EACZ,WAAW;EACX,UAAU;EACV,gBAAgB,EAAE;;AAEpB;EACE,WAAW,EAAE;EACb;IACE,qBAAqB;IACrB,YAAY,EAAE;;AAElB;EACE,yBAAyB;EACzB,cAAc,EAAE;;AAElB;EACE,yBAAyB;EACzB,cAAc,EAAE;;AAElB;EACE,eAAe;EACf,eAAe,EAAE;EACjB;IACE,kBAAkB,EAAE;EACtB;IACE,eAAe;IACf,2BAA2B;IAC3B,kCAAkC;IAClC,8BAA8B;IAC9B,4BAA4B,EAAE;EAChC;IACE,gBAAgB;IAChB,mBAAmB,EAAE;IACrB;MACE,gBAAgB;MAChB,cAAc;MACd,iBAAiB;MACjB,kBAAkB,EAAE;IACtB;MACE,gBAAgB;MAChB,gBAAgB,EAAE;EACtB;IACE;MACE,eAAe,EAAE;IACnB;MACE,gBAAgB,EAAE,EAAE","file":"chart_vis.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.vgaVis__wrapper {\n  scrollbar-color: rgba(105, 112, 125, 0.5) transparent;\n  scrollbar-width: thin;\n  display: flex;\n  flex: 1 1 0;\n  overflow: auto; }\n  .vgaVis__wrapper::-webkit-scrollbar {\n    width: 16px;\n    height: 16px; }\n  .vgaVis__wrapper::-webkit-scrollbar-thumb {\n    background-color: rgba(105, 112, 125, 0.5);\n    background-clip: content-box;\n    border-radius: 16px;\n    border: 6px solid transparent; }\n  .vgaVis__wrapper::-webkit-scrollbar-corner, .vgaVis__wrapper::-webkit-scrollbar-track {\n    background-color: transparent; }\n\n.vgaVis {\n  display: flex;\n  flex: 1 1 100%;\n  position: relative; }\n\n.vgaVis__view {\n  z-index: 0;\n  flex: 1 1 100%;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  width: 100%;\n  height: 100%; }\n  .vgaVis__view .vega-bindings {\n    display: none !important; }\n\n.vgaVis__controls {\n  font-size: 14px;\n  font-size: 1rem;\n  line-height: 1.71429rem;\n  display: flex; }\n  .vgaVis__controls:not(:empty) {\n    padding: 8px 0; }\n  .vgaVis__controls.vgaVis__controls--column {\n    flex-direction: column; }\n  .vgaVis__controls.vgaVis__controls--row {\n    flex-direction: row; }\n    .vgaVis__controls.vgaVis__controls--row > .vega-bind {\n      flex-grow: 1; }\n  .vgaVis__controls > .vega-bind .vega-bind-name {\n    display: inline-block;\n    width: 104px; }\n  .vgaVis__controls > .vega-bind input[type='range'] {\n    width: 120px;\n    display: inline-block;\n    vertical-align: middle; }\n  .vgaVis__controls > .vega-bind label {\n    margin: 0 0 0 8px; }\n  .vgaVis__controls > .vega-bind select {\n    max-width: 160px; }\n  .vgaVis__controls > .vega-bind .vega-bind-radio label {\n    margin: 0 8px 0 4px; }\n\n.vgaVis__messages {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  margin: auto;\n  opacity: .8;\n  z-index: 1;\n  list-style: none; }\n\n.vgaVis__message {\n  margin: 8px; }\n  .vgaVis__message .vgaVis__messageCode {\n    white-space: pre-wrap;\n    padding: 8px; }\n\n.vgaVis__message--warn .vgaVis__messageCode {\n  background-color: #fff9e8;\n  color: #8a6a0a; }\n\n.vgaVis__message--err .vgaVis__messageCode {\n  background-color: #f8e9e9;\n  color: #BD271E; }\n\n.vgaVis__tooltip {\n  max-width: 100%;\n  position: fixed; }\n  .vgaVis__tooltip h2 {\n    margin-bottom: 8px; }\n  .vgaVis__tooltip--textTruncate td {\n    max-width: 100%;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    word-wrap: normal !important; }\n  .vgaVis__tooltip td {\n    padding-top: 4px;\n    padding-bottom: 4px; }\n    .vgaVis__tooltip td.key {\n      max-width: 160px;\n      color: #98A2B3;\n      text-align: right;\n      padding-right: 4px; }\n    .vgaVis__tooltip td.value {\n      max-width: 240px;\n      text-align: left; }\n  @media only screen and (max-width: 768px) {\n    .vgaVis__tooltip td.key {\n      max-width: 96px; }\n    .vgaVis__tooltip td.value {\n      max-width: 160px; } }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/*!***************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./public/chart_visualization.ts":
/*!***************************************!*\
  !*** ./public/chart_visualization.ts ***!
  \***************************************/
/*! exports provided: createChartVisualization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChartVisualization", function() { return createChartVisualization; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _lib_chart_state_restorer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/chart_state_restorer */ "./public/lib/chart_state_restorer.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



const createChartVisualization = ({
  getServiceSettings
}) => {
  var _temp;

  return _temp = class ChartVisualization {
    constructor(el, fireEvent) {
      this.el = el;
      this.fireEvent = fireEvent;

      _defineProperty(this, "dataPlugin", Object(_services__WEBPACK_IMPORTED_MODULE_1__["getData"])());

      _defineProperty(this, "chartView", null);

      _defineProperty(this, "chartStateRestorer", Object(_lib_chart_state_restorer__WEBPACK_IMPORTED_MODULE_2__["createChartStateRestorer"])({
        isActive: () => {
          var _this$chartView, _this$chartView$_pars;

          return Boolean((_this$chartView = this.chartView) === null || _this$chartView === void 0 ? void 0 : (_this$chartView$_pars = _this$chartView._parser) === null || _this$chartView$_pars === void 0 ? void 0 : _this$chartView$_pars.restoreSignalValuesOnRefresh);
        }
      }));
    }

    async render(visData) {
      const {
        toasts
      } = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getNotifications"])();

      if (!visData && !this.chartView) {
        toasts.addWarning(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeChart.visualization.unableToRenderWithoutDataWarningMessage', {
          defaultMessage: 'Unable to render without data'
        }));
        return;
      }

      try {
        await this._render(visData);
      } catch (error) {
        if (this.chartView) {
          this.chartView.onError(error);
        } else {}
      }
    }

    async _render(chartParser) {
      if (chartParser) {
        var _this$chartView2;

        // New data received, rebuild the graph
        if (this.chartView) {
          await this.chartView.destroy();
          this.chartView = null;
        }

        const serviceSettings = await getServiceSettings();
        const {
          filterManager
        } = this.dataPlugin.query;
        const {
          timefilter
        } = this.dataPlugin.query.timefilter;
        const chartViewParams = {
          parentEl: this.el,
          fireEvent: this.fireEvent,
          chartStateRestorer: this.chartStateRestorer,
          chartParser,
          serviceSettings,
          filterManager,
          timefilter
        };

        if (chartParser.useMap) {
          const {
            ChartMapView
          } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./chart_view/chart_map_view/view */ "./public/chart_view/chart_map_view/view.ts"));
          this.chartView = new ChartMapView(chartViewParams);
        } else {
          const {
            ChartView: ChartViewClass
          } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./chart_view/chart_view */ "./public/chart_view/chart_view.js"));
          this.chartView = new ChartViewClass(chartViewParams);
        }

        await ((_this$chartView2 = this.chartView) === null || _this$chartView2 === void 0 ? void 0 : _this$chartView2.init());
      }
    }

    destroy() {
      var _this$chartView3;

      this.chartStateRestorer.clear();
      (_this$chartView3 = this.chartView) === null || _this$chartView3 === void 0 ? void 0 : _this$chartView3.destroy();
    }

  }, _temp;
};

/***/ }),

/***/ "./public/components/chart_vis.scss":
/*!******************************************!*\
  !*** ./public/components/chart_vis.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [visTypeChart] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./chart_vis.scss?v8dark */ "./public/components/chart_vis.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [visTypeChart] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./chart_vis.scss?v8light */ "./public/components/chart_vis.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./chart_vis.scss?v8dark */ "./public/components/chart_vis.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./chart_vis.scss?v8light */ "./public/components/chart_vis.scss?v8light");
}

/***/ }),

/***/ "./public/components/chart_vis.scss?v8dark":
/*!*************************************************!*\
  !*** ./public/components/chart_vis.scss?v8dark ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./chart_vis.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/chart_vis.scss?v8dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/components/chart_vis.scss?v8light":
/*!**************************************************!*\
  !*** ./public/components/chart_vis.scss?v8light ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./chart_vis.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/chart_vis.scss?v8light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/components/chart_vis_component.tsx":
/*!***************************************************!*\
  !*** ./public/components/chart_vis_component.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartVisComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chart_visualization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart_visualization */ "./public/chart_visualization.ts");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chart_vis_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart_vis.scss */ "./public/components/chart_vis.scss");
/* harmony import */ var _chart_vis_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chart_vis_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






const ChartVisComponent = ({
  visData,
  fireEvent,
  renderComplete,
  deps
}) => {
  const chartDiv = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const visController = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (chartDiv.current) {
      const ChartVis = Object(_chart_visualization__WEBPACK_IMPORTED_MODULE_1__["createChartVisualization"])(deps);
      visController.current = new ChartVis(chartDiv.current, fireEvent);
    }

    return () => {
      var _visController$curren;

      (_visController$curren = visController.current) === null || _visController$curren === void 0 ? void 0 : _visController$curren.destroy();
      visController.current = null;
    };
  }, [deps, fireEvent]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (visController.current) {
      visController.current.render(visData).then(renderComplete);
    }
  }, [visData, renderComplete]);
  const updateChartSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["throttle"])(() => {
    if (visController.current) {
      visController.current.render(visData).then(renderComplete);
    }
  }, 300), [renderComplete, visData]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiResizeObserver"], {
    onResize: updateChartSize
  }, resizeRef => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "vgaVis__wrapper",
    ref: resizeRef
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", null, "Place charts here")));
}; // default export required for React.Lazy
// eslint-disable-next-line import/no-default-export




/***/ }),

/***/ "./public/lib/chart_state_restorer.ts":
/*!********************************************!*\
  !*** ./public/lib/chart_state_restorer.ts ***!
  \********************************************/
/*! exports provided: createChartStateRestorer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChartStateRestorer", function() { return createChartStateRestorer; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

const createChartStateRestorer = ({
  omitSignals = ['width', 'height', 'padding', 'autosize', 'background'],
  isActive = () => true
} = {}) => {
  let state;
  return {
    /**
     * Save Vega state
     * @public
     * @param newState - new state value
     */
    save: newState => {
      if (newState && isActive()) {
        state = {
          signals: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(newState.signals, omitSignals || []),
          data: newState.data
        };
      }
    },

    /**
     * Restore Vega state
     * @public
     * @param restoreData - by default, we only recover signals,
     *        but if the data also needs to be recovered, this option should be set to true
     */
    restore: (restoreData = false) => isActive() && state ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(state, restoreData ? undefined : 'data') : null,

    /**
     *  Clear saved Vega state
     *
     *  @public
     */
    clear: () => {
      state = null;
    }
  };
};

/***/ })

}]);
//# sourceMappingURL=visTypeChart.chunk.4.js.map