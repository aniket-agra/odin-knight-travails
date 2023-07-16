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
    return getPath(start, end);
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
    if (start === undefined) {
        start = [i, j];
        e.target.style.color = "grey";
        e.target.textContent = "K";
        console.log("start = " + start);
    } else {
        end = [i, j];
        e.target.style.color = "grey";
        e.target.textContent = "X";
        console.log("end = " + end);
    }
}));

let startBtn = document.querySelector("button");
startBtn.addEventListener("click", function (e) {
    let last = (0,_travails__WEBPACK_IMPORTED_MODULE_2__.knightMoves)(start, end), current = null;
    while (last !== null) {
        console.log(last.getValue());
        last = last.getParent();
    }
        
    // setTimeout(function () {
    //     let lastDiv = document.querySelector(`.${last.getValue()[0] + 1}${last.getValue()[1] + 1}`);
    //     lastDiv.style.textContent = "";
    //     current = last.getParent();
    //     let currentDiv = document.querySelector(`.${current.getValue()[0] + 1}${current.getValue()[1] + 1}`);
    //     currentDiv.style.textContent = "K";
    //     currentDiv.style.color = "grey";
    //     last = current;
    // }, 2000);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0Esb0NBQW9DLEVBQUUsRUFBRSxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEdBQUcsSUFBSSxJQUFJO0FBQ2pELHlDQUF5QyxHQUFHLElBQUksSUFBSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNEQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDOUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNFO0FBQ0g7O0FBRXpDLHNEQUFXO0FBQ1gseURBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGVBQWUsc0RBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHVCQUF1QixFQUFFLHVCQUF1QjtBQUNwRztBQUNBO0FBQ0EsdURBQXVELDBCQUEwQixFQUFFLDBCQUEwQjtBQUM3RztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvLi9ncmFwaE5vZGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL3NyYy90cmF2YWlscy5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZU5vZGUocGFyZW50Tm9kZSA9IG51bGwsIHZhbCA9IG51bGwsIGNoaWxkID0gW10pIHtcbiAgICBsZXQgcGFyZW50ID0gcGFyZW50Tm9kZTtcbiAgICBsZXQgdmFsdWUgPSB2YWw7XG4gICAgbGV0IGNoaWxkcmVuID0gY2hpbGQ7XG4gICAgXG4gICAgY29uc3QgYWRkQ2hpbGQgPSBmdW5jdGlvbiAoZ3JhcGhOb2RlKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goZ3JhcGhOb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFBhcmVudCA9IGZ1bmN0aW9uIChncmFwaE5vZGUpIHtcbiAgICAgICAgcGFyZW50ID0gZ3JhcGhOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IGZ1bmN0aW9uIChjb29yZHMpIHtcbiAgICAgICAgdmFsdWUgPSBjb29yZHM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFZhbHVlLCBzZXRWYWx1ZSwgZ2V0UGFyZW50LCBzZXRQYXJlbnQsIGdldENoaWxkcmVuLCBhZGRDaGlsZH1cbn1cblxuZXhwb3J0IHtjcmVhdGVOb2RlfTsiLCJmdW5jdGlvbiBwb3B1bGF0ZURpc3BsYXkoKSB7XG4gICAgbGV0IGJvZHlFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICBsZXQgY2hlc3NCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hlc3NCb2FyZC5jbGFzc0xpc3QuYWRkKFwiY2hlc3Nib2FyZFwiKTtcbiAgICBjaGVzc0JvYXJkLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBjaGVzc0JvYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBcInJlcGVhdCg4LCAxZnIpXCI7XG4gICAgY2hlc3NCb2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoOCwgMWZyKVwiO1xuICAgIGNoZXNzQm9hcmQuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICBjaGVzc0JvYXJkLnN0eWxlLndpZHRoID0gXCI0MHJlbVwiO1xuICAgIGNoZXNzQm9hcmQuc3R5bGUuaGVpZ2h0ID0gXCI0MHJlbVwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA5OyBqKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoYCR7aX0ke2p9YCk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoaSAtIGopICUgMiA9PT0gMCkgXG4gICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmdyaWRSb3cgPSBgJHtpfSAvICR7aSsxfWA7XG4gICAgICAgICAgICBuZXdEaXYuc3R5bGUuZ3JpZENvbHVtbiA9IGAke2p9IC8gJHtqKzF9YDtcbiAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBuZXdEaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY2hlc3NCb2FyZC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKGNoZXNzQm9hcmQpO1xuXG4gICAgbGV0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwic3RhcnRcIik7XG4gICAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlN0YXJ0IHRyYXZhaWxcIjtcbiAgICBzdGFydEJ0bi5zdHlsZS5tYXJnaW4gPSBcIjJyZW0gMTlyZW1cIjtcbiAgICBib2R5RWxlbS5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG59XG5cbmV4cG9ydCB7cG9wdWxhdGVEaXNwbGF5fTsiLCJpbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uL2dyYXBoTm9kZVwiO1xuXG5mdW5jdGlvbiBnZXRQYXRoKHN0YXJ0LCBlbmQpIHtcbiAgICBsZXQgdmVydERpZmYgPSBbLTIsIDIsIC0xLCAxXTtcbiAgICBsZXQgaG9yekRpZmYgPSBbLTIsIDIsIC0xLCAxXTtcbiAgICBsZXQgdmlzaXRlZCA9IG5ldyBBcnJheSg4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICB2aXNpdGVkW2ldID0gbmV3IEFycmF5KDgpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgdmlzaXRlZFtpXVtqXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBlbmROb2RlID0gY3JlYXRlTm9kZShudWxsLCBlbmQsIFtdKTtcbiAgICBsZXQgdG9WaXNpdCA9IFtlbmROb2RlXTtcbiAgICBcbiAgICB3aGlsZSAodG9WaXNpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBuZXh0VG9WaXNpdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvVmlzaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29vcmRzID0gdG9WaXNpdFtpXS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgdmlzaXRlZFtjdXJyZW50Q29vcmRzWzBdXVtjdXJyZW50Q29vcmRzWzFdXSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IDQ7IGgrKykge1xuICAgICAgICAgICAgICAgIGxldCBob3J6Q29vcmQgPSBjdXJyZW50Q29vcmRzWzBdICsgaG9yekRpZmZbaF07XG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkSG9yeiA9IGhvcnpDb29yZCA+PTAgJiYgaG9yekNvb3JkIDwgODtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2ID0gMDsgdiA8IDQgJiYgdmFsaWRIb3J6OyB2KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGhvcnpEaWZmW2hdKSAhPT0gTWF0aC5hYnModmVydERpZmZbdl0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVydENvb3JkID0gY3VycmVudENvb3Jkc1sxXSArIHZlcnREaWZmW3ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRDb29yZCA+PSAwICYmIHZlcnRDb29yZCA8IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGROb2RlID0gY3JlYXRlTm9kZSh0b1Zpc2l0W2ldLCBbaG9yekNvb3JkLCB2ZXJ0Q29vcmRdLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvcnpDb29yZCA9PT0gc3RhcnRbMF0gJiYgdmVydENvb3JkID09PSBzdGFydFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWRbaG9yekNvb3JkXVt2ZXJ0Q29vcmRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvVmlzaXRbaV0uYWRkQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRvVmlzaXQucHVzaChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b1Zpc2l0ID0gbmV4dFRvVmlzaXQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBrbmlnaHRNb3ZlcyhzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIGdldFBhdGgoc3RhcnQsIGVuZCk7XG59XG5cbmV4cG9ydCB7a25pZ2h0TW92ZXN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi9ncmFwaE5vZGVcIjtcbmltcG9ydCB7IHBvcHVsYXRlRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IGtuaWdodE1vdmVzIH0gZnJvbSBcIi4vdHJhdmFpbHNcIjtcblxua25pZ2h0TW92ZXMoWzAsIDBdLCBbMSwgNF0pO1xucG9wdWxhdGVEaXNwbGF5KCk7XG5sZXQgc3RhcnQgPSB1bmRlZmluZWQsIGVuZCA9IHVuZGVmaW5lZDtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlc3Nib2FyZCA+IGRpdlwiKS5mb3JFYWNoKGUgPT4gZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgY2xpY2tlZCA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXTtcbiAgICBsZXQgaSA9IGNsaWNrZWRbMF0gLSAxLCBqID0gY2xpY2tlZFsxXSAtIDE7XG4gICAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhcnQgPSBbaSwgal07XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJncmV5XCI7XG4gICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJLXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnQgPSBcIiArIHN0YXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbmQgPSBbaSwgal07XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJncmV5XCI7XG4gICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kID0gXCIgKyBlbmQpO1xuICAgIH1cbn0pKTtcblxubGV0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCBsYXN0ID0ga25pZ2h0TW92ZXMoc3RhcnQsIGVuZCksIGN1cnJlbnQgPSBudWxsO1xuICAgIHdoaWxlIChsYXN0ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3QuZ2V0VmFsdWUoKSk7XG4gICAgICAgIGxhc3QgPSBsYXN0LmdldFBhcmVudCgpO1xuICAgIH1cbiAgICAgICAgXG4gICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGxldCBsYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bGFzdC5nZXRWYWx1ZSgpWzBdICsgMX0ke2xhc3QuZ2V0VmFsdWUoKVsxXSArIDF9YCk7XG4gICAgLy8gICAgIGxhc3REaXYuc3R5bGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIC8vICAgICBjdXJyZW50ID0gbGFzdC5nZXRQYXJlbnQoKTtcbiAgICAvLyAgICAgbGV0IGN1cnJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjdXJyZW50LmdldFZhbHVlKClbMF0gKyAxfSR7Y3VycmVudC5nZXRWYWx1ZSgpWzFdICsgMX1gKTtcbiAgICAvLyAgICAgY3VycmVudERpdi5zdHlsZS50ZXh0Q29udGVudCA9IFwiS1wiO1xuICAgIC8vICAgICBjdXJyZW50RGl2LnN0eWxlLmNvbG9yID0gXCJncmV5XCI7XG4gICAgLy8gICAgIGxhc3QgPSBjdXJyZW50O1xuICAgIC8vIH0sIDIwMDApO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9