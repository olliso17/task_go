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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LayoutContext\": function() { return /* binding */ LayoutContext; },\n/* harmony export */   \"LayoutProvider\": function() { return /* binding */ LayoutProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst LayoutContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nconst LayoutProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutContext.Provider, {\n        value: {\n            active,\n            setToken\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            width: \"100vw\",\n            height: \"100vh\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"List Task\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Generated by create next app\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Center, {\n                    margin: \"0.3vw\",\n                    children: props.token != \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        width: \"10vw\",\n                        onClick: (e)=>{\n                            setActive((state)=>!state);\n                        },\n                        children: active == false ? \"Web\" : \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 25\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                    backgroundColor: allColors.bg,\n                    width: \"100vw\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    flexDirection: \"column\",\n                    height: \"100vh\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LayoutProvider, \"VRv3TSNpFPgSNU4PEuI6JNuDB0c=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone\n    ];\n});\n_c = LayoutProvider;\nvar _c;\n$RefreshReg$(_c, \"LayoutProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Nvb2tpZUNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNNO0FBQ1Q7QUFDOUI7QUFXdEIsTUFBTVEsOEJBQWdCUiwwREFBbUIsQ0FBQyxDQUFDLEdBQVk7QUFHdkQsTUFBTVUsaUJBQWlCLFNBRWpCO1FBRmtCLEVBQzNCQyxTQUFRLEVBQ0o7O0lBQ0osTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1lLFlBQVlWLHdFQUFjQTtJQUVoQyxxQkFDSSw4REFBQ0UsY0FBY1MsUUFBUTtRQUFDQyxPQUFPO1lBQUVOO1lBQVFHO1FBQVE7a0JBQzdDLDRFQUFDYixpREFBR0E7WUFBQ2lCLE9BQU07WUFBUUMsUUFBTzs7OEJBQ3RCLDhEQUFDYixrREFBSUE7O3NDQUNELDhEQUFDYztzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFBS0MsTUFBSzs0QkFBY0MsU0FBUTs7Ozs7O3NDQUNqQyw4REFBQ0Y7NEJBQUtDLE1BQUs7NEJBQVdDLFNBQVE7Ozs7OztzQ0FDOUIsOERBQUNDOzRCQUFLQyxLQUFJOzRCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7OEJBRTFCLDhEQUFDdkIsb0RBQU1BO29CQUFDd0IsUUFBTzs4QkFHUEMsTUFBTWYsS0FBSyxJQUFJLG1CQUNmLDhEQUFDWCxvREFBTUE7d0JBQUNnQixPQUFNO3dCQUFPVyxTQUFTQyxDQUFBQSxJQUFLOzRCQUFFbEIsVUFBVW1CLENBQUFBLFFBQVMsQ0FBQ0E7d0JBQU87a0NBQUlwQixVQUFVLEtBQUssR0FBRyxRQUFRLFFBQVE7Ozs7O2tEQUFXLDZJQUFLOzs7Ozs7OEJBRTlILDhEQUFDUCxrREFBSUE7b0JBQUM0QixpQkFBaUJqQixVQUFVa0IsRUFBRTtvQkFBRWYsT0FBTTtvQkFBUWdCLGdCQUFlO29CQUFTQyxZQUFXO29CQUFTQyxlQUFjO29CQUFTakIsUUFBTzs4QkFDeEhUOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQixFQUFFO0dBN0JXRDs7UUFLU0osb0VBQWNBOzs7S0FMdkJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvY29va2llQ29udGV4dC50c3g/NzBiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2VudGVyLCBGbGV4LCBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGUsXG59O1xudHlwZSBWYWx1ZSA9IHtcbiAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgc2V0VG9rZW46UmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nPj5cbn07XG5cbmV4cG9ydCBjb25zdCBMYXlvdXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSBhcyBWYWx1ZSk7XG5cblxuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gKHtcbiAgICBjaGlsZHJlblxufTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IGFsbENvbG9ycyA9IHVzZUNvbG9yc1Bob25lKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGFjdGl2ZSwgc2V0VG9rZW59fT5cbiAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDB2d1wiIGhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5MaXN0IFRhc2s8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPENlbnRlciBtYXJnaW49XCIwLjN2d1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy50b2tlbiAhPSBcIlwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gd2lkdGg9XCIxMHZ3XCIgb25DbGljaz17ZSA9PiB7IHNldEFjdGl2ZShzdGF0ZSA9PiAhc3RhdGUpIH19PnthY3RpdmUgPT0gZmFsc2UgPyBcIldlYlwiIDogXCJNb2JpbGVcIn08L0J1dHRvbj46PD48Lz59XG4gICAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICAgICAgPEZsZXggYmFja2dyb3VuZENvbG9yPXthbGxDb2xvcnMuYmd9IHdpZHRoPVwiMTAwdndcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgaGVpZ2h0PVwiMTAwdmhcIj5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvTGF5b3V0Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb3giLCJCdXR0b24iLCJDZW50ZXIiLCJGbGV4IiwidXNlQ29sb3JzUGhvbmUiLCJIZWFkIiwiTGF5b3V0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMYXlvdXRQcm92aWRlciIsImNoaWxkcmVuIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwidG9rZW4iLCJzZXRUb2tlbiIsImFsbENvbG9ycyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYXJnaW4iLCJwcm9wcyIsIm9uQ2xpY2siLCJlIiwic3RhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/cookieContext.tsx\n"));

/***/ })

});