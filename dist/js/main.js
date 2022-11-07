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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getHeroes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getHeroes.js */ \"./modules/getHeroes.js\");\n/* harmony import */ var _modules_showCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showCards.js */ \"./modules/showCards.js\");\n\r\n\r\n\r\n\r\n(0,_modules_getHeroes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"dbHeroes.json\").then(data => console.log(data));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/getHeroes.js":
/*!******************************!*\
  !*** ./modules/getHeroes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst getHeroes = (url) => {\r\n    fetch(url, {\r\n            method: \"GET\",\r\n            headers: {\r\n                \"Content-type\": \"application/json; charset=UTF-8\",\r\n            },\r\n        })\r\n        .then(response => response.json())\r\n        .catch(error => console.log(error));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHeroes);\n\n//# sourceURL=webpack:///./modules/getHeroes.js?");

/***/ }),

/***/ "./modules/showCards.js":
/*!******************************!*\
  !*** ./modules/showCards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst showCards = (data) => {\r\n    const main = document.querySelector(\"main\")\r\n    data.forEach((card) => {\r\n        let div = document.createElement(\"div\");\r\n        div.classList.add(\"card\")\r\n        div.innerHTML = `\r\n        <img class=\"card-img\" src=\"${card.photo}\">\r\n        <div class=\"card-info\">\r\n            <div class= \"card-title\">\r\n                <h2 class=\"card-title-text\">${card.name}</h2>\r\n                <img src=\"./images/${card.gender}.svg\"></img>\r\n            </div>\r\n        <div class=\"card-desc\">\r\n            <span>${card.status}</span>\r\n            &nbsp;-&nbsp;\r\n            <span>${species}</span>\r\n            <p>Real name - ${card.realName}</p>\r\n            <p>Species   - ${card.species}</p>\r\n            <p>Citizenship - ${card.citizenship}</p>\r\n            <p>Actors - ${card.actors}</p>\r\n            <p>Real name - ${card.realName}</p>\r\n        </div>\r\n        </div>`\r\n        main.append(div);\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCards);\n\n//# sourceURL=webpack:///./modules/showCards.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;