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


function knightMovesTest(start, end) {
    let vertDiff = [-2, -1, 1, 2];
    let horzDiff = [-2, -1, 1, 2];
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
                for (let v = 0; v < 4 && horzCoord >=0 && horzCoord < 8; v++) {
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
        toVisit = nextToVisit;
    }
}

function knightMoves(start, end) {
    let current = knightMovesTest(start, end);
    while (current !== null) {
        console.log(current.getValue());
        current = current.getParent();
    }
}

// knightMoves([0, 0], [1, 2])
let node1 = (0,_graphNode__WEBPACK_IMPORTED_MODULE_0__.createNode)(null, [1, 2], []);
console.log(node1.getValue());
node1.setValue([2, 3]);
console.log(node1.getValue());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQztBQUNBLGdDQUFnQyx5Q0FBeUM7QUFDekU7QUFDQTtBQUNBLHdDQUF3QyxzREFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxzREFBVTtBQUN0QjtBQUNBO0FBQ0EsOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy8uL2dyYXBoTm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4ta25pZ2h0LXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZU5vZGUocGFyZW50Tm9kZSA9IG51bGwsIHZhbCA9IG51bGwsIGNoaWxkID0gW10pIHtcbiAgICBsZXQgcGFyZW50ID0gcGFyZW50Tm9kZTtcbiAgICBsZXQgdmFsdWUgPSB2YWw7XG4gICAgbGV0IGNoaWxkcmVuID0gY2hpbGQ7XG4gICAgXG4gICAgY29uc3QgYWRkQ2hpbGQgPSBmdW5jdGlvbiAoZ3JhcGhOb2RlKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goZ3JhcGhOb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFBhcmVudCA9IGZ1bmN0aW9uIChncmFwaE5vZGUpIHtcbiAgICAgICAgcGFyZW50ID0gZ3JhcGhOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IGZ1bmN0aW9uIChjb29yZHMpIHtcbiAgICAgICAgdmFsdWUgPSBjb29yZHM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFZhbHVlLCBzZXRWYWx1ZSwgZ2V0UGFyZW50LCBzZXRQYXJlbnQsIGdldENoaWxkcmVuLCBhZGRDaGlsZH1cbn1cblxuZXhwb3J0IHtjcmVhdGVOb2RlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi4vZ3JhcGhOb2RlXCI7XG5cbmZ1bmN0aW9uIGtuaWdodE1vdmVzVGVzdChzdGFydCwgZW5kKSB7XG4gICAgbGV0IHZlcnREaWZmID0gWy0yLCAtMSwgMSwgMl07XG4gICAgbGV0IGhvcnpEaWZmID0gWy0yLCAtMSwgMSwgMl07XG4gICAgbGV0IHZpc2l0ZWQgPSBuZXcgQXJyYXkoOCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgdmlzaXRlZFtpXSA9IG5ldyBBcnJheSg4KTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgIHZpc2l0ZWRbaV1bal0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgZW5kTm9kZSA9IGNyZWF0ZU5vZGUobnVsbCwgZW5kLCBbXSk7XG4gICAgbGV0IHRvVmlzaXQgPSBbZW5kTm9kZV07XG4gICAgXG4gICAgd2hpbGUgKHRvVmlzaXQubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbmV4dFRvVmlzaXQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b1Zpc2l0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudENvb3JkcyA9IHRvVmlzaXRbaV0uZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgIHZpc2l0ZWRbY3VycmVudENvb3Jkc1swXV1bY3VycmVudENvb3Jkc1sxXV0gPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCA0OyBoKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaG9yekNvb3JkID0gY3VycmVudENvb3Jkc1swXSArIGhvcnpEaWZmW2hdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHYgPSAwOyB2IDwgNCAmJiBob3J6Q29vcmQgPj0wICYmIGhvcnpDb29yZCA8IDg7IHYrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmVydENvb3JkID0gY3VycmVudENvb3Jkc1sxXSArIHZlcnREaWZmW3ZdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmVydENvb3JkID49IDAgJiYgdmVydENvb3JkIDwgOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkTm9kZSA9IGNyZWF0ZU5vZGUodG9WaXNpdFtpXSwgW2hvcnpDb29yZCwgdmVydENvb3JkXSwgW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvcnpDb29yZCA9PT0gc3RhcnRbMF0gJiYgdmVydENvb3JkID09PSBzdGFydFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWRbaG9yekNvb3JkXVt2ZXJ0Q29vcmRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9WaXNpdFtpXS5hZGRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUb1Zpc2l0LnB1c2goY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b1Zpc2l0ID0gbmV4dFRvVmlzaXQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBrbmlnaHRNb3ZlcyhzdGFydCwgZW5kKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBrbmlnaHRNb3Zlc1Rlc3Qoc3RhcnQsIGVuZCk7XG4gICAgd2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudC5nZXRWYWx1ZSgpKTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZ2V0UGFyZW50KCk7XG4gICAgfVxufVxuXG4vLyBrbmlnaHRNb3ZlcyhbMCwgMF0sIFsxLCAyXSlcbmxldCBub2RlMSA9IGNyZWF0ZU5vZGUobnVsbCwgWzEsIDJdLCBbXSk7XG5jb25zb2xlLmxvZyhub2RlMS5nZXRWYWx1ZSgpKTtcbm5vZGUxLnNldFZhbHVlKFsyLCAzXSk7XG5jb25zb2xlLmxvZyhub2RlMS5nZXRWYWx1ZSgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=