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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handlePause\": function() { return /* binding */ handlePause; },\n/* harmony export */   \"handleReset\": function() { return /* binding */ handleReset; },\n/* harmony export */   \"useHandleStart\": function() { return /* binding */ useHandleStart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ComponentsPhone_AlertComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ComponentsPhone/AlertComponent */ \"./components/ComponentsPhone/AlertComponent/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\nconst useHandleStart = (min, setMin, setSec, setIsRunning1)=>{\n    const handleStart = ()=>{\n        setIsRunning1(true);\n        let seconds = min * 60;\n        intervalRef.current = setInterval(()=>{\n            const minutesLeft = Math.floor(seconds / 60);\n            const secondsLeft = seconds % 60;\n            setMin(minutesLeft);\n            setSec(secondsLeft);\n            if (--seconds < 0) {\n                clearInterval(intervalRef.current);\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ComponentsPhone_AlertComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/hooksPerson/countTasksTime.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined);\n            }\n        }, 1000);\n    };\n    return handleStart;\n};\nconst handlePause = ()=>{\n    setIsRunning(false);\n    if (intervalRef.current) clearInterval(intervalRef.current);\n};\nconst handleReset = (setMin, setSec, minutes, second)=>{\n    setIsRunning(false);\n    setMin(parseInt(minutes));\n    setSec(parseInt(second));\n    if (intervalRef.current) clearInterval(intervalRef.current);\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rc1BlcnNvbi9jb3VudFRhc2tzVGltZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlFO0FBQ047QUFFbkUsTUFBTUUsY0FBY0QsNkNBQU1BO0FBRTFCLE1BQU1FLGlCQUFpQixDQUFDQyxLQUFhQyxRQUEwQ0MsUUFBMENDLGdCQUFpQjtJQUN0SSxNQUFNQyxjQUFjLElBQU07UUFDdEJELGNBQWEsSUFBSTtRQUNqQixJQUFJRSxVQUFVTCxNQUFNO1FBQ3BCRixZQUFZUSxPQUFPLEdBQUdDLFlBQVksSUFBTTtZQUNwQyxNQUFNQyxjQUFjQyxLQUFLQyxLQUFLLENBQUNMLFVBQVU7WUFDekMsTUFBTU0sY0FBY04sVUFBVTtZQUM5QkosT0FBT087WUFDUE4sT0FBT1M7WUFDUCxJQUFJLEVBQUVOLFVBQVUsR0FBRztnQkFDZk8sY0FBY2QsWUFBWVEsT0FBTzs4QkFDakMsOERBQUNWLGtGQUFjQTs7Ozs7WUFDbkIsQ0FBQztRQUNMLEdBQUc7SUFDUDtJQUNBLE9BQU9RO0FBQ1g7QUFHQSxNQUFNUyxjQUFjLElBQU07SUFDdEJWLGFBQWEsS0FBSztJQUNsQixJQUFJTCxZQUFZUSxPQUFPLEVBQUVNLGNBQWNkLFlBQVlRLE9BQU87QUFDOUQ7QUFFQSxNQUFNUSxjQUFjLENBQUNiLFFBQTBDQyxRQUEwQ2EsU0FBaUJDLFNBQW1CO0lBQ3pJYixhQUFhLEtBQUs7SUFDbEJGLE9BQU9nQixTQUFTRjtJQUNoQmIsT0FBT2UsU0FBU0Q7SUFDaEIsSUFBSWxCLFlBQVlRLE9BQU8sRUFBRU0sY0FBY2QsWUFBWVEsT0FBTztBQUM5RDtBQUVtRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rc1BlcnNvbi9jb3VudFRhc2tzVGltZS50c3g/NGI5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWxlcnRDb21wb25lbnQgZnJvbSBcIkAvY29tcG9uZW50cy9Db21wb25lbnRzUGhvbmUvQWxlcnRDb21wb25lbnRcIjtcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBpbnRlcnZhbFJlZiA9IHVzZVJlZjxOb2RlSlMuVGltZW91dD4oKTtcblxuY29uc3QgdXNlSGFuZGxlU3RhcnQgPSAobWluOiBudW1iZXIsIHNldE1pbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sIHNldFNlYzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sIHNldElzUnVubmluZykgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1J1bm5pbmcodHJ1ZSk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gbWluICogNjA7XG4gICAgICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzTGVmdCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHNMZWZ0ID0gc2Vjb25kcyAlIDYwO1xuICAgICAgICAgICAgc2V0TWluKG1pbnV0ZXNMZWZ0KVxuICAgICAgICAgICAgc2V0U2VjKHNlY29uZHNMZWZ0KVxuICAgICAgICAgICAgaWYgKC0tc2Vjb25kcyA8IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIDxBbGVydENvbXBvbmVudCAvPlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuICAgIHJldHVybiBoYW5kbGVTdGFydFxufVxuXG5cbmNvbnN0IGhhbmRsZVBhdXNlID0gKCkgPT4ge1xuICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgaWYgKGludGVydmFsUmVmLmN1cnJlbnQpIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudCk7XG59O1xuXG5jb25zdCBoYW5kbGVSZXNldCA9IChzZXRNaW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LCBzZXRTZWM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LCBtaW51dGVzOiBzdHJpbmcsIHNlY29uZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICBzZXRNaW4ocGFyc2VJbnQobWludXRlcykpO1xuICAgIHNldFNlYyhwYXJzZUludChzZWNvbmQpKTtcbiAgICBpZiAoaW50ZXJ2YWxSZWYuY3VycmVudCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbn07XG5cbmV4cG9ydCB7IHVzZUhhbmRsZVN0YXJ0LCBoYW5kbGVQYXVzZSwgaGFuZGxlUmVzZXQgfSJdLCJuYW1lcyI6WyJBbGVydENvbXBvbmVudCIsInVzZVJlZiIsImludGVydmFsUmVmIiwidXNlSGFuZGxlU3RhcnQiLCJtaW4iLCJzZXRNaW4iLCJzZXRTZWMiLCJzZXRJc1J1bm5pbmciLCJoYW5kbGVTdGFydCIsInNlY29uZHMiLCJjdXJyZW50Iiwic2V0SW50ZXJ2YWwiLCJtaW51dGVzTGVmdCIsIk1hdGgiLCJmbG9vciIsInNlY29uZHNMZWZ0IiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZVBhdXNlIiwiaGFuZGxlUmVzZXQiLCJtaW51dGVzIiwic2Vjb25kIiwicGFyc2VJbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooksPerson/countTasksTime.tsx\n"));

/***/ })

});