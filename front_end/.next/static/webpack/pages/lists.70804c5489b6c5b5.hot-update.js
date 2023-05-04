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

/***/ "./components/ComponentsPhone/AlertComponent/index.tsx":
/*!*************************************************************!*\
  !*** ./components/ComponentsPhone/AlertComponent/index.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_handler_muation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/handler/muation */ \"./services/handler/muation.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AlertComponent = (param)=>{\n    let { taskId , name  } = param;\n    _s();\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    const { isOpen: isVisible , onClose , onOpen  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)({\n        defaultIsOpen: true\n    });\n    const mutation = (0,_services_handler_muation__WEBPACK_IMPORTED_MODULE_1__.useMutationPostTaskCompleted)();\n    function postCompleted() {\n        mutation.mutate({\n            id: taskId,\n            status: true\n        });\n    }\n    return isVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Alert, {\n        status: \"success\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AlertTitle, {\n                    children: [\n                        \"Success in the task \",\n                        name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AlertComponent/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AlertDescription, {\n                    children: \"Your time has expired. Do you want to complete the task or restart it?\"\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AlertComponent/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                mt: 4,\n                                margin: \"0.1vw\",\n                                backgroundColor: \"purple.900\",\n                                colorScheme: \"purple\",\n                                textColor: \"white\",\n                                type: \"submit\",\n                                onClick: onClose,\n                                children: \"Restart\"\n                            }, void 0, false, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AlertComponent/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n                                initialValues: {\n                                    id: \"\",\n                                    status: false\n                                },\n                                onSubmit: postCompleted,\n                                children: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                mt: 4,\n                                                margin: \"0.1vw\",\n                                                backgroundColor: \"green.900\",\n                                                colorScheme: \"green\",\n                                                textColor: \"white\",\n                                                type: \"submit\",\n                                                onClick: onClose,\n                                                children: \"Finalize\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AlertComponent/index.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AlertComponent/index.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, taskId, false, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AlertComponent/index.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AlertComponent/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AlertComponent/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AlertComponent/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AlertComponent/index.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AlertComponent/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(AlertComponent, \"TCVHGYZoh65RA2coiiagCIGO2Cs=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure,\n        _services_handler_muation__WEBPACK_IMPORTED_MODULE_1__.useMutationPostTaskCompleted\n    ];\n});\n_c = AlertComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlertComponent);\nvar _c;\n$RefreshReg$(_c, \"AlertComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9BbGVydENvbXBvbmVudC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEU7QUFFNEY7QUFDaEk7QUFXdEMsTUFBTWEsaUJBQWlCLFNBQTZCO1FBQTVCLEVBQUVDLE9BQU0sRUFBRUMsS0FBSSxFQUFTOztJQUM3QyxNQUFNQyxRQUFRTiwwREFBUUE7SUFDdEIsTUFBTSxFQUNKTyxRQUFRQyxVQUFTLEVBQ2pCQyxRQUFPLEVBQ1BDLE9BQU0sRUFDUCxHQUFHWCwrREFBYUEsQ0FBQztRQUFFWSxlQUFlLElBQUk7SUFBQztJQUV4QyxNQUFNQyxXQUFXdEIsdUZBQTRCQTtJQUM3QyxTQUFTdUIsZ0JBQWdCO1FBQ3ZCRCxTQUFTRSxNQUFNLENBQUM7WUFBRUMsSUFBSVg7WUFBUVksUUFBUSxJQUFJO1FBQUM7SUFDN0M7SUFDQSxPQUFPUiwwQkFDTCw4REFBQ2pCLG1EQUFLQTtRQUFDeUIsUUFBTztrQkFDWiw0RUFBQ3RCLGlEQUFHQTs7OEJBQ0YsOERBQUNELHdEQUFVQTs7d0JBQUM7d0JBQXFCWTs7Ozs7Ozs4QkFDakMsOERBQUNiLDhEQUFnQkE7OEJBQUM7Ozs7Ozs4QkFHbEIsOERBQUNJLG9EQUFNQTs4QkFDTCw0RUFBQ0Msa0RBQUlBOzswQ0FDSCw4REFBQ0Ysb0RBQU1BO2dDQUNMc0IsSUFBSTtnQ0FDSkMsUUFBTztnQ0FDUEMsaUJBQWdCO2dDQUNoQkMsYUFBWTtnQ0FDWkMsV0FBVTtnQ0FDVkMsTUFBSztnQ0FDTEMsU0FBU2Q7MENBQ1Y7Ozs7OzswQ0FDRCw4REFBQ1AsMENBQU1BO2dDQUNMc0IsZUFBZTtvQ0FBRVQsSUFBSTtvQ0FBSUMsUUFBUSxLQUFLO2dDQUFDO2dDQUN2Q1MsVUFBVVo7MENBR1QsQ0FBQ2Esc0JBQ0EsOERBQUN6Qix3Q0FBSUE7a0RBQ0gsNEVBQUNILHlEQUFXQTtzREFFViw0RUFBQ0gsb0RBQU1BO2dEQUNMc0IsSUFBSTtnREFDSkMsUUFBTztnREFDUEMsaUJBQWdCO2dEQUNoQkMsYUFBWTtnREFDWkMsV0FBVTtnREFDVkMsTUFBSztnREFDTEMsU0FBU2Q7MERBQ1Y7Ozs7Ozs7Ozs7O3VDQVhNTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0F1QnZCLDZJQUNEO0FBQ0g7R0E3RE1EOztRQUNVSCxzREFBUUE7UUFLbEJELDJEQUFhQTtRQUVBVCxtRkFBNEJBOzs7S0FSekNhO0FBK0ROLCtEQUFlQSxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tcG9uZW50c1Bob25lL0FsZXJ0Q29tcG9uZW50L2luZGV4LnRzeD85ODgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uUG9zdFRhc2tDb21wbGV0ZWQgfSBmcm9tIFwiQC9zZXJ2aWNlcy9oYW5kbGVyL211YXRpb25cIjtcbmltcG9ydCB7IHBhdGNoVGFza0NvbXBsZXRlZCB9IGZyb20gXCJAL3NlcnZpY2VzL2hhbmRsZXIvdGFza19oYW5kbGVyXCJcbmltcG9ydCB7IEFsZXJ0LCBBbGVydERlc2NyaXB0aW9uLCBBbGVydEljb24sIEFsZXJ0VGl0bGUsIEJveCwgQnV0dG9uLCBDZW50ZXIsIENsb3NlQnV0dG9uLCBGbGV4LCBGb3JtQ29udHJvbCwgVG9hc3QsIHVzZURpc2Nsb3N1cmUsIHVzZVRvYXN0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCJcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGFza0lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuXG5cbmNvbnN0IEFsZXJ0Q29tcG9uZW50ID0gKHsgdGFza0lkLCBuYW1lIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKVxuICBjb25zdCB7XG4gICAgaXNPcGVuOiBpc1Zpc2libGUsXG4gICAgb25DbG9zZSxcbiAgICBvbk9wZW4sXG4gIH0gPSB1c2VEaXNjbG9zdXJlKHsgZGVmYXVsdElzT3BlbjogdHJ1ZSB9KVxuXG4gIGNvbnN0IG11dGF0aW9uID0gdXNlTXV0YXRpb25Qb3N0VGFza0NvbXBsZXRlZCgpXG4gIGZ1bmN0aW9uIHBvc3RDb21wbGV0ZWQoKSB7XG4gICAgbXV0YXRpb24ubXV0YXRlKHsgaWQ6IHRhc2tJZCwgc3RhdHVzOiB0cnVlIH0pXG4gIH1cbiAgcmV0dXJuIGlzVmlzaWJsZSA/IChcbiAgICA8QWxlcnQgc3RhdHVzPSdzdWNjZXNzJz5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxBbGVydFRpdGxlPlN1Y2Nlc3MgaW4gdGhlIHRhc2sge25hbWV9PC9BbGVydFRpdGxlPlxuICAgICAgICA8QWxlcnREZXNjcmlwdGlvbj5cbiAgICAgICAgICBZb3VyIHRpbWUgaGFzIGV4cGlyZWQuIERvIHlvdSB3YW50IHRvIGNvbXBsZXRlIHRoZSB0YXNrIG9yIHJlc3RhcnQgaXQ/XG4gICAgICAgIDwvQWxlcnREZXNjcmlwdGlvbj5cbiAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbXQ9ezR9XG4gICAgICAgICAgICAgIG1hcmdpbj1cIjAuMXZ3XCJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwicHVycGxlLjkwMFwiXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPSdwdXJwbGUnXG4gICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgPlJlc3RhcnQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBpZDogJycsIHN0YXR1czogZmFsc2UgfX1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3Bvc3RDb21wbGV0ZWR9XG5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgICAgIDxGb3JtIGtleT17dGFza0lkfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgbXQ9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiMC4xdndcIlxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImdyZWVuLjkwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9J2dyZWVuJ1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgPkZpbmFsaXplPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9DZW50ZXI+XG5cbiAgICAgIDwvQm94ID5cblxuICAgIDwvQWxlcnQgPlxuICApIDogKFxuICAgIDw+PC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRDb21wb25lbnQiXSwibmFtZXMiOlsidXNlTXV0YXRpb25Qb3N0VGFza0NvbXBsZXRlZCIsIkFsZXJ0IiwiQWxlcnREZXNjcmlwdGlvbiIsIkFsZXJ0VGl0bGUiLCJCb3giLCJCdXR0b24iLCJDZW50ZXIiLCJGbGV4IiwiRm9ybUNvbnRyb2wiLCJ1c2VEaXNjbG9zdXJlIiwidXNlVG9hc3QiLCJGb3JtIiwiRm9ybWlrIiwiQWxlcnRDb21wb25lbnQiLCJ0YXNrSWQiLCJuYW1lIiwidG9hc3QiLCJpc09wZW4iLCJpc1Zpc2libGUiLCJvbkNsb3NlIiwib25PcGVuIiwiZGVmYXVsdElzT3BlbiIsIm11dGF0aW9uIiwicG9zdENvbXBsZXRlZCIsIm11dGF0ZSIsImlkIiwic3RhdHVzIiwibXQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvclNjaGVtZSIsInRleHRDb2xvciIsInR5cGUiLCJvbkNsaWNrIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ComponentsPhone/AlertComponent/index.tsx\n"));

/***/ })

});