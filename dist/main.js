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

/***/ "./src/displayData.js":
/*!****************************!*\
  !*** ./src/displayData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display)\n/* harmony export */ });\nconst display = (() => {\n  const currentCity = document.getElementById('city')\n  const currentTemperature = document.getElementById('current-temperature')\n  const currentHumidity = document.getElementById('current-humidity')\n  const currentOverview = document.getElementById('current-overview')\n  const currentPressure = document.getElementById('current-pressure')\n  const currentWind = document.getElementById('current-wind')\n\n  const clearAll = function () {\n    currentCity.textContent = ''\n    currentOverview.textContent = ''\n    currentTemperature.textContent = ''\n    currentWind.textContent = ''\n    currentPressure.textContent = ''\n    currentHumidity.textContent = ''\n  }\n\n  const currentWeather = (response) => {\n    if (!response.weather) {\n      clearAll()\n      currentCity.textContent = 'No records found'\n    } else {\n      currentCity.textContent = response.name\n      currentOverview.textContent = response.weather[0].main\n      currentTemperature.textContent = 'Temperature: ' + response.main.temp + '°C'\n      currentWind.textContent = 'Wind: ' + response.wind.speed + ' m/s'\n      currentPressure.textContent = 'Pressure: ' + response.main.pressure + ' mb'\n      currentHumidity.textContent = 'Humidity: ' + response.main.humidity + '%'\n    }\n  }\n\n  const longtermWeather = (response) => {\n    console.log(response)\n  }\n\n  return { currentWeather, longtermWeather }\n})()\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/displayData.js?");

/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": () => (/* binding */ get)\n/* harmony export */ });\n/* harmony import */ var _displayData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayData */ \"./src/displayData.js\");\n\n\nconst get = (() => {\n  const currentCity = document.getElementById('city')\n\n  const currentWeather = async (city) => {\n    currentCity.textContent = 'Loading...'\n    try {\n      const response = await window.fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=97015c07e527f4019713d1dd80c9f0e8`)\n      response.json().then(function (response) {\n        _displayData__WEBPACK_IMPORTED_MODULE_0__.display.currentWeather(response)\n      })\n    } catch (err) {\n      console.log(err)\n    }\n  }\n\n  const longtermWeather = async (city) => {\n    currentCity.textContent = 'Loading...'\n    try {\n      const response = await window.fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=97015c07e527f4019713d1dd80c9f0e8&units=metric`)\n      response.json().then(function (response) {\n        if (!response) {\n          console.log('error')\n        } else {\n          console.log(response)\n        }\n      })\n    } catch (err) {\n      console.log(err)\n    }\n  }\n\n  return { currentWeather, longtermWeather }\n})()\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/fetchData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n\n\n(function () {\n  // Search form\n  const searchBtn = document.getElementById('search-btn')\n  const searchForm = document.forms[0]\n\n  searchBtn.addEventListener('click', (e) => {\n    e.preventDefault()\n    const city = searchForm.search.value\n    _fetchData__WEBPACK_IMPORTED_MODULE_0__.get.currentWeather(city)\n    _fetchData__WEBPACK_IMPORTED_MODULE_0__.get.longtermWeather(city)\n    searchForm.reset()\n  })\n\n  window.addEventListener('keydown', (e) => {\n    if (e.key === 'Enter') {\n      e.preventDefault()\n      const city = searchForm.search.value\n      _fetchData__WEBPACK_IMPORTED_MODULE_0__.get.currentWeather(city)\n      searchForm.reset()\n    }\n  })\n})()\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;