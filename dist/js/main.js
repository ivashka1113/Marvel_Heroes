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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getHeroes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getHeroes.js */ \"./modules/getHeroes.js\");\n/* harmony import */ var _modules_showCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showCards.js */ \"./modules/showCards.js\");\n/* harmony import */ var _modules_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/filter.js */ \"./modules/filter.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_getHeroes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"dbHeroes.json\").then(data => {\r\n    (0,_modules_showCards_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n    (0,_modules_filter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\r\n})\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/filter.js":
/*!***************************!*\
  !*** ./modules/filter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst filter = (data) => {\r\n    const header = document.querySelector(\"header\");\r\n    const typeSearch = header.querySelector(\".type-search\");\r\n    const inputName = header.querySelector(\".name-input\");\r\n    const inputRealName = header.querySelector(\".real-name-input\");\r\n    const seletSpecies = header.querySelector(\".selec-species\");\r\n    const selectGenders = header.querySelector(\".select-gender\");\r\n    const selectStatus = header.querySelector(\".select-status\");\r\n    const searchBtn = header.querySelector(\".search-btn\");\r\n    const main = document.querySelector(\"main\");\r\n    const cards = main.querySelectorAll(\".card\");\r\n    const noResault = main.querySelector(\"span\")\r\n    let allCardsDisplayNone = 0;\r\n\r\n\r\n    typeSearch.addEventListener(\"click\", () => {\r\n        if (typeSearch.textContent === \"Name\") {\r\n            typeSearch.textContent = \"Real name\";\r\n            inputName.value = \"\";\r\n        } else {\r\n            typeSearch.textContent = \"Name\";\r\n            inputRealName.value = \"\";\r\n        }\r\n        inputName.classList.toggle(\"display-none\");\r\n        inputRealName.classList.toggle(\"display-none\");\r\n    })\r\n\r\n    searchBtn.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        const characteristics = [inputName.value, inputRealName.value, seletSpecies.value, selectGenders.value, selectStatus.value]\r\n        data.forEach((card, index) => {\r\n            const cardCharacteristics = [card.name, card.realName === undefined ? \"\" : card.realName, card.species === undefined ? \"\" : card.species, card.gender, card.status === undefined ? \"unknown\" : card.status]\r\n            for (let i = 0; i < characteristics.length; i++) {\r\n                // if (i <= 2) {\r\n                //     if ((cardCharacteristics[i] === characteristics[i]) || (characteristics[i] === \"\")) {\r\n                //         cards[index].style.display = \"flex\";\r\n                //     }\r\n                if ((cardCharacteristics[i] === characteristics[i]) || (characteristics[i] === \"\")) {\r\n                    cards[index].style.display = \"flex\";\r\n                } else {\r\n                    cards[index].style.display = \"none\";\r\n                    return\r\n                }\r\n            }\r\n        })\r\n\r\n        cards.forEach((card) => {\r\n            if (card.style.display === \"none\") allCardsDisplayNone++;\r\n        })\r\n        if (allCardsDisplayNone === cards.length) {\r\n            noResault.classList.remove(\"display-none\");\r\n        } else if (allCardsDisplayNone < cards.length) {\r\n            noResault.classList.add(\"display-none\");\r\n        }\r\n        allCardsDisplayNone = 0;\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack:///./modules/filter.js?");

/***/ }),

/***/ "./modules/getHeroes.js":
/*!******************************!*\
  !*** ./modules/getHeroes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst getHeroes = (url) => {\r\n    return fetch(url, {\r\n            method: \"GET\",\r\n            headers: {\r\n                \"Content-type\": \"application/json; charset=UTF-8\",\r\n            },\r\n        })\r\n        .then(response => response.json())\r\n        .catch(error => console.log(error));\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHeroes);\n\n//# sourceURL=webpack:///./modules/getHeroes.js?");

/***/ }),

/***/ "./modules/showCards.js":
/*!******************************!*\
  !*** ./modules/showCards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst showCards = (data) => {\r\n    const main = document.querySelector(\"main\");\r\n    data.forEach((card) => {\r\n        let div = document.createElement(\"div\");\r\n        div.classList.add(\"card\")\r\n        div.innerHTML = `\r\n        <img class=\"card-img\" src=\"${card.photo}\">\r\n        <div class=\"card-info\">\r\n            <div class= \"card-title\">\r\n                <h2 class=\"card-title-text\">${card.name}</h2>\r\n                <img class=\"gender-img\" src=\"./images/${card.gender}.svg\"></img>\r\n            </div>\r\n            <div class=\"card-desc\">\r\n            <div class=\"status-species\">\r\n                <span>${card.status}</span>\r\n                &nbsp;-&nbsp;\r\n                <span>${card.species === undefined ? \"unknown\" : card.species}</span>\r\n            </div>\r\n                <p>Real name - ${card.realName === undefined ? \"unknown\" : card.realName}</p>\r\n                <p>Species - ${card.species}</p>\r\n                <p>Citizenship - ${card.citizenship === undefined ? \"unknown\" : card.citizenship}</p>\r\n                <p>Actors - ${card.actors}</p>\r\n            </div>\r\n        </div>`\r\n        main.append(div);\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCards);\n\n//# sourceURL=webpack:///./modules/showCards.js?");

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