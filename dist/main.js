/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
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
/***/ (() => {

eval("(function () {\n  const currentWeather = document.querySelector('.current-weather')\n  const searchBtn = document.getElementById('search-btn')\n  const searchForm = document.forms[0]\n\n  searchBtn.addEventListener('click', (e) => {\n    e.preventDefault()\n    const city = searchForm.search.value\n    getCurrentWeather(city)\n  })\n\n  async function getCurrentWeather (city) {\n    try {\n      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97015c07e527f4019713d1dd80c9f0e8`)\n      response.json().then(function (response) {\n        if (!response.weather) {\n          throw Error('No records found')\n        } else {\n          console.log(response.weather[0].description)\n          currentWeather.textContent = response.weather[0].description\n        }\n      })\n    } catch (err) {\n      console.log(err)\n    }\n  }\n})()\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;