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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyContext\": function() { return /* binding */ MyContext; },\n/* harmony export */   \"MyProvider\": function() { return /* binding */ MyProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst MyContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(false);\nconst MyProvider = (param)=>{\n    let { children1 , children2  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyContext.Provider, {\n        value: active,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                margin: \"0.3vw\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    width: \"10vw\",\n                    onClick: (e)=>{\n                        setActive((state)=>!state);\n                    },\n                    children: active == false ? \"Web\" : \"Mobile\"\n                }, void 0, false, {\n                    fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                backgroundColor: allColors.bg,\n                width: \"100vw\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                flexDirection: \"column\",\n                height: \"100vh\",\n                children: active == false ? {\n                    children1\n                } : {\n                    children2\n                }\n            }, void 0, false, {\n                fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MyProvider, \"bAs3egJLYk5S88u6nXrTTLFlHaM=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone\n    ];\n});\n_c = MyProvider;\nfunction teste() {}\nvar _c;\n$RefreshReg$(_c, \"MyProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Nvb2tpZUNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEU7QUFFWDtBQUNKO0FBV3BELE1BQU1NLDBCQUFZTiwwREFBbUIsQ0FBQyxLQUFLLEVBQUU7QUFHN0MsTUFBTVEsYUFBYSxTQUViO1FBRmMsRUFDdkJDLFVBQVMsRUFBRUMsVUFBUyxFQUNoQjs7SUFDSixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNWSxZQUFZUix3RUFBY0E7SUFDaEMscUJBQ0ksOERBQUNDLFVBQVVRLFFBQVE7UUFBQ0MsT0FBT0o7OzBCQUV2Qiw4REFBQ1Isb0RBQU1BO2dCQUFDYSxRQUFPOzBCQUNYLDRFQUFDZCxvREFBTUE7b0JBQUNlLE9BQU07b0JBQU9DLFNBQVNDLENBQUFBLElBQUs7d0JBQUVQLFVBQVVRLENBQUFBLFFBQVMsQ0FBQ0E7b0JBQU87OEJBQUlULFVBQVUsS0FBSyxHQUFHLFFBQVEsUUFBUTs7Ozs7Ozs7Ozs7MEJBRzFHLDhEQUFDUCxrREFBSUE7Z0JBQUNpQixpQkFBaUJSLFVBQVVTLEVBQUU7Z0JBQUVMLE9BQU07Z0JBQVFNLGdCQUFlO2dCQUFTQyxZQUFXO2dCQUFTQyxlQUFjO2dCQUFTQyxRQUFPOzBCQUM1SGYsVUFBVSxLQUFLLEdBQUc7b0JBQUNGO2dCQUFTLElBQUk7b0JBQUNDO2dCQUFTLENBQUM7Ozs7Ozs7Ozs7OztBQUt4RCxFQUFFO0dBbEJXRjs7UUFJU0gsb0VBQWNBOzs7S0FKdkJHO0FBb0JiLFNBQVNtQixRQUFRLENBRWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvY29va2llQ29udGV4dC50c3g/NzBiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHZXRDb29raWUgfSBmcm9tIFwiQC9ob29rc1BlcnNvbi9nZXRDb29raWVcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2VudGVyLCBGbGV4LCBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCI7XG5pbXBvcnQgQ2FyZFN0eWxlV2ViIGZyb20gXCJAL2NvbXBvbmVudHMvQ29tcG9uZW50c1dlYi9DYXJkU3R5bGVXZWJcIjtcbmltcG9ydCBDYXJkU3R5bGVQaG9uZSBmcm9tIFwiQC9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9DYXJkU3R5bGVQaG9uZVwiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGNoaWxkcmVuMTogUmVhY3ROb2RlO1xuICAgIGNoaWxkcmVuMjogUmVhY3ROb2RlO1xuXG59O1xuXG5cbmV4cG9ydCBjb25zdCBNeUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGZhbHNlKTtcblxuXG5leHBvcnQgY29uc3QgTXlQcm92aWRlciA9ICh7XG4gICAgY2hpbGRyZW4xLCBjaGlsZHJlbjJcbn06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhbGxDb2xvcnMgPSB1c2VDb2xvcnNQaG9uZSgpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE15Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17YWN0aXZlfT5cblxuICAgICAgICAgICAgPENlbnRlciBtYXJnaW49XCIwLjN2d1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gd2lkdGg9XCIxMHZ3XCIgb25DbGljaz17ZSA9PiB7IHNldEFjdGl2ZShzdGF0ZSA9PiAhc3RhdGUpIH19PnthY3RpdmUgPT0gZmFsc2UgPyBcIldlYlwiIDogXCJNb2JpbGVcIn08L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ2VudGVyPlxuXG4gICAgICAgICAgICA8RmxleCBiYWNrZ3JvdW5kQ29sb3I9e2FsbENvbG9ycy5iZ30gd2lkdGg9XCIxMDB2d1wiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBoZWlnaHQ9XCIxMDB2aFwiPlxuICAgICAgICAgICAge2FjdGl2ZSA9PSBmYWxzZSA/IHtjaGlsZHJlbjF9IDoge2NoaWxkcmVuMn19XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9NeUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmZ1bmN0aW9uIHRlc3RlKCkge1xuXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJDZW50ZXIiLCJGbGV4IiwidXNlQ29sb3JzUGhvbmUiLCJNeUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTXlQcm92aWRlciIsImNoaWxkcmVuMSIsImNoaWxkcmVuMiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImFsbENvbG9ycyIsIlByb3ZpZGVyIiwidmFsdWUiLCJtYXJnaW4iLCJ3aWR0aCIsIm9uQ2xpY2siLCJlIiwic3RhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJ0ZXN0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/cookieContext.tsx\n"));

/***/ })

});