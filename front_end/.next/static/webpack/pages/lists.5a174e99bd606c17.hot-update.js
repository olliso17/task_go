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

/***/ "./components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx":
/*!**************************************************************************!*\
  !*** ./components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/handler/task_handler */ \"./services/handler/task_handler.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ListTasksCardWeb = (param)=>{\n    let { task  } = param;\n    _s();\n    const [statusCheck, setStatusCheck] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({\n        mutationFn: _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_2__.patchTaskCompleted\n    });\n    const onChangeStatus = ()=>{\n        mutation.mutate({\n            id: task.id,\n            status: statusCheck\n        });\n    };\n    const handleCheckboxChange = (event)=>{\n        setStatusCheck(event.target.checked);\n        console.log(statusCheck, \"foi\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                size: \"xs\",\n                textTransform: \"uppercase\",\n                children: task.title\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                pt: \"2\",\n                fontSize: \"sm\",\n                children: task.description\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {\n                initialValues: {\n                    statusCheck\n                },\n                onSubmit: onChangeStatus,\n                children: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                flexDirection: \"column\",\n                                justifyContent: \"space-between\",\n                                alignItems: \"end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {\n                                    borderWidth: \"0.2vw\",\n                                    colorScheme: \"purple\",\n                                    borderColor: \"purple.900\",\n                                    isChecked: statusCheck,\n                                    onChange: handleCheckboxChange\n                                }, void 0, false, {\n                                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ListTasksCardWeb, \"rx03ynwfCeS3wrHnnxrzsDXSHTU=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone,\n        react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = ListTasksCardWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTasksCardWeb);\nvar _c;\n$RefreshReg$(_c, \"ListTasksCardWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL0xpc3RUYXNrc0NhcmRXZWIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQUVVO0FBQ3VGO0FBQ3RIO0FBQ0w7QUFDUztBQVExQyxNQUFNVyxtQkFBbUIsU0FBcUI7UUFBcEIsRUFBRUMsS0FBSSxFQUFTOztJQUNyQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUNwRCxNQUFNTSxZQUFZZix3RUFBY0E7SUFDaEMsTUFBTWdCLFdBQVdOLHdEQUFXQSxDQUFDO1FBQUVPLFlBQVloQiw4RUFBa0JBO0lBQUM7SUFDOUQsTUFBTWlCLGlCQUFpQixJQUFNO1FBRXpCRixTQUFTRyxNQUFNLENBQUM7WUFBRUMsSUFBSVIsS0FBS1EsRUFBRTtZQUFFQyxRQUFRUjtRQUFZO0lBRXZEO0lBQ0EsTUFBTVMsdUJBQXVCLENBQUNDLFFBQStDO1FBQ3pFVCxlQUFlUyxNQUFNQyxNQUFNLENBQUNDLE9BQU87UUFDbkNDLFFBQVFDLEdBQUcsQ0FBQ2QsYUFBYTtJQUU3QjtJQUVBLHFCQUVJOzswQkFDSSw4REFBQ1IscURBQU9BO2dCQUFDdUIsTUFBSztnQkFBS0MsZUFBYzswQkFDNUJqQixLQUFLa0IsS0FBSzs7Ozs7OzBCQUVmLDhEQUFDeEIsa0RBQUlBO2dCQUFDeUIsSUFBRztnQkFBSUMsVUFBUzswQkFBTXBCLEtBQUtxQixXQUFXOzs7Ozs7MEJBRTVDLDhEQUFDekIsMENBQU1BO2dCQUNIMEIsZUFBZTtvQkFBRXJCO2dCQUFZO2dCQUM3QnNCLFVBQVVqQjswQkFHVCxDQUFDa0Isc0JBQ0UsOERBQUM3Qix3Q0FBSUE7a0NBQ0QsNEVBQUNILHlEQUFXQTtzQ0FDUiw0RUFBQ0Qsa0RBQUlBO2dDQUFDa0MsZUFBYztnQ0FBU0MsZ0JBQWU7Z0NBQWdCQyxZQUFXOzBDQUVuRSw0RUFBQ3JDLHNEQUFRQTtvQ0FBQ3NDLGFBQVk7b0NBQVFDLGFBQVk7b0NBQVNDLGFBQVk7b0NBQWFDLFdBQVc5QjtvQ0FBYStCLFVBQVV0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWE5STtHQTlDTVg7O1FBRWdCWCxvRUFBY0E7UUFDZlUsb0RBQVdBOzs7S0FIMUJDO0FBZ0ROLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzV2ViL0xpc3RUYXNrc1dlYi9MaXN0VGFza3NDYXJkV2ViL2luZGV4LnRzeD83ZjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbG9yc1Bob25lIH0gZnJvbSBcIkAvaG9va3NQZXJzb24vY29sb3JzUGhvbmVcIjtcbmltcG9ydCB7IE91dHB1dFRhc2tEdG8gfSBmcm9tIFwiQC9zZXJ2aWNlcy9kdG8vdGFza19kdG9cIjtcbmltcG9ydCB7IHBhdGNoVGFza0NvbXBsZXRlZCB9IGZyb20gXCJAL3NlcnZpY2VzL2hhbmRsZXIvdGFza19oYW5kbGVyXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25QYW5lbCwgQm94LCBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkSGVhZGVyLCBDaGVja2JveCwgRmxleCwgRm9ybUNvbnRyb2wsIEhlYWRpbmcsIFN0YWNrLCBTdGFja0RpdmlkZXIsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgdGFzazogT3V0cHV0VGFza0R0b1xufVxuaW50ZXJmYWNlIEZvcm1WYWx1ZXMge1xuICAgIGFncmVlVG9UZXJtczogYm9vbGVhbjtcbn1cbmNvbnN0IExpc3RUYXNrc0NhcmRXZWIgPSAoeyB0YXNrIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3N0YXR1c0NoZWNrLCBzZXRTdGF0dXNDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYWxsQ29sb3JzID0gdXNlQ29sb3JzUGhvbmUoKTtcbiAgICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uKHsgbXV0YXRpb25GbjogcGF0Y2hUYXNrQ29tcGxldGVkIH0pXG4gICAgY29uc3Qgb25DaGFuZ2VTdGF0dXMgPSAoKSA9PiB7XG5cbiAgICAgICAgbXV0YXRpb24ubXV0YXRlKHsgaWQ6IHRhc2suaWQsIHN0YXR1czogc3RhdHVzQ2hlY2sgfSlcblxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgc2V0U3RhdHVzQ2hlY2soZXZlbnQudGFyZ2V0LmNoZWNrZWQpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXR1c0NoZWNrLCAnZm9pJylcblxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPSd4cycgdGV4dFRyYW5zZm9ybT0ndXBwZXJjYXNlJz5cbiAgICAgICAgICAgICAgICB7dGFzay50aXRsZX1cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IHB0PScyJyBmb250U2l6ZT0nc20nPnt0YXNrLmRlc2NyaXB0aW9ufTwvVGV4dD5cblxuICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgc3RhdHVzQ2hlY2sgfX1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17b25DaGFuZ2VTdGF0dXN9XG5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImVuZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBib3JkZXJXaWR0aD1cIjAuMnZ3XCIgY29sb3JTY2hlbWU9XCJwdXJwbGVcIiBib3JkZXJDb2xvcj1cInB1cnBsZS45MDBcIiBpc0NoZWNrZWQ9e3N0YXR1c0NoZWNrfSBvbkNoYW5nZT17aGFuZGxlQ2hlY2tib3hDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Zvcm1paz5cblxuICAgICAgICA8Lz5cblxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0VGFza3NDYXJkV2ViOyJdLCJuYW1lcyI6WyJ1c2VDb2xvcnNQaG9uZSIsInBhdGNoVGFza0NvbXBsZXRlZCIsIkNoZWNrYm94IiwiRmxleCIsIkZvcm1Db250cm9sIiwiSGVhZGluZyIsIlRleHQiLCJGb3JtIiwiRm9ybWlrIiwidXNlU3RhdGUiLCJ1c2VNdXRhdGlvbiIsIkxpc3RUYXNrc0NhcmRXZWIiLCJ0YXNrIiwic3RhdHVzQ2hlY2siLCJzZXRTdGF0dXNDaGVjayIsImFsbENvbG9ycyIsIm11dGF0aW9uIiwibXV0YXRpb25GbiIsIm9uQ2hhbmdlU3RhdHVzIiwibXV0YXRlIiwiaWQiLCJzdGF0dXMiLCJoYW5kbGVDaGVja2JveENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJzaXplIiwidGV4dFRyYW5zZm9ybSIsInRpdGxlIiwicHQiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwicHJvcHMiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyV2lkdGgiLCJjb2xvclNjaGVtZSIsImJvcmRlckNvbG9yIiwiaXNDaGVja2VkIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\n"));

/***/ }),

/***/ "./components/ComponentsWeb/ListTasksWeb/index.tsx":
/*!*********************************************************!*\
  !*** ./components/ComponentsWeb/ListTasksWeb/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ListTasksCardWeb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListTasksCardWeb */ \"./components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\");\n/* harmony import */ var _ListTasksCheckboxWeb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListTasksCheckboxWeb */ \"./components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ListTasksWeb = (param)=>{\n    let { list  } = param;\n    _s();\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const [tipeTaskSelect, setTipeTaskSelect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        list;\n        valueTipeTask();\n    }, [\n        list\n    ]);\n    function valueTipeTask() {\n        switch(list === null || list === void 0 ? void 0 : list.type_task){\n            case \"checkbox\":\n                return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasksCheckboxWeb__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    list: list\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 46\n                }, this));\n            case \"card\":\n                return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasksCardWeb__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    list: list\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 46\n                }, this));\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card, {\n        backgroundColor: allColors.bg,\n        margin: \"0.5vw\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.CardBody, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.StackDivider, {}, void 0, false, void 0, void 0),\n                spacing: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    children: tipeTaskSelect\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ListTasksWeb, \"vmJkRRh0GZAHzpel/67ut7+7q1U=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone\n    ];\n});\n_c = ListTasksWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTasksWeb);\nvar _c;\n$RefreshReg$(_c, \"ListTasksWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDtBQUlXO0FBS3BCO0FBQ1E7QUFFa0I7QUFRM0UsTUFBTVUsZUFBZSxTQUFxQjtRQUFwQixFQUFFQyxLQUFJLEVBQVM7O0lBQ2pDLE1BQU1DLFlBQVlaLHdFQUFjQTtJQUNoQyxNQUFNLENBQUNhLGdCQUFnQkMsa0JBQWtCLEdBQUdaLCtDQUFRQSxlQUFDO0lBR3JERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pVO1FBQ0FJO0lBQ0osR0FBRztRQUFDSjtLQUFLO0lBQ1QsU0FBU0ksZ0JBQWdCO1FBR2pCLE9BQVFKLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUssU0FBUztZQUNuQixLQUFLO2dCQUNELE9BQU9GLGdDQUFrQiw4REFBQ1YsNkRBQW9CQTtvQkFBQ08sTUFBTUE7Ozs7OztZQUN6RCxLQUFLO2dCQUNELE9BQU9HLGdDQUFrQiw4REFBQ1gseURBQWdCQTtvQkFBQ1EsTUFBTUE7Ozs7OztRQUd6RDtJQUdSO0lBRUEscUJBQ0ksOERBQUNMLGtEQUFJQTtRQUFDVyxpQkFBaUJMLFVBQVVNLEVBQUU7UUFBRUMsUUFBTztrQkFDeEMsNEVBQUNaLHNEQUFRQTtzQkFDTCw0RUFBQ0MsbURBQUtBO2dCQUFDWSx1QkFBUyw4REFBQ1gsMERBQVlBO2dCQUFLWSxTQUFROzBCQUN0Qyw0RUFBQ2hCLGlEQUFHQTs4QkFDQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6QjtHQXJDTUg7O1FBQ2dCVixvRUFBY0E7OztLQUQ5QlU7QUF1Q04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzV2ViL0xpc3RUYXNrc1dlYi9pbmRleC50c3g/NmM4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCJcbmltcG9ydCB7IE91dHB1dExpc3REdG8gfSBmcm9tIFwiQC9zZXJ2aWNlcy9kdG8vbGlzdF9kdG9cIlxuaW1wb3J0IHsgT3V0cHV0VGFza0R0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by90YXNrX2R0b1wiXG5pbXBvcnQgeyBnZXRMaXN0QWxsIH0gZnJvbSBcIkAvc2VydmljZXMvaGFuZGxlci9saXN0X2hhbmRsZXJcIlxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCJcbmltcG9ydCBBY2NvcmRpb25UYXNrc0NhcmQgZnJvbSBcIi4vTGlzdFRhc2tzQ2FyZFdlYlwiXG5pbXBvcnQgQWNjb3JkaW9uVGFza3NDaGVja2JveCBmcm9tIFwiLi9MaXN0VGFza3NDaGVja2JveFdlYlwiXG5pbXBvcnQgQWNjb3JkaW9uVGFza3NUaW1lIGZyb20gXCIuL0xpc3RUYXNrc1RpbWV3ZWJcIlxuaW1wb3J0IExpc3RUYXNrc0NhcmRXZWIgZnJvbSBcIi4vTGlzdFRhc2tzQ2FyZFdlYlwiXG5pbXBvcnQgTGlzdFRhc2tzQ2hlY2tib3hXZWIgZnJvbSBcIi4vTGlzdFRhc2tzQ2hlY2tib3hXZWJcIlxuaW1wb3J0IExpc3RUYXNrc1RpbWV3ZWIgZnJvbSBcIi4vTGlzdFRhc2tzVGltZXdlYlwiXG5pbXBvcnQgeyBCb3gsIENhcmQsIENhcmRCb2R5LCBTdGFjaywgU3RhY2tEaXZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgbGlzdDogT3V0cHV0TGlzdER0b1xuXG59XG5cbmNvbnN0IExpc3RUYXNrc1dlYiA9ICh7IGxpc3QgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBhbGxDb2xvcnMgPSB1c2VDb2xvcnNQaG9uZSgpO1xuICAgIGNvbnN0IFt0aXBlVGFza1NlbGVjdCwgc2V0VGlwZVRhc2tTZWxlY3RdID0gdXNlU3RhdGUoPD48Lz4pO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsaXN0XG4gICAgICAgIHZhbHVlVGlwZVRhc2soKVxuICAgIH0sIFtsaXN0XSlcbiAgICBmdW5jdGlvbiB2YWx1ZVRpcGVUYXNrKCkge1xuXG4gICAgICAgICBcbiAgICAgICAgICAgIHN3aXRjaCAobGlzdD8udHlwZV90YXNrKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaXBlVGFza1NlbGVjdCg8TGlzdFRhc2tzQ2hlY2tib3hXZWIgbGlzdD17bGlzdH0gLz4pO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjYXJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaXBlVGFza1NlbGVjdCg8TGlzdFRhc2tzQ2FyZFdlYiBsaXN0PXtsaXN0fS8+KTtcbiAgICAgICAgICAgICAgICAvLyBjYXNlIFwidGltZVwiOlxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gc2V0VGlwZVRhc2tTZWxlY3QoPExpc3RUYXNrc1RpbWV3ZWIga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSAvPik7XG4gICAgICAgICAgICB9XG4gICAgXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBiYWNrZ3JvdW5kQ29sb3I9e2FsbENvbG9ycy5iZ30gbWFyZ2luPVwiMC41dndcIj5cbiAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgZGl2aWRlcj17PFN0YWNrRGl2aWRlciAvPn0gc3BhY2luZz0nNCc+XG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGlwZVRhc2tTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICA8L0NhcmQ+XG5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdFRhc2tzV2ViIl0sIm5hbWVzIjpbInVzZUNvbG9yc1Bob25lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaXN0VGFza3NDYXJkV2ViIiwiTGlzdFRhc2tzQ2hlY2tib3hXZWIiLCJCb3giLCJDYXJkIiwiQ2FyZEJvZHkiLCJTdGFjayIsIlN0YWNrRGl2aWRlciIsIkxpc3RUYXNrc1dlYiIsImxpc3QiLCJhbGxDb2xvcnMiLCJ0aXBlVGFza1NlbGVjdCIsInNldFRpcGVUYXNrU2VsZWN0IiwidmFsdWVUaXBlVGFzayIsInR5cGVfdGFzayIsImJhY2tncm91bmRDb2xvciIsImJnIiwibWFyZ2luIiwiZGl2aWRlciIsInNwYWNpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/ListTasksWeb/index.tsx\n"));

/***/ })

});