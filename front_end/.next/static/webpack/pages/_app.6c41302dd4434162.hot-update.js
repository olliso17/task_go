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

/***/ "./components/ComponentsPhone/CardStylePhone/index.tsx":
/*!*************************************************************!*\
  !*** ./components/ComponentsPhone/CardStylePhone/index.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst CardStylePhone = (param)=>{\n    let { content  } = param;\n    _s();\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        width: \"100vw\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        flexDirection: \"column\",\n        height: \"100vh\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n            backgroundColor: allColors.colorCenter,\n            width: \"21vw\",\n            height: \"76vh\",\n            padding: \"0.5vw\",\n            boxShadow: \"dark-lg\",\n            rounded: \"2xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                backgroundColor: allColors.bgCenter,\n                width: \"20vw\",\n                borderRadius: \"0.5vw\",\n                rounded: \"2xl\",\n                height: \"74vh\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/components/ComponentsPhone/CardStylePhone/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/components/ComponentsPhone/CardStylePhone/index.tsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patriciasilva/Documentos/estudo/task_go/front_end/components/ComponentsPhone/CardStylePhone/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CardStylePhone, \"5YeWeRSdGwgOZr2DxVJYPN5D3Tk=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone\n    ];\n});\n_c = CardStylePhone;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardStylePhone);\nvar _c;\n$RefreshReg$(_c, \"CardStylePhone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9DYXJkU3R5bGVQaG9uZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvRDtBQUNNO0FBUTFELE1BQU1JLGlCQUFpQixTQUFzQjtRQUFyQixFQUFDQyxRQUFPLEVBQVE7O0lBQ3BDLE1BQU1DLFlBQVlILHdFQUFjQTtJQUVoQyxxQkFDSSw4REFBQ0Qsa0RBQUlBO1FBQUNLLE9BQU07UUFBUUMsZ0JBQWU7UUFBU0MsWUFBVztRQUFTQyxlQUFjO1FBQVNDLFFBQU87a0JBQzFGLDRFQUFDVixvREFBTUE7WUFBQ1csaUJBQWlCTixVQUFVTyxXQUFXO1lBQUVOLE9BQU07WUFBT0ksUUFBTztZQUFPRyxTQUFRO1lBQVFDLFdBQVU7WUFBVUMsU0FBUTtzQkFDbkgsNEVBQUNoQixpREFBR0E7Z0JBQUNZLGlCQUFpQk4sVUFBVVcsUUFBUTtnQkFBRVYsT0FBTTtnQkFBT1csY0FBYTtnQkFBUUYsU0FBUTtnQkFBTUwsUUFBTzswQkFDN0ZOOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBWk1EOztRQUNnQkQsb0VBQWNBOzs7S0FEOUJDO0FBY04sK0RBQWVBLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzUGhvbmUvQ2FyZFN0eWxlUGhvbmUvaW5kZXgudHN4PzBhMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDZW50ZXIsIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY29udGVudDogUmVhY3ROb2RlXG5cbn1cblxuY29uc3QgQ2FyZFN0eWxlUGhvbmUgPSAoe2NvbnRlbnR9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGFsbENvbG9ycyA9IHVzZUNvbG9yc1Bob25lKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4IHdpZHRoPVwiMTAwdndcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgaGVpZ2h0PVwiMTAwdmhcIj5cbiAgICAgICAgICAgIDxDZW50ZXIgYmFja2dyb3VuZENvbG9yPXthbGxDb2xvcnMuY29sb3JDZW50ZXJ9IHdpZHRoPVwiMjF2d1wiIGhlaWdodD1cIjc2dmhcIiBwYWRkaW5nPVwiMC41dndcIiBib3hTaGFkb3c9J2RhcmstbGcnIHJvdW5kZWQ9XCIyeGxcIj5cbiAgICAgICAgICAgICAgICA8Qm94IGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmJnQ2VudGVyfSB3aWR0aD1cIjIwdndcIiBib3JkZXJSYWRpdXM9XCIwLjV2d1wiIHJvdW5kZWQ9XCIyeGxcIiBoZWlnaHQ9XCI3NHZoXCI+XG4gICAgICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgPC9GbGV4ID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRTdHlsZVBob25lIl0sIm5hbWVzIjpbIkJveCIsIkNlbnRlciIsIkZsZXgiLCJ1c2VDb2xvcnNQaG9uZSIsIkNhcmRTdHlsZVBob25lIiwiY29udGVudCIsImFsbENvbG9ycyIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yQ2VudGVyIiwicGFkZGluZyIsImJveFNoYWRvdyIsInJvdW5kZWQiLCJiZ0NlbnRlciIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComponentsPhone/CardStylePhone/index.tsx\n"));

/***/ })

});