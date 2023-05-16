"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lists",{

/***/ "./components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx":
/*!******************************************************************************!*\
  !*** ./components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx ***!
  \******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/handler/task_handler */ \"./services/handler/task_handler.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ListTasksCheckboxWeb = (param)=>{\n    let { task  } = param;\n    _s();\n    const [statusCheck, setStatusCheck] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({\n        mutationFn: _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_2__.patchTaskCompleted\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card, {\n        backgroundColor: allColors.bg,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.CardBody, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.StackDivider, {}, void 0, false, void 0, void 0),\n                spacing: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        size: \"xs\",\n                        textTransform: \"uppercase\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                            justifyContent: \"space-between\",\n                            children: [\n                                task.title,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    flexDirection: \"column\",\n                                    justifyContent: \"space-between\",\n                                    alignItems: \"end\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {\n                                        borderWidth: \"0.2vw\",\n                                        colorScheme: \"purple\",\n                                        borderColor: \"purple.900\",\n                                        isChecked: statusCheck,\n                                        onChange: (e)=>{\n                                            setStatusCheck(e.target.checked);\n                                            mutation.mutate({\n                                                id: task.id,\n                                                status: statusCheck\n                                            });\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 41\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 37\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 33\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 29\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\",\n            lineNumber: 20,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 13\n    }, undefined);\n};\n_s(ListTasksCheckboxWeb, \"rx03ynwfCeS3wrHnnxrzsDXSHTU=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone,\n        react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = ListTasksCheckboxWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTasksCheckboxWeb);\nvar _c;\n$RefreshReg$(_c, \"ListTasksCheckboxWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL0xpc3RUYXNrc0NoZWNrYm94V2ViL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDtBQUVVO0FBQ3NIO0FBRTFKO0FBQ1M7QUFNMUMsTUFBTVksdUJBQXVCLFNBQXFCO1FBQXBCLEVBQUVDLEtBQUksRUFBUzs7SUFDekMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTU0sWUFBWWhCLHdFQUFjQTtJQUNoQyxNQUFNaUIsV0FBV04sd0RBQVdBLENBQUM7UUFBRU8sWUFBWWpCLDhFQUFrQkE7SUFBQztJQUU5RCxxQkFDUSw4REFBQ0Usa0RBQUlBO1FBQUNnQixpQkFBaUJILFVBQVVJLEVBQUU7a0JBQy9CLDRFQUFDaEIsc0RBQVFBO3NCQUNMLDRFQUFDSSxtREFBS0E7Z0JBQUNhLHVCQUFTLDhEQUFDWiwwREFBWUE7Z0JBQUthLFNBQVE7MEJBQ3RDLDRFQUFDcEIsaURBQUdBOzhCQUNBLDRFQUFDSyxxREFBT0E7d0JBQUNnQixNQUFLO3dCQUFLQyxlQUFjO2tDQUM3Qiw0RUFBQ2xCLGtEQUFJQTs0QkFBQ21CLGdCQUFlOztnQ0FDaEJaLEtBQUthLEtBQUs7OENBRVgsOERBQUNwQixrREFBSUE7b0NBQUNxQixlQUFjO29DQUFTRixnQkFBZTtvQ0FBZ0JHLFlBQVc7OENBRW5FLDRFQUFDdkIsc0RBQVFBO3dDQUFDd0IsYUFBWTt3Q0FBUUMsYUFBWTt3Q0FBU0MsYUFBWTt3Q0FBYUMsV0FBV2xCO3dDQUFhbUIsVUFBVSxDQUFDQyxJQUFNOzRDQUNqSG5CLGVBQWVtQixFQUFFQyxNQUFNLENBQUNDLE9BQU87NENBRS9CbkIsU0FBU29CLE1BQU0sQ0FBQztnREFBRUMsSUFBSXpCLEtBQUt5QixFQUFFO2dEQUFFQyxRQUFRekI7NENBQVk7d0NBQ3ZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjeEM7R0FsQ01GOztRQUVnQlosb0VBQWNBO1FBQ2ZXLG9EQUFXQTs7O0tBSDFCQztBQW9DTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tcG9uZW50c1dlYi9MaXN0VGFza3NXZWIvTGlzdFRhc2tzQ2hlY2tib3hXZWIvaW5kZXgudHN4Pzc4MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29sb3JzUGhvbmUgfSBmcm9tIFwiQC9ob29rc1BlcnNvbi9jb2xvcnNQaG9uZVwiO1xuaW1wb3J0IHsgT3V0cHV0VGFza0R0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by90YXNrX2R0b1wiO1xuaW1wb3J0IHsgcGF0Y2hUYXNrQ29tcGxldGVkIH0gZnJvbSBcIkAvc2VydmljZXMvaGFuZGxlci90YXNrX2hhbmRsZXJcIjtcbmltcG9ydCB7IEFjY29yZGlvblBhbmVsLCBCYWRnZSwgQm94LCBDYXJkLCBDYXJkQm9keSwgQ2hlY2tib3gsIEZsZXgsIEZvcm1Db250cm9sLCBIZWFkaW5nLCBJY29uQnV0dG9uLCBQcm9ncmVzcywgUmFkaW8sIFN0YWNrLCBTdGFja0RpdmlkZXIsIFN3aXRjaCwgVGV4dCwgVG9hc3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgdGFzazogT3V0cHV0VGFza0R0b1xufVxuXG5jb25zdCBMaXN0VGFza3NDaGVja2JveFdlYiA9ICh7IHRhc2sgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbc3RhdHVzQ2hlY2ssIHNldFN0YXR1c0NoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhbGxDb2xvcnMgPSB1c2VDb2xvcnNQaG9uZSgpO1xuICAgIGNvbnN0IG11dGF0aW9uID0gdXNlTXV0YXRpb24oeyBtdXRhdGlvbkZuOiBwYXRjaFRhc2tDb21wbGV0ZWQgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2FyZCBiYWNrZ3JvdW5kQ29sb3I9e2FsbENvbG9ycy5iZ30+XG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGl2aWRlcj17PFN0YWNrRGl2aWRlciAvPn0gc3BhY2luZz0nNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9J3hzJyB0ZXh0VHJhbnNmb3JtPSd1cHBlcmNhc2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImVuZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGJvcmRlcldpZHRoPVwiMC4ydndcIiBjb2xvclNjaGVtZT1cInB1cnBsZVwiIGJvcmRlckNvbG9yPVwicHVycGxlLjkwMFwiIGlzQ2hlY2tlZD17c3RhdHVzQ2hlY2t9IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0dXNDaGVjayhlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbi5tdXRhdGUoeyBpZDogdGFzay5pZCwgc3RhdHVzOiBzdGF0dXNDaGVjayB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdFRhc2tzQ2hlY2tib3hXZWI7Il0sIm5hbWVzIjpbInVzZUNvbG9yc1Bob25lIiwicGF0Y2hUYXNrQ29tcGxldGVkIiwiQm94IiwiQ2FyZCIsIkNhcmRCb2R5IiwiQ2hlY2tib3giLCJGbGV4IiwiSGVhZGluZyIsIlN0YWNrIiwiU3RhY2tEaXZpZGVyIiwidXNlU3RhdGUiLCJ1c2VNdXRhdGlvbiIsIkxpc3RUYXNrc0NoZWNrYm94V2ViIiwidGFzayIsInN0YXR1c0NoZWNrIiwic2V0U3RhdHVzQ2hlY2siLCJhbGxDb2xvcnMiLCJtdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZyIsImRpdmlkZXIiLCJzcGFjaW5nIiwic2l6ZSIsInRleHRUcmFuc2Zvcm0iLCJqdXN0aWZ5Q29udGVudCIsInRpdGxlIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJib3JkZXJXaWR0aCIsImNvbG9yU2NoZW1lIiwiYm9yZGVyQ29sb3IiLCJpc0NoZWNrZWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIiwibXV0YXRlIiwiaWQiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\n"));

/***/ }),

/***/ "./components/ComponentsWeb/ListTasksWeb/index.tsx":
/*!*********************************************************!*\
  !*** ./components/ComponentsWeb/ListTasksWeb/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var _services_handler_list_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/handler/list_handler */ \"./services/handler/list_handler.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _AcordionTasksTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AcordionTasksTime */ \"./components/ComponentsWeb/ListTasksWeb/AcordionTasksTime/index.tsx\");\n/* harmony import */ var _ListTasksCardWeb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListTasksCardWeb */ \"./components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\");\n/* harmony import */ var _ListTasksCheckboxWeb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListTasksCheckboxWeb */ \"./components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ListTasksWeb = (param)=>{\n    let { task , list_id  } = param;\n    _s();\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const [tipeTaskSelect, setTipeTaskSelect] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n    const { data: lists  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(\"lists\", _services_handler_list_handler__WEBPACK_IMPORTED_MODULE_2__.getListAll);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        lists;\n        valueTipeTask();\n    }, []);\n    function valueTipeTask() {\n        lists === null || lists === void 0 ? void 0 : lists.map((list)=>{\n            if (list.id == list_id) {\n                switch(list === null || list === void 0 ? void 0 : list.type_task){\n                    case \"checkbox\":\n                        return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasksCheckboxWeb__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            task: task\n                        }, task.id, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 50\n                        }, this));\n                    case \"card\":\n                        return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasksCardWeb__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            task: task\n                        }, task.id, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 50\n                        }, this));\n                    case \"time\":\n                        return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcordionTasksTime__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            task: task\n                        }, task.id, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 50\n                        }, this));\n                }\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: tipeTaskSelect\n    }, void 0, false);\n};\n_s(ListTasksWeb, \"njJ23hhTEgo7U31lUz8gLorYEBU=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone,\n        react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = ListTasksWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTasksWeb);\nvar _c;\n$RefreshReg$(_c, \"ListTasksWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBEO0FBR0U7QUFDUztBQUMvQjtBQUdjO0FBQ0g7QUFDUTtBQVN6RCxNQUFNUSxlQUFlLFNBQThCO1FBQTdCLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFTOztJQUMxQyxNQUFNQyxZQUFZWCx3RUFBY0E7SUFDaEMsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHViwrQ0FBUUEsZUFBQztJQUNyRCxNQUFNLEVBQUVXLE1BQU1DLE1BQUssRUFBRSxHQUFHWCxxREFBUUEsQ0FBQyxTQUFTSCxzRUFBVUE7SUFFcERDLGdEQUFTQSxDQUFDLElBQU07UUFDWmE7UUFDQUM7SUFDSixHQUFHLEVBQUU7SUFDTCxTQUFTQSxnQkFBZ0I7UUFDckJELGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT0UsR0FBRyxDQUFDLENBQUNDLE9BQXdCO1lBQ2hDLElBQUlBLEtBQUtDLEVBQUUsSUFBSVQsU0FBUztnQkFDcEIsT0FBUVEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNRSxTQUFTO29CQUNuQixLQUFLO3dCQUNELE9BQU9QLGdDQUFrQiw4REFBQ04sNkRBQW9CQTs0QkFBZUUsTUFBTUE7MkJBQWZBLEtBQUtVLEVBQUU7Ozs7O29CQUMvRCxLQUFLO3dCQUNELE9BQU9OLGdDQUFrQiw4REFBQ1AseURBQWdCQTs0QkFBZUcsTUFBTUE7MkJBQWZBLEtBQUtVLEVBQUU7Ozs7O29CQUMzRCxLQUFLO3dCQUNELE9BQU9OLGdDQUFrQiw4REFBQ1IsMERBQWtCQTs0QkFBZUksTUFBTUE7MkJBQWZBLEtBQUtVLEVBQUU7Ozs7O2dCQUNqRTtZQUNKLENBQUM7UUFDTDtJQUVKO0lBRUEscUJBQ0k7a0JBQ0tQOztBQUtiO0dBaENNSjs7UUFDZ0JSLG9FQUFjQTtRQUVSSSxpREFBUUE7OztLQUg5Qkk7QUFrQ04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzV2ViL0xpc3RUYXNrc1dlYi9pbmRleC50c3g/NmM4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCJcbmltcG9ydCB7IE91dHB1dExpc3REdG8gfSBmcm9tIFwiQC9zZXJ2aWNlcy9kdG8vbGlzdF9kdG9cIlxuaW1wb3J0IHsgT3V0cHV0VGFza0R0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by90YXNrX2R0b1wiXG5pbXBvcnQgeyBnZXRMaXN0QWxsIH0gZnJvbSBcIkAvc2VydmljZXMvaGFuZGxlci9saXN0X2hhbmRsZXJcIlxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCJcbmltcG9ydCBBY2NvcmRpb25UYXNrc0NhcmQgZnJvbSBcIi4vTGlzdFRhc2tzQ2FyZFdlYlwiXG5pbXBvcnQgQWNjb3JkaW9uVGFza3NDaGVja2JveCBmcm9tIFwiLi9MaXN0VGFza3NDaGVja2JveFdlYlwiXG5pbXBvcnQgQWNjb3JkaW9uVGFza3NUaW1lIGZyb20gXCIuL0Fjb3JkaW9uVGFza3NUaW1lXCJcbmltcG9ydCBMaXN0VGFza3NDYXJkV2ViIGZyb20gXCIuL0xpc3RUYXNrc0NhcmRXZWJcIlxuaW1wb3J0IExpc3RUYXNrc0NoZWNrYm94V2ViIGZyb20gXCIuL0xpc3RUYXNrc0NoZWNrYm94V2ViXCJcblxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHRhc2s6IE91dHB1dFRhc2tEdG9cbiAgICBsaXN0X2lkOiBzdHJpbmdcbiAgIFxufVxuXG5jb25zdCBMaXN0VGFza3NXZWIgPSAoeyB0YXNrLCBsaXN0X2lkIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgYWxsQ29sb3JzID0gdXNlQ29sb3JzUGhvbmUoKTtcbiAgICBjb25zdCBbdGlwZVRhc2tTZWxlY3QsIHNldFRpcGVUYXNrU2VsZWN0XSA9IHVzZVN0YXRlKDw+PC8+KTtcbiAgICBjb25zdCB7IGRhdGE6IGxpc3RzIH0gPSB1c2VRdWVyeShcImxpc3RzXCIsIGdldExpc3RBbGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGlzdHNcbiAgICAgICAgdmFsdWVUaXBlVGFzaygpXG4gICAgfSwgW10pXG4gICAgZnVuY3Rpb24gdmFsdWVUaXBlVGFzaygpIHtcbiAgICAgICAgbGlzdHM/Lm1hcCgobGlzdDogT3V0cHV0TGlzdER0bykgPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3QuaWQgPT0gbGlzdF9pZCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobGlzdD8udHlwZV90YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpcGVUYXNrU2VsZWN0KDxMaXN0VGFza3NDaGVja2JveFdlYiBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IC8+KTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNhcmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaXBlVGFza1NlbGVjdCg8TGlzdFRhc2tzQ2FyZFdlYiBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IC8+KTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRpbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaXBlVGFza1NlbGVjdCg8QWNjb3JkaW9uVGFza3NUaW1lIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gLz4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7dGlwZVRhc2tTZWxlY3R9XG4gICAgICAgIDwvPlxuXG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RUYXNrc1dlYiJdLCJuYW1lcyI6WyJ1c2VDb2xvcnNQaG9uZSIsImdldExpc3RBbGwiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVF1ZXJ5IiwiQWNjb3JkaW9uVGFza3NUaW1lIiwiTGlzdFRhc2tzQ2FyZFdlYiIsIkxpc3RUYXNrc0NoZWNrYm94V2ViIiwiTGlzdFRhc2tzV2ViIiwidGFzayIsImxpc3RfaWQiLCJhbGxDb2xvcnMiLCJ0aXBlVGFza1NlbGVjdCIsInNldFRpcGVUYXNrU2VsZWN0IiwiZGF0YSIsImxpc3RzIiwidmFsdWVUaXBlVGFzayIsIm1hcCIsImxpc3QiLCJpZCIsInR5cGVfdGFzayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/ListTasksWeb/index.tsx\n"));

/***/ })

});