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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_typeSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/typeSearch.js */ \"./modules/typeSearch.js\");\n/* harmony import */ var _modules_getHeroes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getHeroes.js */ \"./modules/getHeroes.js\");\n/* harmony import */ var _modules_showCards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showCards.js */ \"./modules/showCards.js\");\n/* harmony import */ var _modules_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/filter.js */ \"./modules/filter.js\");\n/* harmony import */ var _modules_showPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/showPopup */ \"./modules/showPopup.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst searchBtn = document.querySelector(\".search-btn\");\r\nconst main = document.querySelector(\"main\");\r\n\r\n(0,_modules_getHeroes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"dbHeroes.json\").then(data => {\r\n    (0,_modules_typeSearch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_modules_showCards_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\r\n    console.log(\"Карты показаны\")\r\n    searchBtn.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        (0,_modules_showCards_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_modules_filter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data));\r\n    })\r\n\r\n    main.addEventListener(\"click\", (e) => {\r\n        ;(0,_modules_showPopup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e, data);\r\n    });\r\n})\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/filter.js":
/*!***************************!*\
  !*** ./modules/filter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n\r\nconst filter = (data) => {\r\n    const header = document.querySelector(\"header\");\r\n    const form = header.querySelector(\".form\")\r\n    const filterCards = [];\r\n    const formBody = {};\r\n\r\n    const formData = new FormData(form);\r\n\r\n    formData.forEach((val, key) => {\r\n        formBody[key] = val;\r\n    })\r\n\r\n    data.forEach((card) => {\r\n        let success = true;\r\n\r\n        const cardCharacteristics = {\r\n            \"name\": card.name,\r\n            \"real-name\": card.realName === undefined ? \"\" : card.realName,\r\n            \"species\": card.species === undefined ? \"\" : card.species,\r\n            \"gender\": card.gender,\r\n            \"status\": card.status === undefined ? \"unknown\" : card.status\r\n        }\r\n\r\n        for (let key in cardCharacteristics) {\r\n            if ((key === \"name\" || key === \"real-name\") && formBody[key] !== \"\") {\r\n                if (!(cardCharacteristics[key].toLowerCase().match(formBody[key].toLowerCase()))) {\r\n                    success = false;\r\n                    continue;\r\n                }\r\n            } else if ((cardCharacteristics[key] !== formBody[key]) && (formBody[key] !== \"\")) {\r\n                success = false;\r\n                return;\r\n            };\r\n        }\r\n\r\n        if (success) filterCards.push(card);\r\n\r\n    })\r\n\r\n    return filterCards;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack:///./modules/filter.js?");

/***/ }),

/***/ "./modules/getHeroes.js":
/*!******************************!*\
  !*** ./modules/getHeroes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst getHeroes = (url) => {\r\n    return fetch(url, {\r\n            method: \"GET\",\r\n            headers: {\r\n                \"Content-type\": \"application/json; charset=UTF-8\",\r\n            },\r\n        })\r\n        .then(response => response.json())\r\n        .catch(error => console.log(error));\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHeroes);\n\n//# sourceURL=webpack:///./modules/getHeroes.js?");

/***/ }),

/***/ "./modules/popupCard.js":
/*!******************************!*\
  !*** ./modules/popupCard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst popupCard = (card) => {\r\n\r\n    const main = document.querySelector(\"main\");\r\n    const popup = document.createElement(\"div\");\r\n\r\n    popup.classList.add(\"popup-wrapper\");\r\n    popup.innerHTML =\r\n        `<div class = \"popup\">\r\n        <div class = \"popup-close-btn\">\r\n        <img class = \"popup-close-btn-img\" src = \"./images/cross-svgrepo-com.svg\">\r\n        </div>\r\n        <img class = \"popup-img\" src = \"${card.photo}\" alt = \"${card.name}\">\r\n        <div class = \"popup-title\">\r\n            <h2 class = \"popup-title-text\">${card.name}</h2>\r\n            <img class=\"gender-img\" src=\"./images/${card.gender}.svg\">\r\n        </div>\r\n        <div class=\"popup-status-species\">\r\n                <span>${card.status}</span>\r\n                &nbsp;-&nbsp;\r\n                <span>${card.species === undefined ? \"unknown\" : card.species}</span>\r\n        </div>\r\n        <div class = \"popup-card-info\">\r\n        <p>Real name - ${card.realName === undefined ? \"unknown\" : card.realName}</p>\r\n        <p>Citizenship - ${card.citizenship === undefined ? \"unknown\" : card.citizenship}</p>\r\n        <p>Actors - ${card.actors}</p>\r\n        <p>BirthDay - ${card.birthDay === undefined ? \"unknown\" : card.birthDay}</p>\r\n        <p>DeathDay - ${card.deathDay === undefined ? \"unknown\" : card.deathDay}</p>\r\n        </div>\r\n        <span class = \"films-participated\">Participated in fimls:</span>\r\n    </div>`\r\n\r\n    const films = document.createElement(\"div\");\r\n    films.classList.add(\"films\");\r\n\r\n    if (card.movies !== undefined) {\r\n        card.movies.forEach((film) => {\r\n            const movie = document.createElement(\"div\");\r\n            movie.innerHTML = `<p class =\"film\">${film}</p>`;\r\n            films.append(movie);\r\n        })\r\n\r\n    } else {\r\n        films.textContent = \"Haven't acted in any movie yet\";\r\n    }\r\n\r\n    popup.querySelector(\".popup\").append(films);\r\n\r\n    popup.addEventListener(\"click\", (e) => {\r\n\r\n        if (!(e.target.closest(\".popup\")) || e.target.closest(\".popup-close-btn\")) {\r\n            popup.remove();\r\n        }\r\n\r\n    })\r\n\r\n    main.append(popup)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupCard);\n\n//# sourceURL=webpack:///./modules/popupCard.js?");

/***/ }),

/***/ "./modules/showCards.js":
/*!******************************!*\
  !*** ./modules/showCards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst showCards = (data) => {\r\n    const main = document.querySelector(\"main\");\r\n\r\n    if (data.length === 0) {\r\n        main.innerHTML = `<span class = \"no-results\">\"Sorry, your search did not match any results.\"</span>`;\r\n        return;\r\n    } else {\r\n        main.innerHTML = \"\";\r\n    }\r\n\r\n    data.forEach((card) => {\r\n        let div = document.createElement(\"div\");\r\n        div.classList.add(\"card\");\r\n\r\n        div.innerHTML = `\r\n        <img class=\"card-img\" src=\"${card.photo}\">\r\n        <div class=\"card-info\">\r\n            <div class= \"card-title\">\r\n                <h2 class=\"card-title-text\">${card.name}</h2>\r\n                <img class=\"gender-img\" src=\"./images/${card.gender}.svg\">\r\n            </div>\r\n            <div class=\"card-desc\">\r\n            <div class=\"status-species\">\r\n                <span>${card.status}</span>\r\n                &nbsp;-&nbsp;\r\n                <span>${card.species === undefined ? \"unknown\" : card.species}</span>\r\n            </div>\r\n                <p>Real name - ${card.realName === undefined ? \"unknown\" : card.realName}</p>\r\n                <p>Citizenship - ${card.citizenship === undefined ? \"unknown\" : card.citizenship}</p>\r\n                <p>Actors - ${card.actors}</p>\r\n            </div>\r\n        </div>`\r\n\r\n        main.append(div);\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCards);\n\n//# sourceURL=webpack:///./modules/showCards.js?");

/***/ }),

/***/ "./modules/showPopup.js":
/*!******************************!*\
  !*** ./modules/showPopup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popupCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupCard.js */ \"./modules/popupCard.js\");\n\r\n\r\n\r\n\r\nconst showPopup = (event, data) => {\r\n\r\n    if (event.target.closest(\".card\")) {\r\n        const cardName = event.target.closest(\".card\").querySelector(\".card-title-text\").textContent;\r\n        let selectCard;\r\n        data.forEach((card) => {\r\n            if (card.name.toLowerCase() === cardName.toLowerCase()) {\r\n                selectCard = card;\r\n                (0,_popupCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selectCard);\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);\n\n//# sourceURL=webpack:///./modules/showPopup.js?");

/***/ }),

/***/ "./modules/typeSearch.js":
/*!*******************************!*\
  !*** ./modules/typeSearch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst typeSearch = () => {\r\n\r\n    const typeSearch = document.querySelector(\".type-search\");\r\n    const inputName = document.querySelector(\".name-input\");\r\n    const inputRealName = document.querySelector(\".real-name-input\");\r\n\r\n\r\n    typeSearch.addEventListener(\"click\", () => {\r\n        if (typeSearch.textContent === \"Name\") {\r\n            typeSearch.textContent = \"Real name\";\r\n            inputName.value = \"\";\r\n        } else {\r\n            typeSearch.textContent = \"Name\";\r\n            inputRealName.value = \"\";\r\n        }\r\n        inputName.classList.toggle(\"display-none\");\r\n        inputRealName.classList.toggle(\"display-none\");\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeSearch);\n\n//# sourceURL=webpack:///./modules/typeSearch.js?");

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