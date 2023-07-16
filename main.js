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
    startBtn.style.margin = "2rem 19rem";
    bodyElem.appendChild(startBtn);
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
    let current = getPath(start, end);
    while (current !== null) {
        console.log(current.getValue());
        current = current.getParent();
    }
}



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




(0,_travails__WEBPACK_IMPORTED_MODULE_2__.knightMoves)([0, 0], [1, 4]);
(0,_display__WEBPACK_IMPORTED_MODULE_1__.populateDisplay)();
let start = undefined, end = undefined;
document.querySelectorAll(".chessboard > div").forEach(e => e.addEventListener("click", function (e) {
    let clicked = e.target.classList[0];
    let i = clicked[0] - 1, j = clicked[1] - 1;
    console.log(i + ", " + j);
    if (start === undefined) {
        
        start = [i - 1, j - 1];
        e.target.textContent = "K";
        e.target.style.color = "grey";
    } else {
        end = [i - 1, j - 1];
    }
}));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0Esb0NBQW9DLEVBQUUsRUFBRSxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEdBQUcsSUFBSSxJQUFJO0FBQ2pELHlDQUF5QyxHQUFHLElBQUksSUFBSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNEQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNsREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ0U7QUFDSDs7QUFFekMsc0RBQVc7QUFDWCx5REFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL2dyYXBoTm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzLy4vc3JjL3RyYXZhaWxzLmpzIiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlTm9kZShwYXJlbnROb2RlID0gbnVsbCwgdmFsID0gbnVsbCwgY2hpbGQgPSBbXSkge1xuICAgIGxldCBwYXJlbnQgPSBwYXJlbnROb2RlO1xuICAgIGxldCB2YWx1ZSA9IHZhbDtcbiAgICBsZXQgY2hpbGRyZW4gPSBjaGlsZDtcbiAgICBcbiAgICBjb25zdCBhZGRDaGlsZCA9IGZ1bmN0aW9uIChncmFwaE5vZGUpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChncmFwaE5vZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldENoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gZnVuY3Rpb24gKGdyYXBoTm9kZSkge1xuICAgICAgICBwYXJlbnQgPSBncmFwaE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFZhbHVlID0gZnVuY3Rpb24gKGNvb3Jkcykge1xuICAgICAgICB2YWx1ZSA9IGNvb3JkcztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0VmFsdWUsIHNldFZhbHVlLCBnZXRQYXJlbnQsIHNldFBhcmVudCwgZ2V0Q2hpbGRyZW4sIGFkZENoaWxkfVxufVxuXG5leHBvcnQge2NyZWF0ZU5vZGV9OyIsImZ1bmN0aW9uIHBvcHVsYXRlRGlzcGxheSgpIHtcbiAgICBsZXQgYm9keUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIGxldCBjaGVzc0JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVzc0JvYXJkLmNsYXNzTGlzdC5hZGQoXCJjaGVzc2JvYXJkXCIpO1xuICAgIGNoZXNzQm9hcmQuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIGNoZXNzQm9hcmQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IFwicmVwZWF0KDgsIDFmcilcIjtcbiAgICBjaGVzc0JvYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcInJlcGVhdCg4LCAxZnIpXCI7XG4gICAgY2hlc3NCb2FyZC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBibGFja1wiO1xuICAgIGNoZXNzQm9hcmQuc3R5bGUud2lkdGggPSBcIjQwcmVtXCI7XG4gICAgY2hlc3NCb2FyZC5zdHlsZS5oZWlnaHQgPSBcIjQwcmVtXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDk7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDk7IGorKykge1xuICAgICAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChgJHtpfSR7an1gKTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhpIC0gaikgJSAyID09PSAwKSBcbiAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBuZXdEaXYuc3R5bGUuZ3JpZFJvdyA9IGAke2l9IC8gJHtpKzF9YDtcbiAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5ncmlkQ29sdW1uID0gYCR7an0gLyAke2orMX1gO1xuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBuZXdEaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjaGVzc0JvYXJkLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQoY2hlc3NCb2FyZCk7XG5cbiAgICBsZXQgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdGFydFwiKTtcbiAgICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiU3RhcnQgdHJhdmFpbFwiO1xuICAgIHN0YXJ0QnRuLnN0eWxlLm1hcmdpbiA9IFwiMnJlbSAxOXJlbVwiO1xuICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcbn1cblxuZXhwb3J0IHtwb3B1bGF0ZURpc3BsYXl9OyIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi4vZ3JhcGhOb2RlXCI7XG5cbmZ1bmN0aW9uIGdldFBhdGgoc3RhcnQsIGVuZCkge1xuICAgIGxldCB2ZXJ0RGlmZiA9IFstMiwgMiwgLTEsIDFdO1xuICAgIGxldCBob3J6RGlmZiA9IFstMiwgMiwgLTEsIDFdO1xuICAgIGxldCB2aXNpdGVkID0gbmV3IEFycmF5KDgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIHZpc2l0ZWRbaV0gPSBuZXcgQXJyYXkoOCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICB2aXNpdGVkW2ldW2pdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGVuZE5vZGUgPSBjcmVhdGVOb2RlKG51bGwsIGVuZCwgW10pO1xuICAgIGxldCB0b1Zpc2l0ID0gW2VuZE5vZGVdO1xuICAgIFxuICAgIHdoaWxlICh0b1Zpc2l0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG5leHRUb1Zpc2l0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9WaXNpdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRDb29yZHMgPSB0b1Zpc2l0W2ldLmdldFZhbHVlKCk7XG4gICAgICAgICAgICB2aXNpdGVkW2N1cnJlbnRDb29yZHNbMF1dW2N1cnJlbnRDb29yZHNbMV1dID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgNDsgaCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhvcnpDb29yZCA9IGN1cnJlbnRDb29yZHNbMF0gKyBob3J6RGlmZltoXTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRIb3J6ID0gaG9yekNvb3JkID49MCAmJiBob3J6Q29vcmQgPCA4O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHYgPSAwOyB2IDwgNCAmJiB2YWxpZEhvcno7IHYrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoaG9yekRpZmZbaF0pICE9PSBNYXRoLmFicyh2ZXJ0RGlmZlt2XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZXJ0Q29vcmQgPSBjdXJyZW50Q29vcmRzWzFdICsgdmVydERpZmZbdl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydENvb3JkID49IDAgJiYgdmVydENvb3JkIDwgOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZE5vZGUgPSBjcmVhdGVOb2RlKHRvVmlzaXRbaV0sIFtob3J6Q29vcmQsIHZlcnRDb29yZF0sIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG9yekNvb3JkID09PSBzdGFydFswXSAmJiB2ZXJ0Q29vcmQgPT09IHN0YXJ0WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmlzaXRlZFtob3J6Q29vcmRdW3ZlcnRDb29yZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9WaXNpdFtpXS5hZGRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0VG9WaXNpdC5wdXNoKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRvVmlzaXQgPSBuZXh0VG9WaXNpdDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGtuaWdodE1vdmVzKHN0YXJ0LCBlbmQpIHtcbiAgICBsZXQgY3VycmVudCA9IGdldFBhdGgoc3RhcnQsIGVuZCk7XG4gICAgd2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudC5nZXRWYWx1ZSgpKTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZ2V0UGFyZW50KCk7XG4gICAgfVxufVxuXG5leHBvcnQge2tuaWdodE1vdmVzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi4vZ3JhcGhOb2RlXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZURpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBrbmlnaHRNb3ZlcyB9IGZyb20gXCIuL3RyYXZhaWxzXCI7XG5cbmtuaWdodE1vdmVzKFswLCAwXSwgWzEsIDRdKTtcbnBvcHVsYXRlRGlzcGxheSgpO1xubGV0IHN0YXJ0ID0gdW5kZWZpbmVkLCBlbmQgPSB1bmRlZmluZWQ7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZXNzYm9hcmQgPiBkaXZcIikuZm9yRWFjaChlID0+IGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IGNsaWNrZWQgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF07XG4gICAgbGV0IGkgPSBjbGlja2VkWzBdIC0gMSwgaiA9IGNsaWNrZWRbMV0gLSAxO1xuICAgIGNvbnNvbGUubG9nKGkgKyBcIiwgXCIgKyBqKTtcbiAgICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBcbiAgICAgICAgc3RhcnQgPSBbaSAtIDEsIGogLSAxXTtcbiAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBcIktcIjtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcImdyZXlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbmQgPSBbaSAtIDEsIGogLSAxXTtcbiAgICB9XG59KSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9