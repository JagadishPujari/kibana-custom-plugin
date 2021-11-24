(window["visTypeChart_bundle_jsonpfunction"] = window["visTypeChart_bundle_jsonpfunction"] || []).push([[5],{

/***/ "../../../node_modules/brace/mode/hjson.js":
/*!****************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/brace/mode/hjson.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

ace.define("ace/mode/hjson_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var HjsonHighlightRules = function() {

    this.$rules = {
        start: [{
            include: "#comments"
        }, {
            include: "#rootObject"
        }, {
            include: "#value"
        }],
        "#array": [{
            token: "paren.lparen",
            regex: /\[/,
            push: [{
                token: "paren.rparen",
                regex: /\]/,
                next: "pop"
            }, {
                include: "#value"
            }, {
                include: "#comments"
            }, {
                token: "text",
                regex: /,|$/
            }, {
                token: "invalid.illegal",
                regex: /[^\s\]]/
            }, {
                defaultToken: "array"
            }]
        }],
        "#comments": [{
            token: [
                "comment.punctuation",
                "comment.line"
            ],
            regex: /(#)(.*$)/
        }, {
            token: "comment.punctuation",
            regex: /\/\*/,
            push: [{
                token: "comment.punctuation",
                regex: /\*\//,
                next: "pop"
            }, {
                defaultToken: "comment.block"
            }]
        }, {
            token: [
                "comment.punctuation",
                "comment.line"
            ],
            regex: /(\/\/)(.*$)/
        }],
        "#constant": [{
            token: "constant",
            regex: /\b(?:true|false|null)\b/
        }],
        "#keyname": [{
            token: "keyword",
            regex: /(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*(?=:)/
        }],
        "#mstring": [{
            token: "string",
            regex: /'''/,
            push: [{
                token: "string",
                regex: /'''/,
                next: "pop"
            }, {
                defaultToken: "string"
            }]
        }],
        "#number": [{
            token: "constant.numeric",
            regex: /-?(?:0|[1-9]\d*)(?:(?:\.\d+)?(?:[eE][+-]?\d+)?)?/,
            comment: "handles integer and decimal numbers"
        }],
        "#object": [{
            token: "paren.lparen",
            regex: /\{/,
            push: [{
                token: "paren.rparen",
                regex: /\}/,
                next: "pop"
            }, {
                include: "#keyname"
            }, {
                include: "#value"
            }, {
                token: "text",
                regex: /:/
            }, {
                token: "text",
                regex: /,/
            }, {
                defaultToken: "paren"
            }]
        }],
        "#rootObject": [{
            token: "paren",
            regex: /(?=\s*(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*:)/,
            push: [{
                token: "paren.rparen",
                regex: /---none---/,
                next: "pop"
            }, {
                include: "#keyname"
            }, {
                include: "#value"
            }, {
                token: "text",
                regex: /:/
            }, {
                token: "text",
                regex: /,/
            }, {
                defaultToken: "paren"
            }]
        }],
        "#string": [{
            token: "string",
            regex: /"/,
            push: [{
                token: "string",
                regex: /"/,
                next: "pop"
            }, {
                token: "constant.language.escape",
                regex: /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/
            }, {
                token: "invalid.illegal",
                regex: /\\./
            }, {
                defaultToken: "string"
            }]
        }],
        "#ustring": [{
            token: "string",
            regex: /\b[^:,0-9\-\{\[\}\]\s].*$/
        }],
        "#value": [{
            include: "#constant"
        }, {
            include: "#number"
        }, {
            include: "#string"
        }, {
            include: "#array"
        }, {
            include: "#object"
        }, {
            include: "#comments"
        }, {
            include: "#mstring"
        }, {
            include: "#ustring"
        }]
    };

    this.normalizeRules();
};

HjsonHighlightRules.metaData = {
    fileTypes: ["hjson"],
    foldingStartMarker: "(?x:     # turn on extended mode\n              ^    # a line beginning with\n              \\s*    # some optional space\n              [{\\[]  # the start of an object or array\n              (?!    # but not followed by\n              .*   # whatever\n              [}\\]]  # and the close of an object or array\n              ,?   # an optional comma\n              \\s*  # some optional space\n              $    # at the end of the line\n              )\n              |    # ...or...\n              [{\\[]  # the start of an object or array\n              \\s*    # some optional space\n              $    # at the end of the line\n            )",
    foldingStopMarker: "(?x:   # turn on extended mode\n             ^    # a line beginning with\n             \\s*  # some optional space\n             [}\\]]  # and the close of an object or array\n             )",
    keyEquivalent: "^~J",
    name: "Hjson",
    scopeName: "source.hjson"
};


oop.inherits(HjsonHighlightRules, TextHighlightRules);

exports.HjsonHighlightRules = HjsonHighlightRules;
});

ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var Range = acequire("../../range").Range;
var BaseFoldMode = acequire("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {

    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);

        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }

        var fw = this._getFoldWidgetBase(session, foldStyle, row);

        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart

        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);

        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);

        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);

            var range = session.getCommentFoldRange(row, i + match[0].length, 1);

            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }

            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };

    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);

            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }

        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;

        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/hjson",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/hjson_highlight_rules","ace/mode/folding/cstyle"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var HjsonHighlightRules = acequire("./hjson_highlight_rules").HjsonHighlightRules;
var FoldMode = acequire("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = HjsonHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "//";
    this.blockComment = { start: "/*", end: "*/" };
    this.$id = "ace/mode/hjson";
}).call(Mode.prototype);

exports.Mode = Mode;
});


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/chart_editor.scss?v8dark":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/components/chart_editor.scss?v8dark ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.visEditor--chart .visEditorSidebar__config {\n  padding: 0; }\n\n@media only screen and (max-width: 574px) {\n  .vgaEditor {\n    scrollbar-color: rgba(152, 162, 179, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(152, 162, 179, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .vgaEditor {\n    scrollbar-color: rgba(152, 162, 179, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(152, 162, 179, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .vgaEditor {\n    scrollbar-color: rgba(152, 162, 179, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(152, 162, 179, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n.vgaEditor__aceEditorActions {\n  position: absolute;\n  z-index: 1000;\n  top: 8px;\n  right: 40px;\n  line-height: 1; }\n", "",{"version":3,"sources":["chart_editor.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,UAAU,EAAE;;AAEd;EACE;IACE,qDAAqD;IACrD,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB,EAAE;IAClB;MACE,WAAW;MACX,YAAY,EAAE;IAChB;MACE,0CAA0C;MAC1C,4BAA4B;MAC5B,mBAAmB;MACnB,6BAA6B,EAAE;IACjC;MACE,6BAA6B,EAAE,EAAE;;AAEvC;EACE;IACE,qDAAqD;IACrD,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB,EAAE;IAClB;MACE,WAAW;MACX,YAAY,EAAE;IAChB;MACE,0CAA0C;MAC1C,4BAA4B;MAC5B,mBAAmB;MACnB,6BAA6B,EAAE;IACjC;MACE,6BAA6B,EAAE,EAAE;;AAEvC;EACE;IACE,qDAAqD;IACrD,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB,EAAE;IAClB;MACE,WAAW;MACX,YAAY,EAAE;IAChB;MACE,0CAA0C;MAC1C,4BAA4B;MAC5B,mBAAmB;MACnB,6BAA6B,EAAE;IACjC;MACE,6BAA6B,EAAE,EAAE;;AAEvC;EACE,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,WAAW;EACX,cAAc,EAAE","file":"chart_editor.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.visEditor--chart .visEditorSidebar__config {\n  padding: 0; }\n\n@media only screen and (max-width: 574px) {\n  .vgaEditor {\n    scrollbar-color: rgba(152, 162, 179, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(152, 162, 179, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .vgaEditor {\n    scrollbar-color: rgba(152, 162, 179, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(152, 162, 179, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .vgaEditor {\n    scrollbar-color: rgba(152, 162, 179, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(152, 162, 179, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n.vgaEditor__aceEditorActions {\n  position: absolute;\n  z-index: 1000;\n  top: 8px;\n  right: 40px;\n  line-height: 1; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/chart_editor.scss?v8light":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/components/chart_editor.scss?v8light ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.visEditor--chart .visEditorSidebar__config {\n  padding: 0; }\n\n@media only screen and (max-width: 574px) {\n  .vgaEditor {\n    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(105, 112, 125, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .vgaEditor {\n    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(105, 112, 125, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .vgaEditor {\n    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(105, 112, 125, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n.vgaEditor__aceEditorActions {\n  position: absolute;\n  z-index: 1000;\n  top: 8px;\n  right: 40px;\n  line-height: 1; }\n", "",{"version":3,"sources":["chart_editor.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,UAAU,EAAE;;AAEd;EACE;IACE,qDAAqD;IACrD,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB,EAAE;IAClB;MACE,WAAW;MACX,YAAY,EAAE;IAChB;MACE,0CAA0C;MAC1C,4BAA4B;MAC5B,mBAAmB;MACnB,6BAA6B,EAAE;IACjC;MACE,6BAA6B,EAAE,EAAE;;AAEvC;EACE;IACE,qDAAqD;IACrD,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB,EAAE;IAClB;MACE,WAAW;MACX,YAAY,EAAE;IAChB;MACE,0CAA0C;MAC1C,4BAA4B;MAC5B,mBAAmB;MACnB,6BAA6B,EAAE;IACjC;MACE,6BAA6B,EAAE,EAAE;;AAEvC;EACE;IACE,qDAAqD;IACrD,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB,EAAE;IAClB;MACE,WAAW;MACX,YAAY,EAAE;IAChB;MACE,0CAA0C;MAC1C,4BAA4B;MAC5B,mBAAmB;MACnB,6BAA6B,EAAE;IACjC;MACE,6BAA6B,EAAE,EAAE;;AAEvC;EACE,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,WAAW;EACX,cAAc,EAAE","file":"chart_editor.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.visEditor--chart .visEditorSidebar__config {\n  padding: 0; }\n\n@media only screen and (max-width: 574px) {\n  .vgaEditor {\n    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(105, 112, 125, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .vgaEditor {\n    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(105, 112, 125, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .vgaEditor {\n    scrollbar-color: rgba(105, 112, 125, 0.5) transparent;\n    scrollbar-width: thin;\n    max-height: 240px;\n    overflow-y: auto; }\n    .vgaEditor::-webkit-scrollbar {\n      width: 16px;\n      height: 16px; }\n    .vgaEditor::-webkit-scrollbar-thumb {\n      background-color: rgba(105, 112, 125, 0.5);\n      background-clip: content-box;\n      border-radius: 16px;\n      border: 6px solid transparent; }\n    .vgaEditor::-webkit-scrollbar-corner, .vgaEditor::-webkit-scrollbar-track {\n      background-color: transparent; } }\n\n.vgaEditor__aceEditorActions {\n  position: absolute;\n  z-index: 1000;\n  top: 8px;\n  right: 40px;\n  line-height: 1; }\n"]}]);
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

/***/ "../../../node_modules/json-stringify-pretty-compact/index.js":
/*!***********************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/json-stringify-pretty-compact/index.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function stringify (obj, options) {
  options = options || {}
  var indent = JSON.stringify([1], null, get(options, 'indent', 2)).slice(2, -3)
  var addMargin = get(options, 'margins', false)
  var maxLength = (indent === '' ? Infinity : get(options, 'maxLength', 80))

  return (function _stringify (obj, currentIndent, reserved) {
    if (obj && typeof obj.toJSON === 'function') {
      obj = obj.toJSON()
    }

    var string = JSON.stringify(obj)

    if (string === undefined) {
      return string
    }

    var length = maxLength - currentIndent.length - reserved

    if (string.length <= length) {
      var prettified = prettify(string, addMargin)
      if (prettified.length <= length) {
        return prettified
      }
    }

    if (typeof obj === 'object' && obj !== null) {
      var nextIndent = currentIndent + indent
      var items = []
      var delimiters
      var comma = function (array, index) {
        return (index === array.length - 1 ? 0 : 1)
      }

      if (Array.isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
          items.push(
            _stringify(obj[index], nextIndent, comma(obj, index)) || 'null'
          )
        }
        delimiters = '[]'
      } else {
        Object.keys(obj).forEach(function (key, index, array) {
          var keyPart = JSON.stringify(key) + ': '
          var value = _stringify(obj[key], nextIndent,
                                 keyPart.length + comma(array, index))
          if (value !== undefined) {
            items.push(keyPart + value)
          }
        })
        delimiters = '{}'
      }

      if (items.length > 0) {
        return [
          delimiters[0],
          indent + items.join(',\n' + nextIndent),
          delimiters[1]
        ].join('\n' + currentIndent)
      }
    }

    return string
  }(obj, '', 0))
}

// Note: This regex matches even invalid JSON strings, but since we’re
// working on the output of `JSON.stringify` we know that only valid strings
// are present (unless the user supplied a weird `options.indent` but in
// that case we don’t care since the output would be invalid anyway).
var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,\][}{]/g

function prettify (string, addMargin) {
  var m = addMargin ? ' ' : ''
  var tokens = {
    '{': '{' + m,
    '[': '[' + m,
    '}': m + '}',
    ']': m + ']',
    ',': ', ',
    ':': ': '
  }
  return string.replace(stringOrChar, function (match, string) {
    return string ? match : tokens[match]
  })
}

function get (options, name, defaultValue) {
  return (name in options ? options[name] : defaultValue)
}

module.exports = stringify


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

/***/ "./public/components/chart_editor.scss":
/*!*********************************************!*\
  !*** ./public/components/chart_editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [visTypeChart] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./chart_editor.scss?v8dark */ "./public/components/chart_editor.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [visTypeChart] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./chart_editor.scss?v8light */ "./public/components/chart_editor.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./chart_editor.scss?v8dark */ "./public/components/chart_editor.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./chart_editor.scss?v8light */ "./public/components/chart_editor.scss?v8light");
}

/***/ }),

/***/ "./public/components/chart_editor.scss?v8dark":
/*!****************************************************!*\
  !*** ./public/components/chart_editor.scss?v8dark ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./chart_editor.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/chart_editor.scss?v8dark");

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

/***/ "./public/components/chart_editor.scss?v8light":
/*!*****************************************************!*\
  !*** ./public/components/chart_editor.scss?v8light ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./chart_editor.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/chart_editor.scss?v8light");

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

/***/ "./public/components/chart_vis_editor.tsx":
/*!************************************************!*\
  !*** ./public/components/chart_vis_editor.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartVisEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json-stringify-pretty-compact */ "../../../node_modules/json-stringify-pretty-compact/index.js");
/* harmony import */ var json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hjson */ "../../../node_modules/hjson/lib/hjson.js");
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hjson__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brace_mode_hjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! brace/mode/hjson */ "../../../node_modules/brace/mode/hjson.js");
/* harmony import */ var brace_mode_hjson__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brace_mode_hjson__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _chart_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart_editor.scss */ "./public/components/chart_editor.scss");
/* harmony import */ var _chart_editor_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chart_editor_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_7__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */








const aceOptions = {
  maxLines: Infinity,
  highlightActiveLine: false,
  showPrintMargin: false,
  tabSize: 2,
  useSoftTabs: true,
  wrap: true
};
const hjsonStringifyOptions = {
  bracesSameLine: true,
  keepWsc: true
};

function format(value, stringify, options) {
  try {
    const spec = hjson__WEBPACK_IMPORTED_MODULE_2___default.a.parse(value, {
      legacyRoot: false,
      keepWsc: true
    });
    return stringify(spec, options);
  } catch (err) {
    // This is a common case - user tries to format an invalid HJSON text
    Object(_services__WEBPACK_IMPORTED_MODULE_5__["getNotifications"])().toasts.addError(err, {
      title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('visTypeChart.editor.formatError', {
        defaultMessage: 'Error formatting spec'
      })
    });
    return value;
  }
}

function ChartVisEditor({
  stateParams,
  setValue
}) {
  const onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setValue('spec', value);
  }, [setValue]);
  const formatJson = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setValue('spec', format(stateParams.spec, json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_1___default.a)), [setValue, stateParams.spec]);
  const formatHJson = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setValue('spec', format(stateParams.spec, hjson__WEBPACK_IMPORTED_MODULE_2___default.a.stringify, hjsonStringifyOptions)), [setValue, stateParams.spec]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", null, "ChartJS");
} // default export required for React.Lazy
// eslint-disable-next-line import/no-default-export




/***/ })

}]);
//# sourceMappingURL=visTypeChart.chunk.5.js.map