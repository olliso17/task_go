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

/***/ "./components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx":
/*!******************************************************************************!*\
  !*** ./components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx ***!
  \******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/handler/task_handler */ \"./services/handler/task_handler.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AccordionTasksCard = (param)=>{\n    let { task  } = param;\n    _s();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({\n        mutationFn: _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__.patchTaskEdit\n    });\n    const onChangeStatus = ()=>{\n        console.log(status, \"foi\");\n        mutation.mutate({\n            status\n        });\n    };\n    const handleCheckboxChange = (event)=>{\n        ssetStatus(event.target.checked);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AccordionPanel, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n            rounded: \"md\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            padding: \"8px\",\n            width: \"15vw\",\n            backgroundColor: task.status == true ? \"purple.400\" : \"white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    flexDirection: \"column\",\n                    justifyContent: \"space-between\",\n                    flex: \"1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            fontWeight: \"bold\",\n                            children: task.title\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            fontSize: \"sm\",\n                            children: task.description\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n                    initialValues: {\n                        status\n                    },\n                    onSubmit: onChangeStatus,\n                    children: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    flexDirection: \"column\",\n                                    justifyContent: \"space-between\",\n                                    alignItems: \"end\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {\n                                        borderWidth: \"0.2vw\",\n                                        colorScheme: \"purple\",\n                                        borderColor: \"purple.900\",\n                                        isChecked: status,\n                                        onChange: (e)=>setStatus(e.target.checked)\n                                    }, void 0, false, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, task.id, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AccordionTasksCard, \"jX83cS0JUA395Yk2FjemINKFLNc=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = AccordionTasksCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccordionTasksCard);\nvar _c;\n$RefreshReg$(_c, \"AccordionTasksCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9BY29yZGlvblRhc2tzL0Fjb3JkaW9uVGFza3NDYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNnRTtBQUNxQjtBQUMvQztBQUNMO0FBQ1M7QUFNMUMsTUFBTVUscUJBQXFCLFNBQXFCO1FBQXBCLEVBQUVDLEtBQUksRUFBUzs7SUFDdkMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsTUFBTU0sV0FBV0wsd0RBQVdBLENBQUM7UUFBRU0sWUFBWWYseUVBQWFBO0lBQUM7SUFDekQsTUFBTWdCLGlCQUFpQixJQUFNO1FBQ3pCQyxRQUFRQyxHQUFHLENBQUNOLFFBQVE7UUFDcEJFLFNBQVNLLE1BQU0sQ0FBQztZQUFFUDtRQUFPO0lBQzdCO0lBQ0UsTUFBTVEsdUJBQXVCLENBQUNDLFFBQStDO1FBQy9FQyxXQUFXRCxNQUFNRSxNQUFNLENBQUNDLE9BQU87SUFDakM7SUFDRSxxQkFDSSw4REFBQ3ZCLDREQUFjQTtrQkFDWCw0RUFBQ0Usa0RBQUlBO1lBQUNzQixTQUFRO1lBQUtDLGdCQUFlO1lBQWdCQyxZQUFXO1lBQVNDLFNBQVE7WUFBTUMsT0FBTTtZQUFPQyxpQkFBaUJuQixLQUFLQyxNQUFNLElBQUksSUFBSSxHQUFHLGVBQWUsT0FBTzs7OEJBQzFKLDhEQUFDVCxrREFBSUE7b0JBQUM0QixlQUFjO29CQUFTTCxnQkFBZTtvQkFBZ0JNLE1BQUs7O3NDQUM3RCw4REFBQzNCLGtEQUFJQTs0QkFBQzRCLFlBQVc7c0NBQ1p0QixLQUFLdUIsS0FBSzs7Ozs7O3NDQUVmLDhEQUFDN0Isa0RBQUlBOzRCQUFDOEIsVUFBUztzQ0FBTXhCLEtBQUt5QixXQUFXOzs7Ozs7Ozs7Ozs7OEJBRXpDLDhEQUFDN0IsMENBQU1BO29CQUNIOEIsZUFBZTt3QkFBQ3pCO29CQUFNO29CQUN0QjBCLFVBQVV0Qjs4QkFHVCxDQUFDdUIsc0JBQ0UsOERBQUNqQyx3Q0FBSUE7c0NBQ0QsNEVBQUNGLHlEQUFXQTswQ0FDUiw0RUFBQ0Qsa0RBQUlBO29DQUFDNEIsZUFBYztvQ0FBU0wsZ0JBQWU7b0NBQWdCQyxZQUFXOzhDQUVuRSw0RUFBQ3pCLHNEQUFRQTt3Q0FBQ3NDLGFBQVk7d0NBQVFDLGFBQVk7d0NBQVNDLGFBQVk7d0NBQWNDLFdBQVcvQjt3Q0FBUWdDLFVBQVUsQ0FBQ0MsSUFBTWhDLFVBQVVnQyxFQUFFdEIsTUFBTSxDQUFDQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWxCbEpiLEtBQUttQyxFQUFFOzs7OztBQTZCcEM7R0F4Q01wQzs7UUFFZUQsb0RBQVdBOzs7S0FGMUJDO0FBMENOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzUGhvbmUvQWNvcmRpb25UYXNrcy9BY29yZGlvblRhc2tzQ2FyZC9pbmRleC50c3g/OGVhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRwdXRUYXNrRHRvIH0gZnJvbSBcIkAvc2VydmljZXMvZHRvL3Rhc2tfZHRvXCI7XG5pbXBvcnQgeyBwYXRjaFRhc2tFZGl0IH0gZnJvbSBcIkAvc2VydmljZXMvaGFuZGxlci90YXNrX2hhbmRsZXJcIjtcbmltcG9ydCB7IEFjY29yZGlvblBhbmVsLCBDaGVja2JveCwgRmxleCwgRm9ybUNvbnRyb2wsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgdGFzazogT3V0cHV0VGFza0R0b1xufVxuXG5jb25zdCBBY2NvcmRpb25UYXNrc0NhcmQgPSAoeyB0YXNrIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uKHsgbXV0YXRpb25GbjogcGF0Y2hUYXNrRWRpdCB9KVxuICAgIGNvbnN0IG9uQ2hhbmdlU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMsICdmb2knKVxuICAgICAgICBtdXRhdGlvbi5tdXRhdGUoeyBzdGF0dXMgfSlcbiAgICB9XG4gICAgICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzc2V0U3RhdHVzKGV2ZW50LnRhcmdldC5jaGVja2VkKVxuICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBY2NvcmRpb25QYW5lbCBrZXk9e3Rhc2suaWR9ID5cbiAgICAgICAgICAgIDxGbGV4IHJvdW5kZWQ9XCJtZFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBwYWRkaW5nPVwiOHB4XCIgd2lkdGg9XCIxNXZ3XCIgYmFja2dyb3VuZENvbG9yPXt0YXNrLnN0YXR1cyA9PSB0cnVlID8gXCJwdXJwbGUuNDAwXCIgOiBcIndoaXRlXCJ9PlxuICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBmbGV4PScxJz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD0nYm9sZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFzay50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nc20nPnt0YXNrLmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7c3RhdHVzfX1cbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e29uQ2hhbmdlU3RhdHVzfVxuXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImVuZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggYm9yZGVyV2lkdGg9XCIwLjJ2d1wiIGNvbG9yU2NoZW1lPVwicHVycGxlXCIgYm9yZGVyQ29sb3I9XCJwdXJwbGUuOTAwXCIgIGlzQ2hlY2tlZD17c3RhdHVzfSBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC5jaGVja2VkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uVGFza3NDYXJkOyJdLCJuYW1lcyI6WyJwYXRjaFRhc2tFZGl0IiwiQWNjb3JkaW9uUGFuZWwiLCJDaGVja2JveCIsIkZsZXgiLCJGb3JtQ29udHJvbCIsIlRleHQiLCJGb3JtIiwiRm9ybWlrIiwidXNlU3RhdGUiLCJ1c2VNdXRhdGlvbiIsIkFjY29yZGlvblRhc2tzQ2FyZCIsInRhc2siLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJtdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJvbkNoYW5nZVN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJtdXRhdGUiLCJoYW5kbGVDaGVja2JveENoYW5nZSIsImV2ZW50Iiwic3NldFN0YXR1cyIsInRhcmdldCIsImNoZWNrZWQiLCJyb3VuZGVkIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJmb250V2VpZ2h0IiwidGl0bGUiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwicHJvcHMiLCJib3JkZXJXaWR0aCIsImNvbG9yU2NoZW1lIiwiYm9yZGVyQ29sb3IiLCJpc0NoZWNrZWQiLCJvbkNoYW5nZSIsImUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\n"));

/***/ })

});