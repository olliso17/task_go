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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyContext\": function() { return /* binding */ MyContext; },\n/* harmony export */   \"MyProvider\": function() { return /* binding */ MyProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst MyContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(false);\nconst MyProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyContext.Provider, {\n        value: active,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                margin: \"0.3vw\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    width: \"10vw\",\n                    onClick: (e)=>{\n                        setActive((state)=>!state);\n                    },\n                    children: active == false ? \"Web\" : \"Mobile\"\n                }, void 0, false, {\n                    fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                backgroundColor: allColors.bg,\n                width: \"100vw\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                flexDirection: \"column\",\n                height: \"100vh\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/context/cookieContext.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MyProvider, \"bAs3egJLYk5S88u6nXrTTLFlHaM=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone\n    ];\n});\n_c = MyProvider;\nfunction teste() {}\nvar _c;\n$RefreshReg$(_c, \"MyProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Nvb2tpZUNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEU7QUFFWDtBQUNKO0FBUXBELE1BQU1NLDBCQUFZTiwwREFBbUIsQ0FBQyxLQUFLLEVBQUU7QUFHN0MsTUFBTVEsYUFBYSxTQUViO1FBRmMsRUFDdkJDLFNBQVEsRUFDSjs7SUFDSixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNVyxZQUFZUCx3RUFBY0E7SUFDaEMscUJBQ0ksOERBQUNDLFVBQVVPLFFBQVE7UUFBQ0MsT0FBT0o7OzBCQUV2Qiw4REFBQ1Asb0RBQU1BO2dCQUFDWSxRQUFPOzBCQUNYLDRFQUFDYixvREFBTUE7b0JBQUNjLE9BQU07b0JBQU9DLFNBQVNDLENBQUFBLElBQUs7d0JBQUVQLFVBQVVRLENBQUFBLFFBQVMsQ0FBQ0E7b0JBQU87OEJBQUlULFVBQVUsS0FBSyxHQUFHLFFBQVEsUUFBUTs7Ozs7Ozs7Ozs7MEJBRzFHLDhEQUFDTixrREFBSUE7Z0JBQUNnQixpQkFBaUJSLFVBQVVTLEVBQUU7Z0JBQUVMLE9BQU07Z0JBQVFNLGdCQUFlO2dCQUFTQyxZQUFXO2dCQUFTQyxlQUFjO2dCQUFTQyxRQUFPOzBCQUN4SGhCOzs7Ozs7Ozs7Ozs7QUFJakIsRUFBRTtHQWpCV0Q7O1FBSVNILG9FQUFjQTs7O0tBSnZCRztBQW1CYixTQUFTa0IsUUFBUSxDQUVqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2Nvb2tpZUNvbnRleHQudHN4PzcwYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlR2V0Q29va2llIH0gZnJvbSBcIkAvaG9va3NQZXJzb24vZ2V0Q29va2llXCI7XG5pbXBvcnQgeyBCdXR0b24sIENlbnRlciwgRmxleCwgU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29sb3JzUGhvbmUgfSBmcm9tIFwiQC9ob29rc1BlcnNvbi9jb2xvcnNQaG9uZVwiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG5cbn07XG5cblxuZXhwb3J0IGNvbnN0IE15Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZmFsc2UpO1xuXG5cbmV4cG9ydCBjb25zdCBNeVByb3ZpZGVyID0gKHtcbiAgICBjaGlsZHJlblxufTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsbENvbG9ycyA9IHVzZUNvbG9yc1Bob25lKClcbiAgICByZXR1cm4gKFxuICAgICAgICA8TXlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthY3RpdmV9PlxuXG4gICAgICAgICAgICA8Q2VudGVyIG1hcmdpbj1cIjAuM3Z3XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cIjEwdndcIiBvbkNsaWNrPXtlID0+IHsgc2V0QWN0aXZlKHN0YXRlID0+ICFzdGF0ZSkgfX0+e2FjdGl2ZSA9PSBmYWxzZSA/IFwiV2ViXCIgOiBcIk1vYmlsZVwifTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9DZW50ZXI+XG5cbiAgICAgICAgICAgIDxGbGV4IGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmJnfSB3aWR0aD1cIjEwMHZ3XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L015Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcblxuZnVuY3Rpb24gdGVzdGUoKSB7XG5cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNlbnRlciIsIkZsZXgiLCJ1c2VDb2xvcnNQaG9uZSIsIk15Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNeVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJhbGxDb2xvcnMiLCJQcm92aWRlciIsInZhbHVlIiwibWFyZ2luIiwid2lkdGgiLCJvbkNsaWNrIiwiZSIsInN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiYmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwidGVzdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/cookieContext.tsx\n"));

/***/ })

});