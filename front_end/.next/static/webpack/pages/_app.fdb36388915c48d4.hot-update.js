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

/***/ "./components/ComponentsWeb/CardStyleWeb/index.tsx":
/*!*********************************************************!*\
  !*** ./components/ComponentsWeb/CardStyleWeb/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsWeb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsWeb */ \"./hooksPerson/colorsWeb.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst CardStyleWeb = (param)=>{\n    let { content  } = param;\n    _s();\n    const allColors = (0,_hooksPerson_colorsWeb__WEBPACK_IMPORTED_MODULE_1__.useColorsWeb)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        width: \"100vw\",\n        justifyContent: \"start\",\n        alignItems: \"center\",\n        flexDirection: \"column\",\n        height: \"100vh\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n            backgroundColor: allColors.colorCenter,\n            width: \"95vw\",\n            height: \"92vh\",\n            padding: \"8px\",\n            boxShadow: \"dark-lg\",\n            rounded: \"2xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                backgroundColor: allColors.bgCenter,\n                width: \"94vw\",\n                borderRadius: \"16px\",\n                rounded: \"2xl\",\n                height: \"90vh\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/components/ComponentsWeb/CardStyleWeb/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/components/ComponentsWeb/CardStyleWeb/index.tsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/components/ComponentsWeb/CardStyleWeb/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CardStyleWeb, \"5akjpzH+ntS2yh06XHknTtOcanI=\", false, function() {\n    return [\n        _hooksPerson_colorsWeb__WEBPACK_IMPORTED_MODULE_1__.useColorsWeb\n    ];\n});\n_c = CardStyleWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardStyleWeb);\nvar _c;\n$RefreshReg$(_c, \"CardStyleWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvQ2FyZFN0eWxlV2ViL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3NEO0FBQ2dFO0FBUXRILE1BQU1JLGVBQWUsU0FBc0I7UUFBckIsRUFBQ0MsUUFBTyxFQUFROztJQUNsQyxNQUFNQyxZQUFZTixvRUFBWUE7SUFFOUIscUJBQ0ksOERBQUNHLGtEQUFJQTtRQUFDSSxPQUFNO1FBQVFDLGdCQUFlO1FBQVFDLFlBQVc7UUFBU0MsZUFBYztRQUFTQyxRQUFPO2tCQUN6Riw0RUFBQ1Qsb0RBQU1BO1lBQUNVLGlCQUFpQk4sVUFBVU8sV0FBVztZQUFFTixPQUFNO1lBQU9JLFFBQU87WUFBT0csU0FBUTtZQUFNQyxXQUFVO1lBQVVDLFNBQVE7c0JBQ2pILDRFQUFDZixpREFBR0E7Z0JBQUNXLGlCQUFpQk4sVUFBVVcsUUFBUTtnQkFBRVYsT0FBTTtnQkFBT1csY0FBYTtnQkFBT0YsU0FBUTtnQkFBTUwsUUFBTzswQkFDNUZOOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBWk1EOztRQUNnQkosZ0VBQVlBOzs7S0FENUJJO0FBY04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzV2ViL0NhcmRTdHlsZVdlYi9pbmRleC50c3g/ZjI4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZUNvbG9yc1dlYiB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1dlYlwiXG5pbXBvcnQgeyBCb3gsIENlbnRlciwgRmxleCwgVGFiLCBUYWJMaXN0LCBUYWJQYW5lbCwgVGFiUGFuZWxzLCBUYWJzLCBUZXh0LCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY29udGVudDogUmVhY3ROb2RlXG5cbn1cblxuY29uc3QgQ2FyZFN0eWxlV2ViID0gKHtjb250ZW50fTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBhbGxDb2xvcnMgPSB1c2VDb2xvcnNXZWIoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggd2lkdGg9XCIxMDB2d1wiIGp1c3RpZnlDb250ZW50PVwic3RhcnRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgICAgICA8Q2VudGVyIGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmNvbG9yQ2VudGVyfSB3aWR0aD1cIjk1dndcIiBoZWlnaHQ9XCI5MnZoXCIgcGFkZGluZz1cIjhweFwiIGJveFNoYWRvdz0nZGFyay1sZycgcm91bmRlZD1cIjJ4bFwiPlxuICAgICAgICAgICAgICAgIDxCb3ggYmFja2dyb3VuZENvbG9yPXthbGxDb2xvcnMuYmdDZW50ZXJ9IHdpZHRoPVwiOTR2d1wiIGJvcmRlclJhZGl1cz1cIjE2cHhcIiByb3VuZGVkPVwiMnhsXCIgaGVpZ2h0PVwiOTB2aFwiPlxuICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgIDwvRmxleCA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkU3R5bGVXZWIiXSwibmFtZXMiOlsidXNlQ29sb3JzV2ViIiwiQm94IiwiQ2VudGVyIiwiRmxleCIsIkNhcmRTdHlsZVdlYiIsImNvbnRlbnQiLCJhbGxDb2xvcnMiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvckNlbnRlciIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJyb3VuZGVkIiwiYmdDZW50ZXIiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/CardStyleWeb/index.tsx\n"));

/***/ })

});