"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/cookieContext.tsx":
/*!***********************************!*\
  !*** ./context/cookieContext.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyContext\": function() { return /* binding */ MyContext; },\n/* harmony export */   \"MyProvider\": function() { return /* binding */ MyProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst MyContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(false);\nconst MyProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyContext.Provider, {\n        value: active,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                margin: \"0.5vw\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Center, {\n                    children: [\n                        \"  \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            width: \"10vw\",\n                            onClick: (e)=>{\n                                setActive((state)=>!state);\n                            },\n                            children: active == false ? \"Web\" : \"Mobile\"\n                        }, void 0, false, {\n                            fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 27\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MyProvider, \"1cfVChV6gA1Fk8+xDnwTj3gmgZo=\");\n_c = MyProvider;\nfunction teste() {}\nvar _c;\n$RefreshReg$(_c, \"MyProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Nvb2tpZUNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwRTtBQUV6QjtBQU8xQyxNQUFNSSwwQkFBWUosMERBQW1CLENBQUMsS0FBSyxFQUFFO0FBRzdDLE1BQU1NLGFBQWEsU0FFYjtRQUZjLEVBQ3ZCQyxTQUFRLEVBQ0o7O0lBRUosTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUMscUJBQ0ksOERBQUNHLFVBQVVNLFFBQVE7UUFBQ0MsT0FBT0g7OzBCQUN2Qiw4REFBQ0wsbURBQUtBO2dCQUFFUyxRQUFPOzBCQUNYLDRFQUFDQzs7d0JBQU87c0NBQUUsOERBQUNYLG9EQUFNQTs0QkFBQ1ksT0FBTTs0QkFBT0MsU0FBU0MsQ0FBQUEsSUFBSztnQ0FBRVAsVUFBVVEsQ0FBQUEsUUFBUyxDQUFDQTs0QkFBTztzQ0FBSVQsVUFBVSxLQUFLLEdBQUcsUUFBUSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztZQUduSEQ7Ozs7Ozs7QUFHYixFQUFFO0dBZldEO0tBQUFBO0FBaUJiLFNBQVNZLFFBQVEsQ0FFakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jb29raWVDb250ZXh0LnRzeD83MGJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUdldENvb2tpZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2dldENvb2tpZVwiO1xuaW1wb3J0IHsgQnV0dG9uLCBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IE15Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZmFsc2UpO1xuXG5cbmV4cG9ydCBjb25zdCBNeVByb3ZpZGVyID0gKHtcbiAgICBjaGlsZHJlblxufTogUHJvcHMpID0+IHtcbiBcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxNeUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2FjdGl2ZX0+XG4gICAgICAgICAgICA8U3RhY2sgIG1hcmdpbj1cIjAuNXZ3XCI+XG4gICAgICAgICAgICAgICAgPENlbnRlcj4gIDxCdXR0b24gd2lkdGg9XCIxMHZ3XCIgb25DbGljaz17ZSA9PiB7IHNldEFjdGl2ZShzdGF0ZSA9PiAhc3RhdGUpIH19PnthY3RpdmUgPT0gZmFsc2UgPyBcIldlYlwiIDogXCJNb2JpbGVcIn08L0J1dHRvbj48L0NlbnRlcj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L015Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcblxuZnVuY3Rpb24gdGVzdGUoKSB7XG5cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlN0YWNrIiwiTXlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk15UHJvdmlkZXIiLCJjaGlsZHJlbiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJtYXJnaW4iLCJDZW50ZXIiLCJ3aWR0aCIsIm9uQ2xpY2siLCJlIiwic3RhdGUiLCJ0ZXN0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/cookieContext.tsx\n"));

/***/ })

});