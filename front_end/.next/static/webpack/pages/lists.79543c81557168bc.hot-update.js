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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAllHandle\": function() { return /* binding */ useAllHandle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ComponentsPhone_AlertComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ComponentsPhone/AlertComponent */ \"./components/ComponentsPhone/AlertComponent/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst useAllHandle = (task, setIsRunning, isRunning)=>{\n    _s();\n    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const time = task.time_select.split(\":\");\n    const minutes = time[0];\n    const second = time[1];\n    const [min, setMin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(parseInt(minutes));\n    const [sec, setSec] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(parseInt(second));\n    const handleStart = ()=>{\n        setIsRunning(true);\n        let seconds = min * 60;\n        intervalRef.current = setInterval(()=>{\n            const minutesLeft = Math.floor(seconds / 60);\n            const secondsLeft = seconds % 60;\n            setMin(minutesLeft);\n            setSec(secondsLeft);\n            console.log(min, sec);\n            if (--seconds < 0) {\n                clearInterval(intervalRef.current);\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ComponentsPhone_AlertComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/hooksPerson/countTasksTime.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined);\n            }\n        }, 1000);\n    };\n    const handlePause = ()=>{\n        setIsRunning(false);\n        if (intervalRef.current) clearInterval(intervalRef.current);\n    };\n    const handleReset = ()=>{\n        setIsRunning(false);\n        setMin(parseInt(minutes));\n        setSec(parseInt(second));\n        if (intervalRef.current) clearInterval(intervalRef.current);\n    };\n    const allHandle = {\n        handleStart,\n        handlePause,\n        handleReset,\n        min,\n        sec\n    };\n    return allHandle;\n};\n_s(useAllHandle, \"XJB3dCVbVLBEDFPaxHYzM+nlOJA=\");\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rc1BlcnNvbi9jb3VudFRhc2tzVGltZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUU7QUFFTjtBQUluRSxNQUFNRyxlQUFlLENBQUNDLE1BQXFCQyxjQUFpREMsWUFBdUI7O0lBQy9HLE1BQU1DLGNBQWNOLDZDQUFNQTtJQUMxQixNQUFNTyxPQUFPSixLQUFLSyxXQUFXLENBQUNDLEtBQUssQ0FBQztJQUNwQyxNQUFNQyxVQUFVSCxJQUFJLENBQUMsRUFBRTtJQUN2QixNQUFNSSxTQUFTSixJQUFJLENBQUMsRUFBRTtJQUN0QixNQUFNLENBQUNLLEtBQUtDLE9BQU8sR0FBR1osK0NBQVFBLENBQUNhLFNBQVNKO0lBQ3hDLE1BQU0sQ0FBQ0ssS0FBS0MsT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQ2EsU0FBU0g7SUFFeEMsTUFBTU0sY0FBYyxJQUFNO1FBQ3RCYixhQUFhLElBQUk7UUFDakIsSUFBSWMsVUFBVU4sTUFBTTtRQUNwQk4sWUFBWWEsT0FBTyxHQUFHQyxZQUFZLElBQU07WUFDaEMsTUFBTUMsY0FBY0MsS0FBS0MsS0FBSyxDQUFDTCxVQUFVO1lBQ3pDLE1BQU1NLGNBQWNOLFVBQVU7WUFDOUJMLE9BQU9RO1lBQ1BMLE9BQU9RO1lBR1hDLFFBQVFDLEdBQUcsQ0FBQ2QsS0FBS0c7WUFDakIsSUFBSSxFQUFFRyxVQUFVLEdBQUc7Z0JBQ2ZTLGNBQWNyQixZQUFZYSxPQUFPOzhCQUNqQyw4REFBQ3BCLGtGQUFjQTs7Ozs7WUFDbkIsQ0FBQztRQUNMLEdBQUc7SUFDUDtJQUlBLE1BQU02QixjQUFjLElBQU07UUFDdEJ4QixhQUFhLEtBQUs7UUFDbEIsSUFBSUUsWUFBWWEsT0FBTyxFQUFFUSxjQUFjckIsWUFBWWEsT0FBTztJQUM5RDtJQUlBLE1BQU1VLGNBQWMsSUFBTTtRQUN0QnpCLGFBQWEsS0FBSztRQUNsQlMsT0FBT0MsU0FBU0o7UUFDaEJNLE9BQU9GLFNBQVNIO1FBQ2hCLElBQUlMLFlBQVlhLE9BQU8sRUFBRVEsY0FBY3JCLFlBQVlhLE9BQU87SUFDOUQ7SUFDQSxNQUFNVyxZQUFZO1FBQ2RiO1FBQWFXO1FBQWFDO1FBQWFqQjtRQUFLRztJQUNoRDtJQUNBLE9BQU9lO0FBQ1g7R0E3Q001QjtBQWdEaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3NQZXJzb24vY291bnRUYXNrc1RpbWUudHN4PzRiOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFsZXJ0Q29tcG9uZW50IGZyb20gXCJAL2NvbXBvbmVudHMvQ29tcG9uZW50c1Bob25lL0FsZXJ0Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBPdXRwdXRUYXNrRHRvIH0gZnJvbSBcIkAvc2VydmljZXMvZHRvL3Rhc2tfZHRvXCI7XG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5cbmNvbnN0IHVzZUFsbEhhbmRsZSA9ICh0YXNrOiBPdXRwdXRUYXNrRHRvLCBzZXRJc1J1bm5pbmc6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PiwgaXNSdW5uaW5nOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxSZWYgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQ+KCk7XG4gICAgY29uc3QgdGltZSA9IHRhc2sudGltZV9zZWxlY3Quc3BsaXQoXCI6XCIpXG4gICAgY29uc3QgbWludXRlcyA9IHRpbWVbMF1cbiAgICBjb25zdCBzZWNvbmQgPSB0aW1lWzFdXG4gICAgY29uc3QgW21pbiwgc2V0TWluXSA9IHVzZVN0YXRlKHBhcnNlSW50KG1pbnV0ZXMpKTtcbiAgICBjb25zdCBbc2VjLCBzZXRTZWNdID0gdXNlU3RhdGUocGFyc2VJbnQoc2Vjb25kKSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKHRydWUpO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IG1pbiAqIDYwO1xuICAgICAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXNMZWZ0ID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHNMZWZ0ID0gc2Vjb25kcyAlIDYwO1xuICAgICAgICAgICAgICAgIHNldE1pbihtaW51dGVzTGVmdClcbiAgICAgICAgICAgICAgICBzZXRTZWMoc2Vjb25kc0xlZnQpXG4gICAgICBcblxuICAgICAgICAgICAgY29uc29sZS5sb2cobWluLCBzZWMpXG4gICAgICAgICAgICBpZiAoLS1zZWNvbmRzIDwgMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgPEFsZXJ0Q29tcG9uZW50IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG5cblxuXG4gICAgY29uc3QgaGFuZGxlUGF1c2UgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgIGlmIChpbnRlcnZhbFJlZi5jdXJyZW50KSBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpO1xuICAgIH1cblxuXG5cbiAgICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0TWluKHBhcnNlSW50KG1pbnV0ZXMpKTtcbiAgICAgICAgc2V0U2VjKHBhcnNlSW50KHNlY29uZCkpO1xuICAgICAgICBpZiAoaW50ZXJ2YWxSZWYuY3VycmVudCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICB9XG4gICAgY29uc3QgYWxsSGFuZGxlID0ge1xuICAgICAgICBoYW5kbGVTdGFydCwgaGFuZGxlUGF1c2UsIGhhbmRsZVJlc2V0LCBtaW4sIHNlY1xuICAgIH1cbiAgICByZXR1cm4gYWxsSGFuZGxlXG59XG5cblxuZXhwb3J0IHsgdXNlQWxsSGFuZGxlIH0iXSwibmFtZXMiOlsiQWxlcnRDb21wb25lbnQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUFsbEhhbmRsZSIsInRhc2siLCJzZXRJc1J1bm5pbmciLCJpc1J1bm5pbmciLCJpbnRlcnZhbFJlZiIsInRpbWUiLCJ0aW1lX3NlbGVjdCIsInNwbGl0IiwibWludXRlcyIsInNlY29uZCIsIm1pbiIsInNldE1pbiIsInBhcnNlSW50Iiwic2VjIiwic2V0U2VjIiwiaGFuZGxlU3RhcnQiLCJzZWNvbmRzIiwiY3VycmVudCIsInNldEludGVydmFsIiwibWludXRlc0xlZnQiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzTGVmdCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhckludGVydmFsIiwiaGFuZGxlUGF1c2UiLCJoYW5kbGVSZXNldCIsImFsbEhhbmRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooksPerson/countTasksTime.tsx\n"));

/***/ })

});