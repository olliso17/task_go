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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAllHandle\": function() { return /* binding */ useAllHandle; }\n/* harmony export */ });\n/* harmony import */ var _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/handler/task_handler */ \"./services/handler/task_handler.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\nvar _s = $RefreshSig$();\n\n\n\nconst useAllHandle = (task)=>{\n    _s();\n    const timeTask = task.time_select.split(\":\");\n    const min = timeTask[0];\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(min) * 60) // 5 minutos em segundos\n    ;\n    const [statusCheck, setCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false) // 5 minutos em segundos\n    ;\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)({\n        mutationFn: _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_0__.patchTaskCompleted\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let intervalId;\n        if (isActive && time > 0) {\n            intervalId = setInterval(()=>setTime(time - 1), 1000);\n        } else if (isActive && time === 0) {\n            setIsActive(false);\n            setCheck(true);\n            mutation.mutate({\n                id: task.id,\n                statusCheck: true\n            });\n        }\n        return ()=>clearInterval(intervalId);\n    }, [\n        isActive,\n        time\n    ]);\n    const handleStart = ()=>{\n        setIsActive(true);\n    };\n    const handlePause = ()=>{\n        setIsActive(false);\n    };\n    const handleReset = ()=>{\n        setIsActive(false);\n        setTime(parseInt(min) * 60);\n    };\n    const minutes = Math.floor(time / 60);\n    const seconds = time % 60;\n    const allHandle = {\n        handleStart,\n        handlePause,\n        handleReset,\n        minutes,\n        seconds\n    };\n    return allHandle;\n};\n_s(useAllHandle, \"ImGzuFt6SqAmIZKs71e3S2o+2yY=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation\n    ];\n});\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rc1BlcnNvbi9jb3VudFRhc2tzVGltZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXFFO0FBQ1M7QUFDcEM7QUFJMUMsTUFBTUksZUFBZSxDQUFDQyxPQUF3Qjs7SUFFMUMsTUFBTUMsV0FBV0QsS0FBS0UsV0FBVyxDQUFDQyxLQUFLLENBQUM7SUFDeEMsTUFBTUMsTUFBTUgsUUFBUSxDQUFDLEVBQUU7SUFDdkIsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDVSxTQUFTSCxPQUFPLElBQUksd0JBQXdCOztJQUM3RSxNQUFNLENBQUNJLGFBQWFDLFNBQVMsR0FBR1osK0NBQVFBLENBQUMsS0FBSyxFQUFFLHdCQUF3Qjs7SUFDeEUsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTWUsV0FBV2Qsd0RBQVdBLENBQUM7UUFBRWUsWUFBWWxCLDhFQUFrQkE7SUFBQztJQUU5REMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlrQjtRQUVKLElBQUlKLFlBQVlMLE9BQU8sR0FBRztZQUN4QlMsYUFBYUMsWUFBWSxJQUFNVCxRQUFRRCxPQUFPLElBQUk7UUFDcEQsT0FBTyxJQUFJSyxZQUFZTCxTQUFTLEdBQUc7WUFDakNNLFlBQVksS0FBSztZQUNqQkYsU0FBUyxJQUFJO1lBQ2JHLFNBQVNJLE1BQU0sQ0FBQztnQkFBRUMsSUFBSWpCLEtBQUtpQixFQUFFO2dCQUFFVCxhQUFZLElBQUk7WUFBQztRQUNsRCxDQUFDO1FBRUQsT0FBTyxJQUFNVSxjQUFjSjtJQUM3QixHQUFHO1FBQUNKO1FBQVVMO0tBQUs7SUFFbkIsTUFBTWMsY0FBYyxJQUFNO1FBQ3hCUixZQUFZLElBQUk7SUFDbEI7SUFFQSxNQUFNUyxjQUFjLElBQU07UUFDeEJULFlBQVksS0FBSztJQUNuQjtJQUVBLE1BQU1VLGNBQWMsSUFBTTtRQUN4QlYsWUFBWSxLQUFLO1FBQ2pCTCxRQUFRQyxTQUFTSCxPQUFPO0lBQzFCO0lBRUEsTUFBTWtCLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ25CLE9BQU87SUFDbEMsTUFBTW9CLFVBQVVwQixPQUFPO0lBRXZCLE1BQU1xQixZQUFZO1FBQ2RQO1FBQWFDO1FBQWFDO1FBQWFDO1FBQVNHO0lBQ3BEO0lBQ0EsT0FBT0M7QUFDWDtHQTNDTTNCOztRQU9lRCxvREFBV0E7OztBQXVDVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rc1BlcnNvbi9jb3VudFRhc2tzVGltZS50c3g/NGI5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWxlcnRDb21wb25lbnQgZnJvbSBcIkAvY29tcG9uZW50cy9Db21wb25lbnRzUGhvbmUvQWxlcnRDb21wb25lbnRcIjtcbmltcG9ydCB7IE91dHB1dFRhc2tEdG8gfSBmcm9tIFwiQC9zZXJ2aWNlcy9kdG8vdGFza19kdG9cIjtcbmltcG9ydCB7IHBhdGNoVGFza0NvbXBsZXRlZCB9IGZyb20gXCJAL3NlcnZpY2VzL2hhbmRsZXIvdGFza19oYW5kbGVyXCI7XG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuXG5cbmNvbnN0IHVzZUFsbEhhbmRsZSA9ICh0YXNrOiBPdXRwdXRUYXNrRHRvKSA9PiB7XG5cbiAgICBjb25zdCB0aW1lVGFzayA9IHRhc2sudGltZV9zZWxlY3Quc3BsaXQoXCI6XCIpXG4gICAgY29uc3QgbWluID0gdGltZVRhc2tbMF1cbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShwYXJzZUludChtaW4pICogNjApIC8vIDUgbWludXRvcyBlbSBzZWd1bmRvc1xuICAgIGNvbnN0IFtzdGF0dXNDaGVjaywgc2V0Q2hlY2tdID0gdXNlU3RhdGUoZmFsc2UpIC8vIDUgbWludXRvcyBlbSBzZWd1bmRvc1xuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgbXV0YXRpb24gPSB1c2VNdXRhdGlvbih7IG11dGF0aW9uRm46IHBhdGNoVGFza0NvbXBsZXRlZCB9KVxuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IGludGVydmFsSWQ6IE5vZGVKUy5UaW1lb3V0XG4gIFxuICAgICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XG4gICAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXRUaW1lKHRpbWUgLSAxKSwgMTAwMClcbiAgICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZSA9PT0gMCkge1xuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgICAgICAgc2V0Q2hlY2sodHJ1ZSlcbiAgICAgICAgbXV0YXRpb24ubXV0YXRlKHsgaWQ6IHRhc2suaWQsIHN0YXR1c0NoZWNrOnRydWUgfSlcbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxuICAgIH0sIFtpc0FjdGl2ZSwgdGltZV0pXG4gIFxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgICAgc2V0SXNBY3RpdmUodHJ1ZSlcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZVBhdXNlID0gKCkgPT4ge1xuICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICAgIHNldElzQWN0aXZlKGZhbHNlKVxuICAgICAgc2V0VGltZShwYXJzZUludChtaW4pICogNjApXG4gICAgfVxuICBcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MFxuXG4gICAgY29uc3QgYWxsSGFuZGxlID0ge1xuICAgICAgICBoYW5kbGVTdGFydCwgaGFuZGxlUGF1c2UsIGhhbmRsZVJlc2V0LCBtaW51dGVzLCBzZWNvbmRzXG4gICAgfVxuICAgIHJldHVybiBhbGxIYW5kbGVcbn1cblxuXG5leHBvcnQgeyB1c2VBbGxIYW5kbGUgfSJdLCJuYW1lcyI6WyJwYXRjaFRhc2tDb21wbGV0ZWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU11dGF0aW9uIiwidXNlQWxsSGFuZGxlIiwidGFzayIsInRpbWVUYXNrIiwidGltZV9zZWxlY3QiLCJzcGxpdCIsIm1pbiIsInRpbWUiLCJzZXRUaW1lIiwicGFyc2VJbnQiLCJzdGF0dXNDaGVjayIsInNldENoZWNrIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsIm11dGF0aW9uIiwibXV0YXRpb25GbiIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsIm11dGF0ZSIsImlkIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZVN0YXJ0IiwiaGFuZGxlUGF1c2UiLCJoYW5kbGVSZXNldCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiYWxsSGFuZGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooksPerson/countTasksTime.tsx\n"));

/***/ })

});