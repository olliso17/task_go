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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handlePause\": function() { return /* binding */ handlePause; },\n/* harmony export */   \"handleReset\": function() { return /* binding */ handleReset; },\n/* harmony export */   \"useHandleStart\": function() { return /* binding */ useHandleStart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ComponentsPhone_AlertComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ComponentsPhone/AlertComponent */ \"./components/ComponentsPhone/AlertComponent/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\nconst useHandleStart = (min, setMin, setSec)=>{\n    const handleStart = ()=>{\n        setIsRunning(true);\n        let seconds = min * 60;\n        intervalRef.current = setInterval(()=>{\n            const minutesLeft = Math.floor(seconds / 60);\n            const secondsLeft = seconds % 60;\n            setMin(minutesLeft);\n            setSec(secondsLeft);\n            if (--seconds < 0) {\n                clearInterval(intervalRef.current);\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ComponentsPhone_AlertComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/hooksPerson/countTasksTime.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined);\n            }\n        }, 1000);\n    };\n    return handleStart;\n};\nconst handlePause = ()=>{\n    setIsRunning(false);\n    if (intervalRef.current) clearInterval(intervalRef.current);\n};\nconst handleReset = (setMin, setSec, minutes, second)=>{\n    setIsRunning(false);\n    setMin(parseInt(minutes));\n    setSec(parseInt(second));\n    if (intervalRef.current) clearInterval(intervalRef.current);\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rc1BlcnNvbi9jb3VudFRhc2tzVGltZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlFO0FBQ047QUFFbkUsTUFBTUUsY0FBY0QsNkNBQU1BO0FBRTFCLE1BQU1FLGlCQUFpQixDQUFDQyxLQUFhQyxRQUEwQ0MsU0FBNkM7SUFDeEgsTUFBTUMsY0FBYyxJQUFNO1FBQ3RCQyxhQUFhLElBQUk7UUFDakIsSUFBSUMsVUFBVUwsTUFBTTtRQUNwQkYsWUFBWVEsT0FBTyxHQUFHQyxZQUFZLElBQU07WUFDcEMsTUFBTUMsY0FBY0MsS0FBS0MsS0FBSyxDQUFDTCxVQUFVO1lBQ3pDLE1BQU1NLGNBQWNOLFVBQVU7WUFDOUJKLE9BQU9PO1lBQ1BOLE9BQU9TO1lBQ1AsSUFBSSxFQUFFTixVQUFVLEdBQUc7Z0JBQ2ZPLGNBQWNkLFlBQVlRLE9BQU87OEJBQ2pDLDhEQUFDVixrRkFBY0E7Ozs7O1lBQ25CLENBQUM7UUFDTCxHQUFHO0lBQ1A7SUFDQSxPQUFPTztBQUNYO0FBR0EsTUFBTVUsY0FBYyxJQUFNO0lBQ3RCVCxhQUFhLEtBQUs7SUFDbEIsSUFBSU4sWUFBWVEsT0FBTyxFQUFFTSxjQUFjZCxZQUFZUSxPQUFPO0FBQzlEO0FBRUEsTUFBTVEsY0FBYyxDQUFDYixRQUEwQ0MsUUFBMENhLFNBQWlCQyxTQUFtQjtJQUN6SVosYUFBYSxLQUFLO0lBQ2xCSCxPQUFPZ0IsU0FBU0Y7SUFDaEJiLE9BQU9lLFNBQVNEO0lBQ2hCLElBQUlsQixZQUFZUSxPQUFPLEVBQUVNLGNBQWNkLFlBQVlRLE9BQU87QUFDOUQ7QUFFbUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3NQZXJzb24vY291bnRUYXNrc1RpbWUudHN4PzRiOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFsZXJ0Q29tcG9uZW50IGZyb20gXCJAL2NvbXBvbmVudHMvQ29tcG9uZW50c1Bob25lL0FsZXJ0Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW50ZXJ2YWxSZWYgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQ+KCk7XG5cbmNvbnN0IHVzZUhhbmRsZVN0YXJ0ID0gKG1pbjogbnVtYmVyLCBzZXRNaW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LCBzZXRTZWM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyh0cnVlKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBtaW4gKiA2MDtcbiAgICAgICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXNMZWZ0ID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kc0xlZnQgPSBzZWNvbmRzICUgNjA7XG4gICAgICAgICAgICBzZXRNaW4obWludXRlc0xlZnQpXG4gICAgICAgICAgICBzZXRTZWMoc2Vjb25kc0xlZnQpXG4gICAgICAgICAgICBpZiAoLS1zZWNvbmRzIDwgMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgPEFsZXJ0Q29tcG9uZW50IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG4gICAgcmV0dXJuIGhhbmRsZVN0YXJ0XG59XG5cblxuY29uc3QgaGFuZGxlUGF1c2UgPSAoKSA9PiB7XG4gICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICBpZiAoaW50ZXJ2YWxSZWYuY3VycmVudCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbn07XG5cbmNvbnN0IGhhbmRsZVJlc2V0ID0gKHNldE1pbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sIHNldFNlYzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sIG1pbnV0ZXM6IHN0cmluZywgc2Vjb25kOiBzdHJpbmcpID0+IHtcbiAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xuICAgIHNldE1pbihwYXJzZUludChtaW51dGVzKSk7XG4gICAgc2V0U2VjKHBhcnNlSW50KHNlY29uZCkpO1xuICAgIGlmIChpbnRlcnZhbFJlZi5jdXJyZW50KSBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpO1xufTtcblxuZXhwb3J0IHsgdXNlSGFuZGxlU3RhcnQsIGhhbmRsZVBhdXNlLCBoYW5kbGVSZXNldCB9Il0sIm5hbWVzIjpbIkFsZXJ0Q29tcG9uZW50IiwidXNlUmVmIiwiaW50ZXJ2YWxSZWYiLCJ1c2VIYW5kbGVTdGFydCIsIm1pbiIsInNldE1pbiIsInNldFNlYyIsImhhbmRsZVN0YXJ0Iiwic2V0SXNSdW5uaW5nIiwic2Vjb25kcyIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsIm1pbnV0ZXNMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Vjb25kc0xlZnQiLCJjbGVhckludGVydmFsIiwiaGFuZGxlUGF1c2UiLCJoYW5kbGVSZXNldCIsIm1pbnV0ZXMiLCJzZWNvbmQiLCJwYXJzZUludCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooksPerson/countTasksTime.tsx\n"));

/***/ })

});