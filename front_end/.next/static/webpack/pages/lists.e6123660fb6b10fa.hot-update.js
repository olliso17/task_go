"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lists",{

/***/ "./hooksPerson/countTasksTime.tsx":
/*!****************************************!*\
  !*** ./hooksPerson/countTasksTime.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAllHandle\": function() { return /* binding */ useAllHandle; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useAllHandle = (task)=>{\n    _s();\n    const timeTask = task.time_select.split(\":\");\n    const min = timeTask[0];\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(parseInt(min) * 60) // 5 minutos em segundos\n    ;\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        let intervalId;\n        if (isActive && time > 0) {\n            intervalId = setInterval(()=>setTime(time - 1), 1000);\n        } else if (isActive && time === 0) {\n            setIsActive(false);\n        }\n        return ()=>clearInterval(intervalId);\n    }, [\n        isActive,\n        time\n    ]);\n    const handleStart = ()=>{\n        setIsActive(true);\n    };\n    const handlePause = ()=>{\n        setIsActive(false);\n    };\n    const handleReset = ()=>{\n        setIsActive(false);\n        setTime(5 * 60);\n    };\n    const minutes = Math.floor(time / 60);\n    const seconds = time % 60;\n    const allHandle = {\n        handleStart,\n        handlePause,\n        handleReset,\n        minutes,\n        seconds\n    };\n    return allHandle;\n};\n_s(useAllHandle, \"q88lBWIH6F+8/h4d3+KLIT7q3SQ=\");\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rc1BlcnNvbi9jb3VudFRhc2tzVGltZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU4RTtBQUk5RSxNQUFNRSxlQUFlLENBQUNDLE9BQXdCOztJQUUxQyxNQUFNQyxXQUFXRCxLQUFLRSxXQUFXLENBQUNDLEtBQUssQ0FBQztJQUN4QyxNQUFNQyxNQUFNSCxRQUFRLENBQUMsRUFBRTtJQUN2QixNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUNTLFNBQVNILE9BQU8sSUFBSSx3QkFBd0I7O0lBQzdFLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTlDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSWE7UUFFSixJQUFJRixZQUFZSCxPQUFPLEdBQUc7WUFDeEJLLGFBQWFDLFlBQVksSUFBTUwsUUFBUUQsT0FBTyxJQUFJO1FBQ3BELE9BQU8sSUFBSUcsWUFBWUgsU0FBUyxHQUFHO1lBQ2pDSSxZQUFZLEtBQUs7UUFDbkIsQ0FBQztRQUVELE9BQU8sSUFBTUcsY0FBY0Y7SUFDN0IsR0FBRztRQUFDRjtRQUFVSDtLQUFLO0lBRW5CLE1BQU1RLGNBQWMsSUFBTTtRQUN4QkosWUFBWSxJQUFJO0lBQ2xCO0lBRUEsTUFBTUssY0FBYyxJQUFNO1FBQ3hCTCxZQUFZLEtBQUs7SUFDbkI7SUFFQSxNQUFNTSxjQUFjLElBQU07UUFDeEJOLFlBQVksS0FBSztRQUNqQkgsUUFBUSxJQUFJO0lBQ2Q7SUFFQSxNQUFNVSxVQUFVQyxLQUFLQyxLQUFLLENBQUNiLE9BQU87SUFDbEMsTUFBTWMsVUFBVWQsT0FBTztJQUN2QixNQUFNZSxZQUFZO1FBQ2RQO1FBQWFDO1FBQWFDO1FBQWFDO1FBQVNHO0lBQ3BEO0lBQ0EsT0FBT0M7QUFDWDtHQXRDTXJCO0FBeUNpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rc1BlcnNvbi9jb3VudFRhc2tzVGltZS50c3g/NGI5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWxlcnRDb21wb25lbnQgZnJvbSBcIkAvY29tcG9uZW50cy9Db21wb25lbnRzUGhvbmUvQWxlcnRDb21wb25lbnRcIjtcbmltcG9ydCB7IE91dHB1dFRhc2tEdG8gfSBmcm9tIFwiQC9zZXJ2aWNlcy9kdG8vdGFza19kdG9cIjtcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5jb25zdCB1c2VBbGxIYW5kbGUgPSAodGFzazogT3V0cHV0VGFza0R0bykgPT4ge1xuXG4gICAgY29uc3QgdGltZVRhc2sgPSB0YXNrLnRpbWVfc2VsZWN0LnNwbGl0KFwiOlwiKVxuICAgIGNvbnN0IG1pbiA9IHRpbWVUYXNrWzBdXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUocGFyc2VJbnQobWluKSAqIDYwKSAvLyA1IG1pbnV0b3MgZW0gc2VndW5kb3NcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IGludGVydmFsSWQ6IE5vZGVKUy5UaW1lb3V0XG4gIFxuICAgICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XG4gICAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXRUaW1lKHRpbWUgLSAxKSwgMTAwMClcbiAgICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZSA9PT0gMCkge1xuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxuICAgIH0sIFtpc0FjdGl2ZSwgdGltZV0pXG4gIFxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgICAgc2V0SXNBY3RpdmUodHJ1ZSlcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZVBhdXNlID0gKCkgPT4ge1xuICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICAgIHNldElzQWN0aXZlKGZhbHNlKVxuICAgICAgc2V0VGltZSg1ICogNjApXG4gICAgfVxuICBcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MFxuICAgIGNvbnN0IGFsbEhhbmRsZSA9IHtcbiAgICAgICAgaGFuZGxlU3RhcnQsIGhhbmRsZVBhdXNlLCBoYW5kbGVSZXNldCwgbWludXRlcywgc2Vjb25kc1xuICAgIH1cbiAgICByZXR1cm4gYWxsSGFuZGxlXG59XG5cblxuZXhwb3J0IHsgdXNlQWxsSGFuZGxlIH0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBbGxIYW5kbGUiLCJ0YXNrIiwidGltZVRhc2siLCJ0aW1lX3NlbGVjdCIsInNwbGl0IiwibWluIiwidGltZSIsInNldFRpbWUiLCJwYXJzZUludCIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVQYXVzZSIsImhhbmRsZVJlc2V0IiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJhbGxIYW5kbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooksPerson/countTasksTime.tsx\n"));

/***/ })

});