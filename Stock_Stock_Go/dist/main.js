/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_stockApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/stockApp */ \"./src/scripts/stockApp.js\");\n/* harmony import */ var _scripts_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/graph */ \"./src/scripts/graph.js\");\n/* harmony import */ var _scripts_graph__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_graph__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var stockApp = new _scripts_stockApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  window.stockApp = stockApp;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFFQUUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNQyxRQUFRLEdBQUcsSUFBSUoseURBQUosRUFBakI7QUFDQUssRUFBQUEsTUFBTSxDQUFDRCxRQUFQLEdBQWtCQSxRQUFsQjtBQUNILENBSEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdG9ja19TdG9ja19Hby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9ja0FwcCBmcm9tIFwiLi9zY3JpcHRzL3N0b2NrQXBwXCI7XHJcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9zY3JpcHRzL2dyYXBoXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9ja0FwcCA9IG5ldyBTdG9ja0FwcCgpO1xyXG4gICAgd2luZG93LnN0b2NrQXBwID0gc3RvY2tBcHA7XHJcbn0pIl0sIm5hbWVzIjpbIlN0b2NrQXBwIiwiR3JhcGgiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9ja0FwcCIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/graph.js":
/*!******************************!*\
  !*** ./src/scripts/graph.js ***!
  \******************************/
/***/ (() => {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbIiJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ncmFwaC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/graph.js\n");

/***/ }),

/***/ "./src/scripts/stockApp.js":
/*!*********************************!*\
  !*** ./src/scripts/stockApp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph */ \"./src/scripts/graph.js\");\n/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graph__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n // require('dotenv').config();\n\nvar StockApp = /*#__PURE__*/_createClass(function StockApp() {\n  _classCallCheck(this, StockApp);\n\n  this.ctx = document.getElementById(\"myChart\").getContext('2d'); // debugger\n\n  var myChart = new Chart(this.ctx, {\n    type: 'line',\n    data: {\n      labels: [\"Red\", 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n      datasets: [{\n        label: 'Stock Prices over',\n        data: [1, 2, 1, 1, 1, 1],\n        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],\n        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],\n        borderWidth: 1\n      }]\n    },\n    options: {\n      scales: {\n        y: {\n          beginAtZero: true\n        }\n      }\n    }\n  });\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StockApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdG9ja0FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Q0FDQTs7SUFDTUMscUNBRUYsb0JBQWE7QUFBQTs7QUFDVCxPQUFLQyxHQUFMLEdBQVdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsVUFBbkMsQ0FBOEMsSUFBOUMsQ0FBWCxDQURTLENBRVQ7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLElBQUlDLEtBQUosQ0FBVSxLQUFLTCxHQUFmLEVBQW9CO0FBQ2hDTSxJQUFBQSxJQUFJLEVBQUUsTUFEMEI7QUFFaENDLElBQUFBLElBQUksRUFBRTtBQUNGQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixRQUFoQixFQUEwQixPQUExQixFQUFtQyxRQUFuQyxFQUE2QyxRQUE3QyxDQUROO0FBRUZDLE1BQUFBLFFBQVEsRUFBRSxDQUFDO0FBQ1BDLFFBQUFBLEtBQUssRUFBRSxtQkFEQTtBQUVQSCxRQUFBQSxJQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FGQztBQUdQSSxRQUFBQSxlQUFlLEVBQUUsQ0FDYix5QkFEYSxFQUViLHlCQUZhLEVBR2IseUJBSGEsRUFJYix5QkFKYSxFQUtiLDBCQUxhLEVBTWIseUJBTmEsQ0FIVjtBQVdQQyxRQUFBQSxXQUFXLEVBQUUsQ0FDVCx1QkFEUyxFQUVULHVCQUZTLEVBR1QsdUJBSFMsRUFJVCx1QkFKUyxFQUtULHdCQUxTLEVBTVQsdUJBTlMsQ0FYTjtBQW1CUEMsUUFBQUEsV0FBVyxFQUFFO0FBbkJOLE9BQUQ7QUFGUixLQUYwQjtBQTBCaENDLElBQUFBLE9BQU8sRUFBRTtBQUNMQyxNQUFBQSxNQUFNLEVBQUU7QUFDSkMsUUFBQUEsQ0FBQyxFQUFFO0FBQ0NDLFVBQUFBLFdBQVcsRUFBRTtBQURkO0FBREM7QUFESDtBQTFCdUIsR0FBcEIsQ0FBaEI7QUFrQ0g7O0FBR0wsaUVBQWVsQixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3RvY2tfU3RvY2tfR28vLi9zcmMvc2NyaXB0cy9zdG9ja0FwcC5qcz9mNWQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJ1xyXG4vLyByZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcclxuY2xhc3MgU3RvY2tBcHB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDaGFydFwiKS5nZXRDb250ZXh0KCcyZCcpXHJcbiAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICBjb25zdCBteUNoYXJ0ID0gbmV3IENoYXJ0KHRoaXMuY3R4LCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXCJSZWRcIiwgJ0JsdWUnLCAnWWVsbG93JywgJ0dyZWVuJywgJ1B1cnBsZScsICdPcmFuZ2UnXSxcclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3RvY2sgUHJpY2VzIG92ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsxLDIsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDAuMiknXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tBcHA7Il0sIm5hbWVzIjpbIkdyYXBoIiwiU3RvY2tBcHAiLCJjdHgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIm15Q2hhcnQiLCJDaGFydCIsInR5cGUiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJvcHRpb25zIiwic2NhbGVzIiwieSIsImJlZ2luQXRaZXJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/stockApp.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdG9ja19TdG9ja19Hby8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;