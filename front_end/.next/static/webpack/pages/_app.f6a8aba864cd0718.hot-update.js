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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyContext\": function() { return /* binding */ MyContext; },\n/* harmony export */   \"MyProvider\": function() { return /* binding */ MyProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooksPerson_getCookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooksPerson/getCookie */ \"./hooksPerson/getCookie.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MyContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nconst MyProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const cookie = ()=>(0,_hooksPerson_getCookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const token = cookie;\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone)();\n    console.log(cookie.value);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyContext.Provider, {\n        value: {\n            active,\n            token\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            width: \"100vw\",\n            height: \"100vh\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"List Task\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Generated by create next app\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Center, {\n                    margin: \"0.3vw\",\n                    children: token != undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        width: \"10vw\",\n                        onClick: (e)=>{\n                            setActive((state)=>!state);\n                        },\n                        children: active == false ? \"Web\" : \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 43\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    backgroundColor: allColors.bg,\n                    width: \"100vw\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    flexDirection: \"column\",\n                    height: \"100vh\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MyProvider, \"bAs3egJLYk5S88u6nXrTTLFlHaM=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone\n    ];\n});\n_c = MyProvider;\nvar _c;\n$RefreshReg$(_c, \"MyProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Nvb2tpZUNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDbUI7QUFDVDtBQUM5QjtBQUNjO0FBYXBDLE1BQU1TLDBCQUFZVCwwREFBbUIsQ0FBQyxDQUFDLEdBQVk7QUFHbkQsTUFBTVcsYUFBYSxTQUViO1FBRmMsRUFDdkJDLFNBQVEsRUFDSjs7SUFDSixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNYyxTQUFTLElBQUlQLGtFQUFJQTtJQUN2QixNQUFNUSxRQUFPRDtJQUNiLE1BQU1FLFlBQVlYLHdFQUFjQTtJQUNoQ1ksUUFBUUMsR0FBRyxDQUFDSixPQUFPSyxLQUFLO0lBQ3hCLHFCQUNJLDhEQUFDWCxVQUFVWSxRQUFRO1FBQUNELE9BQU87WUFBRVA7WUFBUUc7UUFBTTtrQkFDdkMsNEVBQUNkLGlEQUFHQTtZQUFDb0IsT0FBTTtZQUFRQyxRQUFPOzs4QkFDdEIsOERBQUNoQixrREFBSUE7O3NDQUNELDhEQUFDaUI7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0M7NEJBQUtDLE1BQUs7NEJBQWNDLFNBQVE7Ozs7OztzQ0FDakMsOERBQUNGOzRCQUFLQyxNQUFLOzRCQUFXQyxTQUFROzs7Ozs7c0NBQzlCLDhEQUFDQzs0QkFBS0MsS0FBSTs0QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzhCQUUxQiw4REFBQzFCLG9EQUFNQTtvQkFBQzJCLFFBQU87OEJBRVZmLFNBQVNnQiwwQkFBWSw4REFBQzdCLG9EQUFNQTt3QkFBQ21CLE9BQU07d0JBQU9XLFNBQVNDLENBQUFBLElBQUs7NEJBQUVwQixVQUFVcUIsQ0FBQUEsUUFBUyxDQUFDQTt3QkFBTztrQ0FBSXRCLFVBQVUsS0FBSyxHQUFHLFFBQVEsUUFBUTs7Ozs7a0RBQWEsNklBQUs7Ozs7Ozs4QkFFbEosOERBQUNSLGtEQUFJQTtvQkFBQytCLGlCQUFpQm5CLFVBQVVvQixFQUFFO29CQUFFZixPQUFNO29CQUFRZ0IsZ0JBQWU7b0JBQVNDLFlBQVc7b0JBQVNDLGVBQWM7b0JBQVNqQixRQUFPOzhCQUN4SFg7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCLEVBQUU7R0E1QldEOztRQU1TTCxvRUFBY0E7OztLQU52QksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jb29raWVDb250ZXh0LnRzeD83MGJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1JlYWN0Tm9kZSx1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENlbnRlciwgRmxleCwgU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29sb3JzUGhvbmUgfSBmcm9tIFwiQC9ob29rc1BlcnNvbi9jb2xvcnNQaG9uZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHBhZ2UgZnJvbSBcIkAvaG9va3NQZXJzb24vZ2V0Q29va2llXCI7XG5cblxuXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZSxcbn07XG50eXBlIFZhbHVlID0ge1xuICAgIGFjdGl2ZTogYm9vbGVhbixcbiAgICB0b2tlbjogc3RyaW5nLFxufTtcblxuZXhwb3J0IGNvbnN0IE15Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30gYXMgVmFsdWUpO1xuXG5cbmV4cG9ydCBjb25zdCBNeVByb3ZpZGVyID0gKHtcbiAgICBjaGlsZHJlblxufTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGNvb2tpZSA9ICgpPT5wYWdlKClcbiAgICBjb25zdCB0b2tlbj0gY29va2llXG4gICAgY29uc3QgYWxsQ29sb3JzID0gdXNlQ29sb3JzUGhvbmUoKVxuICAgIGNvbnNvbGUubG9nKGNvb2tpZS52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8TXlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGFjdGl2ZSwgdG9rZW4gfX0+XG4gICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwdndcIiBoZWlnaHQ9XCIxMDB2aFwiPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TGlzdCBUYXNrPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxDZW50ZXIgbWFyZ2luPVwiMC4zdndcIj5cblxuICAgICAgICAgICAgICAgICAgICB7dG9rZW4gIT0gdW5kZWZpbmVkID8gPEJ1dHRvbiB3aWR0aD1cIjEwdndcIiBvbkNsaWNrPXtlID0+IHsgc2V0QWN0aXZlKHN0YXRlID0+ICFzdGF0ZSkgfX0+e2FjdGl2ZSA9PSBmYWxzZSA/IFwiV2ViXCIgOiBcIk1vYmlsZVwifTwvQnV0dG9uPiA6IDw+PC8+fVxuICAgICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgICAgIDxGbGV4IGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmJnfSB3aWR0aD1cIjEwMHZ3XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L015Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkJ1dHRvbiIsIkNlbnRlciIsIkZsZXgiLCJ1c2VDb2xvcnNQaG9uZSIsIkhlYWQiLCJwYWdlIiwiTXlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk15UHJvdmlkZXIiLCJjaGlsZHJlbiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNvb2tpZSIsInRva2VuIiwiYWxsQ29sb3JzIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiUHJvdmlkZXIiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYXJnaW4iLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwiZSIsInN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiYmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/cookieContext.tsx\n"));

/***/ })

});