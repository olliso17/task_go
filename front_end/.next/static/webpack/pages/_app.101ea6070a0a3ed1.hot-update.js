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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyContext\": function() { return /* binding */ MyContext; },\n/* harmony export */   \"MyProvider\": function() { return /* binding */ MyProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MyContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nconst MyProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const token = page();\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone)();\n    console.log(token);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyContext.Provider, {\n        value: {\n            active,\n            token\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            width: \"100vw\",\n            height: \"100vh\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"List Task\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Generated by create next app\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Center, {\n                    margin: \"0.3vw\",\n                    children: token != undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        width: \"10vw\",\n                        onClick: (e)=>{\n                            setActive((state)=>!state);\n                        },\n                        children: active == false ? \"Web\" : \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 43\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                    backgroundColor: allColors.bg,\n                    width: \"100vw\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    flexDirection: \"column\",\n                    height: \"100vh\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MyProvider, \"bAs3egJLYk5S88u6nXrTTLFlHaM=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone\n    ];\n});\n_c = MyProvider;\nvar _c;\n$RefreshReg$(_c, \"MyProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Nvb2tpZUNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvRjtBQUNoQjtBQUNUO0FBRTlCO0FBY3RCLE1BQU1RLDBCQUFZUiwwREFBbUIsQ0FBQyxDQUFDLEdBQVk7QUFHbkQsTUFBTVUsYUFBYSxTQUViO1FBRmMsRUFDdkJDLFNBQVEsRUFDSjs7SUFDSixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNYSxRQUFRQztJQUdkLE1BQU1DLFlBQVlWLHdFQUFjQTtJQUVoQ1csUUFBUUMsR0FBRyxDQUFDSjtJQUNaLHFCQUNJLDhEQUFDTixVQUFVVyxRQUFRO1FBQUNDLE9BQU87WUFBRVI7WUFBUUU7UUFBTTtrQkFDdkMsNEVBQUNaLGlEQUFHQTtZQUFDbUIsT0FBTTtZQUFRQyxRQUFPOzs4QkFDdEIsOERBQUNmLGtEQUFJQTs7c0NBQ0QsOERBQUNnQjtzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFBS0MsTUFBSzs0QkFBY0MsU0FBUTs7Ozs7O3NDQUNqQyw4REFBQ0Y7NEJBQUtDLE1BQUs7NEJBQVdDLFNBQVE7Ozs7OztzQ0FDOUIsOERBQUNDOzRCQUFLQyxLQUFJOzRCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7OEJBRTFCLDhEQUFDekIsb0RBQU1BO29CQUFDMEIsUUFBTzs4QkFFVmhCLFNBQVNpQiwwQkFBWSw4REFBQzVCLG9EQUFNQTt3QkFBQ2tCLE9BQU07d0JBQU9XLFNBQVNDLENBQUFBLElBQUs7NEJBQUVwQixVQUFVcUIsQ0FBQUEsUUFBUyxDQUFDQTt3QkFBTztrQ0FBSXRCLFVBQVUsS0FBSyxHQUFHLFFBQVEsUUFBUTs7Ozs7a0RBQWEsNklBQUs7Ozs7Ozs4QkFFbEosOERBQUNQLGtEQUFJQTtvQkFBQzhCLGlCQUFpQm5CLFVBQVVvQixFQUFFO29CQUFFZixPQUFNO29CQUFRZ0IsZ0JBQWU7b0JBQVNDLFlBQVc7b0JBQVNDLGVBQWM7b0JBQVNqQixRQUFPOzhCQUN4SFg7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCLEVBQUU7R0E5QldEOztRQU9TSixvRUFBY0E7OztLQVB2QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jb29raWVDb250ZXh0LnRzeD83MGJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2VudGVyLCBGbGV4LCBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJAL2hvb2tzUGVyc29uL2dldENvb2tpZVwiO1xuXG5cblxuXG50eXBlIFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGUsXG59O1xudHlwZSBWYWx1ZSA9IHtcbiAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgdG9rZW46IHN0cmluZyxcbn07XG5cbmV4cG9ydCBjb25zdCBNeUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9IGFzIFZhbHVlKTtcblxuXG5leHBvcnQgY29uc3QgTXlQcm92aWRlciA9ICh7XG4gICAgY2hpbGRyZW5cbn06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0b2tlbiA9IHBhZ2UoKVxuICBcblxuICAgIGNvbnN0IGFsbENvbG9ycyA9IHVzZUNvbG9yc1Bob25lKClcbiAgXG4gICAgY29uc29sZS5sb2codG9rZW4pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE15Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhY3RpdmUsIHRva2VuIH19PlxuICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMHZ3XCIgaGVpZ2h0PVwiMTAwdmhcIj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkxpc3QgVGFzazwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8Q2VudGVyIG1hcmdpbj1cIjAuM3Z3XCI+XG5cbiAgICAgICAgICAgICAgICAgICAge3Rva2VuICE9IHVuZGVmaW5lZCA/IDxCdXR0b24gd2lkdGg9XCIxMHZ3XCIgb25DbGljaz17ZSA9PiB7IHNldEFjdGl2ZShzdGF0ZSA9PiAhc3RhdGUpIH19PnthY3RpdmUgPT0gZmFsc2UgPyBcIldlYlwiIDogXCJNb2JpbGVcIn08L0J1dHRvbj4gOiA8PjwvPn1cbiAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICA8RmxleCBiYWNrZ3JvdW5kQ29sb3I9e2FsbENvbG9ycy5iZ30gd2lkdGg9XCIxMDB2d1wiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBoZWlnaHQ9XCIxMDB2aFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9NeUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb3giLCJCdXR0b24iLCJDZW50ZXIiLCJGbGV4IiwidXNlQ29sb3JzUGhvbmUiLCJIZWFkIiwiTXlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk15UHJvdmlkZXIiLCJjaGlsZHJlbiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInRva2VuIiwicGFnZSIsImFsbENvbG9ycyIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwid2lkdGgiLCJoZWlnaHQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFyZ2luIiwidW5kZWZpbmVkIiwib25DbGljayIsImUiLCJzdGF0ZSIsImJhY2tncm91bmRDb2xvciIsImJnIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/cookieContext.tsx\n"));

/***/ })

});