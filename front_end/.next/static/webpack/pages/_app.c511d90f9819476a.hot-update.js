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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LayoutContext\": function() { return /* binding */ LayoutContext; },\n/* harmony export */   \"LayoutProvider\": function() { return /* binding */ LayoutProvider; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst LayoutContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nconst LayoutProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutContext.Provider, {\n        value: {\n            active,\n            token\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            width: \"100vw\",\n            height: \"100vh\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"List Task\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Generated by create next app\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Center, {\n                    margin: \"0.3vw\",\n                    children: token != \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        width: \"10vw\",\n                        onClick: (e)=>{\n                            setActive((state)=>!state);\n                        },\n                        children: active == false ? \"Web\" : \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 36\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                    backgroundColor: allColors.bg,\n                    width: \"100vw\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    flexDirection: \"column\",\n                    height: \"100vh\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LayoutProvider, \"bAs3egJLYk5S88u6nXrTTLFlHaM=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone\n    ];\n});\n_c = LayoutProvider;\nconst getServerSideProps = async (context)=>{\n    return {\n        props: {\n            Value: {\n                token: context.req.cookies.session_token\n            }\n        }\n    };\n};\nvar _c;\n$RefreshReg$(_c, \"LayoutProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Nvb2tpZUNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDTTtBQUNUO0FBQzlCO0FBWXRCLE1BQU1RLDhCQUFnQlIsMERBQW1CLENBQUMsQ0FBQyxHQUFZO0FBR3ZELE1BQU1VLGlCQUFpQixTQUVqQjtRQUZrQixFQUMzQkMsU0FBUSxFQUNKOztJQUNKLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU1hLFlBQVlSLHdFQUFjQTtJQUVoQyxxQkFDSSw4REFBQ0UsY0FBY08sUUFBUTtRQUFDQyxPQUFPO1lBQUVKO1lBQVFLO1FBQU07a0JBQzNDLDRFQUFDZixpREFBR0E7WUFBQ2dCLE9BQU07WUFBUUMsUUFBTzs7OEJBQ3RCLDhEQUFDWixrREFBSUE7O3NDQUNELDhEQUFDYTtzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFBS0MsTUFBSzs0QkFBY0MsU0FBUTs7Ozs7O3NDQUNqQyw4REFBQ0Y7NEJBQUtDLE1BQUs7NEJBQVdDLFNBQVE7Ozs7OztzQ0FDOUIsOERBQUNDOzRCQUFLQyxLQUFJOzRCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7OEJBRTFCLDhEQUFDdEIsb0RBQU1BO29CQUFDdUIsUUFBTzs4QkFFVlYsU0FBUyxtQkFBSyw4REFBQ2Qsb0RBQU1BO3dCQUFDZSxPQUFNO3dCQUFPVSxTQUFTQyxDQUFBQSxJQUFLOzRCQUFFaEIsVUFBVWlCLENBQUFBLFFBQVMsQ0FBQ0E7d0JBQU87a0NBQUlsQixVQUFVLEtBQUssR0FBRyxRQUFRLFFBQVE7Ozs7O2tEQUFhLDZJQUFLOzs7Ozs7OEJBRTNJLDhEQUFDUCxrREFBSUE7b0JBQUMwQixpQkFBaUJqQixVQUFVa0IsRUFBRTtvQkFBRWQsT0FBTTtvQkFBUWUsZ0JBQWU7b0JBQVNDLFlBQVc7b0JBQVNDLGVBQWM7b0JBQVNoQixRQUFPOzhCQUN4SFI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCLEVBQUU7R0ExQldEOztRQUlTSixvRUFBY0E7OztLQUp2Qkk7QUE0Qk4sTUFBTTBCLHFCQUF5QyxPQUFPQyxVQUFVO0lBRW5FLE9BQU87UUFDTEMsT0FBTztZQUNMQyxPQUFNO2dCQUNGdEIsT0FBTW9CLFFBQVFHLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxhQUFhO1lBQzNDO1FBQ0Y7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jb29raWVDb250ZXh0LnRzeD83MGJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDZW50ZXIsIEZsZXgsIFN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbG9yc1Bob25lIH0gZnJvbSBcIkAvaG9va3NQZXJzb24vY29sb3JzUGhvbmVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZSxcbn07XG50eXBlIFZhbHVlID0ge1xuICAgIGFjdGl2ZTogYm9vbGVhbixcbiAgICB0b2tlbjogc3RyaW5nLFxufTtcblxuZXhwb3J0IGNvbnN0IExheW91dENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9IGFzIFZhbHVlKTtcblxuXG5leHBvcnQgY29uc3QgTGF5b3V0UHJvdmlkZXIgPSAoe1xuICAgIGNoaWxkcmVuXG59OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYWxsQ29sb3JzID0gdXNlQ29sb3JzUGhvbmUoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgYWN0aXZlLCB0b2tlbiB9fT5cbiAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDB2d1wiIGhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5MaXN0IFRhc2s8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPENlbnRlciBtYXJnaW49XCIwLjN2d1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIHt0b2tlbiAhPSAnJyA/IDxCdXR0b24gd2lkdGg9XCIxMHZ3XCIgb25DbGljaz17ZSA9PiB7IHNldEFjdGl2ZShzdGF0ZSA9PiAhc3RhdGUpIH19PnthY3RpdmUgPT0gZmFsc2UgPyBcIldlYlwiIDogXCJNb2JpbGVcIn08L0J1dHRvbj4gOiA8PjwvPn1cbiAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICA8RmxleCBiYWNrZ3JvdW5kQ29sb3I9e2FsbENvbG9ycy5iZ30gd2lkdGg9XCIxMDB2d1wiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBoZWlnaHQ9XCIxMDB2aFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9MYXlvdXRDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCk9PntcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIFZhbHVlOntcbiAgICAgICAgICAgIHRva2VuOmNvbnRleHQucmVxLmNvb2tpZXMuc2Vzc2lvbl90b2tlblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm94IiwiQnV0dG9uIiwiQ2VudGVyIiwiRmxleCIsInVzZUNvbG9yc1Bob25lIiwiSGVhZCIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTGF5b3V0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImFsbENvbG9ycyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ0b2tlbiIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1hcmdpbiIsIm9uQ2xpY2siLCJlIiwic3RhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJWYWx1ZSIsInJlcSIsImNvb2tpZXMiLCJzZXNzaW9uX3Rva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/cookieContext.tsx\n"));

/***/ })

});