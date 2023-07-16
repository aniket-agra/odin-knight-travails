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




(0,_display__WEBPACK_IMPORTED_MODULE_1__.populateDisplay)();
let start = undefined, end = undefined;
document.querySelectorAll(".chessboard > div").forEach(e => e.addEventListener("click", function (e) {
    let clicked = e.target.classList[0];
    let i = clicked[0] - 1, j = clicked[1] - 1;
    if (start === undefined) {
        start = [i, j];
        e.target.style.color = "grey";
        e.target.textContent = "K";
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
        }, 2000 * i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0Esb0NBQW9DLEVBQUUsRUFBRSxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEdBQUcsSUFBSSxJQUFJO0FBQ2pELHlDQUF5QyxHQUFHLElBQUksSUFBSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0EsNkZBQTZGO0FBQzdGLDZGQUE2RjtBQUM3Riw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsc0RBQVU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUM5Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ0U7QUFDSDs7QUFFekMseURBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHNEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBLDJDQUEyQyx1QkFBdUIsRUFBRSx1QkFBdUI7QUFDM0Y7QUFDQSx1Q0FBdUMsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsMENBQTBDLHVCQUF1QixFQUFFLHVCQUF1QjtBQUMxRjtBQUNBO0FBQ0Esc0NBQXNDLHVCQUF1QixFQUFFLHVCQUF1QjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvLi9ncmFwaE5vZGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL3NyYy90cmF2YWlscy5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZU5vZGUocGFyZW50Tm9kZSA9IG51bGwsIHZhbCA9IG51bGwsIGNoaWxkID0gW10pIHtcbiAgICBsZXQgcGFyZW50ID0gcGFyZW50Tm9kZTtcbiAgICBsZXQgdmFsdWUgPSB2YWw7XG4gICAgbGV0IGNoaWxkcmVuID0gY2hpbGQ7XG4gICAgXG4gICAgY29uc3QgYWRkQ2hpbGQgPSBmdW5jdGlvbiAoZ3JhcGhOb2RlKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goZ3JhcGhOb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFBhcmVudCA9IGZ1bmN0aW9uIChncmFwaE5vZGUpIHtcbiAgICAgICAgcGFyZW50ID0gZ3JhcGhOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IGZ1bmN0aW9uIChjb29yZHMpIHtcbiAgICAgICAgdmFsdWUgPSBjb29yZHM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFZhbHVlLCBzZXRWYWx1ZSwgZ2V0UGFyZW50LCBzZXRQYXJlbnQsIGdldENoaWxkcmVuLCBhZGRDaGlsZH1cbn1cblxuZXhwb3J0IHtjcmVhdGVOb2RlfTsiLCJmdW5jdGlvbiBwb3B1bGF0ZURpc3BsYXkoKSB7XG4gICAgbGV0IGJvZHlFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICBsZXQgY2hlc3NCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hlc3NCb2FyZC5jbGFzc0xpc3QuYWRkKFwiY2hlc3Nib2FyZFwiKTtcbiAgICBjaGVzc0JvYXJkLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBjaGVzc0JvYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBcInJlcGVhdCg4LCAxZnIpXCI7XG4gICAgY2hlc3NCb2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoOCwgMWZyKVwiO1xuICAgIGNoZXNzQm9hcmQuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICBjaGVzc0JvYXJkLnN0eWxlLndpZHRoID0gXCI0MHJlbVwiO1xuICAgIGNoZXNzQm9hcmQuc3R5bGUuaGVpZ2h0ID0gXCI0MHJlbVwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA5OyBqKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoYCR7aX0ke2p9YCk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoaSAtIGopICUgMiA9PT0gMCkgXG4gICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmdyaWRSb3cgPSBgJHtpfSAvICR7aSsxfWA7XG4gICAgICAgICAgICBuZXdEaXYuc3R5bGUuZ3JpZENvbHVtbiA9IGAke2p9IC8gJHtqKzF9YDtcbiAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBuZXdEaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY2hlc3NCb2FyZC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKGNoZXNzQm9hcmQpO1xuXG4gICAgbGV0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwic3RhcnRcIik7XG4gICAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlN0YXJ0IHRyYXZhaWxcIjtcbiAgICBzdGFydEJ0bi5zdHlsZS5tYXJnaW4gPSBcIjJyZW0gMHJlbSAwIDE5cmVtXCI7XG4gICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuXG4gICAgbGV0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICBjYXNlIDAgOiBpdGVtLnRleHRDb250ZW50ID0gXCJUbyBzdGFydCwgY2xpY2sgb24gYSBzcXVhcmUgZm9yIGluaXRpYWwgcG9zaXRpb24uXCI7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxIDogaXRlbS50ZXh0Q29udGVudCA9IFwiTmV4dCwgY2xpY2sgb24gYW5vdGhlciBzcXVhcmUgZm9yIGZpbmFsIHBvc2l0aW9uLlwiOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMiA6IGl0ZW0udGV4dENvbnRlbnQgPSBcIkZpbmFsbHksIGNsaWNrIHN0YXJ0IGJ1dHRvbiB0byBzdGFydCB0aGUgYW5pbWF0aW9uIGFuZCBzaXQgYmFjay5cIjsgYnJlYWs7XG4gICAgICAgIH0gXG4gICAgICAgIGluc3RydWN0aW9ucy5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG4gICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zKTtcblxuICAgIC8vIGxldCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAvLyBuZXh0QnRuLmNsYXNzTGlzdC5hZGQoXCJuZXh0XCIpO1xuICAgIC8vIG5leHRCdG4udGV4dENvbnRlbnQgPSBcIk5leHRcIjtcbiAgICAvLyBuZXh0QnRuLnN0eWxlLm1hcmdpbiA9IFwiMnJlbSAxcmVtXCI7XG4gICAgLy8gYm9keUVsZW0uYXBwZW5kQ2hpbGQobmV4dEJ0bik7XG59XG5cbmV4cG9ydCB7cG9wdWxhdGVEaXNwbGF5fTsiLCJpbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uL2dyYXBoTm9kZVwiO1xuXG5mdW5jdGlvbiBnZXRQYXRoKHN0YXJ0LCBlbmQpIHtcbiAgICBsZXQgdmVydERpZmYgPSBbLTIsIDIsIC0xLCAxXTtcbiAgICBsZXQgaG9yekRpZmYgPSBbLTIsIDIsIC0xLCAxXTtcbiAgICBsZXQgdmlzaXRlZCA9IG5ldyBBcnJheSg4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICB2aXNpdGVkW2ldID0gbmV3IEFycmF5KDgpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAgICAgdmlzaXRlZFtpXVtqXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBlbmROb2RlID0gY3JlYXRlTm9kZShudWxsLCBlbmQsIFtdKTtcbiAgICBsZXQgdG9WaXNpdCA9IFtlbmROb2RlXTtcbiAgICBcbiAgICB3aGlsZSAodG9WaXNpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBuZXh0VG9WaXNpdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvVmlzaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29vcmRzID0gdG9WaXNpdFtpXS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgdmlzaXRlZFtjdXJyZW50Q29vcmRzWzBdXVtjdXJyZW50Q29vcmRzWzFdXSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IDQ7IGgrKykge1xuICAgICAgICAgICAgICAgIGxldCBob3J6Q29vcmQgPSBjdXJyZW50Q29vcmRzWzBdICsgaG9yekRpZmZbaF07XG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkSG9yeiA9IGhvcnpDb29yZCA+PTAgJiYgaG9yekNvb3JkIDwgODtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2ID0gMDsgdiA8IDQgJiYgdmFsaWRIb3J6OyB2KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGhvcnpEaWZmW2hdKSAhPT0gTWF0aC5hYnModmVydERpZmZbdl0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVydENvb3JkID0gY3VycmVudENvb3Jkc1sxXSArIHZlcnREaWZmW3ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRDb29yZCA+PSAwICYmIHZlcnRDb29yZCA8IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGROb2RlID0gY3JlYXRlTm9kZSh0b1Zpc2l0W2ldLCBbaG9yekNvb3JkLCB2ZXJ0Q29vcmRdLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvcnpDb29yZCA9PT0gc3RhcnRbMF0gJiYgdmVydENvb3JkID09PSBzdGFydFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWRbaG9yekNvb3JkXVt2ZXJ0Q29vcmRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvVmlzaXRbaV0uYWRkQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRvVmlzaXQucHVzaChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b1Zpc2l0ID0gbmV4dFRvVmlzaXQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBrbmlnaHRNb3ZlcyhzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIGdldFBhdGgoc3RhcnQsIGVuZCk7XG59XG5cbmV4cG9ydCB7a25pZ2h0TW92ZXN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi9ncmFwaE5vZGVcIjtcbmltcG9ydCB7IHBvcHVsYXRlRGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IGtuaWdodE1vdmVzIH0gZnJvbSBcIi4vdHJhdmFpbHNcIjtcblxucG9wdWxhdGVEaXNwbGF5KCk7XG5sZXQgc3RhcnQgPSB1bmRlZmluZWQsIGVuZCA9IHVuZGVmaW5lZDtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlc3Nib2FyZCA+IGRpdlwiKS5mb3JFYWNoKGUgPT4gZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgY2xpY2tlZCA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXTtcbiAgICBsZXQgaSA9IGNsaWNrZWRbMF0gLSAxLCBqID0gY2xpY2tlZFsxXSAtIDE7XG4gICAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhcnQgPSBbaSwgal07XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJncmV5XCI7XG4gICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJLXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW5kID0gW2ksIGpdO1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiZ3JleVwiO1xuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIH1cbn0pKTtcblxubGV0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFwiKTtcbmxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXh0XCIpO1xuXG5sZXQgbGFzdDtcbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxhc3QgPSBrbmlnaHRNb3ZlcyhzdGFydCwgZW5kKTtcbiAgICBsZXQgc2VxdWVuY2UgPSBbXTtcbiAgICB3aGlsZSAobGFzdCAhPT0gbnVsbCkge1xuICAgICAgICBzZXF1ZW5jZS5wdXNoKGxhc3QuZ2V0VmFsdWUoKSk7XG4gICAgICAgIGxhc3QgPSBsYXN0LmdldFBhcmVudCgpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2VxdWVuY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RvciA9IGBkaXZbY2xhc3MgPSBcIiR7c2VxdWVuY2VbaSAtIDFdWzBdICsgMX0ke3NlcXVlbmNlW2kgLSAxXVsxXSArIDF9XCJdYDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHNlbGVjdG9yID0gYGRpdltjbGFzcyA9IFwiJHtzZXF1ZW5jZVtpXVswXSArIDF9JHtzZXF1ZW5jZVtpXVsxXSArIDF9XCJdYDtcbiAgICAgICAgICAgIGxldCBuZXh0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7ICAgICAgICBcbiAgICAgICAgICAgIG5leHREaXYudGV4dENvbnRlbnQgPSBcIktcIjtcbiAgICAgICAgICAgIG5leHREaXYuc3R5bGUuY29sb3IgPSBcImdyZXlcIjtcbiAgICAgICAgfSwgMjAwMCAqIGkpO1xuICAgIH1cbn0pO1xuLy8gbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbi8vICAgICBpZiAobGFzdCAhPT0gbnVsbCkge1xuLy8gICAgICAgICBsZXQgc2VsZWN0b3IgPSBgZGl2W2NsYXNzID0gXCIke2xhc3QuZ2V0VmFsdWUoKVswXSArIDF9JHtsYXN0LmdldFZhbHVlKClbMV0gKyAxfVwiXWA7XG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnRleHRDb250ZW50ID0gXCJcIjtcbi8vICAgICAgICAgbGFzdCA9IGxhc3QuZ2V0UGFyZW50KCk7XG4vLyAgICAgICAgIHNlbGVjdG9yID0gYGRpdltjbGFzcyA9IFwiJHtsYXN0LmdldFZhbHVlKClbMF0gKyAxfSR7bGFzdC5nZXRWYWx1ZSgpWzFdICsgMX1cIl1gO1xuLy8gICAgICAgICBsZXQgbmV4dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuLy8gICAgICAgICBuZXh0RGl2LnRleHRDb250ZW50ID0gXCJLXCI7XG4vLyAgICAgICAgIG5leHREaXYuc3R5bGUuY29sb3IgPSBcImdyZXlcIjtcbi8vICAgICB9XG4gICAgXG4vLyB9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=