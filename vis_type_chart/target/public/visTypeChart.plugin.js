/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"visTypeChart": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "visTypeChart.chunk." + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["visTypeChart_bundle_jsonpfunction"] = window["visTypeChart_bundle_jsonpfunction"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js ***!
  \*****************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_var_tmp_bazel_jagadish_7a3a977714afdd22e1cb951fc522eeed_execroot_kibana_node_modules_val_loader_dist_cjs_js_key_visTypeChart_private_var_tmp_bazel_jagadish_7a3a977714afdd22e1cb951fc522eeed_execroot_kibana_bazel_out_darwin_fastbuild_bin_packages_kbn_ui_shared_deps_target_node_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../private/var/tmp/_bazel_jagadish/7a3a977714afdd22e1cb951fc522eeed/execroot/kibana/node_modules/val-loader/dist/cjs.js?key=visTypeChart!../../../../../../../../../../private/var/tmp/_bazel_jagadish/7a3a977714afdd22e1cb951fc522eeed/execroot/kibana/bazel-out/darwin-fastbuild/bin/packages/kbn-ui-shared-deps/target_node/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeChart!../../../../../../../../private/var/tmp/_bazel_jagadish/7a3a977714afdd22e1cb951fc522eeed/execroot/kibana/bazel-out/darwin-fastbuild/bin/packages/kbn-ui-shared-deps/target_node/public_path_module_creator.js");
/* harmony import */ var _private_var_tmp_bazel_jagadish_7a3a977714afdd22e1cb951fc522eeed_execroot_kibana_node_modules_val_loader_dist_cjs_js_key_visTypeChart_private_var_tmp_bazel_jagadish_7a3a977714afdd22e1cb951fc522eeed_execroot_kibana_bazel_out_darwin_fastbuild_bin_packages_kbn_ui_shared_deps_target_node_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_private_var_tmp_bazel_jagadish_7a3a977714afdd22e1cb951fc522eeed_execroot_kibana_node_modules_val_loader_dist_cjs_js_key_visTypeChart_private_var_tmp_bazel_jagadish_7a3a977714afdd22e1cb951fc522eeed_execroot_kibana_bazel_out_darwin_fastbuild_bin_packages_kbn_ui_shared_deps_target_node_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__kbnBundles__.define('plugin/visTypeChart/public', __webpack_require__, /*require.resolve*/(/*! ../../../../../src/plugins/vis_type_chart/public */ "./public/index.ts"))

/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-comments.js":
/*!************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/hjson/lib/hjson-comments.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Hjson http://hjson.org */


var common=__webpack_require__(/*! ./hjson-common */ "../../../node_modules/hjson/lib/hjson-common.js");

function makeComment(b, a, x) {
  var c;
  if (b) c={ b: b };
  if (a) (c=c||{}).a=a;
  if (x) (c=c||{}).x=x;
  return c;
}

function extractComments(value, root) {

  if (value===null || typeof value!=='object') return;
  var comments=common.getComment(value);
  if (comments) common.removeComment(value);

  var i, length; // loop
  var any, res;
  if (Object.prototype.toString.apply(value) === '[object Array]') {
    res={ a: {} };
    for (i=0, length=value.length; i<length; i++) {
      if (saveComment(res.a, i, comments.a[i], extractComments(value[i])))
        any=true;
    }
    if (!any && comments.e){
      res.e=makeComment(comments.e[0], comments.e[1]);
      any=true;
    }
  } else {
    res={ s: {} };

    // get key order (comments and current)
    var keys, currentKeys=Object.keys(value);
    if (comments && comments.o) {
      keys=[];
      comments.o.concat(currentKeys).forEach(function(key) {
        if (Object.prototype.hasOwnProperty.call(value, key) && keys.indexOf(key)<0)
          keys.push(key);
      });
    } else keys=currentKeys;
    res.o=keys;

    // extract comments
    for (i=0, length=keys.length; i<length; i++) {
      var key=keys[i];
      if (saveComment(res.s, key, comments.c[key], extractComments(value[key])))
        any=true;
    }
    if (!any && comments.e) {
      res.e=makeComment(comments.e[0], comments.e[1]);
      any=true;
    }
  }

  if (root && comments && comments.r) {
    res.r=makeComment(comments.r[0], comments.r[1]);
  }

  return any?res:undefined;
}

function mergeStr() {
  var res="";
  [].forEach.call(arguments, function(c) {
    if (c && c.trim()!=="") {
      if (res) res+="; ";
      res+=c.trim();
    }
  });
  return res;
}

function mergeComments(comments, value) {
  var dropped=[];
  merge(comments, value, dropped, []);

  // append dropped comments:
  if (dropped.length>0) {
    var text=rootComment(value, null, 1);
    text+="\n# Orphaned comments:\n";
    dropped.forEach(function(c) {
      text+=("# "+c.path.join('/')+": "+mergeStr(c.b, c.a, c.e)).replace("\n", "\\n ")+"\n";
    });
    rootComment(value, text, 1);
  }
}

function saveComment(res, key, item, col) {
  var c=makeComment(item?item[0]:undefined, item?item[1]:undefined, col);
  if (c) res[key]=c;
  return c;
}

function droppedComment(path, c) {
  var res=makeComment(c.b, c.a);
  res.path=path;
  return res;
}

function dropAll(comments, dropped, path) {

  if (!comments) return;

  var i, length; // loop

  if (comments.a) {

    for (i=0, length=comments.a.length; i<length; i++) {
      var kpath=path.slice().concat([i]);
      var c=comments.a[i];
      if (c) {
        dropped.push(droppedComment(kpath, c));
        dropAll(c.x, dropped, kpath);
      }
    }
  } else if (comments.o) {

    comments.o.forEach(function(key) {
      var kpath=path.slice().concat([key]);
      var c=comments.s[key];
      if (c) {
        dropped.push(droppedComment(kpath, c));
        dropAll(c.x, dropped, kpath);
      }
    });
  }

  if (comments.e)
    dropped.push(droppedComment(path, comments.e));
}

function merge(comments, value, dropped, path) {

  if (!comments) return;
  if (value===null || typeof value!=='object') {
    dropAll(comments, dropped, path);
    return;
  }

  var i; // loop
  var setComments=common.createComment(value);

  if (path.length===0 && comments.r)
    setComments.r=[comments.r.b, comments.r.a];

  if (Object.prototype.toString.apply(value) === '[object Array]') {
    setComments.a=[];
    var a=comments.a||{}; // Treating Array like an Object, so using {} for speed
    for (var key in a) {
      if (a.hasOwnProperty(key)) {
        i=parseInt(key);
        var c=comments.a[key];
        if (c) {
          var kpath=path.slice().concat([i]);
          if (i<value.length) {
            setComments.a[i]=[c.b, c.a];
            merge(c.x, value[i], dropped, kpath);
          } else {
            dropped.push(droppedComment(kpath, c));
            dropAll(c.x, dropped, kpath);
          }
        }
      }
    }
    if (i===0 && comments.e) setComments.e=[comments.e.b, comments.e.a];
  } else {
    setComments.c={};
    setComments.o=[];
    (comments.o||[]).forEach(function(key) {
      var kpath=path.slice().concat([key]);
      var c=comments.s[key];
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        setComments.o.push(key);
        if (c) {
          setComments.c[key]=[c.b, c.a];
          merge(c.x, value[key], dropped, kpath);
        }
      } else if (c) {
        dropped.push(droppedComment(kpath, c));
        dropAll(c.x, dropped, kpath);
      }
    });
    if (comments.e) setComments.e=[comments.e.b, comments.e.a];
  }
}

function rootComment(value, setText, header) {
  var comment=common.createComment(value, common.getComment(value));
  if (!comment.r) comment.r=["", ""];
  if (setText || setText==="") comment.r[header]=common.forceComment(setText);
  return comment.r[header]||"";
}

module.exports={
  extract: function(value) { return extractComments(value, true); },
  merge: mergeComments,
  header: function(value, setText) { return rootComment(value, setText, 0); },
  footer: function(value, setText) { return rootComment(value, setText, 1); },
};


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-common.js":
/*!**********************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/hjson/lib/hjson-common.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Hjson http://hjson.org */


var os=__webpack_require__(/*! os */ "../../../node_modules/os-browserify/browser.js"); // will be {} when used in a browser

function tryParseNumber(text, stopAtNext) {

  // try to parse a number

  var number, string = '', leadingZeros = 0, testLeading = true;
  var at = 0;
  var ch;
  function next() {
    ch = text.charAt(at);
    at++;
    return ch;
  }

  next();
  if (ch === '-') {
    string = '-';
    next();
  }
  while (ch >= '0' && ch <= '9') {
    if (testLeading) {
      if (ch == '0') leadingZeros++;
      else testLeading = false;
    }
    string += ch;
    next();
  }
  if (testLeading) leadingZeros--; // single 0 is allowed
  if (ch === '.') {
    string += '.';
    while (next() && ch >= '0' && ch <= '9')
      string += ch;
  }
  if (ch === 'e' || ch === 'E') {
    string += ch;
    next();
    if (ch === '-' || ch === '+') {
      string += ch;
      next();
    }
    while (ch >= '0' && ch <= '9') {
      string += ch;
      next();
    }
  }

  // skip white/to (newline)
  while (ch && ch <= ' ') next();

  if (stopAtNext) {
    // end scan if we find a punctuator character like ,}] or a comment
    if (ch === ',' || ch === '}' || ch === ']' ||
      ch === '#' || ch === '/' && (text[at] === '/' || text[at] === '*')) ch = 0;
  }

  number = +string;
  if (ch || leadingZeros || !isFinite(number)) return undefined;
  else return number;
}

function createComment(value, comment) {
  if (Object.defineProperty) Object.defineProperty(value, "__COMMENTS__", { enumerable: false, writable: true });
  return (value.__COMMENTS__ = comment||{});
}

function removeComment(value) {
  Object.defineProperty(value, "__COMMENTS__", { value: undefined });
}

function getComment(value) {
  return value.__COMMENTS__;
}

function forceComment(text) {
  if (!text) return "";
  var a = text.split('\n');
  var str, i, j, len;
  for (j = 0; j < a.length; j++) {
    str = a[j];
    len = str.length;
    for (i = 0; i < len; i++) {
      var c = str[i];
      if (c === '#') break;
      else if (c === '/' && (str[i+1] === '/' || str[i+1] === '*')) {
        if (str[i+1] === '*') j = a.length; // assume /**/ covers whole block, bail out
        break;
      }
      else if (c > ' ') {
        a[j] = '# ' + str;
        break;
      }
    }
  }
  return a.join('\n');
}

module.exports = {
  EOL: os.EOL || '\n',
  tryParseNumber: tryParseNumber,
  createComment: createComment,
  removeComment: removeComment,
  getComment: getComment,
  forceComment: forceComment,
};


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-dsf.js":
/*!*******************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/hjson/lib/hjson-dsf.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Hjson http://hjson.org */


function loadDsf(col, type) {

  if (Object.prototype.toString.apply(col) !== '[object Array]') {
    if (col) throw new Error("dsf option must contain an array!");
    else return nopDsf;
  } else if (col.length === 0) return nopDsf;

  var dsf = [];
  function isFunction(f) { return {}.toString.call(f) === '[object Function]'; }

  col.forEach(function(x) {
    if (!x.name || !isFunction(x.parse) || !isFunction(x.stringify))
      throw new Error("extension does not match the DSF interface");
    dsf.push(function() {
      try {
        if (type == "parse") {
          return x.parse.apply(null, arguments);
        } else if (type == "stringify") {
          var res=x.stringify.apply(null, arguments);
          // check result
          if (res !== undefined && (typeof res !== "string" ||
            res.length === 0 ||
            res[0] === '"' ||
            [].some.call(res, function(c) { return isInvalidDsfChar(c); })))
            throw new Error("value may not be empty, start with a quote or contain a punctuator character except colon: " + res);
          return res;
        } else throw new Error("Invalid type");
      } catch (e) {
        throw new Error("DSF-"+x.name+" failed; "+e.message);
      }
    });
  });

  return runDsf.bind(null, dsf);
}

function runDsf(dsf, value) {
  if (dsf) {
    for (var i = 0; i < dsf.length; i++) {
      var res = dsf[i](value);
      if (res !== undefined) return res;
    }
  }
}

function nopDsf(/*value*/) {
}

function isInvalidDsfChar(c) {
  return c === '{' || c === '}' || c === '[' || c === ']' || c === ',';
}


function math(/*opt*/) {
  return {
    name: "math",
    parse: function (value) {
      switch (value) {
        case "+inf":
        case "inf":
        case "+Inf":
        case "Inf": return Infinity;
        case "-inf":
        case "-Inf": return -Infinity;
        case "nan":
        case "NaN": return NaN;
      }
    },
    stringify: function (value) {
      if (typeof value !== 'number') return;
      if (1 / value === -Infinity) return "-0"; // 0 === -0
      if (value === Infinity) return "Inf";
      if (value === -Infinity) return "-Inf";
      if (isNaN(value)) return "NaN";
    },
  };
}
math.description="support for Inf/inf, -Inf/-inf, Nan/naN and -0";

function hex(opt) {
  var out=opt && opt.out;
  return {
    name: "hex",
    parse: function (value) {
      if (/^0x[0-9A-Fa-f]+$/.test(value))
        return parseInt(value, 16);
    },
    stringify: function (value) {
      if (out && Number.isInteger(value))
        return "0x"+value.toString(16);
    },
  };
}
hex.description="parse hexadecimal numbers prefixed with 0x";

function date(/*opt*/) {
  return {
    name: "date",
    parse: function (value) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(value) ||
        /^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}(?:.\d+)(?:Z|[+-]\d{2}:\d{2})$/.test(value)) {
        var dt = Date.parse(value);
        if (!isNaN(dt)) return new Date(dt);
      }
    },
    stringify: function (value) {
      if (Object.prototype.toString.call(value) === '[object Date]') {
        var dt = value.toISOString();
        if (dt.indexOf("T00:00:00.000Z", dt.length - 14) !== -1) return dt.substr(0, 10);
        else return dt;
      }
    },
  };
}
date.description="support ISO dates";

module.exports = {
  loadDsf: loadDsf,
  std: {
    math: math,
    hex: hex,
    date: date,
  },
};


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-parse.js":
/*!*********************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/hjson/lib/hjson-parse.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Hjson http://hjson.org */


module.exports = function(source, opt) {

  var common = __webpack_require__(/*! ./hjson-common */ "../../../node_modules/hjson/lib/hjson-common.js");
  var dsf = __webpack_require__(/*! ./hjson-dsf */ "../../../node_modules/hjson/lib/hjson-dsf.js");

  var text;
  var at;   // The index of the current character
  var ch;   // The current character
  var escapee = {
    '"': '"',
    "'": "'",
    '\\': '\\',
    '/': '/',
    b:  '\b',
    f:  '\f',
    n:  '\n',
    r:  '\r',
    t:  '\t'
  };

  var keepComments;
  var runDsf; // domain specific formats

  function resetAt() {
    at = 0;
    ch = ' ';
  }

  function isPunctuatorChar(c) {
    return c === '{' || c === '}' || c === '[' || c === ']' || c === ',' || c === ':';
  }

  // Call error when something is wrong.
  function error(m) {
    var i, col=0, line=1;
    for (i = at-1; i > 0 && text[i] !== '\n'; i--, col++) {}
    for (; i > 0; i--) if (text[i] === '\n') line++;
    throw new Error(m + " at line " + line + "," + col + " >>>" + text.substr(at-col, 20) + " ...");
  }

  function next() {
    // get the next character.
    ch = text.charAt(at);
    at++;
    return ch;
  }

  function peek(offs) {
    // range check is not required
    return text.charAt(at + offs);
  }

  function string(allowML) {
    // Parse a string value.
    // callers make sure that (ch === '"' || ch === "'")
    var string = '';

    // When parsing for string values, we must look for "/' and \ characters.
    var exitCh = ch;
    while (next()) {
      if (ch === exitCh) {
        next();
        if (allowML && exitCh === "'" && ch === "'" && string.length === 0) {
          // ''' indicates a multiline string
          next();
          return mlString();
        } else return string;
      }
      if (ch === '\\') {
        next();
        if (ch === 'u') {
          var uffff = 0;
          for (var i = 0; i < 4; i++) {
            next();
            var c = ch.charCodeAt(0), hex;
            if (ch >= '0' && ch <= '9') hex = c - 48;
            else if (ch >= 'a' && ch <= 'f') hex = c - 97 + 0xa;
            else if (ch >= 'A' && ch <= 'F') hex = c - 65 + 0xa;
            else error("Bad \\u char " + ch);
            uffff = uffff * 16 + hex;
          }
          string += String.fromCharCode(uffff);
        } else if (typeof escapee[ch] === 'string') {
          string += escapee[ch];
        } else break;
      } else if (ch === '\n' || ch === '\r') {
        error("Bad string containing newline");
      } else {
        string += ch;
      }
    }
    error("Bad string");
  }

  function mlString() {
    // Parse a multiline string value.
    var string = '', triple = 0;

    // we are at ''' +1 - get indent
    var indent = 0;
    for (;;) {
      var c=peek(-indent-5);
      if (!c || c === '\n') break;
      indent++;
    }

    function skipIndent() {
      var skip = indent;
      while (ch && ch <= ' ' && ch !== '\n' && skip-- > 0) next();
    }

    // skip white/to (newline)
    while (ch && ch <= ' ' && ch !== '\n') next();
    if (ch === '\n') { next(); skipIndent(); }

    // When parsing multiline string values, we must look for ' characters.
    for (;;) {
      if (!ch) {
        error("Bad multiline string");
      } else if (ch === '\'') {
        triple++;
        next();
        if (triple === 3) {
          if (string.slice(-1) === '\n') string=string.slice(0, -1); // remove last EOL
          return string;
        } else continue;
      } else {
        while (triple > 0) {
          string += '\'';
          triple--;
        }
      }
      if (ch === '\n') {
        string += '\n';
        next();
        skipIndent();
      } else {
        if (ch !== '\r') string += ch;
        next();
      }
    }
  }

  function keyname() {
    // quotes for keys are optional in Hjson
    // unless they include {}[],: or whitespace.

    if (ch === '"' || ch === "'") return string(false);

    var name = "", start = at, space = -1;
    for (;;) {
      if (ch === ':') {
        if (!name) error("Found ':' but no key name (for an empty key name use quotes)");
        else if (space >=0 && space !== name.length) { at = start + space; error("Found whitespace in your key name (use quotes to include)"); }
        return name;
      } else if (ch <= ' ') {
        if (!ch) error("Found EOF while looking for a key name (check your syntax)");
        else if (space < 0) space = name.length;
      } else if (isPunctuatorChar(ch)) {
        error("Found '" + ch + "' where a key name was expected (check your syntax or use quotes if the key name includes {}[],: or whitespace)");
      } else {
        name += ch;
      }
      next();
    }
  }

  function white() {
    while (ch) {
      // Skip whitespace.
      while (ch && ch <= ' ') next();
      // Hjson allows comments
      if (ch === '#' || ch === '/' && peek(0) === '/') {
        while (ch && ch !== '\n') next();
      } else if (ch === '/' && peek(0) === '*') {
        next(); next();
        while (ch && !(ch === '*' && peek(0) === '/')) next();
        if (ch) { next(); next(); }
      } else break;
    }
  }

  function tfnns() {
    // Hjson strings can be quoteless
    // returns string, true, false, or null.
    var value = ch;
    if (isPunctuatorChar(ch))
      error("Found a punctuator character '" + ch + "' when expecting a quoteless string (check your syntax)");

    for(;;) {
      next();
      // (detection of ml strings was moved to string())
      var isEol = ch === '\r' || ch === '\n' || ch === '';
      if (isEol ||
        ch === ',' || ch === '}' || ch === ']' ||
        ch === '#' ||
        ch === '/' && (peek(0) === '/' || peek(0) === '*')
        ) {
        // this tests for the case of {true|false|null|num}
        // followed by { ',' | '}' | ']' | '#' | '//' | '/*' }
        // which needs to be parsed as the specified value
        var chf = value[0];
        switch (chf) {
          case 'f': if (value.trim() === "false") return false; break;
          case 'n': if (value.trim() === "null") return null; break;
          case 't': if (value.trim() === "true") return true; break;
          default:
            if (chf === '-' || chf >= '0' && chf <= '9') {
              var n = common.tryParseNumber(value);
              if (n !== undefined) return n;
            }
        }
        if (isEol) {
          // remove any whitespace at the end (ignored in quoteless strings)
          value = value.trim();
          var dsfValue = runDsf(value);
          return dsfValue !== undefined ? dsfValue : value;
        }
      }
      value += ch;
    }
  }

  function getComment(cAt, first) {
    var i;
    cAt--;
    // remove trailing whitespace
    // but only up to EOL
    for (i = at - 2; i > cAt && text[i] <= ' ' && text[i] !== '\n'; i--);
    if (text[i] === '\n') i--;
    if (text[i] === '\r') i--;
    var res = text.substr(cAt, i-cAt+1);
    // return if we find anything other than whitespace
    for (i = 0; i < res.length; i++) {
      if (res[i] > ' ') {
        var j = res.indexOf('\n');
        if (j >= 0) {
          var c = [res.substr(0, j), res.substr(j+1)];
          if (first && c[0].trim().length === 0) c.shift();
          return c;
        } else return [res];
      }
    }
    return [];
  }

  function errorClosingHint(value) {
    function search(value, ch) {
      var i, k, length, res;
      switch (typeof value) {
        case 'string':
          if (value.indexOf(ch) >= 0) res = value;
          break;
        case 'object':
          if (Object.prototype.toString.apply(value) === '[object Array]') {
            for (i = 0, length = value.length; i < length; i++) {
              res=search(value[i], ch) || res;
            }
          } else {
            for (k in value) {
              if (!Object.prototype.hasOwnProperty.call(value, k)) continue;
              res=search(value[k], ch) || res;
            }
          }
      }
      return res;
    }

    function report(ch) {
      var possibleErr=search(value, ch);
      if (possibleErr) {
        return "found '"+ch+"' in a string value, your mistake could be with:\n"+
          "  > "+possibleErr+"\n"+
          "  (unquoted strings contain everything up to the next line!)";
      } else return "";
    }

    return report('}') || report(']');
  }

  function array() {
    // Parse an array value.
    // assuming ch === '['

    var array = [];
    var comments, cAt, nextComment;
    try {
      if (keepComments) comments = common.createComment(array, { a: [] });

      next();
      cAt = at;
      white();
      if (comments) nextComment = getComment(cAt, true).join('\n');
      if (ch === ']') {
        next();
        if (comments) comments.e = [nextComment];
        return array;  // empty array
      }

      while (ch) {
        array.push(value());
        cAt = at;
        white();
        // in Hjson the comma is optional and trailing commas are allowed
        // note that we do not keep comments before the , if there are any
        if (ch === ',') { next(); cAt = at; white(); }
        if (comments) {
          var c = getComment(cAt);
          comments.a.push([nextComment||"", c[0]||""]);
          nextComment = c[1];
        }
        if (ch === ']') {
          next();
          if (comments) comments.a[comments.a.length-1][1] += nextComment||"";
          return array;
        }
        white();
      }

      error("End of input while parsing an array (missing ']')");
    } catch (e) {
      e.hint=e.hint||errorClosingHint(array);
      throw e;
    }
  }

  function object(withoutBraces) {
    // Parse an object value.

    var key = "", object = {};
    var comments, cAt, nextComment;

    try {
      if (keepComments) comments = common.createComment(object, { c: {}, o: []  });

      if (!withoutBraces) {
        // assuming ch === '{'
        next();
        cAt = at;
      } else cAt = 1;

      white();
      if (comments) nextComment = getComment(cAt, true).join('\n');
      if (ch === '}' && !withoutBraces) {
        if (comments) comments.e = [nextComment];
        next();
        return object;  // empty object
      }
      while (ch) {
        key = keyname();
        white();
        if (ch !== ':') error("Expected ':' instead of '" + ch + "'");
        next();
        // duplicate keys overwrite the previous value
        object[key] = value();
        cAt = at;
        white();
        // in Hjson the comma is optional and trailing commas are allowed
        // note that we do not keep comments before the , if there are any
        if (ch === ',') { next(); cAt = at; white(); }
        if (comments) {
          var c = getComment(cAt);
          comments.c[key] = [nextComment||"", c[0]||""];
          nextComment = c[1];
          comments.o.push(key);
        }
        if (ch === '}' && !withoutBraces) {
          next();
          if (comments) comments.c[key][1] += nextComment||"";
          return object;
        }
        white();
      }

      if (withoutBraces) return object;
      else error("End of input while parsing an object (missing '}')");
    } catch (e) {
      e.hint=e.hint||errorClosingHint(object);
      throw e;
    }
  }

  function value() {
    // Parse a Hjson value. It could be an object, an array, a string, a number or a word.

    white();
    switch (ch) {
      case '{': return object();
      case '[': return array();
      case "'":
      case '"': return string(true);
      default: return tfnns();
    }
  }

  function checkTrailing(v, c) {
    var cAt = at;
    white();
    if (ch) error("Syntax error, found trailing characters");
    if (keepComments) {
      var b = c.join('\n'), a = getComment(cAt).join('\n');
      if (a || b) {
        var comments = common.createComment(v, common.getComment(v));
        comments.r = [b, a];
      }
    }
    return v;
  }

  function rootValue() {
    white();
    var c = keepComments ? getComment(1) : null;
    switch (ch) {
      case '{': return checkTrailing(object(), c);
      case '[': return checkTrailing(array(), c);
      default: return checkTrailing(value(), c);
    }
  }

  function legacyRootValue() {
    // Braces for the root object are optional
    white();
    var c = keepComments ? getComment(1) : null;
    switch (ch) {
      case '{': return checkTrailing(object(), c);
      case '[': return checkTrailing(array(), c);
    }

    try {
      // assume we have a root object without braces
      return checkTrailing(object(true), c);
    } catch (e) {
      // test if we are dealing with a single JSON value instead (true/false/null/num/"")
      resetAt();
      try { return checkTrailing(value(), c); }
      catch (e2) { throw e; } // throw original error
    }
  }

  if (typeof source!=="string") throw new Error("source is not a string");
  var dsfDef = null;
  var legacyRoot = true;
  if (opt && typeof opt === 'object') {
    keepComments = opt.keepWsc;
    dsfDef = opt.dsf;
    legacyRoot = opt.legacyRoot !== false; // default true
  }
  runDsf = dsf.loadDsf(dsfDef, "parse");
  text = source;
  resetAt();
  return legacyRoot ? legacyRootValue() : rootValue();
};


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-stringify.js":
/*!*************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/hjson/lib/hjson-stringify.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Hjson http://hjson.org */


module.exports = function(data, opt) {

  var common = __webpack_require__(/*! ./hjson-common */ "../../../node_modules/hjson/lib/hjson-common.js");
  var dsf = __webpack_require__(/*! ./hjson-dsf */ "../../../node_modules/hjson/lib/hjson-dsf.js");

  var plainToken = {
    obj:  [ '{', '}' ],
    arr:  [ '[', ']' ],
    key:  [ '',  '' ],
    qkey: [ '"', '"' ],
    col:  [ ':', '' ],
    com:  [ ',', '' ],
    str:  [ '', '' ],
    qstr: [ '"', '"' ],
    mstr: [ "'''", "'''" ],
    num:  [ '', '' ],
    lit:  [ '', '' ],
    dsf:  [ '', '' ],
    esc:  [ '\\', '' ],
    uni:  [ '\\u', '' ],
    rem:  [ '', '' ],
  };

  // options
  var eol = common.EOL;
  var indent = '  ';
  var keepComments = false;
  var bracesSameLine = false;
  var quoteKeys = false;
  var quoteStrings = false;
  var condense = 0;
  var multiline = 1; // std=1, no-tabs=2, off=0
  var separator = ''; // comma separator
  var dsfDef = null;
  var sortProps = false;
  var token = plainToken;

  if (opt && typeof opt === 'object') {
    opt.quotes = opt.quotes === 'always' ? 'strings' : opt.quotes; // legacy

    if (opt.eol === '\n' || opt.eol === '\r\n') eol = opt.eol;
    keepComments = opt.keepWsc;
    condense = opt.condense || 0;
    bracesSameLine = opt.bracesSameLine;
    quoteKeys = opt.quotes === 'all' || opt.quotes === 'keys';
    quoteStrings = opt.quotes === 'all' || opt.quotes === 'strings' || opt.separator === true;
    if (quoteStrings || opt.multiline == 'off') multiline = 0;
    else multiline = opt.multiline == 'no-tabs' ? 2 : 1;
    separator = opt.separator === true ? token.com[0] : '';
    dsfDef = opt.dsf;
    sortProps = opt.sortProps;

    // If the space parameter is a number, make an indent string containing that
    // many spaces. If it is a string, it will be used as the indent string.

    if (typeof opt.space === 'number') {
      indent = new Array(opt.space + 1).join(' ');
    } else if (typeof opt.space === 'string') {
      indent = opt.space;
    }

    if (opt.colors === true) {
      token = {
        obj:  [ '\x1b[37m{\x1b[0m', '\x1b[37m}\x1b[0m' ],
        arr:  [ '\x1b[37m[\x1b[0m', '\x1b[37m]\x1b[0m' ],
        key:  [ '\x1b[33m',  '\x1b[0m' ],
        qkey: [ '\x1b[33m"', '"\x1b[0m' ],
        col:  [ '\x1b[37m:\x1b[0m', '' ],
        com:  [ '\x1b[37m,\x1b[0m', '' ],
        str:  [ '\x1b[37;1m', '\x1b[0m' ],
        qstr: [ '\x1b[37;1m"', '"\x1b[0m' ],
        mstr: [ "\x1b[37;1m'''", "'''\x1b[0m" ],
        num:  [ '\x1b[36;1m', '\x1b[0m' ],
        lit:  [ '\x1b[36m', '\x1b[0m' ],
        dsf:  [ '\x1b[37m', '\x1b[0m' ],
        esc:  [ '\x1b[31m\\', '\x1b[0m' ],
        uni:  [ '\x1b[31m\\u', '\x1b[0m' ],
        rem:  [ '\x1b[35m', '\x1b[0m' ],
      };
    }

    var i, ckeys=Object.keys(plainToken);
    for (i = ckeys.length - 1; i >= 0; i--) {
      var k = ckeys[i];
      token[k].push(plainToken[k][0].length, plainToken[k][1].length);
    }
  }

  //
  var runDsf; // domain specific formats

  var commonRange='\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff';
  // needsEscape tests if the string can be written without escapes
  var needsEscape = new RegExp('[\\\\\\"\x00-\x1f'+commonRange+']', 'g');
  // needsQuotes tests if the string can be written as a quoteless string (like needsEscape but without \\ and \")
  var needsQuotes = new RegExp('^\\s|^"|^\'|^#|^\\/\\*|^\\/\\/|^\\{|^\\}|^\\[|^\\]|^:|^,|\\s$|[\x00-\x1f'+commonRange+']', 'g');
  // needsEscapeML tests if the string can be written as a multiline string (like needsEscape but without \n, \r, \\, \", \t unless multines is 'std')
  var needsEscapeML = new RegExp('\'\'\'|^[\\s]+$|[\x00-'+(multiline === 2 ? '\x09' : '\x08')+'\x0b\x0c\x0e-\x1f'+commonRange+']', 'g');
  // starts with a keyword and optionally is followed by a comment
  var startsWithKeyword = new RegExp('^(true|false|null)\\s*((,|\\]|\\}|#|//|/\\*).*)?$');
  var meta = {
    // table of character substitutions
    '\b': 'b',
    '\t': 't',
    '\n': 'n',
    '\f': 'f',
    '\r': 'r',
    '"' : '"',
    '\\': '\\'
  };
  var needsEscapeName = /[,\{\[\}\]\s:#"']|\/\/|\/\*/;
  var gap = '';
  //
  var wrapLen = 0;

  function wrap(tk, v) {
    wrapLen += tk[0].length + tk[1].length - tk[2] - tk[3];
    return tk[0] + v + tk[1];
  }

  function quoteReplace(string) {
    return string.replace(needsEscape, function (a) {
      var c = meta[a];
      if (typeof c === 'string') return wrap(token.esc, c);
      else return wrap(token.uni, ('0000' + a.charCodeAt(0).toString(16)).slice(-4));
    });
  }

  function quote(string, gap, hasComment, isRootObject) {
    if (!string) return wrap(token.qstr, '');

    needsQuotes.lastIndex = 0;
    startsWithKeyword.lastIndex = 0;

    // Check if we can insert this string without quotes
    // see hjson syntax (must not parse as true, false, null or number)

    if (quoteStrings || hasComment ||
      needsQuotes.test(string) ||
      common.tryParseNumber(string, true) !== undefined ||
      startsWithKeyword.test(string)) {

      // If the string contains no control characters, no quote characters, and no
      // backslash characters, then we can safely slap some quotes around it.
      // Otherwise we first check if the string can be expressed in multiline
      // format or we must replace the offending characters with safe escape
      // sequences.

      needsEscape.lastIndex = 0;
      needsEscapeML.lastIndex = 0;
      if (!needsEscape.test(string)) return wrap(token.qstr, string);
      else if (!needsEscapeML.test(string) && !isRootObject && multiline) return mlString(string, gap);
      else return wrap(token.qstr, quoteReplace(string));
    } else {
      // return without quotes
      return wrap(token.str, string);
    }
  }

  function mlString(string, gap) {
    // wrap the string into the ''' (multiline) format

    var i, a = string.replace(/\r/g, "").split('\n');
    gap += indent;

    if (a.length === 1) {
      // The string contains only a single line. We still use the multiline
      // format as it avoids escaping the \ character (e.g. when used in a
      // regex).
      return wrap(token.mstr, a[0]);
    } else {
      var res = eol + gap + token.mstr[0];
      for (i = 0; i < a.length; i++) {
        res += eol;
        if (a[i]) res += gap + a[i];
      }
      return res + eol + gap + token.mstr[1];
    }
  }

  function quoteKey(name) {
    if (!name) return '""';

    // Check if we can insert this key without quotes

    if (quoteKeys || needsEscapeName.test(name)) {
      needsEscape.lastIndex = 0;
      return wrap(token.qkey, needsEscape.test(name) ? quoteReplace(name) : name);
    } else {
      // return without quotes
      return wrap(token.key, name);
    }
  }

  function str(value, hasComment, noIndent, isRootObject) {
    // Produce a string from value.

    function startsWithNL(str) { return str && str[str[0] === '\r' ? 1 : 0] === '\n'; }
    function commentOnThisLine(str) { return str && !startsWithNL(str); }
    function makeComment(str, prefix, trim) {
      if (!str) return "";
      str = common.forceComment(str);
      var i, len = str.length;
      for (i = 0; i < len && str[i] <= ' '; i++) {}
      if (trim && i > 0) str = str.substr(i);
      if (i < len) return prefix + wrap(token.rem, str);
      else return str;
    }

    // What happens next depends on the value's type.

    // check for DSF
    var dsfValue = runDsf(value);
    if (dsfValue !== undefined) return wrap(token.dsf, dsfValue);

    switch (typeof value) {
      case 'string':
        return quote(value, gap, hasComment, isRootObject);

      case 'number':
        // JSON numbers must be finite. Encode non-finite numbers as null.
        return isFinite(value) ? wrap(token.num, String(value)) : wrap(token.lit, 'null');

      case 'boolean':
        return wrap(token.lit, String(value));

      case 'object':
        // If the type is 'object', we might be dealing with an object or an array or
        // null.

        // Due to a specification blunder in ECMAScript, typeof null is 'object',
        // so watch out for that case.

        if (!value) return wrap(token.lit, 'null');

        var comments; // whitespace & comments
        if (keepComments) comments = common.getComment(value);

        var isArray = Object.prototype.toString.apply(value) === '[object Array]';

        // Make an array to hold the partial results of stringifying this object value.
        var mind = gap;
        gap += indent;
        var eolMind = eol + mind;
        var eolGap = eol + gap;
        var prefix = noIndent || bracesSameLine ? '' : eolMind;
        var partial = [];
        var setsep;
        // condense helpers:
        var cpartial = condense ? [] : null;
        var saveQuoteStrings = quoteStrings, saveMultiline = multiline;
        var iseparator = separator ? '' : token.com[0];
        var cwrapLen = 0;

        var i, length; // loop
        var k, v, vs; // key, value
        var c, ca;
        var res, cres;

        if (isArray) {
          // The value is an array. Stringify every element. Use null as a placeholder
          // for non-JSON values.

          for (i = 0, length = value.length; i < length; i++) {
            setsep = i < length -1;
            if (comments) {
              c = comments.a[i]||[];
              ca = commentOnThisLine(c[1]);
              partial.push(makeComment(c[0], "\n") + eolGap);
              if (cpartial && (c[0] || c[1] || ca)) cpartial = null;
            }
            else partial.push(eolGap);
            wrapLen = 0;
            v = value[i];
            partial.push(str(v, comments ? ca : false, true) + (setsep ? separator : ''));
            if (cpartial) {
              // prepare the condensed version
              switch (typeof v) {
                case 'string':
                  wrapLen = 0;
                  quoteStrings = true; multiline = 0;
                  cpartial.push(str(v, false, true) + (setsep ? token.com[0] : ''));
                  quoteStrings = saveQuoteStrings; multiline = saveMultiline;
                  break;
                case 'object': if (v) { cpartial = null; break; } // falls through
                default: cpartial.push(partial[partial.length - 1] + (setsep ? iseparator : '')); break;
              }
              if (setsep) wrapLen += token.com[0].length - token.com[2];
              cwrapLen += wrapLen;
            }
            if (comments && c[1]) partial.push(makeComment(c[1], ca ? " " : "\n", ca));
          }

          if (length === 0) {
            // when empty
            if (comments && comments.e) partial.push(makeComment(comments.e[0], "\n") + eolMind);
          }
          else partial.push(eolMind);

          // Join all of the elements together, separated with newline, and wrap them in
          // brackets.

          if (partial.length === 0) res = wrap(token.arr, '');
          else {
            res = prefix + wrap(token.arr, partial.join(''));
            // try if the condensed version can fit (parent key name is not included)
            if (cpartial) {
              cres = cpartial.join(' ');
              if (cres.length - cwrapLen <= condense) res = wrap(token.arr, cres);
            }
          }
        } else {
          // Otherwise, iterate through all of the keys in the object.
          var commentKeys = comments ? comments.o.slice() : [];
          var objectKeys = [];
          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k) && commentKeys.indexOf(k) < 0)
              objectKeys.push(k);
          }
          if(sortProps) {
            objectKeys.sort();
          }
          var keys = commentKeys.concat(objectKeys);

          for (i = 0, length = keys.length; i < length; i++) {
            setsep = i < length - 1;
            k = keys[i];
            if (comments) {
              c = comments.c[k]||[];
              ca = commentOnThisLine(c[1]);
              partial.push(makeComment(c[0], "\n") + eolGap);
              if (cpartial && (c[0] || c[1] || ca)) cpartial = null;
            }
            else partial.push(eolGap);

            wrapLen = 0;
            v = value[k];
            vs = str(v, comments && ca);
            partial.push(quoteKey(k) + token.col[0] + (startsWithNL(vs) ? '' : ' ') + vs + (setsep ? separator : ''));
            if (comments && c[1]) partial.push(makeComment(c[1], ca ? " " : "\n", ca));
            if (cpartial) {
              // prepare the condensed version
              switch (typeof v) {
                case 'string':
                  wrapLen = 0;
                  quoteStrings = true; multiline = 0;
                  vs = str(v, false);
                  quoteStrings = saveQuoteStrings; multiline = saveMultiline;
                  cpartial.push(quoteKey(k) + token.col[0] + ' ' + vs + (setsep ? token.com[0] : ''));
                  break;
                case 'object': if (v) { cpartial = null; break; } // falls through
                default: cpartial.push(partial[partial.length - 1] + (setsep ? iseparator : '')); break;
              }
              wrapLen += token.col[0].length - token.col[2];
              if (setsep) wrapLen += token.com[0].length - token.com[2];
              cwrapLen += wrapLen;
            }
          }
          if (length === 0) {
            // when empty
            if (comments && comments.e) partial.push(makeComment(comments.e[0], "\n") + eolMind);
          }
          else partial.push(eolMind);

          // Join all of the member texts together, separated with newlines
          if (partial.length === 0) {
            res = wrap(token.obj, '');
          } else {
            // and wrap them in braces
            res = prefix + wrap(token.obj, partial.join(''));
            // try if the condensed version can fit
            if (cpartial) {
              cres = cpartial.join(' ');
              if (cres.length - cwrapLen <= condense) res = wrap(token.obj, cres);
            }
          }
        }

        gap = mind;
        return res;
    }
  }


  runDsf = dsf.loadDsf(dsfDef, 'stringify');

  var res = "";
  var comments = keepComments ? comments = (common.getComment(data) || {}).r : null;
  if (comments && comments[0]) res = comments[0] + '\n';

  // get the result of stringifying the data.
  res += str(data, null, true, true);

  if (comments) res += comments[1]||"";

  return res;
};


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-version.js":
/*!***********************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/hjson/lib/hjson-version.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports="3.2.1";


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson.js":
/*!***************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/hjson/lib/hjson.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Hjson v3.2.1
 * http://hjson.org
 *
 * Copyright 2014-2017 Christian Zangl, MIT license
 * Details and documentation:
 * https://github.com/hjson/hjson-js
 *
 * This code is based on the the JSON version by Douglas Crockford:
 * https://github.com/douglascrockford/JSON-js (json_parse.js, json2.js)
 */

/*

  This file creates a Hjson object:


    Hjson.parse(text, options)

      options {
        keepWsc     boolean, keep white space and comments. This is useful
                    if you want to edit an hjson file and save it while
                    preserving comments (default false)

        dsf         array of DSF (see Hjson.dsf)

        legacyRoot  boolean, support omitting root braces (default true)
      }

      This method parses Hjson text to produce an object or array.
      It can throw a SyntaxError exception.


    Hjson.stringify(value, options)

      value         any JavaScript value, usually an object or array.

      options {     all options are

        keepWsc     boolean, keep white space. See parse.

        condense    integer, will try to fit objects/arrays onto one line
                    when the output is shorter than condense characters
                    and the fragment contains no comments. Default 0 (off).

        bracesSameLine
                    boolean, makes braces appear on the same line as the key
                    name. Default false.

        quotes      string, controls how strings are displayed.
                    setting separator implies "strings"
                    "min"     - no quotes whenever possible (default)
                    "keys"    - use quotes around keys
                    "strings" - use quotes around string values
                    "all"     - use quotes around keys and string values

        multiline   string, controls how multiline strings are displayed.
                    setting quotes implies "off"
                    "std"     - strings containing \n are shown in
                                multiline format (default)
                    "no-tabs" - like std but disallow tabs
                    "off"     - show in JSON format

        separator   boolean, output a comma separator between elements. Default false.

        space       specifies the indentation of nested structures. If it is
                    a number, it will specify the number of spaces to indent
                    at each level. If it is a string (such as '\t' or '  '),
                    it contains the characters used to indent at each level.

        eol         specifies the EOL sequence (default is set by
                    Hjson.setEndOfLine())

        colors      boolean, output ascii color codes

        dsf         array of DSF (see Hjson.dsf)

        emitRootBraces
                    obsolete: will always emit braces

        sortProps
                    When serializing objects into hjson, order the keys based on
                    their UTF-16 code units order
      }

      This method produces Hjson text from a JavaScript value.

      Values that do not have JSON representations, such as undefined or
      functions, will not be serialized. Such values in objects will be
      dropped; in arrays they will be replaced with null.
      stringify(undefined) returns undefined.


    Hjson.endOfLine()
    Hjson.setEndOfLine(eol)

      Gets or sets the stringify EOL sequence ('\n' or '\r\n').
      When running with node.js this defaults to os.EOL.


    Hjson.rt { parse, stringify }

      This is a shortcut to roundtrip your comments when reading and updating
      a config file. It is the same as specifying the keepWsc option for the
      parse and stringify functions.


    Hjson.version

      The version of this library.


    Hjson.dsf

      Domain specific formats are extensions to the Hjson syntax (see
      hjson.org). These formats will be parsed and made available to
      the application in place of strings (e.g. enable math to allow
      NaN values).

      Hjson.dsf ontains standard DSFs that can be passed to parse
      and stringify.


    Hjson.dsf.math()

      Enables support for Inf/inf, -Inf/-inf, Nan/naN and -0.
      Will output as Inf, -Inf, NaN and -0.


    Hjson.dsf.hex(options)

      Parse hexadecimal numbers prefixed with 0x.
      set options.out = true to stringify _all_ integers as hex.


    Hjson.dsf.date(options)

      support ISO dates


  This is a reference implementation. You are free to copy, modify, or
  redistribute.

*/



var common = __webpack_require__(/*! ./hjson-common */ "../../../node_modules/hjson/lib/hjson-common.js");
var version = __webpack_require__(/*! ./hjson-version */ "../../../node_modules/hjson/lib/hjson-version.js");
var parse = __webpack_require__(/*! ./hjson-parse */ "../../../node_modules/hjson/lib/hjson-parse.js");
var stringify = __webpack_require__(/*! ./hjson-stringify */ "../../../node_modules/hjson/lib/hjson-stringify.js");
var comments = __webpack_require__(/*! ./hjson-comments */ "../../../node_modules/hjson/lib/hjson-comments.js");
var dsf = __webpack_require__(/*! ./hjson-dsf */ "../../../node_modules/hjson/lib/hjson-dsf.js");

module.exports={

  parse: parse,
  stringify: stringify,

  endOfLine: function() { return common.EOL; },
  setEndOfLine: function(eol) {
    if (eol === '\n' || eol === '\r\n') common.EOL = eol;
  },

  version: version,

  // round trip shortcut
  rt: {
    parse: function(text, options) {
      (options=options||{}).keepWsc=true;
      return parse(text, options);
    },
    stringify: function(value, options) {
      (options=options||{}).keepWsc=true;
      return stringify(value, options);
    },
  },

  comments: comments,

  dsf: dsf.std,

};


/***/ }),

/***/ "../../../node_modules/os-browserify/browser.js":
/*!*********************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/os-browserify/browser.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ }),

/***/ "../../../node_modules/raw-loader/dist/cjs.js!./public/default.spec.hjson":
/*!***********************************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/raw-loader/dist/cjs.js!./public/default.spec.hjson ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{\n/*\n\nWelcome to Vega visualizations.  Here you can design your own dataviz from scratch using a declarative language called Vega, or its simpler form Vega-Lite.  In Vega, you have the full control of what data is loaded, even from multiple sources, how that data is transformed, and what visual elements are used to show it.  Use help icon to view Vega examples, tutorials, and other docs.  Use the wrench icon to reformat this text, or to remove comments.\n\nThis example graph shows the document count in all indexes in the current time range.  You might need to adjust the time filter in the upper right corner.\n*/\n\n  $schema: https://vega.github.io/schema/vega-lite/v5.json\n  title: Event counts from all indexes\n\n  // Define the data source\n  data: {\n    url: {\n/*\nAn object instead of a string for the \"url\" param is treated as an Elasticsearch query. Anything inside this object is not part of the Vega language, but only understood by Kibana and Elasticsearch server. This query counts the number of documents per time interval, assuming you have a @timestamp field in your data.\n\nKibana has a special handling for the fields surrounded by \"%\".  They are processed before the the query is sent to Elasticsearch. This way the query becomes context aware, and can use the time range and the dashboard filters.\n*/\n\n      // Apply dashboard context filters when set\n      %context%: true\n      // Filter the time picker (upper right corner) with this field\n      %timefield%: @timestamp\n\n/*\nSee .search() documentation for :  https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-search\n*/\n\n      // Which index to search\n      index: _all\n      // Aggregate data by the time field into time buckets, counting the number of documents in each bucket.\n      body: {\n        aggs: {\n          time_buckets: {\n            date_histogram: {\n              // Use date histogram aggregation on @timestamp field\n              field: @timestamp\n              // The interval value will depend on the daterange picker (true), or use an integer to set an approximate bucket count\n              interval: {%autointerval%: true}\n              // Make sure we get an entire range, even if it has no data\n              extended_bounds: {\n                // Use the current time range's start and end\n                min: {%timefilter%: \"min\"}\n                max: {%timefilter%: \"max\"}\n              }\n              // Use this for linear (e.g. line, area) graphs.  Without it, empty buckets will not show up\n              min_doc_count: 0\n            }\n          }\n        }\n        // Speed up the response by only including aggregation results\n        size: 0\n      }\n    }\n/*\nElasticsearch will return results in this format:\n\naggregations: {\n  time_buckets: {\n    buckets: [\n      {\n        key_as_string: 2015-11-30T22:00:00.000Z\n        key: 1448920800000\n        doc_count: 0\n      },\n      {\n        key_as_string: 2015-11-30T23:00:00.000Z\n        key: 1448924400000\n        doc_count: 0\n      }\n      ...\n    ]\n  }\n}\n\nFor our graph, we only need the list of bucket values.  Use the format.property to discard everything else.\n*/\n    format: {property: \"aggregations.time_buckets.buckets\"}\n  }\n\n  // \"mark\" is the graphics element used to show our data.  Other mark values are: area, bar, circle, line, point, rect, rule, square, text, and tick.  See https://vega.github.io/vega-lite/docs/mark.html\n  mark: line\n\n  // \"encoding\" tells the \"mark\" what data to use and in what way.  See https://vega.github.io/vega-lite/docs/encoding.html\n  encoding: {\n    x: {\n      // The \"key\" value is the timestamp in milliseconds.  Use it for X axis.\n      field: key\n      type: temporal\n      axis: {title: false} // Customize X axis format\n    }\n    y: {\n      // The \"doc_count\" is the count per bucket.  Use it for Y axis.\n      field: doc_count\n      type: quantitative\n      axis: {title: \"Document count\"}\n    }\n  }\n}\n");

/***/ }),

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeChart!../../../../../../../../private/var/tmp/_bazel_jagadish/7a3a977714afdd22e1cb951fc522eeed/execroot/kibana/bazel-out/darwin-fastbuild/bin/packages/kbn-ui-shared-deps/target_node/public_path_module_creator.js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/jagadish/NIIT_workspace/analytics/kibana/node_modules/val-loader/dist/cjs.js?key=visTypeChart!/private/var/tmp/_bazel_jagadish/7a3a977714afdd22e1cb951fc522eeed/execroot/kibana/bazel-out/darwin-fastbuild/bin/packages/kbn-ui-shared-deps/target_node/public_path_module_creator.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__kbnPublicPath__['visTypeChart']

/***/ }),

/***/ "./public/chart_fn.ts":
/*!****************************!*\
  !*** ./public/chart_fn.ts ***!
  \****************************/
/*! exports provided: createChartFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChartFn", function() { return createChartFn; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chart_request_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart_request_handler */ "./public/chart_request_handler.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



const createChartFn = dependencies => ({
  name: 'chart',
  type: 'render',
  inputTypes: ['kibana_context', 'null'],
  help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeChart.function.help', {
    defaultMessage: 'Chart visualization'
  }),
  args: {
    spec: {
      types: ['string'],
      default: '',
      help: ''
    }
  },

  async fn(input, args, context) {
    const chartRequestHandler = Object(_chart_request_handler__WEBPACK_IMPORTED_MODULE_2__["createChartRequestHandler"])(dependencies, context);
    const response = await chartRequestHandler({
      timeRange: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'timeRange'),
      query: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'query'),
      filters: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'filters'),
      visParams: {
        spec: args.spec
      },
      searchSessionId: context.getSearchSessionId(),
      executionContext: context.getExecutionContext()
    });
    console.log("Final search result", response);
    return {
      type: 'render',
      as: 'chart_vis',
      value: {
        visData: response,
        visType: 'chart',
        visConfig: {
          spec: args.spec
        }
      }
    };
  }

});

/***/ }),

/***/ "./public/chart_inspector/chart_adapter.ts":
/*!*************************************************!*\
  !*** ./public/chart_inspector/chart_adapter.ts ***!
  \*************************************************/
/*! exports provided: ChartAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartAdapter", function() { return ChartAdapter; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



const chartAdapterSignalLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeChart.inspector.chartAdapter.signal', {
  defaultMessage: 'Signal'
});
const chartAdapterValueLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeChart.inspector.chartAdapter.value', {
  defaultMessage: 'Value'
});
/** Get Runtime Scope for Chart View
 * @link https://vega.github.io/vega/docs/api/debugging/#scope
 **/

const getChartRuntimeScope = debugValues => debugValues.view._runtime;

const serializeColumns = (item, columns) => {
  const nonSerializableFieldLabel = '(..)';
  return columns.reduce((row, column) => {
    try {
      const cell = item[column];
      row[column] = typeof cell === 'object' ? JSON.stringify(cell) : `${cell}`;
    } catch (e) {
      row[column] = nonSerializableFieldLabel;
    }

    return row;
  }, {});
};

class ChartAdapter {
  constructor() {
    _defineProperty(this, "debugValuesSubject", new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]());
  }

  bindInspectValues(debugValues) {
    this.debugValuesSubject.next(debugValues);
  }

  getDataSetsSubscription() {
    return this.debugValuesSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(debugValues => Boolean(debugValues)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(debugValues => {
      const runtimeScope = getChartRuntimeScope(debugValues);
      return Object.keys(runtimeScope.data || []).reduce((acc, key) => {
        const value = runtimeScope.data[key].values.value;

        if (value && value[0]) {
          const columns = Object.keys(value[0]);
          acc.push({
            id: key,
            columns: columns.map(column => ({
              id: column,
              schema: 'json'
            })),
            data: value.map(item => serializeColumns(item, columns))
          });
        }

        return acc;
      }, []);
    }));
  }

  getSignalsSetsSubscription() {
    const signalsListener = this.debugValuesSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(debugValues => Boolean(debugValues)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(debugValues => {
      const runtimeScope = getChartRuntimeScope(debugValues);
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(...Object.keys(runtimeScope.signals).map(key => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEventPattern"])(handler => debugValues.view.addSignalListener(key, handler), handler => debugValues.view.removeSignalListener(key, handler)))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounce"])(val => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(350)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => debugValues));
    }));
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.debugValuesSubject, signalsListener).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(debugValues => Boolean(debugValues)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(debugValues => {
      const runtimeScope = getChartRuntimeScope(debugValues);
      return {
        columns: [{
          id: chartAdapterSignalLabel,
          schema: 'text'
        }, {
          id: chartAdapterValueLabel,
          schema: 'json'
        }],
        data: Object.keys(runtimeScope.signals).map(key => serializeColumns({
          [chartAdapterSignalLabel]: key,
          [chartAdapterValueLabel]: runtimeScope.signals[key].value
        }, [chartAdapterSignalLabel, chartAdapterValueLabel]))
      };
    }));
  }

  getSpecSubscription() {
    return this.debugValuesSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(debugValues => Boolean(debugValues)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(debugValues => JSON.stringify(debugValues.spec, null, 2)));
  }

}

/***/ }),

/***/ "./public/chart_inspector/chart_inspector.tsx":
/*!****************************************************!*\
  !*** ./public/chart_inspector/chart_inspector.tsx ***!
  \****************************************************/
/*! exports provided: getChartInspectorView, createInspectorAdapters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartInspectorView", function() { return getChartInspectorView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInspectorAdapters", function() { return createInspectorAdapters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kibana_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../kibana_react/public */ "plugin/kibanaReact/public");
/* harmony import */ var _kibana_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kibana_react_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../inspector/public */ "plugin/inspector/public");
/* harmony import */ var _inspector_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inspector_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chart_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart_adapter */ "./public/chart_inspector/chart_adapter.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */







const ChartDataInspector = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./chart_data_inspector */ "./public/chart_inspector/chart_data_inspector.tsx")));
const chartDebugLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeChart.inspector.chartDebugLabel', {
  defaultMessage: 'Chart debug'
});
const getChartInspectorView = dependencies => ({
  title: chartDebugLabel,

  shouldShow(adapters) {
    return Boolean(adapters.chart);
  },

  component: props => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_kibana_react_public__WEBPACK_IMPORTED_MODULE_3__["KibanaContextProvider"], {
    services: dependencies
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLoadingSpinner"], null)
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ChartDataInspector, props)))
});
const createInspectorAdapters = () => ({
  requests: new _inspector_public__WEBPACK_IMPORTED_MODULE_4__["RequestAdapter"](),
  chart: new _chart_adapter__WEBPACK_IMPORTED_MODULE_5__["ChartAdapter"]()
});

/***/ }),

/***/ "./public/chart_request_handler.ts":
/*!*****************************************!*\
  !*** ./public/chart_request_handler.ts ***!
  \*****************************************/
/*! exports provided: createChartRequestHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChartRequestHandler", function() { return createChartRequestHandler; });
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_model_search_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_model/search_api */ "./public/data_model/search_api.ts");
/* harmony import */ var _data_model_time_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data_model/time_cache */ "./public/data_model/time_cache.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function createChartRequestHandler({
  plugins: {
    data
  },
  core: {
    uiSettings
  },
  getServiceSettings
}, context = {}) {
  let searchAPI;
  const {
    timefilter
  } = data.query.timefilter;
  const timeCache = new _data_model_time_cache__WEBPACK_IMPORTED_MODULE_2__["TimeCache"](timefilter, 3 * 1000);
  console.log("Im in chart api handler");
  return async function chartRequestHandler({
    timeRange,
    filters,
    query,
    visParams,
    searchSessionId,
    executionContext
  }) {
    if (!searchAPI) {
      const {
        search,
        indexPatterns
      } = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getData"])();
      searchAPI = new _data_model_search_api__WEBPACK_IMPORTED_MODULE_1__["SearchAPI"]({
        uiSettings,
        search,
        indexPatterns,
        injectedMetadata: Object(_services__WEBPACK_IMPORTED_MODULE_3__["getInjectedMetadata"])()
      }, context.abortSignal, context.inspectorAdapters, searchSessionId, executionContext);
    }

    timeCache.setTimeRange(timeRange);
    const esQueryConfigs = _data_public__WEBPACK_IMPORTED_MODULE_0__["esQuery"].getEsQueryConfig(uiSettings);
    const filtersDsl = _data_public__WEBPACK_IMPORTED_MODULE_0__["esQuery"].buildEsQuery(undefined, query, filters, esQueryConfigs);
    const {
      ChartParser
    } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./data_model/chart_parser */ "./public/data_model/chart_parser.ts"));
    const vp = new ChartParser(visParams.spec, searchAPI, timeCache, filtersDsl, getServiceSettings); // console.log("data", searchAPI);

    return await vp.parseAsync();
  };
}

/***/ }),

/***/ "./public/chart_type.ts":
/*!******************************!*\
  !*** ./public/chart_type.ts ***!
  \******************************/
/*! exports provided: createChartTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChartTypeDefinition", function() { return createChartTypeDefinition; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hjson */ "../../../node_modules/hjson/lib/hjson.js");
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hjson__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _default_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default_spec */ "./public/default_spec.ts");
/* harmony import */ var _lib_extract_index_pattern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/extract_index_pattern */ "./public/lib/extract_index_pattern.ts");
/* harmony import */ var _chart_inspector_chart_inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart_inspector/chart_inspector */ "./public/chart_inspector/chart_inspector.tsx");
/* harmony import */ var _to_ast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./to_ast */ "./public/to_ast.ts");
/* harmony import */ var _components_experimental_map_vis_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/experimental_map_vis_info */ "./public/components/experimental_map_vis_info.tsx");
/* harmony import */ var _components_chart_vis_editor_lazy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chart_vis_editor_lazy */ "./public/components/chart_vis_editor_lazy.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */










const createChartTypeDefinition = () => {
  return {
    name: 'chart',
    title: 'Chart',
    getInfoMessage: _components_experimental_map_vis_info__WEBPACK_IMPORTED_MODULE_8__["getInfoMessage"],
    description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeChart.type.chartDescription', {
      defaultMessage: 'chart kibana plugin',
      description: 'Chart and Chart-Lite are product names and should not be translated'
    }),
    note: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeChart.type.chartNote', {
      defaultMessage: 'Requires knowledge of Chart syntax.'
    }),
    icon: 'visChart',
    group: _visualizations_public__WEBPACK_IMPORTED_MODULE_3__["VisGroups"].PROMOTED,
    titleInWizard: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeChart.type.chartTitleInWizard', {
      defaultMessage: 'Chart visualization'
    }),
    visConfig: {
      defaults: {
        spec: Object(_default_spec__WEBPACK_IMPORTED_MODULE_4__["getDefaultSpec"])()
      }
    },
    editorConfig: {
      optionsTemplate: _components_chart_vis_editor_lazy__WEBPACK_IMPORTED_MODULE_9__["ChartVisEditorComponent"],
      enableAutoApply: true,
      defaultSize: _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__["DefaultEditorSize"].MEDIUM
    },
    toExpressionAst: _to_ast__WEBPACK_IMPORTED_MODULE_7__["toExpressionAst"],
    options: {
      showIndexSelection: false,
      showQueryBar: true,
      showFilterBar: true
    },
    getSupportedTriggers: () => {
      return [_visualizations_public__WEBPACK_IMPORTED_MODULE_3__["VIS_EVENT_TO_TRIGGER"].applyFilter];
    },
    getUsedIndexPattern: async visParams => {
      try {
        const spec = Object(hjson__WEBPACK_IMPORTED_MODULE_1__["parse"])(visParams.spec, {
          legacyRoot: false,
          keepWsc: true
        });
        return Object(_lib_extract_index_pattern__WEBPACK_IMPORTED_MODULE_5__["extractIndexPatternsFromSpec"])(spec);
      } catch (e) {// spec is invalid
      }

      return [];
    },
    inspectorAdapters: _chart_inspector_chart_inspector__WEBPACK_IMPORTED_MODULE_6__["createInspectorAdapters"],

    /**
     * This is necessary for showing actions bar in top of chart editor
     */
    requiresSearch: true
  };
};

/***/ }),

/***/ "./public/chart_view/chart_map_view/constants.ts":
/*!*******************************************************!*\
  !*** ./public/chart_view/chart_map_view/constants.ts ***!
  \*******************************************************/
/*! exports provided: chartLayerId, userConfiguredLayerId, defaultMapConfig, defaultMabBoxStyle, defaultProjection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartLayerId", function() { return chartLayerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userConfiguredLayerId", function() { return userConfiguredLayerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMapConfig", function() { return defaultMapConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMabBoxStyle", function() { return defaultMabBoxStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProjection", function() { return defaultProjection; });
/* harmony import */ var _maps_ems_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../maps_ems/public */ "plugin/mapsEms/public");
/* harmony import */ var _maps_ems_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_maps_ems_public__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

const chartLayerId = 'chart';
const userConfiguredLayerId = _maps_ems_public__WEBPACK_IMPORTED_MODULE_0__["TMS_IN_YML_ID"];
const defaultMapConfig = {
  maxZoom: 20,
  minZoom: 0,
  tileSize: 256
};
const defaultMabBoxStyle = {
  /**
   * according to the MapBox documentation that value should be '8'
   * @see (https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#version)
   */
  version: 8,
  sources: {},
  layers: []
};
const defaultProjection = {
  name: 'projection',
  type: 'mercator',
  scale: {
    signal: '512*pow(2,zoom)/2/PI'
  },
  rotate: [{
    signal: '-longitude'
  }, 0, 0],
  center: [0, {
    signal: 'latitude'
  }],
  translate: [{
    signal: 'width/2'
  }, {
    signal: 'height/2'
  }],
  fit: false
};

/***/ }),

/***/ "./public/chart_view/chart_map_view/map_service_settings.ts":
/*!******************************************************************!*\
  !*** ./public/chart_view/chart_map_view/map_service_settings.ts ***!
  \******************************************************************/
/*! exports provided: MapServiceSettings, getAttributionsForTmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapServiceSettings", function() { return MapServiceSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributionsForTmsService", function() { return getAttributionsForTmsService; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./public/chart_view/chart_map_view/constants.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




const hasUserConfiguredTmsService = config => {
  var _config$tilemap;

  return Boolean((_config$tilemap = config.tilemap) === null || _config$tilemap === void 0 ? void 0 : _config$tilemap.url);
};

const initEmsClientAsync = async config => {
  /**
   * Build optimization: '@elastic/ems-client' should be loaded from a separate chunk
   */
  const emsClientModule = await __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @elastic/ems-client */ "../../../node_modules/@elastic/ems-client/target/web/index.js"));
  return new emsClientModule.EMSClient({
    language: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].getLocale(),
    appName: 'kibana',

    // Wrap to avoid errors passing window fetch
    fetchFunction(input, init) {
      return fetch(input, init);
    },

    ...config
  });
};

class MapServiceSettings {
  constructor(config, appVersion) {
    this.config = config;
    this.appVersion = appVersion;

    _defineProperty(this, "emsClient", void 0);

    _defineProperty(this, "isDarkMode", false);
  }

  isInitialized() {
    return Boolean(this.emsClient);
  }

  hasUserConfiguredTmsLayer() {
    return hasUserConfiguredTmsService(this.config);
  }

  defaultTmsLayer() {
    const {
      dark,
      desaturated
    } = this.config.emsTileLayerId;

    if (this.hasUserConfiguredTmsLayer()) {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["userConfiguredLayerId"];
    }

    return this.isDarkMode ? dark : desaturated;
  }

  async initialize() {
    this.isDarkMode = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getUISettings"])().get('theme:darkMode');
    this.emsClient = await initEmsClientAsync({
      appVersion: this.appVersion,
      fileApiUrl: this.config.emsFileApiUrl,
      tileApiUrl: this.config.emsTileApiUrl,
      landingPageUrl: this.config.emsLandingPageUrl
    }); // Allow zooms > 10 for Chart Maps
    // any kibana user, regardless of distribution, should get all zoom levels
    // use `sspl` license to indicate this

    this.emsClient.addQueryParams({
      license: 'sspl'
    });
  }

  async getTmsService(tmsTileLayer) {
    var _this$emsClient;

    if (!this.isInitialized()) {
      await this.initialize();
    }

    return (_this$emsClient = this.emsClient) === null || _this$emsClient === void 0 ? void 0 : _this$emsClient.findTMSServiceById(tmsTileLayer);
  }

}
function getAttributionsForTmsService(tmsService) {
  return tmsService.getAttributions().map(({
    label,
    url
  }) => {
    const anchorTag = document.createElement('a');
    anchorTag.textContent = label;
    anchorTag.setAttribute('rel', 'noreferrer noopener');
    anchorTag.setAttribute('href', url);
    return anchorTag.outerHTML;
  });
}

/***/ }),

/***/ "./public/chart_vis_renderer.tsx":
/*!***************************************!*\
  !*** ./public/chart_vis_renderer.tsx ***!
  \***************************************/
/*! exports provided: getChartVisRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartVisRenderer", function() { return getChartVisRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




const ChartVisComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./components/chart_vis_component */ "./public/components/chart_vis_component.tsx")));
const getChartVisRenderer = deps => ({
  name: 'chart_vis',
  reuseDomNode: true,
  render: (domNode, {
    visData
  }, handlers) => {
    handlers.onDestroy(() => {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"])(domNode);
    });
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_visualizations_public__WEBPACK_IMPORTED_MODULE_2__["VisualizationContainer"], {
      handlers: handlers
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ChartVisComponent, {
      deps: deps,
      fireEvent: handlers.event,
      renderComplete: handlers.done,
      visData: visData
    })), domNode);
  }
});

/***/ }),

/***/ "./public/components/chart_vis_editor_lazy.tsx":
/*!*****************************************************!*\
  !*** ./public/components/chart_vis_editor_lazy.tsx ***!
  \*****************************************************/
/*! exports provided: ChartVisEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartVisEditorComponent", function() { return ChartVisEditorComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


const ChartVisEditor = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./chart_vis_editor */ "./public/components/chart_vis_editor.tsx")));
const ChartVisEditorComponent = props => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ChartVisEditor, props);

/***/ }),

/***/ "./public/components/experimental_map_vis_info.tsx":
/*!*********************************************************!*\
  !*** ./public/components/experimental_map_vis_info.tsx ***!
  \*********************************************************/
/*! exports provided: getInfoMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfoMessage", function() { return getInfoMessage; });
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hjson */ "../../../node_modules/hjson/lib/hjson.js");
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hjson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






function ExperimentalMapLayerInfo() {
  const title = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeChart.mapView.experimentalMapLayerInfo",
    defaultMessage: "Map layer is experimental and is not subject to the support SLA of official GA features. For feedback, please create an issue in {githubLink}.",
    values: {
      githubLink: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLink"], {
        external: true,
        href: "https://github.com/elastic/kibana/issues/new/choose",
        target: "_blank"
      }, "GitHub")
    }
  });

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
    className: "hide-for-sharing",
    "data-test-subj": "experimentalMapLayerInfo",
    size: "s",
    title: title,
    iconType: "beaker"
  });
}

const getInfoMessage = vis => {
  if (vis.params.spec) {
    try {
      var _spec$config, _spec$config$kibana;

      const spec = Object(hjson__WEBPACK_IMPORTED_MODULE_0__["parse"])(vis.params.spec, {
        legacyRoot: false,
        keepWsc: true
      });

      if (((_spec$config = spec.config) === null || _spec$config === void 0 ? void 0 : (_spec$config$kibana = _spec$config.kibana) === null || _spec$config$kibana === void 0 ? void 0 : _spec$config$kibana.type) === 'map') {
        return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(ExperimentalMapLayerInfo, null);
      }
    } catch (e) {// spec is invalid
    }
  }

  return null;
};

/***/ }),

/***/ "./public/data_model/search_api.ts":
/*!*****************************************!*\
  !*** ./public/data_model/search_api.ts ***!
  \*****************************************/
/*! exports provided: extendSearchParamsWithRuntimeFields, SearchAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendSearchParamsWithRuntimeFields", function() { return extendSearchParamsWithRuntimeFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAPI", function() { return SearchAPI; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */





/** @internal **/
const extendSearchParamsWithRuntimeFields = async (indexPatterns, requestParams, indexPatternString) => {
  if (indexPatternString) {
    var _requestParams$body;

    let runtimeMappings = (_requestParams$body = requestParams.body) === null || _requestParams$body === void 0 ? void 0 : _requestParams$body.runtime_mappings;

    if (!runtimeMappings) {
      const indexPattern = (await indexPatterns.find(indexPatternString)).find(index => index.title === indexPatternString);
      runtimeMappings = indexPattern === null || indexPattern === void 0 ? void 0 : indexPattern.getComputedFields().runtimeFields;
    }

    return { ...requestParams,
      body: { ...requestParams.body,
        runtime_mappings: runtimeMappings
      }
    };
  }

  return requestParams;
};
class SearchAPI {
  constructor(dependencies, abortSignal, inspectorAdapters, searchSessionId, executionContext) {
    this.dependencies = dependencies;
    this.abortSignal = abortSignal;
    this.inspectorAdapters = inspectorAdapters;
    this.searchSessionId = searchSessionId;
    this.executionContext = executionContext;
  }

  search(searchRequests) {
    const {
      search,
      indexPatterns
    } = this.dependencies;
    const requestResponders = {};
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(searchRequests.map(request => {
      const requestId = request.name;
      const requestParams = Object(_data_public__WEBPACK_IMPORTED_MODULE_2__["getSearchParamsFromRequest"])(request, {
        getConfig: this.dependencies.uiSettings.get.bind(this.dependencies.uiSettings)
      });
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(extendSearchParamsWithRuntimeFields(indexPatterns, requestParams, request.index)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(params => {
        /** inspect request data **/
        if (this.inspectorAdapters) {
          requestResponders[requestId] = this.inspectorAdapters.requests.start(requestId, { ...request,
            searchSessionId: this.searchSessionId
          });
          requestResponders[requestId].json(params.body);
        }

        console.log("Im searching data", params);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(params => search.search({
        params
      }, {
        abortSignal: this.abortSignal,
        sessionId: this.searchSessionId,
        executionContext: this.executionContext
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(data => this.inspectSearchResult(data, requestResponders[requestId])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => ({
        name: requestId,
        rawResponse: data.rawResponse
      })))));
    }));
  }

  resetSearchStats() {
    if (this.inspectorAdapters) {
      this.inspectorAdapters.requests.reset();
    }
  }

  inspectSearchResult(response, requestResponder) {
    console.log('raw response', response.rawResponse);

    if (requestResponder) {
      requestResponder.stats(_data_public__WEBPACK_IMPORTED_MODULE_2__["search"].getResponseInspectorStats(response.rawResponse)).ok({
        json: response.rawResponse
      });
    }
  }

}

/***/ }),

/***/ "./public/data_model/time_cache.ts":
/*!*****************************************!*\
  !*** ./public/data_model/time_cache.ts ***!
  \*****************************************/
/*! exports provided: TimeCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeCache", function() { return TimeCache; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Optimization caching - always return the same value if queried within this time
 * @type {number}
 */
const AlwaysCacheMaxAge = 40;
/**
 * This class caches timefilter's bounds to minimize number of server requests
 */

class TimeCache {
  constructor(timefilter, maxAge) {
    _defineProperty(this, "_timefilter", void 0);

    _defineProperty(this, "_maxAge", void 0);

    _defineProperty(this, "_cachedBounds", void 0);

    _defineProperty(this, "_cacheTS", void 0);

    _defineProperty(this, "_timeRange", void 0);

    this._timefilter = timefilter;
    this._maxAge = maxAge;
    this._cacheTS = 0;
  } // Simplifies unit testing
  // noinspection JSMethodCanBeStatic


  _now() {
    return Date.now();
  }
  /**
   * Get cached time range values
   * @returns {{min: number, max: number}}
   */


  getTimeBounds() {
    const ts = this._now();

    let bounds = null;

    if (this._cachedBounds) {
      const diff = ts - this._cacheTS; // For very rapid usage (multiple calls within a few milliseconds)
      // Avoids expensive time parsing

      if (diff < AlwaysCacheMaxAge) {
        return this._cachedBounds;
      } // If the time is relative, mode hasn't changed, and time hasn't changed more than maxAge,
      // return old time to avoid multiple near-identical server calls


      if (diff < this._maxAge) {
        bounds = this._getBounds();

        if (Math.abs(bounds.min - this._cachedBounds.min) < this._maxAge && Math.abs(bounds.max - this._cachedBounds.max) < this._maxAge) {
          return this._cachedBounds;
        }
      }
    }

    this._cacheTS = ts;
    this._cachedBounds = bounds || this._getBounds();
    return this._cachedBounds;
  }

  setTimeRange(timeRange) {
    this._timeRange = timeRange;
  }
  /**
   * Get parsed min/max values
   * @returns {{min: number, max: number}}
   * @private
   */


  _getBounds() {
    const bounds = this._timefilter.calculateBounds(this._timeRange);

    return {
      min: bounds.min.valueOf(),
      max: bounds.max.valueOf()
    };
  }

}

/***/ }),

/***/ "./public/default_spec.ts":
/*!********************************!*\
  !*** ./public/default_spec.ts ***!
  \********************************/
/*! exports provided: getDefaultSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSpec", function() { return getDefaultSpec; });
/* harmony import */ var _raw_loader_default_spec_hjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./default.spec.hjson */ "../../../node_modules/raw-loader/dist/cjs.js!./public/default.spec.hjson");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// @ts-ignore

const getDefaultSpec = () => _raw_loader_default_spec_hjson__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["ChartPlugin"](initializerContext);
}

/***/ }),

/***/ "./public/lib/extract_index_pattern.ts":
/*!*********************************************!*\
  !*** ./public/lib/extract_index_pattern.ts ***!
  \*********************************************/
/*! exports provided: extractIndexPatternsFromSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractIndexPatternsFromSpec", function() { return extractIndexPatternsFromSpec; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


const extractIndexPatternsFromSpec = async spec => {
  const {
    indexPatterns
  } = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getData"])();
  let data = [];

  if (Array.isArray(spec.data)) {
    data = spec.data;
  } else if (spec.data) {
    data = [spec.data];
  }

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(await Promise.all(data.reduce((accumulator, currentValue) => {
    var _currentValue$url;

    if ((_currentValue$url = currentValue.url) !== null && _currentValue$url !== void 0 && _currentValue$url.index) {
      accumulator.push(indexPatterns.find(currentValue.url.index));
    }

    return accumulator;
  }, [])));
};

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: ChartPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPlugin", function() { return ChartPlugin; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _chart_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart_fn */ "./public/chart_fn.ts");
/* harmony import */ var _chart_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart_type */ "./public/chart_type.ts");
/* harmony import */ var _chart_inspector_chart_inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart_inspector/chart_inspector */ "./public/chart_inspector/chart_inspector.tsx");
/* harmony import */ var _chart_vis_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart_vis_renderer */ "./public/chart_vis_renderer.tsx");
/* harmony import */ var _chart_view_chart_map_view_map_service_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart_view/chart_map_view/map_service_settings */ "./public/chart_view/chart_map_view/map_service_settings.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






/** @internal */

/** @internal */
class ChartPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "initializerContext", void 0);

    this.initializerContext = initializerContext;
  }

  setup(core, {
    inspector,
    data,
    expressions,
    visualizations,
    mapsEms
  }) {
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setInjectedVars"])({
      enableExternalUrls: this.initializerContext.config.get().enableExternalUrls,
      emsTileLayerId: core.injectedMetadata.getInjectedVar('emsTileLayerId', true)
    });
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setUISettings"])(core.uiSettings);
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setMapServiceSettings"])(new _chart_view_chart_map_view_map_service_settings__WEBPACK_IMPORTED_MODULE_5__["MapServiceSettings"](mapsEms.config, this.initializerContext.env.packageInfo.version));
    const visualizationDependencies = {
      core,
      plugins: {
        data
      },
      getServiceSettings: mapsEms.getServiceSettings
    };
    inspector.registerView(Object(_chart_inspector_chart_inspector__WEBPACK_IMPORTED_MODULE_3__["getChartInspectorView"])({
      uiSettings: core.uiSettings
    }));
    expressions.registerFunction(() => Object(_chart_fn__WEBPACK_IMPORTED_MODULE_1__["createChartFn"])(visualizationDependencies));
    expressions.registerRenderer(Object(_chart_vis_renderer__WEBPACK_IMPORTED_MODULE_4__["getChartVisRenderer"])(visualizationDependencies));
    visualizations.createBaseVisualization(Object(_chart_type__WEBPACK_IMPORTED_MODULE_2__["createChartTypeDefinition"])());
  }

  start(core, {
    data
  }) {
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setNotifications"])(core.notifications);
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setData"])(data);
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setInjectedMetadata"])(core.injectedMetadata);
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setDocLinks"])(core.docLinks);
  }

}

/***/ }),

/***/ "./public/services.ts":
/*!****************************!*\
  !*** ./public/services.ts ***!
  \****************************/
/*! exports provided: getData, setData, getNotifications, setNotifications, getUISettings, setUISettings, getInjectedMetadata, setInjectedMetadata, getMapServiceSettings, setMapServiceSettings, getInjectedVars, setInjectedVars, getEnableExternalUrls, getDocLinks, setDocLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotifications", function() { return getNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotifications", function() { return setNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUISettings", function() { return getUISettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUISettings", function() { return setUISettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedMetadata", function() { return getInjectedMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInjectedMetadata", function() { return setInjectedMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMapServiceSettings", function() { return getMapServiceSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMapServiceSettings", function() { return setMapServiceSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedVars", function() { return getInjectedVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInjectedVars", function() { return setInjectedVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnableExternalUrls", function() { return getEnableExternalUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocLinks", function() { return getDocLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDocLinks", function() { return setDocLinks; });
/* harmony import */ var _kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _kibana_utils_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

const [getData, setData] = Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Data');
const [getNotifications, setNotifications] = Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Notifications');
const [getUISettings, setUISettings] = Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('UISettings');
const [getInjectedMetadata, setInjectedMetadata] = Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('InjectedMetadata');
const [getMapServiceSettings, setMapServiceSettings] = Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('MapServiceSettings');
const [getInjectedVars, setInjectedVars] = Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('InjectedVars');
const getEnableExternalUrls = () => getInjectedVars().enableExternalUrls;
const [getDocLinks, setDocLinks] = Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('docLinks');

/***/ }),

/***/ "./public/to_ast.ts":
/*!**************************!*\
  !*** ./public/to_ast.ts ***!
  \**************************/
/*! exports provided: toExpressionAst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toExpressionAst", function() { return toExpressionAst; });
/* harmony import */ var _expressions_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../expressions/public */ "plugin/expressions/public");
/* harmony import */ var _expressions_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_expressions_public__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

const toExpressionAst = vis => {
  const chart = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpressionFunction"])('chart', {
    spec: vis.params.spec
  });
  const ast = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])([chart]);
  return ast.toAst();
};

/***/ }),

/***/ "@elastic/eui":
/*!***********************************************!*\
  !*** external "__kbnSharedDeps__.ElasticEui" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.ElasticEui;

/***/ }),

/***/ "@emotion/react":
/*!*************************************************!*\
  !*** external "__kbnSharedDeps__.EmotionReact" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.EmotionReact;

/***/ }),

/***/ "@kbn/i18n":
/*!********************************************!*\
  !*** external "__kbnSharedDeps__.KbnI18n" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.KbnI18n;

/***/ }),

/***/ "@kbn/i18n/react":
/*!*************************************************!*\
  !*** external "__kbnSharedDeps__.KbnI18nReact" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.KbnI18nReact;

/***/ }),

/***/ "@kbn/monaco":
/*!**********************************************!*\
  !*** external "__kbnSharedDeps__.KbnMonaco" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.KbnMonaco;

/***/ }),

/***/ "@kbn/ui-shared-deps/theme":
/*!******************************************!*\
  !*** external "__kbnSharedDeps__.Theme" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Theme;

/***/ }),

/***/ "jquery":
/*!*******************************************!*\
  !*** external "__kbnSharedDeps__.Jquery" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Jquery;

/***/ }),

/***/ "lodash":
/*!*******************************************!*\
  !*** external "__kbnSharedDeps__.Lodash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Lodash;

/***/ }),

/***/ "moment":
/*!*******************************************!*\
  !*** external "__kbnSharedDeps__.Moment" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Moment;

/***/ }),

/***/ "plugin/data/public":
/*!*******************************************!*\
  !*** @kbn/bundleRef "plugin/data/public" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/data/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/expressions/public":
/*!**************************************************!*\
  !*** @kbn/bundleRef "plugin/expressions/public" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/expressions/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/inspector/public":
/*!************************************************!*\
  !*** @kbn/bundleRef "plugin/inspector/public" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/inspector/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/kibanaReact/public":
/*!**************************************************!*\
  !*** @kbn/bundleRef "plugin/kibanaReact/public" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/kibanaReact/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/kibanaUtils/public":
/*!**************************************************!*\
  !*** @kbn/bundleRef "plugin/kibanaUtils/public" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/kibanaUtils/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/mapsEms/public":
/*!**********************************************!*\
  !*** @kbn/bundleRef "plugin/mapsEms/public" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/mapsEms/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/visDefaultEditor/public":
/*!*******************************************************!*\
  !*** @kbn/bundleRef "plugin/visDefaultEditor/public" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/visDefaultEditor/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/visualizations/public":
/*!*****************************************************!*\
  !*** @kbn/bundleRef "plugin/visualizations/public" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/visualizations/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "react":
/*!******************************************!*\
  !*** external "__kbnSharedDeps__.React" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.React;

/***/ }),

/***/ "react-dom":
/*!*********************************************!*\
  !*** external "__kbnSharedDeps__.ReactDom" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.ReactDom;

/***/ }),

/***/ "rxjs":
/*!*****************************************!*\
  !*** external "__kbnSharedDeps__.Rxjs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Rxjs;

/***/ }),

/***/ "rxjs/operators":
/*!**************************************************!*\
  !*** external "__kbnSharedDeps__.RxjsOperators" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.RxjsOperators;

/***/ })

/******/ });
//# sourceMappingURL=visTypeChart.plugin.js.map