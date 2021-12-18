/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/apskr.js":
/*!*************************!*\
  !*** ./src/js/apskr.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/js/elements.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/js/events.js");


 // kamuoliukų sugeneravimas

for (var i = 0; i < (0,_functions__WEBPACK_IMPORTED_MODULE_0__.rand)(5, 20); i++) {
  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.makeBall)();
}

var a = document.querySelectorAll('.apskr'); // pradinių reikšmių priskyrimas

(0,_functions__WEBPACK_IMPORTED_MODULE_0__.ballsLeft)(a.length);
(0,_functions__WEBPACK_IMPORTED_MODULE_0__.countEmptyClicks)(0);
_elements__WEBPACK_IMPORTED_MODULE_1__.section.style.backgroundColor = 'black'; // pagrindiniai eventai

(0,_events__WEBPACK_IMPORTED_MODULE_2__["default"])(); // pereinam per visus kamuoliukus

a.forEach(function (r) {
  // pagavimo paspaudimas
  r.addEventListener('click', function (e) {
    e.stopPropagation();
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.ballsLeft)();
    r.style.display = 'none';
  });
  r.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}); // paleidžiam laikrodį

setInterval(function () {
  a.forEach(function (r) {
    setTimeout(function () {
      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.go)(r);
    }, (0,_functions__WEBPACK_IMPORTED_MODULE_0__.rand)(0, 500));
  });
}, 5000); // kamuoliukai startinėje pozicijoje

a.forEach(function (r) {
  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.go)(r);
});

/***/ }),

/***/ "./src/js/elements.js":
/*!****************************!*\
  !*** ./src/js/elements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ballsLeftDiv": () => (/* binding */ ballsLeftDiv),
/* harmony export */   "rezDiv": () => (/* binding */ rezDiv),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "section": () => (/* binding */ section)
/* harmony export */ });
var ballsLeftDiv = document.querySelector('.counter strong');
var rezDiv = document.querySelector('.clicks strong');
var reset = document.querySelector('button');
var section = document.querySelector('section');

/***/ }),

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/js/elements.js");
/* harmony import */ var _apskr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apskr */ "./src/js/apskr.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");




var runEvents = function runEvents() {
  _elements__WEBPACK_IMPORTED_MODULE_0__.reset.addEventListener('click', function (e) {
    e.stopPropagation();
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.countEmptyClicks)(0);
    _apskr__WEBPACK_IMPORTED_MODULE_1__.a.forEach(function (r) {
      r.style.display = null;
    });
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.ballsLeft)(_apskr__WEBPACK_IMPORTED_MODULE_1__.a.length);
  });
  document.querySelector('body').addEventListener('click', function () {
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.countEmptyClicks)();
  });
  _elements__WEBPACK_IMPORTED_MODULE_0__.section.addEventListener('click', function (e) {
    return e.stopPropagation();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runEvents);

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rand": () => (/* binding */ rand),
/* harmony export */   "go": () => (/* binding */ go),
/* harmony export */   "ballsLeft": () => (/* binding */ ballsLeft),
/* harmony export */   "countEmptyClicks": () => (/* binding */ countEmptyClicks),
/* harmony export */   "makeBall": () => (/* binding */ makeBall)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/js/elements.js");

var rand = function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var go = function go(r) {
  r.style.left = rand(0, window.innerWidth - 100) + 'px';
  r.style.top = rand(100, window.innerHeight - 100) + 'px';
}; // ballsLeft() ===> --
// ballsLeft(0) ===> 0
// ballsLeft(10) ===> 10

var ballsLeft = function ballsLeft() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (false === value) {
    var valueNow = _elements__WEBPACK_IMPORTED_MODULE_0__.ballsLeftDiv.innerText;
    valueNow--;
    _elements__WEBPACK_IMPORTED_MODULE_0__.ballsLeftDiv.innerText = valueNow;
  } else {
    _elements__WEBPACK_IMPORTED_MODULE_0__.ballsLeftDiv.innerText = value;
  }
};
var countEmptyClicks = function countEmptyClicks() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (false === value) {
    var valueNow = _elements__WEBPACK_IMPORTED_MODULE_0__.rezDiv.innerText;
    valueNow++;
    _elements__WEBPACK_IMPORTED_MODULE_0__.rezDiv.innerText = valueNow;
  } else {
    _elements__WEBPACK_IMPORTED_MODULE_0__.rezDiv.innerText = value;
  }
};
var makeBall = function makeBall() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var div = document.createElement('div'); // naujas elementas

  var divText = document.createTextNode(text); // paruostas tekstas

  div.appendChild(divText); // tekstas idetas i elemeta

  div.classList.add('apskr');
  document.body.appendChild(div); // elementas idedamas i body
};

/***/ }),

/***/ "./src/css/apskr.scss":
/*!****************************!*\
  !*** ./src/css/apskr.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/apskr": 0,
/******/ 			"public/apskr": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrutuliukai"] = self["webpackChunkrutuliukai"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/apskr"], () => (__webpack_require__("./src/js/apskr.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/apskr"], () => (__webpack_require__("./src/css/apskr.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;