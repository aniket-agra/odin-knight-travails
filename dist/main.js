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
    let bodyElem = document.querySelector("body");

    let chessBoard = document.createElement("div");
    chessBoard.classList.add("chessboard");
    chessBoard.style.display = "grid";
    chessBoard.style.gridTemplateRows = "repeat(8, 1fr)";
    chessBoard.style.gridTemplateColumns = "repeat(8, 1fr)";
    chessBoard.style.border = "2px solid black";
    chessBoard.style.width = "40rem";
    chessBoard.style.height = "40rem";

    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add(`${i}${j}`);
            if (Math.abs(i - j) % 2 === 0) 
                newDiv.style.backgroundColor = "white";
            else
                newDiv.style.backgroundColor = "black";
            newDiv.style.gridRow = `${i} / ${i+1}`;
            newDiv.style.gridColumn = `${j} / ${j+1}`;
            newDiv.style.display = "flex";
            newDiv.style.justifyContent = "center";
            newDiv.style.alignItems = "center";
            chessBoard.appendChild(newDiv);
        }
    }
    
    bodyElem.appendChild(chessBoard);

    let startBtn = document.createElement("button");
    startBtn.classList.add("start");
    startBtn.textContent = "Start travail";
    startBtn.style.margin = "2rem 0rem 0 19rem";
    bodyElem.appendChild(startBtn);

    let instructions = document.createElement("ol");
    for (let i = 0; i < 3; i++) {
        let item = document.createElement("li");
        switch (i) {
            case 0 : item.textContent = "To start, click on a square for initial position."; break;
            case 1 : item.textContent = "Next, click on another square for final position."; break;
            case 2 : item.textContent = "Finally, click start button to start the animation and sit back."; break;
        } 
        instructions.appendChild(item);
    }
    bodyElem.appendChild(instructions);

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
/******/ 			// no module.id needed
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





(0,_display__WEBPACK_IMPORTED_MODULE_1__.populateDisplay)();
let imgElem = document.querySelector("img");
imgElem.style.maxWidth = "60%";
imgElem.style.maxHeight = "60%";
let start = undefined, end = undefined;
document.querySelectorAll(".chessboard > div").forEach(e => e.addEventListener("click", function (e) {
    let clicked = e.target.classList[0];
    let i = clicked[0] - 1, j = clicked[1] - 1;
    if (start === undefined) {
        start = [i, j];
        e.target.style.color = "grey";
        let knightImg = new Image();
        knightImg.src = _img_horse_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__;
        e.target.appendChild(knightImg);
    } else {
        end = [i, j];
        e.target.style.color = "grey";
        e.target.textContent = "X";
    }
}));

let startBtn = document.querySelector(".start");
let nextBtn = document.querySelector(".next");

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
            document.querySelector(selector).textContent = "";
            selector = `div[class = "${sequence[i][0] + 1}${sequence[i][1] + 1}"]`;
            let nextDiv = document.querySelector(selector);        
            nextDiv.textContent = "K";
            nextDiv.style.color = "grey";
        }, 400 + 2000 * (i - 1));
    }
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0Esb0NBQW9DLEVBQUUsRUFBRSxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEdBQUcsSUFBSSxJQUFJO0FBQ2pELHlDQUF5QyxHQUFHLElBQUksSUFBSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0EsNkZBQTZGO0FBQzdGLDZGQUE2RjtBQUM3Riw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsc0RBQVU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjBDO0FBQ0U7QUFDSDtBQUNTOztBQUVsRCx5REFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQU07QUFDOUI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsc0RBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0EsMkNBQTJDLHVCQUF1QixFQUFFLHVCQUF1QjtBQUMzRjtBQUNBLHVDQUF1QyxtQkFBbUIsRUFBRSxtQkFBbUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSwwQ0FBMEMsdUJBQXVCLEVBQUUsdUJBQXVCO0FBQzFGO0FBQ0E7QUFDQSxzQ0FBc0MsdUJBQXVCLEVBQUUsdUJBQXVCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL2dyYXBoTm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzLy4vc3JjL3RyYXZhaWxzLmpzIiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVOb2RlKHBhcmVudE5vZGUgPSBudWxsLCB2YWwgPSBudWxsLCBjaGlsZCA9IFtdKSB7XG4gICAgbGV0IHBhcmVudCA9IHBhcmVudE5vZGU7XG4gICAgbGV0IHZhbHVlID0gdmFsO1xuICAgIGxldCBjaGlsZHJlbiA9IGNoaWxkO1xuICAgIFxuICAgIGNvbnN0IGFkZENoaWxkID0gZnVuY3Rpb24gKGdyYXBoTm9kZSkge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKGdyYXBoTm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQYXJlbnQgPSBmdW5jdGlvbiAoZ3JhcGhOb2RlKSB7XG4gICAgICAgIHBhcmVudCA9IGdyYXBoTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBmdW5jdGlvbiAoY29vcmRzKSB7XG4gICAgICAgIHZhbHVlID0gY29vcmRzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRWYWx1ZSwgc2V0VmFsdWUsIGdldFBhcmVudCwgc2V0UGFyZW50LCBnZXRDaGlsZHJlbiwgYWRkQ2hpbGR9XG59XG5cbmV4cG9ydCB7Y3JlYXRlTm9kZX07IiwiZnVuY3Rpb24gcG9wdWxhdGVEaXNwbGF5KCkge1xuICAgIGxldCBib2R5RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgbGV0IGNoZXNzQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZXNzQm9hcmQuY2xhc3NMaXN0LmFkZChcImNoZXNzYm9hcmRcIik7XG4gICAgY2hlc3NCb2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgY2hlc3NCb2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCJyZXBlYXQoOCwgMWZyKVwiO1xuICAgIGNoZXNzQm9hcmQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KDgsIDFmcilcIjtcbiAgICBjaGVzc0JvYXJkLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgY2hlc3NCb2FyZC5zdHlsZS53aWR0aCA9IFwiNDByZW1cIjtcbiAgICBjaGVzc0JvYXJkLnN0eWxlLmhlaWdodCA9IFwiNDByZW1cIjtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgOTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGAke2l9JHtqfWApO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGkgLSBqKSAlIDIgPT09IDApIFxuICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5ncmlkUm93ID0gYCR7aX0gLyAke2krMX1gO1xuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBgJHtqfSAvICR7aisxfWA7XG4gICAgICAgICAgICBuZXdEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGNoZXNzQm9hcmQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBib2R5RWxlbS5hcHBlbmRDaGlsZChjaGVzc0JvYXJkKTtcblxuICAgIGxldCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcInN0YXJ0XCIpO1xuICAgIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJTdGFydCB0cmF2YWlsXCI7XG4gICAgc3RhcnRCdG4uc3R5bGUubWFyZ2luID0gXCIycmVtIDByZW0gMCAxOXJlbVwiO1xuICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcblxuICAgIGxldCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgY2FzZSAwIDogaXRlbS50ZXh0Q29udGVudCA9IFwiVG8gc3RhcnQsIGNsaWNrIG9uIGEgc3F1YXJlIGZvciBpbml0aWFsIHBvc2l0aW9uLlwiOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMSA6IGl0ZW0udGV4dENvbnRlbnQgPSBcIk5leHQsIGNsaWNrIG9uIGFub3RoZXIgc3F1YXJlIGZvciBmaW5hbCBwb3NpdGlvbi5cIjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDIgOiBpdGVtLnRleHRDb250ZW50ID0gXCJGaW5hbGx5LCBjbGljayBzdGFydCBidXR0b24gdG8gc3RhcnQgdGhlIGFuaW1hdGlvbiBhbmQgc2l0IGJhY2suXCI7IGJyZWFrO1xuICAgICAgICB9IFxuICAgICAgICBpbnN0cnVjdGlvbnMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKGluc3RydWN0aW9ucyk7XG5cbiAgICAvLyBsZXQgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgLy8gbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKFwibmV4dFwiKTtcbiAgICAvLyBuZXh0QnRuLnRleHRDb250ZW50ID0gXCJOZXh0XCI7XG4gICAgLy8gbmV4dEJ0bi5zdHlsZS5tYXJnaW4gPSBcIjJyZW0gMXJlbVwiO1xuICAgIC8vIGJvZHlFbGVtLmFwcGVuZENoaWxkKG5leHRCdG4pO1xufVxuXG5leHBvcnQge3BvcHVsYXRlRGlzcGxheX07IiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi9ncmFwaE5vZGVcIjtcblxuZnVuY3Rpb24gZ2V0UGF0aChzdGFydCwgZW5kKSB7XG4gICAgbGV0IHZlcnREaWZmID0gWy0yLCAyLCAtMSwgMV07XG4gICAgbGV0IGhvcnpEaWZmID0gWy0yLCAyLCAtMSwgMV07XG4gICAgbGV0IHZpc2l0ZWQgPSBuZXcgQXJyYXkoOCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgdmlzaXRlZFtpXSA9IG5ldyBBcnJheSg4KTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgIHZpc2l0ZWRbaV1bal0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgZW5kTm9kZSA9IGNyZWF0ZU5vZGUobnVsbCwgZW5kLCBbXSk7XG4gICAgbGV0IHRvVmlzaXQgPSBbZW5kTm9kZV07XG4gICAgXG4gICAgd2hpbGUgKHRvVmlzaXQubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbmV4dFRvVmlzaXQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b1Zpc2l0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudENvb3JkcyA9IHRvVmlzaXRbaV0uZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgIHZpc2l0ZWRbY3VycmVudENvb3Jkc1swXV1bY3VycmVudENvb3Jkc1sxXV0gPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCA0OyBoKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaG9yekNvb3JkID0gY3VycmVudENvb3Jkc1swXSArIGhvcnpEaWZmW2hdO1xuICAgICAgICAgICAgICAgIGxldCB2YWxpZEhvcnogPSBob3J6Q29vcmQgPj0wICYmIGhvcnpDb29yZCA8IDg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdiA9IDA7IHYgPCA0ICYmIHZhbGlkSG9yejsgdisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhob3J6RGlmZltoXSkgIT09IE1hdGguYWJzKHZlcnREaWZmW3ZdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZlcnRDb29yZCA9IGN1cnJlbnRDb29yZHNbMV0gKyB2ZXJ0RGlmZlt2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0Q29vcmQgPj0gMCAmJiB2ZXJ0Q29vcmQgPCA4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkTm9kZSA9IGNyZWF0ZU5vZGUodG9WaXNpdFtpXSwgW2hvcnpDb29yZCwgdmVydENvb3JkXSwgW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChob3J6Q29vcmQgPT09IHN0YXJ0WzBdICYmIHZlcnRDb29yZCA9PT0gc3RhcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2aXNpdGVkW2hvcnpDb29yZF1bdmVydENvb3JkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b1Zpc2l0W2ldLmFkZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUb1Zpc2l0LnB1c2goY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9WaXNpdCA9IG5leHRUb1Zpc2l0O1xuICAgIH1cbn1cblxuZnVuY3Rpb24ga25pZ2h0TW92ZXMoc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBnZXRQYXRoKHN0YXJ0LCBlbmQpO1xufVxuXG5leHBvcnQge2tuaWdodE1vdmVzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi9ncmFwaE5vZGVcIjtcbmltcG9ydCB7IHBvcHVsYXRlRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IGtuaWdodE1vdmVzIH0gZnJvbSBcIi4vdHJhdmFpbHNcIjtcbmltcG9ydCBLbmlnaHQgZnJvbSBcIi4uL2ltZy9ob3JzZS1zdmdyZXBvLWNvbS5zdmdcIjtcblxucG9wdWxhdGVEaXNwbGF5KCk7XG5sZXQgaW1nRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG5pbWdFbGVtLnN0eWxlLm1heFdpZHRoID0gXCI2MCVcIjtcbmltZ0VsZW0uc3R5bGUubWF4SGVpZ2h0ID0gXCI2MCVcIjtcbmxldCBzdGFydCA9IHVuZGVmaW5lZCwgZW5kID0gdW5kZWZpbmVkO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVzc2JvYXJkID4gZGl2XCIpLmZvckVhY2goZSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCBjbGlja2VkID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdO1xuICAgIGxldCBpID0gY2xpY2tlZFswXSAtIDEsIGogPSBjbGlja2VkWzFdIC0gMTtcbiAgICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGFydCA9IFtpLCBqXTtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcImdyZXlcIjtcbiAgICAgICAgbGV0IGtuaWdodEltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBrbmlnaHRJbWcuc3JjID0gS25pZ2h0O1xuICAgICAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChrbmlnaHRJbWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCA9IFtpLCBqXTtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcImdyZXlcIjtcbiAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICB9XG59KSk7XG5cbmxldCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRcIik7XG5sZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dFwiKTtcblxubGV0IGxhc3Q7XG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBsYXN0ID0ga25pZ2h0TW92ZXMoc3RhcnQsIGVuZCk7XG4gICAgbGV0IHNlcXVlbmNlID0gW107XG4gICAgd2hpbGUgKGxhc3QgIT09IG51bGwpIHtcbiAgICAgICAgc2VxdWVuY2UucHVzaChsYXN0LmdldFZhbHVlKCkpO1xuICAgICAgICBsYXN0ID0gbGFzdC5nZXRQYXJlbnQoKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSBgZGl2W2NsYXNzID0gXCIke3NlcXVlbmNlW2kgLSAxXVswXSArIDF9JHtzZXF1ZW5jZVtpIC0gMV1bMV0gKyAxfVwiXWA7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBzZWxlY3RvciA9IGBkaXZbY2xhc3MgPSBcIiR7c2VxdWVuY2VbaV1bMF0gKyAxfSR7c2VxdWVuY2VbaV1bMV0gKyAxfVwiXWA7XG4gICAgICAgICAgICBsZXQgbmV4dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpOyAgICAgICAgXG4gICAgICAgICAgICBuZXh0RGl2LnRleHRDb250ZW50ID0gXCJLXCI7XG4gICAgICAgICAgICBuZXh0RGl2LnN0eWxlLmNvbG9yID0gXCJncmV5XCI7XG4gICAgICAgIH0sIDQwMCArIDIwMDAgKiAoaSAtIDEpKTtcbiAgICB9XG59KTtcbi8vIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgaWYgKGxhc3QgIT09IG51bGwpIHtcbi8vICAgICAgICAgbGV0IHNlbGVjdG9yID0gYGRpdltjbGFzcyA9IFwiJHtsYXN0LmdldFZhbHVlKClbMF0gKyAxfSR7bGFzdC5nZXRWYWx1ZSgpWzFdICsgMX1cIl1gO1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS50ZXh0Q29udGVudCA9IFwiXCI7XG4vLyAgICAgICAgIGxhc3QgPSBsYXN0LmdldFBhcmVudCgpO1xuLy8gICAgICAgICBzZWxlY3RvciA9IGBkaXZbY2xhc3MgPSBcIiR7bGFzdC5nZXRWYWx1ZSgpWzBdICsgMX0ke2xhc3QuZ2V0VmFsdWUoKVsxXSArIDF9XCJdYDtcbi8vICAgICAgICAgbGV0IG5leHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbi8vICAgICAgICAgbmV4dERpdi50ZXh0Q29udGVudCA9IFwiS1wiO1xuLy8gICAgICAgICBuZXh0RGl2LnN0eWxlLmNvbG9yID0gXCJncmV5XCI7XG4vLyAgICAgfVxuICAgIFxuLy8gfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9