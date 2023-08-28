/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/fonts/DCC-Ash.otf */ \"./src/assets/fonts/DCC-Ash.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/fonts/SedgwickAveDisplay-Regular.ttf */ \"./src/assets/fonts/SedgwickAveDisplay-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset CSS */\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    user-select: none;\n}\n\n\n/* Variables */\n:root {\n    --red: #E60000;\n    --blue: #001F3F;\n    --text-color: #fafafa;\n    --black: #2b2b2b;\n}\n\n\n/* Custom Font */\n@font-face {\n    font-family: 'Heading';\n    /*Font not in use*/\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}), format('otf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Sedgewick Ave';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}), format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    background: linear-gradient(rgba(0, 31, 63, 0.8), rgba(0, 12, 24, 0.8)), url(http://127.0.0.1:5500/dist/d2edf3c4004c36b986c6.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position-y: 65%;\n    background-position-x: right;\n\n    color: var(--text-color);\n}\n\n\n#content {\n    font-family: 'Sedgewick Ave';\n}\n\n#heading {\n    font-size: 2.6rem;\n    text-align: center;\n}\n\n#content {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5vh 0;\n    gap: 4rem;\n}\n\n\n.red-txt {\n    color: var(--red);\n}\n\n\n#nav {\n    display: flex;\n    gap: 1.2rem;\n}\n\n.navBtn {\n    padding: 0.9rem;\n    border-radius: 12px;\n    background: var(--text-color);\n    border: 0;\n    cursor: pointer;\n}\n\n.nav.icon {\n    max-width: 32px;\n}\n\n/* Home */\n#main.home {\n    /* width: max(300px, 85vw); */\n    padding: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 1.5rem;\n    overflow: scroll;\n    box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 1);\n    background: rgb(0, 0, 0, 0.2);\n}\n\n#main.home>p {\n    font-size: 1.4rem;\n    width: 35vw;\n    max-width: 600px;\n    align-self: flex-start;\n}\n\n#main.home>img {\n    width: max(300px, 40vw);\n    max-width: 420px;\n    height: 100%;\n    object-fit: cover;\n    object-position: right;\n    border-radius: 12px;\n}\n\n/* Menu */\n#main.menu {\n    display: flex;\n    width: max(300px, 80vw);\n    justify-content: flex-start;\n    align-items: baseline;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    padding: 2.5rem;\n    gap: 1.5rem;\n    overflow: scroll;\n}\n\n.dish {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: min-content 1fr;\n    gap: 1rem;\n    width: 45%;\n    min-width: 200px;\n    padding: 1.3rem 1.5rem;\n    background: rgba(0, 12, 24, 0.8);\n    border-radius: 10px;\n    min-width: 500px;\n}\n\n.dish>p.name {\n    font-size: 1.6rem;\n    padding-top: 0.4rem;\n}\n\n.dish>img {\n    grid-row: 1/3;\n    max-width: 250px;\n    border-radius: 8px;\n}\n\n\n/* Contact */\n#main.contact {\n    width: max(300px, 50vw);\n    padding: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 2rem;\n    overflow: scroll;\n    box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 1);\n    background: rgb(0, 0, 0, 0.2);\n    flex-direction: column;\n}\n\n\n#main.contact>p {\n    font-size: 1.4rem;\n    text-align: center;\n}\n\n.disclaimer {\n    font-size: 0.8rem !important;\n}\n\n#main>p:nth-child(2) {\n    user-select: text;\n}\n\n\n\n\n/* Media Queries for phone */\n@media(max-width : 768px) {\n    #main.home {\n        flex-direction: column-reverse;\n        height: 100%;\n        justify-content: unset;\n    }\n\n    #main>p:nth-child(1) {\n        width: 100%;\n        text-align: center;\n        font-size: 1.2rem;\n    }\n\n    #main.home>img {\n        height: unset;\n    }\n\n    #main.home::before\n    {\n        content: '︿';\n        font-size: 1rem;\n    }\n\n    #content {\n        padding: 1.2rem 1rem;\n        gap: 1.2rem;\n    }\n\n    #main>img:nth-child(2) {\n        width: 100%;\n    }\n\n    #main.menu {\n        width: max(300px, 85vw);\n        overflow: auto;\n        padding: 1rem;\n        align-content: flex-start;\n        justify-content: center;\n        flex-direction: column;\n    }\n\n    .dish {\n        width: min-content;\n        place-items: center;\n        grid-template-columns: unset;\n        min-width: unset;\n    }\n\n    div.dish>* {\n        text-align: center;\n    }\n\n\n    #main.contact,\n    #main.home {\n        width: max(300px, 90vw);\n    }\n\n    #main::-webkit-scrollbar {\n        display: none;\n    }\n\n    #main {\n        -ms-overflow-style: none;\n        /* Internet Explorer 10+ */\n        scrollbar-width: none;\n        /* Firefox */\n    }\n    .disclaimer\n    {\n        font-size: 0.6rem !important;\n    }\n    .dish::after\n    {\n        content: '〈                 〉';\n    }\n\n    .dish:nth-child(1)::after\n    {\n        content: '〉';\n    }\n    .dish:last-child::after\n    {\n        content: '〈';\n        \n    }\n    \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderContact)\n/* harmony export */ });\nfunction renderContact() {\n    const heading = document.querySelector('#heading')\n    const main = document.querySelector('#main');\n\n    const restaurantInfo = document.createElement('p')\n    const contactInfo = document.createElement('p')\n    const disclaimer = document.createElement('p');\n\n    restaurantInfo.textContent = `Reach out to us with any inquiries, reservations, or special event bookings. We're here to ensure your experience at The Supes' Kitchen is as remarkable as a showdown in The Boys. Follow us on social media to stay up-to-date with our latest dishes and heroic offers!\n    🦸‍♂️ Unleash Your Inner Foodie. Visit The Supes' Kitchen Today! 🦸‍♀`\n\n    contactInfo.innerHTML = `📍 Location: 123 Vought Avenue, The Seven Tower, Vought City<br>\n    ☎️ Phone: 555-HERO-FOOD<br>\n    📧 Email: info@supeskitchen.com`;\n\n    disclaimer.textContent = `(Note: The above content is a fictional representation and is not endorsed or affiliated with the TV show \"The Boys\" or any related entities.)`\n\n\n    main.classList.add('contact');\n    disclaimer.classList.add('disclaimer');\n\n    heading.textContent = \"Contact Us\"\n    main.appendChild(restaurantInfo);\n    main.appendChild(contactInfo);\n    main.appendChild(disclaimer);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _src_assets_supes_kitchen_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/supes-kitchen.png */ \"./src/assets/supes-kitchen.png\");\n\n\nfunction renderHome() {\n    const main = document.querySelector('#main');\n    const heading = document.querySelector('#heading')\n\n    const info = document.createElement('p');\n    const img = document.createElement('img')\n\n    main.classList.add('home');\n\n    heading.innerHTML = \"Welcome to &quot;The <span class ='red-txt'>Supes'</span> Kitchen&quot;!\"\n\n    info.textContent = `🌟 Unleash Your Appetite with Superpowered Flavors! 🌟\n    Step into a world where culinary excellence meets superhuman passion. At The Supes' Kitchen, we bring you an experience that's truly out of this world. Our restaurant isn't just a place to dine; it's a celebration of flavors, all inspired by the twisted charm of \"The Boys.\"\n    Indulge in a dining adventure that's as wild and thrilling as the show itself. Our restaurant's exterior is a spectacle at night, with mesmerizing lights that beckon you to enter. As you step inside, you'll be greeted by an ambiance that reflects the grit and intensity of 'The Boys' universe.\n    From the dark and mysterious corners to the vibrant energy of our open kitchen, every detail is crafted to immerse you in a world where culinary creativity knows no bounds. Get ready to embark on a gastronomic journey that will challenge your taste buds and redefine your dining expectations.`\n\n\n    img.src = _src_assets_supes_kitchen_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    main.appendChild(info);\n    main.appendChild(img);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/style.css */ \"./src/style.css\");\n/* harmony import */ var _src_assets_fonts_DCC_Ash_otf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/assets/fonts/DCC-Ash.otf */ \"./src/assets/fonts/DCC-Ash.otf\");\n/* harmony import */ var _src_assets_fonts_SedgwickAveDisplay_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/assets/fonts/SedgwickAveDisplay-Regular.ttf */ \"./src/assets/fonts/SedgwickAveDisplay-Regular.ttf\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init.js */ \"./src/init.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n//Assets\n\n\n\n\n//Modules \n\n\n\n\n\n\n\n\n//Initialise Page Load\n(0,_init_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n// Select Button\nconst homeBtn = document.querySelector('button#home');\nconst menuBtn = document.querySelector('button#menu');\nconst contactBtn = document.querySelector('button#contact');\n\n// Event listeners\nhomeBtn.addEventListener('click', () => {\n    (0,_init_js__WEBPACK_IMPORTED_MODULE_3__.clearMain)();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\nmenuBtn.addEventListener('click', () => {\n    (0,_init_js__WEBPACK_IMPORTED_MODULE_3__.clearMain)();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n})\n\ncontactBtn.addEventListener('click', () => {\n    ;(0,_init_js__WEBPACK_IMPORTED_MODULE_3__.clearMain)();\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n});\n\n\n\n// Notes for self\n// Need to optimise images from tinyPng \n// Need to add animations\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearMain: () => (/* binding */ clearMain),\n/* harmony export */   \"default\": () => (/* binding */ setupPage)\n/* harmony export */ });\n/* harmony import */ var _src_assets_icons_home_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/icons/home.svg */ \"./src/assets/icons/home.svg\");\n/* harmony import */ var _src_assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/assets/icons/menu.svg */ \"./src/assets/icons/menu.svg\");\n/* harmony import */ var _src_assets_icons_contact_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/assets/icons/contact.svg */ \"./src/assets/icons/contact.svg\");\n\n\n\n\n\nfunction setupPage() {\n    const mainDiv = document.createElement('div');\n    mainDiv.id = 'content';\n    // mainDiv.textContent = \"Welcome to the supes' Kitchen\"\n    document.body.appendChild(mainDiv);\n\n    // Components of #Content\n    const heading = document.createElement('h1');\n    heading.id = 'heading'\n\n    const main = document.createElement('div');\n    main.id = 'main';\n    main.classList.add('home');\n\n    const nav = document.createElement('div');\n    nav.id = 'nav'\n    // nav.textContent = 'nav-bar'\n\n    mainDiv.appendChild(heading);\n    mainDiv.appendChild(main);\n    mainDiv.appendChild(nav);\n\n    // Nav Bar\n    const createNavLink = (name,icon) => {\n        const btn = document.createElement('button');\n        btn.id = name;\n        btn.classList.add('navBtn')\n        const btnImg = document.createElement('img');\n        btnImg.src = icon;\n        btnImg.classList.add('nav', 'icon');\n        btn.appendChild(btnImg);\n\n        return btn;\n    }\n\n    nav.appendChild(createNavLink('home',_src_assets_icons_home_svg__WEBPACK_IMPORTED_MODULE_0__));\n    nav.appendChild(createNavLink('menu',_src_assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__));\n    nav.appendChild(createNavLink('contact',_src_assets_icons_contact_svg__WEBPACK_IMPORTED_MODULE_2__));\n}\n\nfunction clearMain()\n{\n    const main = document.querySelector('#main');\n    main.classList.remove('home');\n    main.classList.remove('menu');\n    main.classList.remove('contact');\n    main.innerHTML = '';\n}\n\n//# sourceURL=webpack://restaurant-page/./src/init.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _src_assets_dishes_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/dishes/burger.png */ \"./src/assets/dishes/burger.png\");\n/* harmony import */ var _src_assets_dishes_chickenWings_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/assets/dishes/chickenWings.png */ \"./src/assets/dishes/chickenWings.png\");\n/* harmony import */ var _src_assets_dishes_bolognese_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/assets/dishes/bolognese.png */ \"./src/assets/dishes/bolognese.png\");\n/* harmony import */ var _src_assets_dishes_sushi_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/assets/dishes/sushi.png */ \"./src/assets/dishes/sushi.png\");\n/* harmony import */ var _src_assets_dishes_salad_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/assets/dishes/salad.png */ \"./src/assets/dishes/salad.png\");\n/* harmony import */ var _src_assets_dishes_whiteChoco_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/assets/dishes/whiteChoco.png */ \"./src/assets/dishes/whiteChoco.png\");\n/* harmony import */ var _src_assets_dishes_martini_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../src/assets/dishes/martini.png */ \"./src/assets/dishes/martini.png\");\n// Import images\n\n\n\n\n\n\n\n\n\nlet menu = [{\n    name: '🍔 Homelander\\'s heroic burger',\n    imgUrl: _src_assets_dishes_burger_png__WEBPACK_IMPORTED_MODULE_0__,\n    description: `Savor the power-packed flavors of this towering burger – a homage to the mightiest hero! Packed with double beef patties, melted fiery cheese, and a secret spicy sauce. Served with a side of crispy Vought Fries. Feel the rush of adrenaline with every bite!`\n},\n{\n    name: '🍗 Queen Maeve\\'s Mighty Chicken Wings',\n    imgUrl: _src_assets_dishes_chickenWings_png__WEBPACK_IMPORTED_MODULE_1__,\n    description: `Get ready for a kick of heroism with these succulent chicken wings, doused in Maeve's signature tangy glaze. A side of refreshing celery sticks and Compound V-infused dip completes the plate. These wings are as bold as Queen Maeve herself!`\n},\n{\n    name: '🍝 Billy Butcher\\'s Beefy Bolognese',\n    imgUrl: _src_assets_dishes_bolognese_png__WEBPACK_IMPORTED_MODULE_2__,\n    description: `A dish as rugged and uncompromising as the man himself. Twisted pasta smothered in a rich, slow-cooked beef Bolognese sauce. Topped with grated parmesan and a hint of vengeance. It's a plate of flavors that pack a punch!`\n},\n{\n    name: '🍣 A-Train\\'s Speedy Sushi Rolls',\n    imgUrl: _src_assets_dishes_sushi_png__WEBPACK_IMPORTED_MODULE_3__,\n    description: `Zoom through taste sensations with these lightning-fast sushi rolls. Fresh ingredients wrapped in seaweed and rice, delivering a burst of flavors with every bite. Comes with a zesty Wasabi Rush for an extra kick!`\n},\n{\n    name: '🥗 Starlight\\'s Enlightened Salad',\n    imgUrl: _src_assets_dishes_salad_png__WEBPACK_IMPORTED_MODULE_4__,\n    description: `Elevate your senses with Starlight's Enlightened Salad. A harmonious mix of crisp greens, colorful veggies, and protein-packed toppings. Drizzled with a radiant lemon-garlic vinaigrette. A dish that's both light and powerful!`\n},\n{\n    name: '🍰 Homelander\\'s White Chocolate Temptation',\n    imgUrl: _src_assets_dishes_whiteChoco_png__WEBPACK_IMPORTED_MODULE_5__,\n    description: `Indulge in the ultimate sweet triumph! A velvety white chocolate mousse layered with intense dark chocolate ganache, topped with a gold leaf emblem. A dessert fit for a superhero's appetite!`\n},\n{\n    name: '🍹 Translucent Blue Martini',\n    imgUrl: _src_assets_dishes_martini_png__WEBPACK_IMPORTED_MODULE_6__,\n    description: `Experience the unexpected with our Translucent Blue Martini. A mesmerizing blend of spirits and secret ingredients that shapeshift as you sip. An homage to the unpredictable nature of 'The Boys' universe!`\n},\n]\n\nfunction renderMenu() {\n    const main = document.querySelector('#main');\n    const heading = document.querySelector('#heading');\n    heading.textContent = 'Menu';\n    menu.forEach(dish => {\n        addCard(dish);\n    });\n\n    main.classList.add('menu');\n\n\n    function addCard(dish) {\n        const card = document.createElement('div');\n        card.classList.add('dish');\n\n        const name = document.createElement('p');\n        name.classList.add('name')\n\n        const img = document.createElement('img');\n\n        const description = document.createElement('p');\n        description.classList.add('description');\n\n        name.textContent = dish.name;\n        img.src = dish.imgUrl;\n        description.textContent = dish.description;\n        card.appendChild(img);\n        card.appendChild(name);\n        card.appendChild(description);\n        main.appendChild(card);\n    }\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/dishes/bolognese.png":
/*!*****************************************!*\
  !*** ./src/assets/dishes/bolognese.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31c37f8ad6a3b5a3826d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/dishes/bolognese.png?");

/***/ }),

/***/ "./src/assets/dishes/burger.png":
/*!**************************************!*\
  !*** ./src/assets/dishes/burger.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07f6c4e518e3c5e6fc4a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/dishes/burger.png?");

/***/ }),

/***/ "./src/assets/dishes/chickenWings.png":
/*!********************************************!*\
  !*** ./src/assets/dishes/chickenWings.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7bb48681b086eb98d7a8.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/dishes/chickenWings.png?");

/***/ }),

/***/ "./src/assets/dishes/martini.png":
/*!***************************************!*\
  !*** ./src/assets/dishes/martini.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"71e67afebd3315101d0b.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/dishes/martini.png?");

/***/ }),

/***/ "./src/assets/dishes/salad.png":
/*!*************************************!*\
  !*** ./src/assets/dishes/salad.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d735bf27eeb6af429d7.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/dishes/salad.png?");

/***/ }),

/***/ "./src/assets/dishes/sushi.png":
/*!*************************************!*\
  !*** ./src/assets/dishes/sushi.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aaea47a4a81e236c6a3f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/dishes/sushi.png?");

/***/ }),

/***/ "./src/assets/dishes/whiteChoco.png":
/*!******************************************!*\
  !*** ./src/assets/dishes/whiteChoco.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"25ec4523ef4364f2bccd.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/dishes/whiteChoco.png?");

/***/ }),

/***/ "./src/assets/fonts/DCC-Ash.otf":
/*!**************************************!*\
  !*** ./src/assets/fonts/DCC-Ash.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"32682de323719a9ee0e9.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/DCC-Ash.otf?");

/***/ }),

/***/ "./src/assets/fonts/SedgwickAveDisplay-Regular.ttf":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/SedgwickAveDisplay-Regular.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74c170e1c62b0cd3e85e.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/SedgwickAveDisplay-Regular.ttf?");

/***/ }),

/***/ "./src/assets/icons/contact.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/contact.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f30ad9b8c43f268089e4.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icons/contact.svg?");

/***/ }),

/***/ "./src/assets/icons/home.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/home.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"961e52345ceeee2a3425.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icons/home.svg?");

/***/ }),

/***/ "./src/assets/icons/menu.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/menu.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"febb7a782b1ff416727f.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icons/menu.svg?");

/***/ }),

/***/ "./src/assets/supes-kitchen.png":
/*!**************************************!*\
  !*** ./src/assets/supes-kitchen.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d2edf3c4004c36b986c6.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/supes-kitchen.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;