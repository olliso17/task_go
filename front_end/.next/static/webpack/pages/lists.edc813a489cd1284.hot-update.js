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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAllHandle\": function() { return /* binding */ useAllHandle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ComponentsPhone_AlertComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ComponentsPhone/AlertComponent */ \"./components/ComponentsPhone/AlertComponent/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\nconst useAllHandle = (task)=>{\n    const useHandleStart = (min, setMin, setSec, setIsRunning)=>{\n        const handleStart = ()=>{\n            setIsRunning(true);\n            let seconds = min * 60;\n            intervalRef.current = setInterval(()=>{\n                const minutesLeft = Math.floor(seconds / 60);\n                const secondsLeft = seconds % 60;\n                setMin(minutesLeft);\n                setSec(secondsLeft);\n                if (--seconds < 0) {\n                    clearInterval(intervalRef.current);\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ComponentsPhone_AlertComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/hooksPerson/countTasksTime.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, undefined);\n                }\n            }, 1000);\n        };\n        return handleStart;\n    };\n    const useHandlePause = (setIsRunning)=>{\n        setIsRunning(false);\n        const handlePause = ()=>{\n            setIsRunning(false);\n            if (intervalRef.current) clearInterval(intervalRef.current);\n        };\n        return handlePause;\n    };\n    const useHandleReset = (setMin, setSec, minutes, second, setIsRunning)=>{\n        const handleReset = ()=>{\n            setIsRunning(false);\n            setMin(parseInt(minutes));\n            setSec(parseInt(second));\n            if (intervalRef.current) clearInterval(intervalRef.current);\n        };\n        return handleReset;\n    };\n    const allHandle = {\n        useHandleStart,\n        useHandlePause,\n        useHandleReset\n    };\n    return allHandle;\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rc1BlcnNvbi9jb3VudFRhc2tzVGltZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5RTtBQUNOO0FBRW5FLE1BQU1FLGNBQWNELDZDQUFNQTtBQUcxQixNQUFNRSxlQUFhLENBQUNDLE9BQU87SUFDdkIsTUFBTUMsaUJBQWlCLENBQUNDLEtBQWFDLFFBQTBDQyxRQUEwQ0MsZUFBb0Q7UUFDekssTUFBTUMsY0FBYyxJQUFNO1lBQ3RCRCxhQUFhLElBQUk7WUFDakIsSUFBSUUsVUFBVUwsTUFBTTtZQUNwQkosWUFBWVUsT0FBTyxHQUFHQyxZQUFZLElBQU07Z0JBQ3BDLE1BQU1DLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0wsVUFBVTtnQkFDekMsTUFBTU0sY0FBY04sVUFBVTtnQkFDOUJKLE9BQU9PO2dCQUNQTixPQUFPUztnQkFDUCxJQUFJLEVBQUVOLFVBQVUsR0FBRztvQkFDZk8sY0FBY2hCLFlBQVlVLE9BQU87a0NBQ2pDLDhEQUFDWixrRkFBY0E7Ozs7O2dCQUNuQixDQUFDO1lBQ0wsR0FBRztRQUNQO1FBQ0EsT0FBT1U7SUFDWDtJQUVBLE1BQU1TLGlCQUFpQixDQUFDVixlQUFvRDtRQUN4RUEsYUFBYSxLQUFLO1FBQ2xCLE1BQU1XLGNBQWMsSUFBTTtZQUN0QlgsYUFBYSxLQUFLO1lBQ2xCLElBQUlQLFlBQVlVLE9BQU8sRUFBRU0sY0FBY2hCLFlBQVlVLE9BQU87UUFDOUQ7UUFDQSxPQUFPUTtJQUNYO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNkLFFBQTBDQyxRQUEwQ2MsU0FBaUJDLFFBQWdCZCxlQUFvRDtRQUM3TCxNQUFNZSxjQUFjLElBQU07WUFDdEJmLGFBQWEsS0FBSztZQUNsQkYsT0FBT2tCLFNBQVNIO1lBQ2hCZCxPQUFPaUIsU0FBU0Y7WUFDaEIsSUFBSXJCLFlBQVlVLE9BQU8sRUFBRU0sY0FBY2hCLFlBQVlVLE9BQU87UUFDOUQ7UUFDQSxPQUFPWTtJQUNYO0lBQ0EsTUFBTUUsWUFBVTtRQUNackI7UUFBZWM7UUFBZUU7SUFDbEM7SUFDQSxPQUFPSztBQUNYO0FBR3VCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzUGVyc29uL2NvdW50VGFza3NUaW1lLnRzeD80Yjk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbGVydENvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9BbGVydENvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGludGVydmFsUmVmID0gdXNlUmVmPE5vZGVKUy5UaW1lb3V0PigpO1xuXG5cbmNvbnN0IHVzZUFsbEhhbmRsZT0odGFzayk9PntcbiAgICBjb25zdCB1c2VIYW5kbGVTdGFydCA9IChtaW46IG51bWJlciwgc2V0TWluOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+Piwgc2V0U2VjOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+Piwgc2V0SXNSdW5uaW5nOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4pID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZXRJc1J1bm5pbmcodHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc2Vjb25kcyA9IG1pbiAqIDYwO1xuICAgICAgICAgICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzTGVmdCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzTGVmdCA9IHNlY29uZHMgJSA2MDtcbiAgICAgICAgICAgICAgICBzZXRNaW4obWludXRlc0xlZnQpXG4gICAgICAgICAgICAgICAgc2V0U2VjKHNlY29uZHNMZWZ0KVxuICAgICAgICAgICAgICAgIGlmICgtLXNlY29uZHMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIDxBbGVydENvbXBvbmVudCAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaGFuZGxlU3RhcnRcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXNlSGFuZGxlUGF1c2UgPSAoc2V0SXNSdW5uaW5nOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4pID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKVxuICAgICAgICBjb25zdCBoYW5kbGVQYXVzZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoaW50ZXJ2YWxSZWYuY3VycmVudCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlUGF1c2U7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB1c2VIYW5kbGVSZXNldCA9IChzZXRNaW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LCBzZXRTZWM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LCBtaW51dGVzOiBzdHJpbmcsIHNlY29uZDogc3RyaW5nLCBzZXRJc1J1bm5pbmc6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PikgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRNaW4ocGFyc2VJbnQobWludXRlcykpO1xuICAgICAgICAgICAgc2V0U2VjKHBhcnNlSW50KHNlY29uZCkpO1xuICAgICAgICAgICAgaWYgKGludGVydmFsUmVmLmN1cnJlbnQpIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc2V0XG4gICAgfTtcbiAgICBjb25zdCBhbGxIYW5kbGU9e1xuICAgICAgICB1c2VIYW5kbGVTdGFydCx1c2VIYW5kbGVQYXVzZSx1c2VIYW5kbGVSZXNldFxuICAgIH1cbiAgICByZXR1cm4gYWxsSGFuZGxlXG59XG5cblxuZXhwb3J0ICB7dXNlQWxsSGFuZGxlIH0iXSwibmFtZXMiOlsiQWxlcnRDb21wb25lbnQiLCJ1c2VSZWYiLCJpbnRlcnZhbFJlZiIsInVzZUFsbEhhbmRsZSIsInRhc2siLCJ1c2VIYW5kbGVTdGFydCIsIm1pbiIsInNldE1pbiIsInNldFNlYyIsInNldElzUnVubmluZyIsImhhbmRsZVN0YXJ0Iiwic2Vjb25kcyIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsIm1pbnV0ZXNMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Vjb25kc0xlZnQiLCJjbGVhckludGVydmFsIiwidXNlSGFuZGxlUGF1c2UiLCJoYW5kbGVQYXVzZSIsInVzZUhhbmRsZVJlc2V0IiwibWludXRlcyIsInNlY29uZCIsImhhbmRsZVJlc2V0IiwicGFyc2VJbnQiLCJhbGxIYW5kbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooksPerson/countTasksTime.tsx\n"));

/***/ })

});