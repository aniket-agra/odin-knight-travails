/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./graphNode.js":
/*!**********************!*\
  !*** ./graphNode.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNode: () => (/* binding */ createNode)
/* harmony export */ });
function createNode(parentNode = null, val = null, child = []) {
    let parent = parentNode;
    let value = val;
    let children = child;
    
    const addChild = function (graphNode) {
        children.push(graphNode);
    }

    const getChildren = function () {
        return children;
    }

    const setParent = function (graphNode) {
        parent = graphNode;
    }

    const getParent = function () {
        return parent;
    }

    const setValue = function (coords) {
        value = coords;
    }

    const getValue = function () {
        return value;
    }

    return {getValue, setValue, getParent, setParent, getChildren, addChild}
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `img {
    max-width: 60%;
    max-height: 60%;
}

body {
    display: grid;
    row-gap: 2rem;
    font-family: "Roboto", sans-serif;
    justify-items: center;
    align-items: center;
}

.chessboard {
    grid-row: 2 / 3;
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(8, 1fr);
    width : 80vmin;
    height : 80vmin;
    border: 2px solid black;
}

.chessboard > div {
    font-size : 2rem;
    font-weight: bold;
}

.instructions {
    grid-row: 4 / 5;
    font-size: 2rem;
    padding: 0rem 2rem;
    font-size: 1.5rem;
}

.title {
    display: flex;
    justify-content: center;
    font-size: 2rem;
}

.buttons {
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
}

button {
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
    border-radius: 8px;
    background-color: cornflowerblue;
    border: 2px solid rgb(90, 138, 225);
    padding: 0.25rem 0.5rem;
}

button:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,iCAAiC;IACjC,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,kCAAkC;IAClC,qCAAqC;IACrC,cAAc;IACd,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gCAAgC;IAChC,mCAAmC;IACnC,uBAAuB;AAC3B;;AAEA;IACI,8CAA8C;AAClD","sourcesContent":["img {\n    max-width: 60%;\n    max-height: 60%;\n}\n\nbody {\n    display: grid;\n    row-gap: 2rem;\n    font-family: \"Roboto\", sans-serif;\n    justify-items: center;\n    align-items: center;\n}\n\n.chessboard {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-rows: repeat(8, 1fr);\n    grid-template-columns: repeat(8, 1fr);\n    width : 80vmin;\n    height : 80vmin;\n    border: 2px solid black;\n}\n\n.chessboard > div {\n    font-size : 2rem;\n    font-weight: bold;\n}\n\n.instructions {\n    grid-row: 4 / 5;\n    font-size: 2rem;\n    padding: 0rem 2rem;\n    font-size: 1.5rem;\n}\n\n.title {\n    display: flex;\n    justify-content: center;\n    font-size: 2rem;\n}\n\n.buttons {\n    grid-row: 3 / 4;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 20px;\n}\n\nbutton {\n    font-size: 1.5rem;\n    color: white;\n    font-weight: 600;\n    border-radius: 8px;\n    background-color: cornflowerblue;\n    border: 2px solid rgb(90, 138, 225);\n    padding: 0.25rem 0.5rem;\n}\n\nbutton:hover {\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateDisplay: () => (/* binding */ populateDisplay)
/* harmony export */ });
function populateDisplay() {
    {
        let headElem = document.querySelector("head");
        let linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "preconnect");
        linkElem.setAttribute("href", "https://fonts.googleapis.com");
        headElem.appendChild(linkElem);
        linkElem = document.createElement("link");
        linkElem.setAttribute("href", "https://fonts.gstatic.com");
        linkElem.setAttribute("crossorigin", "");
        headElem.appendChild(linkElem);
        linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", 
        "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
        headElem.appendChild(linkElem);
    }

    let bodyElem = document.querySelector("body");

    let titleElem = document.createElement("div");
    titleElem.classList.add("bodyTitle");
    titleElem.textContent = "Shortest Path of Knight from Start to End";
    bodyElem.appendChild(titleElem);

    let chessBoard = document.createElement("div");
    chessBoard.classList.add("chessboard");

    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add(`${i}${j}`);
            if (Math.abs(i - j) % 2 === 0) 
                newDiv.style.backgroundColor = "white";
            else
                newDiv.style.backgroundColor = "lightgrey";
            newDiv.style.gridRow = `${i} / ${i+1}`;
            newDiv.style.gridColumn = `${j} / ${j+1}`;
            newDiv.style.display = "flex";
            newDiv.style.justifyContent = "center";
            newDiv.style.alignItems = "center";
            chessBoard.appendChild(newDiv);
        }
    }
    
    bodyElem.appendChild(chessBoard);

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("buttons");

    let startBtn = document.createElement("button");
    startBtn.classList.add("start");
    startBtn.textContent = "Start";
    btnDiv.appendChild(startBtn);

    let resetBtn = document.createElement("button");
    resetBtn.classList.add("reset");
    resetBtn.textContent = "Reset";
    btnDiv.appendChild(resetBtn);

    let instructions = document.createElement("div");
    instructions.classList.add("instructions");
    let title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Instructions";
    instructions.appendChild(title);
    let list = document.createElement("ol");
    for (let i = 0; i < 3; i++) {
        let item = document.createElement("li");
        switch (i) {
            case 0 : item.textContent = "To start, click on a square for initial position."; break;
            case 1 : item.textContent = "Next, click on another square for final position."; break;
            case 2 : item.textContent = "Finally, click start button to start the animation and sit back."; break;
        } 
        list.appendChild(item);
    }
    instructions.appendChild(list);
    bodyElem.appendChild(instructions);

    bodyElem.appendChild(btnDiv);
    // let nextBtn = document.createElement("button");
    // nextBtn.classList.add("next");
    // nextBtn.textContent = "Next";
    // nextBtn.style.margin = "2rem 1rem";
    // bodyElem.appendChild(nextBtn);
}



/***/ }),

/***/ "./src/travails.js":
/*!*************************!*\
  !*** ./src/travails.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   knightMoves: () => (/* binding */ knightMoves)
/* harmony export */ });
/* harmony import */ var _graphNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphNode */ "./graphNode.js");


function getPath(start, end) {
    let vertDiff = [-2, 2, -1, 1];
    let horzDiff = [-2, 2, -1, 1];
    let visited = new Array(8);
    for (let i = 0; i < 8; i++) {
        visited[i] = new Array(8);
        for (let j = 0; j < 8; j++) {
            visited[i][j] = false;
        }
    }
    let endNode = (0,_graphNode__WEBPACK_IMPORTED_MODULE_0__.createNode)(null, end, []);
    let toVisit = [endNode];
    
    while (toVisit.length > 0) {
        let nextToVisit = [];
        for (let i = 0; i < toVisit.length; i++) {
            let currentCoords = toVisit[i].getValue();
            visited[currentCoords[0]][currentCoords[1]] = true;
            for (let h = 0; h < 4; h++) {
                let horzCoord = currentCoords[0] + horzDiff[h];
                let validHorz = horzCoord >=0 && horzCoord < 8;
                for (let v = 0; v < 4 && validHorz; v++) {
                    if (Math.abs(horzDiff[h]) !== Math.abs(vertDiff[v])) {
                        let vertCoord = currentCoords[1] + vertDiff[v];
                        if (vertCoord >= 0 && vertCoord < 8) {
                            let childNode = (0,_graphNode__WEBPACK_IMPORTED_MODULE_0__.createNode)(toVisit[i], [horzCoord, vertCoord], []);
                            if (horzCoord === start[0] && vertCoord === start[1]) {
                                return childNode;
                            }
                            if (!visited[horzCoord][vertCoord]) {
                                toVisit[i].addChild(childNode);
                                nextToVisit.push(childNode);
                            }   
                        }
                    }
                }
            }
        }
        toVisit = nextToVisit;
    }
}

function knightMoves(start, end) {
    return getPath(start, end);
}



/***/ }),

/***/ "./img/horse-svgrepo-com.svg":
/*!***********************************!*\
  !*** ./img/horse-svgrepo-com.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1090493c6a64a9022ef2.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graphNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphNode */ "./graphNode.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _travails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./travails */ "./src/travails.js");
/* harmony import */ var _img_horse_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/horse-svgrepo-com.svg */ "./img/horse-svgrepo-com.svg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_display__WEBPACK_IMPORTED_MODULE_1__.populateDisplay)();
let start = undefined, end = undefined;
let knightImg = new Image();
knightImg.src = _img_horse_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__;
document.querySelectorAll(".chessboard > div").forEach(e => e.addEventListener("click", function (e) {
    let clicked = e.target.classList[0];
    let i = clicked[0] - 1, j = clicked[1] - 1;
    if (start === undefined) {
        start = [i, j];
        e.target.style.color = "grey";
        e.target.appendChild(knightImg);
    } else if (end === undefined){
        end = [i, j];
        e.target.style.color = "black";
        e.target.textContent = "X";
    }
}));

let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");

let last;
startBtn.addEventListener("click", function (e) {
    last = (0,_travails__WEBPACK_IMPORTED_MODULE_2__.knightMoves)(start, end);
    let sequence = [];
    while (last !== null) {
        sequence.push(last.getValue());
        last = last.getParent();
    }

    for (let i = 1; i < sequence.length; i++) {
        setTimeout(function() {
            let selector = `div[class = "${sequence[i - 1][0] + 1}${sequence[i - 1][1] + 1}"]`;
            document.querySelector(selector).removeChild(document.querySelector(`${selector} > img`));
            selector = `div[class = "${sequence[i][0] + 1}${sequence[i][1] + 1}"]`;
            let nextDiv = document.querySelector(selector);        
            nextDiv.textContent = "";
            nextDiv.appendChild(knightImg);
        }, 400 + 2000 * (i - 1));
    }
});

resetBtn.addEventListener("click", function (e) {
    start = undefined; 
    end = undefined;
    let imgDiv = document.querySelector("img");
    imgDiv.parentNode.removeChild(imgDiv);
})

// nextBtn.addEventListener("click", function (e) {
//     if (last !== null) {
//         let selector = `div[class = "${last.getValue()[0] + 1}${last.getValue()[1] + 1}"]`;
//         document.querySelector(selector).textContent = "";
//         last = last.getParent();
//         selector = `div[class = "${last.getValue()[0] + 1}${last.getValue()[1] + 1}"]`;
//         let nextDiv = document.querySelector(selector);
//         nextDiv.textContent = "K";
//         nextDiv.style.color = "grey";
//     }
    
// });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvLi9zcmMvdHJhdmFpbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVOb2RlKHBhcmVudE5vZGUgPSBudWxsLCB2YWwgPSBudWxsLCBjaGlsZCA9IFtdKSB7XG4gICAgbGV0IHBhcmVudCA9IHBhcmVudE5vZGU7XG4gICAgbGV0IHZhbHVlID0gdmFsO1xuICAgIGxldCBjaGlsZHJlbiA9IGNoaWxkO1xuICAgIFxuICAgIGNvbnN0IGFkZENoaWxkID0gZnVuY3Rpb24gKGdyYXBoTm9kZSkge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKGdyYXBoTm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQYXJlbnQgPSBmdW5jdGlvbiAoZ3JhcGhOb2RlKSB7XG4gICAgICAgIHBhcmVudCA9IGdyYXBoTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBmdW5jdGlvbiAoY29vcmRzKSB7XG4gICAgICAgIHZhbHVlID0gY29vcmRzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRWYWx1ZSwgc2V0VmFsdWUsIGdldFBhcmVudCwgc2V0UGFyZW50LCBnZXRDaGlsZHJlbiwgYWRkQ2hpbGR9XG59XG5cbmV4cG9ydCB7Y3JlYXRlTm9kZX07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGltZyB7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgbWF4LWhlaWdodDogNjAlO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHJvdy1nYXA6IDJyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGVzc2JvYXJkIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XG4gICAgd2lkdGggOiA4MHZtaW47XG4gICAgaGVpZ2h0IDogODB2bWluO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY2hlc3Nib2FyZCA+IGRpdiB7XG4gICAgZm9udC1zaXplIDogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiAwcmVtIDJyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5idXR0b25zIHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgY29sdW1uLWdhcDogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkwLCAxMzgsIDIyNSk7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw4Q0FBOEM7QUFDbERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaW1nIHtcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxuICAgIG1heC1oZWlnaHQ6IDYwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHJvdy1nYXA6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlc3Nib2FyZCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgd2lkdGggOiA4MHZtaW47XFxuICAgIGhlaWdodCA6IDgwdm1pbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jaGVzc2JvYXJkID4gZGl2IHtcXG4gICAgZm9udC1zaXplIDogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMHJlbSAycmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgY29sdW1uLWdhcDogMjBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkwLCAxMzgsIDIyNSk7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gcG9wdWxhdGVEaXNwbGF5KCkge1xuICAgIHtcbiAgICAgICAgbGV0IGhlYWRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG4gICAgICAgIGxldCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJwcmVjb25uZWN0XCIpO1xuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiKTtcbiAgICAgICAgaGVhZEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xuICAgICAgICBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiKTtcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY3Jvc3NvcmlnaW5cIiwgXCJcIik7XG4gICAgICAgIGhlYWRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcbiAgICAgICAgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcbiAgICAgICAgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDAmZGlzcGxheT1zd2FwXCIpO1xuICAgICAgICBoZWFkRWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSk7XG4gICAgfVxuXG4gICAgbGV0IGJvZHlFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICBsZXQgdGl0bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZUVsZW0uY2xhc3NMaXN0LmFkZChcImJvZHlUaXRsZVwiKTtcbiAgICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSBcIlNob3J0ZXN0IFBhdGggb2YgS25pZ2h0IGZyb20gU3RhcnQgdG8gRW5kXCI7XG4gICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQodGl0bGVFbGVtKTtcblxuICAgIGxldCBjaGVzc0JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVzc0JvYXJkLmNsYXNzTGlzdC5hZGQoXCJjaGVzc2JvYXJkXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA5OyBqKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoYCR7aX0ke2p9YCk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoaSAtIGopICUgMiA9PT0gMCkgXG4gICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGdyZXlcIjtcbiAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5ncmlkUm93ID0gYCR7aX0gLyAke2krMX1gO1xuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBgJHtqfSAvICR7aisxfWA7XG4gICAgICAgICAgICBuZXdEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGNoZXNzQm9hcmQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBib2R5RWxlbS5hcHBlbmRDaGlsZChjaGVzc0JvYXJkKTtcblxuICAgIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uc1wiKTtcblxuICAgIGxldCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcInN0YXJ0XCIpO1xuICAgIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJTdGFydFwiO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG5cbiAgICBsZXQgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJyZXNldFwiKTtcbiAgICByZXNldEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcbiAgICBidG5EaXYuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuXG4gICAgbGV0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJpbnN0cnVjdGlvbnNcIik7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uc1wiO1xuICAgIGluc3RydWN0aW9ucy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgY2FzZSAwIDogaXRlbS50ZXh0Q29udGVudCA9IFwiVG8gc3RhcnQsIGNsaWNrIG9uIGEgc3F1YXJlIGZvciBpbml0aWFsIHBvc2l0aW9uLlwiOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMSA6IGl0ZW0udGV4dENvbnRlbnQgPSBcIk5leHQsIGNsaWNrIG9uIGFub3RoZXIgc3F1YXJlIGZvciBmaW5hbCBwb3NpdGlvbi5cIjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDIgOiBpdGVtLnRleHRDb250ZW50ID0gXCJGaW5hbGx5LCBjbGljayBzdGFydCBidXR0b24gdG8gc3RhcnQgdGhlIGFuaW1hdGlvbiBhbmQgc2l0IGJhY2suXCI7IGJyZWFrO1xuICAgICAgICB9IFxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbiAgICBpbnN0cnVjdGlvbnMuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKGJ0bkRpdik7XG4gICAgLy8gbGV0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIC8vIG5leHRCdG4uY2xhc3NMaXN0LmFkZChcIm5leHRcIik7XG4gICAgLy8gbmV4dEJ0bi50ZXh0Q29udGVudCA9IFwiTmV4dFwiO1xuICAgIC8vIG5leHRCdG4uc3R5bGUubWFyZ2luID0gXCIycmVtIDFyZW1cIjtcbiAgICAvLyBib2R5RWxlbS5hcHBlbmRDaGlsZChuZXh0QnRuKTtcbn1cblxuZXhwb3J0IHtwb3B1bGF0ZURpc3BsYXl9OyIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi4vZ3JhcGhOb2RlXCI7XG5cbmZ1bmN0aW9uIGdldFBhdGgoc3RhcnQsIGVuZCkge1xuICAgIGxldCB2ZXJ0RGlmZiA9IFstMiwgMiwgLTEsIDFdO1xuICAgIGxldCBob3J6RGlmZiA9IFstMiwgMiwgLTEsIDFdO1xuICAgIGxldCB2aXNpdGVkID0gbmV3IEFycmF5KDgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIHZpc2l0ZWRbaV0gPSBuZXcgQXJyYXkoOCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICB2aXNpdGVkW2ldW2pdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGVuZE5vZGUgPSBjcmVhdGVOb2RlKG51bGwsIGVuZCwgW10pO1xuICAgIGxldCB0b1Zpc2l0ID0gW2VuZE5vZGVdO1xuICAgIFxuICAgIHdoaWxlICh0b1Zpc2l0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG5leHRUb1Zpc2l0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9WaXNpdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRDb29yZHMgPSB0b1Zpc2l0W2ldLmdldFZhbHVlKCk7XG4gICAgICAgICAgICB2aXNpdGVkW2N1cnJlbnRDb29yZHNbMF1dW2N1cnJlbnRDb29yZHNbMV1dID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgNDsgaCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhvcnpDb29yZCA9IGN1cnJlbnRDb29yZHNbMF0gKyBob3J6RGlmZltoXTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRIb3J6ID0gaG9yekNvb3JkID49MCAmJiBob3J6Q29vcmQgPCA4O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHYgPSAwOyB2IDwgNCAmJiB2YWxpZEhvcno7IHYrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoaG9yekRpZmZbaF0pICE9PSBNYXRoLmFicyh2ZXJ0RGlmZlt2XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZXJ0Q29vcmQgPSBjdXJyZW50Q29vcmRzWzFdICsgdmVydERpZmZbdl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydENvb3JkID49IDAgJiYgdmVydENvb3JkIDwgOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZE5vZGUgPSBjcmVhdGVOb2RlKHRvVmlzaXRbaV0sIFtob3J6Q29vcmQsIHZlcnRDb29yZF0sIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG9yekNvb3JkID09PSBzdGFydFswXSAmJiB2ZXJ0Q29vcmQgPT09IHN0YXJ0WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmlzaXRlZFtob3J6Q29vcmRdW3ZlcnRDb29yZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9WaXNpdFtpXS5hZGRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0VG9WaXNpdC5wdXNoKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRvVmlzaXQgPSBuZXh0VG9WaXNpdDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGtuaWdodE1vdmVzKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gZ2V0UGF0aChzdGFydCwgZW5kKTtcbn1cblxuZXhwb3J0IHtrbmlnaHRNb3Zlc307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uL2dyYXBoTm9kZVwiO1xuaW1wb3J0IHsgcG9wdWxhdGVEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsga25pZ2h0TW92ZXMgfSBmcm9tIFwiLi90cmF2YWlsc1wiO1xuaW1wb3J0IEtuaWdodCBmcm9tIFwiLi4vaW1nL2hvcnNlLXN2Z3JlcG8tY29tLnN2Z1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxucG9wdWxhdGVEaXNwbGF5KCk7XG5sZXQgc3RhcnQgPSB1bmRlZmluZWQsIGVuZCA9IHVuZGVmaW5lZDtcbmxldCBrbmlnaHRJbWcgPSBuZXcgSW1hZ2UoKTtcbmtuaWdodEltZy5zcmMgPSBLbmlnaHQ7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZXNzYm9hcmQgPiBkaXZcIikuZm9yRWFjaChlID0+IGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IGNsaWNrZWQgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF07XG4gICAgbGV0IGkgPSBjbGlja2VkWzBdIC0gMSwgaiA9IGNsaWNrZWRbMV0gLSAxO1xuICAgIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YXJ0ID0gW2ksIGpdO1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiZ3JleVwiO1xuICAgICAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChrbmlnaHRJbWcpO1xuICAgIH0gZWxzZSBpZiAoZW5kID09PSB1bmRlZmluZWQpe1xuICAgICAgICBlbmQgPSBbaSwgal07XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIH1cbn0pKTtcblxubGV0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFwiKTtcbmxldCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRcIik7XG5cbmxldCBsYXN0O1xuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgbGFzdCA9IGtuaWdodE1vdmVzKHN0YXJ0LCBlbmQpO1xuICAgIGxldCBzZXF1ZW5jZSA9IFtdO1xuICAgIHdoaWxlIChsYXN0ICE9PSBudWxsKSB7XG4gICAgICAgIHNlcXVlbmNlLnB1c2gobGFzdC5nZXRWYWx1ZSgpKTtcbiAgICAgICAgbGFzdCA9IGxhc3QuZ2V0UGFyZW50KCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzZXF1ZW5jZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdG9yID0gYGRpdltjbGFzcyA9IFwiJHtzZXF1ZW5jZVtpIC0gMV1bMF0gKyAxfSR7c2VxdWVuY2VbaSAtIDFdWzFdICsgMX1cIl1gO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtzZWxlY3Rvcn0gPiBpbWdgKSk7XG4gICAgICAgICAgICBzZWxlY3RvciA9IGBkaXZbY2xhc3MgPSBcIiR7c2VxdWVuY2VbaV1bMF0gKyAxfSR7c2VxdWVuY2VbaV1bMV0gKyAxfVwiXWA7XG4gICAgICAgICAgICBsZXQgbmV4dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpOyAgICAgICAgXG4gICAgICAgICAgICBuZXh0RGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIG5leHREaXYuYXBwZW5kQ2hpbGQoa25pZ2h0SW1nKTtcbiAgICAgICAgfSwgNDAwICsgMjAwMCAqIChpIC0gMSkpO1xuICAgIH1cbn0pO1xuXG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBzdGFydCA9IHVuZGVmaW5lZDsgXG4gICAgZW5kID0gdW5kZWZpbmVkO1xuICAgIGxldCBpbWdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgIGltZ0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGltZ0Rpdik7XG59KVxuXG4vLyBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuLy8gICAgIGlmIChsYXN0ICE9PSBudWxsKSB7XG4vLyAgICAgICAgIGxldCBzZWxlY3RvciA9IGBkaXZbY2xhc3MgPSBcIiR7bGFzdC5nZXRWYWx1ZSgpWzBdICsgMX0ke2xhc3QuZ2V0VmFsdWUoKVsxXSArIDF9XCJdYDtcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikudGV4dENvbnRlbnQgPSBcIlwiO1xuLy8gICAgICAgICBsYXN0ID0gbGFzdC5nZXRQYXJlbnQoKTtcbi8vICAgICAgICAgc2VsZWN0b3IgPSBgZGl2W2NsYXNzID0gXCIke2xhc3QuZ2V0VmFsdWUoKVswXSArIDF9JHtsYXN0LmdldFZhbHVlKClbMV0gKyAxfVwiXWA7XG4vLyAgICAgICAgIGxldCBuZXh0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4vLyAgICAgICAgIG5leHREaXYudGV4dENvbnRlbnQgPSBcIktcIjtcbi8vICAgICAgICAgbmV4dERpdi5zdHlsZS5jb2xvciA9IFwiZ3JleVwiO1xuLy8gICAgIH1cbiAgICBcbi8vIH0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==