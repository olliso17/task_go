"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_ComponentsPhone_CardStylePhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ComponentsPhone/CardStylePhone */ \"./components/ComponentsPhone/CardStylePhone/index.tsx\");\n/* harmony import */ var _components_ComponentsPhone_LoginAcess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ComponentsPhone/LoginAcess */ \"./components/ComponentsPhone/LoginAcess/index.tsx\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_handler_login_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/handler/login_handler */ \"./services/handler/login_handler.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_4__.useColorsPhone)();\n    const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)({\n        mutationFn: _services_handler_login_handler__WEBPACK_IMPORTED_MODULE_6__.postLogout\n    });\n    const logout = useMutationPostLogout();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        mutation.mutate();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                onClick: ()=>mutation.mutate(),\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/login.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"List Task\"\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/login.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/login.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/login.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/login.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/login.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                backgroundColor: allColors.bg,\n                width: \"100vw\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                flexDirection: \"column\",\n                height: \"100vh\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ComponentsPhone_CardStylePhone__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ComponentsPhone_LoginAcess__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, void 0, void 0)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/login.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/login.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"N4joebImfyjT+rzOeh6rJXuO6g0=\", true, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_4__.useColorsPhone,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ29CO0FBQ3lCO0FBQ1A7QUFDUDtBQUNwQjtBQUN1QjtBQUNwQjtBQUkzQixTQUFTVSxPQUFPOztJQUM3QixNQUFNQyxZQUFZTix3RUFBY0E7SUFDaEMsTUFBTU8sV0FBV0gsd0RBQVdBLENBQUM7UUFBRUksWUFBWUwsdUVBQVVBO0lBQUM7SUFDdEQsTUFBTU0sU0FBU0M7SUFFZlIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkSyxTQUFTSSxNQUFNO0lBRWpCLEdBQUcsRUFBRTtJQUdMLHFCQUVFOzswQkFDQSw4REFBQ2Ysb0RBQU1BO2dCQUFDZ0IsU0FBUyxJQUFJTCxTQUFTSSxNQUFNOzBCQUFJOzs7Ozs7MEJBQ3RDLDhEQUFDaEIsa0RBQUlBOztrQ0FDSCw4REFBQ2tCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUN0QixrREFBSUE7Z0JBQUN1QixpQkFBaUJkLFVBQVVlLEVBQUU7Z0JBQUVDLE9BQU07Z0JBQVFDLGdCQUFlO2dCQUFTQyxZQUFXO2dCQUFTQyxlQUFjO2dCQUFTQyxRQUFPOzBCQUMzSCw0RUFBQzVCLGtGQUFjQTtvQkFBQ2tCLHVCQUFTLDhEQUFDakIsOEVBQVdBOzs7Ozs7Ozs7Ozs7O0FBSTdDLENBQUM7R0ExQnVCTTs7UUFDSkwsb0VBQWNBO1FBQ2ZJLG9EQUFXQTs7O0tBRk5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLnRzeD83MjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEJ1dHRvbiwgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IENhcmRTdHlsZVBob25lIGZyb20gJ0AvY29tcG9uZW50cy9Db21wb25lbnRzUGhvbmUvQ2FyZFN0eWxlUGhvbmUnO1xuaW1wb3J0IExvZ2luQWNjZXNzIGZyb20gJ0AvY29tcG9uZW50cy9Db21wb25lbnRzUGhvbmUvTG9naW5BY2Vzcyc7XG5pbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gJ0AvaG9va3NQZXJzb24vY29sb3JzUGhvbmUnO1xuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwb3N0TG9nb3V0IH0gZnJvbSAnQC9zZXJ2aWNlcy9oYW5kbGVyL2xvZ2luX2hhbmRsZXInO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBhbGxDb2xvcnMgPSB1c2VDb2xvcnNQaG9uZSgpXG4gIGNvbnN0IG11dGF0aW9uID0gdXNlTXV0YXRpb24oeyBtdXRhdGlvbkZuOiBwb3N0TG9nb3V0LH0pXG4gIGNvbnN0IGxvZ291dCA9IHVzZU11dGF0aW9uUG9zdExvZ291dCgpXG4gXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbXV0YXRpb24ubXV0YXRlKClcblxuICB9LCBbXSk7XG4gICAgXG4gXG4gIHJldHVybiAoXG5cbiAgICA8PlxuICAgIDxCdXR0b24gb25DbGljaz17KCk9Pm11dGF0aW9uLm11dGF0ZSgpfT5Mb2dvdXQ8L0J1dHRvbj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TGlzdCBUYXNrPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8RmxleCBiYWNrZ3JvdW5kQ29sb3I9e2FsbENvbG9ycy5iZ30gd2lkdGg9XCIxMDB2d1wiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBoZWlnaHQ9XCIxMDB2aFwiPlxuICAgICAgICA8Q2FyZFN0eWxlUGhvbmUgY29udGVudD17PExvZ2luQWNjZXNzIC8+fSAvPlxuICAgICAgPC9GbGV4PlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJCdXR0b24iLCJGbGV4IiwiQ2FyZFN0eWxlUGhvbmUiLCJMb2dpbkFjY2VzcyIsInVzZUNvbG9yc1Bob25lIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJwb3N0TG9nb3V0IiwidXNlTXV0YXRpb24iLCJIb21lIiwiYWxsQ29sb3JzIiwibXV0YXRpb24iLCJtdXRhdGlvbkZuIiwibG9nb3V0IiwidXNlTXV0YXRpb25Qb3N0TG9nb3V0IiwibXV0YXRlIiwib25DbGljayIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZyIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n"));

/***/ })

});