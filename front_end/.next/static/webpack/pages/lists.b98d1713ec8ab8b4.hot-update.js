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

/***/ "./components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx":
/*!******************************************************************************!*\
  !*** ./components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx ***!
  \******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/handler/task_handler */ \"./services/handler/task_handler.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ListTasksCheckboxWeb = (param)=>{\n    let { tasks  } = param;\n    _s();\n    const [statusCheck, setStatusCheck] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({\n        mutationFn: _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_2__.patchTaskCompleted\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        tasks;\n    }, [\n        tasks\n    ]);\n    return tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: task.title\n        }, void 0, false, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 31\n        }, undefined));\n};\n_s(ListTasksCheckboxWeb, \"2SeposP73LIwW1WX2nCYS50gh38=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone,\n        react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = ListTasksCheckboxWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTasksCheckboxWeb);\nvar _c;\n$RefreshReg$(_c, \"ListTasksCheckboxWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL0xpc3RUYXNrc0NoZWNrYm94V2ViL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJEO0FBR1U7QUFHekI7QUFDRjtBQU0xQyxNQUFNSyx1QkFBdUIsU0FBcUI7UUFBcEIsRUFBRUMsTUFBSyxFQUFROztJQUN6QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUNwRCxNQUFNTSxZQUFZVCx3RUFBY0E7SUFDaEMsTUFBTVUsV0FBV04sd0RBQVdBLENBQUM7UUFBRU8sWUFBWVYsOEVBQWtCQTtJQUFDO0lBRTlEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pJO0lBRUosR0FBRztRQUFDQTtLQUFNO0lBQ1YsT0FDUUEsTUFBTU0sR0FBRyxDQUFDQyxDQUFBQSxxQkFBUSw4REFBQ0M7c0JBQUlELEtBQUtFLEtBQUs7Ozs7OztBQUc3QztHQWJNVjs7UUFFZ0JMLG9FQUFjQTtRQUNmSSxvREFBV0E7OztLQUgxQkM7QUFlTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tcG9uZW50c1dlYi9MaXN0VGFza3NXZWIvTGlzdFRhc2tzQ2hlY2tib3hXZWIvaW5kZXgudHN4Pzc4MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29sb3JzUGhvbmUgfSBmcm9tIFwiQC9ob29rc1BlcnNvbi9jb2xvcnNQaG9uZVwiO1xuaW1wb3J0IHsgT3V0cHV0TGlzdER0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by9saXN0X2R0b1wiO1xuaW1wb3J0IHsgT3V0cHV0VGFza0R0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by90YXNrX2R0b1wiO1xuaW1wb3J0IHsgcGF0Y2hUYXNrQ29tcGxldGVkIH0gZnJvbSBcIkAvc2VydmljZXMvaGFuZGxlci90YXNrX2hhbmRsZXJcIjtcbmltcG9ydCB7IEFjY29yZGlvblBhbmVsLCBCYWRnZSwgQm94LCBDYXJkLCBDYXJkQm9keSwgQ2hlY2tib3gsIEZsZXgsIEZvcm1Db250cm9sLCBIZWFkaW5nLCBJY29uQnV0dG9uLCBQcm9ncmVzcywgUmFkaW8sIFN0YWNrLCBTdGFja0RpdmlkZXIsIFN3aXRjaCwgVGV4dCwgVG9hc3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICB0YXNrczogT3V0cHV0VGFza0R0b1tdXG59XG5cbmNvbnN0IExpc3RUYXNrc0NoZWNrYm94V2ViID0gKHsgdGFza3N9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtzdGF0dXNDaGVjaywgc2V0U3RhdHVzQ2hlY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsbENvbG9ycyA9IHVzZUNvbG9yc1Bob25lKCk7XG4gICAgY29uc3QgbXV0YXRpb24gPSB1c2VNdXRhdGlvbih7IG11dGF0aW9uRm46IHBhdGNoVGFza0NvbXBsZXRlZCB9KVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHRhc2tzXG4gICAgICBcbiAgICB9LCBbdGFza3NdKVxuICAgIHJldHVybiAoXG4gICAgICAgICAgICB0YXNrcy5tYXAodGFzayA9Pig8bGk+e3Rhc2sudGl0bGV9PC9saT4pKVxuICAgICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RUYXNrc0NoZWNrYm94V2ViOyJdLCJuYW1lcyI6WyJ1c2VDb2xvcnNQaG9uZSIsInBhdGNoVGFza0NvbXBsZXRlZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTXV0YXRpb24iLCJMaXN0VGFza3NDaGVja2JveFdlYiIsInRhc2tzIiwic3RhdHVzQ2hlY2siLCJzZXRTdGF0dXNDaGVjayIsImFsbENvbG9ycyIsIm11dGF0aW9uIiwibXV0YXRpb25GbiIsIm1hcCIsInRhc2siLCJsaSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\n"));

/***/ })

});