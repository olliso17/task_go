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

/***/ "./components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx":
/*!******************************************************************************!*\
  !*** ./components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx ***!
  \******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var _services_handler_muation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/handler/muation */ \"./services/handler/muation.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TypeTaskCheckboxWeb = (param)=>{\n    let { list_id  } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const mutation = (0,_services_handler_muation__WEBPACK_IMPORTED_MODULE_2__.useMutationPostTask)();\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {\n        initialValues: {\n            title: \"\",\n            list_id: list_id\n        },\n        onSubmit: ()=>mutation.mutate({\n                title,\n                list_id\n            }),\n        children: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.CardBody, {\n                    padding: \"0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                    fontWeight: \"bold\",\n                                    margin: \"0.2vw\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                        bgGradient: allColors.bgGradientColor,\n                                        bgClip: \"text\",\n                                        fontSize: \"sm\",\n                                        fontWeight: \"extrabold\",\n                                        children: \"Title\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                    backgroundColor: \"white\",\n                                    focusBorderColor: \"purple.600\",\n                                    borderColor: \"purple.400\",\n                                    borderWidth: \"0.2vw\",\n                                    width: \"12vw\",\n                                    height: \"5vh\",\n                                    type: \"text\",\n                                    onChange: (e)=>setTitle(e.target.value),\n                                    placeholder: \"create title\"\n                                }, void 0, false, {\n                                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                            justifyContent: \"end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                mt: 4,\n                                backgroundColor: \"purple.900\",\n                                colorScheme: \"purple\",\n                                textColor: \"white\",\n                                type: \"submit\",\n                                children: \"Save\"\n                            }, void 0, false, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, undefined)\n            }, list_id, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TypeTaskCheckboxWeb, \"D2t+i+8SXZZ/Eo0RqleYaAKW1/w=\", false, function() {\n    return [\n        _services_handler_muation__WEBPACK_IMPORTED_MODULE_2__.useMutationPostTask,\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone\n    ];\n});\n_c = TypeTaskCheckboxWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypeTaskCheckboxWeb);\nvar _c;\n$RefreshReg$(_c, \"TypeTaskCheckboxWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvQ3JlYXRlVGFza1dlYi9UeXBlVGFza0NoZWNrYm94V2ViL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDtBQUNNO0FBQzZFO0FBQ3hHO0FBQ0w7QUFNakMsTUFBTVksc0JBQXNCLFNBQXdCO1FBQXZCLEVBQUVDLFFBQU8sRUFBUzs7SUFDM0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1LLFdBQVdmLDhFQUFtQkE7SUFDcEMsTUFBTWdCLFlBQVlqQix3RUFBY0E7SUFFaEMscUJBRUksOERBQUNVLDBDQUFNQTtRQUNIUSxlQUFlO1lBQUVKLE9BQU87WUFBSUQsU0FBU0E7UUFBUTtRQUM3Q00sVUFBVSxJQUFNSCxTQUFTSSxNQUFNLENBQUM7Z0JBQUVOO2dCQUFPRDtZQUFRO2tCQUdoRCxDQUFDUSxzQkFDRSw4REFBQ1osd0NBQUlBOzBCQUNELDRFQUFDTixzREFBUUE7b0JBQUNtQixTQUFROztzQ0FDZCw4REFBQ2pCLHlEQUFXQTs7OENBQ1IsOERBQUNDLHVEQUFTQTtvQ0FBQ2lCLFlBQVc7b0NBQU9DLFFBQU87OENBQ2hDLDRFQUFDaEIsa0RBQUlBO3dDQUNEaUIsWUFBWVIsVUFBVVMsZUFBZTt3Q0FDckNDLFFBQU87d0NBQ1BDLFVBQVM7d0NBQ1RMLFlBQVc7a0RBQ2Q7Ozs7Ozs7Ozs7OzhDQUVMLDhEQUFDaEIsbURBQUtBO29DQUFDc0IsaUJBQWdCO29DQUFRQyxrQkFBaUI7b0NBQWFDLGFBQVk7b0NBQWFDLGFBQVk7b0NBQVFDLE9BQU07b0NBQU9DLFFBQU87b0NBQU1DLE1BQUs7b0NBQU9DLFVBQVUsQ0FBQ0MsSUFBTXRCLFNBQVNzQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7b0NBQUdDLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FFM00sOERBQUNwQyxrREFBSUE7NEJBQUNxQyxnQkFBZTtzQ0FDakIsNEVBQUN2QyxvREFBTUE7Z0NBQ0h3QyxJQUFJO2dDQUNKYixpQkFBZ0I7Z0NBQ2hCYyxhQUFZO2dDQUNaQyxXQUFVO2dDQUNWVCxNQUFLOzBDQUNSOzs7Ozs7Ozs7Ozs7Ozs7OztlQXBCRnRCOzs7Ozs7Ozs7O0FBOEIzQjtHQTNDTUQ7O1FBRWVYLDBFQUFtQkE7UUFDbEJELG9FQUFjQTs7O0tBSDlCWTtBQTZDTiwrREFBZUEsbUJBQW1CQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tcG9uZW50c1dlYi9DcmVhdGVUYXNrV2ViL1R5cGVUYXNrQ2hlY2tib3hXZWIvaW5kZXgudHN4PzhjY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29sb3JzUGhvbmUgfSBmcm9tIFwiQC9ob29rc1BlcnNvbi9jb2xvcnNQaG9uZVwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb25Qb3N0VGFzayB9IGZyb20gXCJAL3NlcnZpY2VzL2hhbmRsZXIvbXVhdGlvblwiO1xuaW1wb3J0IHsgQWNjb3JkaW9uUGFuZWwsIEJveCwgQnV0dG9uLCBDYXJkLCBDYXJkQm9keSwgRmxleCwgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgSW5wdXQsIFN0YWNrLCBTdGFja0RpdmlkZXIsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGxpc3RfaWQ6IHN0cmluZyxcbn1cblxuY29uc3QgVHlwZVRhc2tDaGVja2JveFdlYiA9ICh7IGxpc3RfaWQgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uUG9zdFRhc2soKVxuICAgIGNvbnN0IGFsbENvbG9ycyA9IHVzZUNvbG9yc1Bob25lKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdGl0bGU6ICcnLCBsaXN0X2lkOiBsaXN0X2lkIH19XG4gICAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gbXV0YXRpb24ubXV0YXRlKHsgdGl0bGUsIGxpc3RfaWQgfSl9XG5cbiAgICAgICAgPlxuICAgICAgICAgICAgeyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgICAgIDxGb3JtIGtleT17bGlzdF9pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keSBwYWRkaW5nPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGZvbnRXZWlnaHQ9XCJib2xkXCIgbWFyZ2luPVwiMC4ydndcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnR3JhZGllbnQ9e2FsbENvbG9ycy5iZ0dyYWRpZW50Q29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0NsaXA9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PSdleHRyYWJvbGQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5UaXRsZTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIiBmb2N1c0JvcmRlckNvbG9yPVwicHVycGxlLjYwMFwiIGJvcmRlckNvbG9yPVwicHVycGxlLjQwMFwiIGJvcmRlcldpZHRoPVwiMC4ydndcIiB3aWR0aD1cIjEydndcIiBoZWlnaHQ9XCI1dmhcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj0nY3JlYXRlIHRpdGxlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdD17NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwicHVycGxlLjkwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPSdwdXJwbGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybWlrPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUeXBlVGFza0NoZWNrYm94V2ViIl0sIm5hbWVzIjpbInVzZUNvbG9yc1Bob25lIiwidXNlTXV0YXRpb25Qb3N0VGFzayIsIkJ1dHRvbiIsIkNhcmRCb2R5IiwiRmxleCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJUZXh0IiwiRm9ybSIsIkZvcm1payIsInVzZVN0YXRlIiwiVHlwZVRhc2tDaGVja2JveFdlYiIsImxpc3RfaWQiLCJ0aXRsZSIsInNldFRpdGxlIiwibXV0YXRpb24iLCJhbGxDb2xvcnMiLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJtdXRhdGUiLCJwcm9wcyIsInBhZGRpbmciLCJmb250V2VpZ2h0IiwibWFyZ2luIiwiYmdHcmFkaWVudCIsImJnR3JhZGllbnRDb2xvciIsImJnQ2xpcCIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiZm9jdXNCb3JkZXJDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwianVzdGlmeUNvbnRlbnQiLCJtdCIsImNvbG9yU2NoZW1lIiwidGV4dENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/CreateTaskWeb/TypeTaskCheckboxWeb/index.tsx\n"));

/***/ })

});