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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/handler/task_handler */ \"./services/handler/task_handler.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ListTasksCardWeb = (param)=>{\n    let { list  } = param;\n    var _list_tasks;\n    _s();\n    const [statusCheck, setStatusCheck] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({\n        mutationFn: _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_2__.patchTaskCompleted\n    });\n    const handleCheckboxChange = (event)=>{\n        setStatusCheck(event.target.checked);\n        console.log(statusCheck, \"foi\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        list;\n    }, [\n        list\n    ]);\n    return (_list_tasks = list.tasks) === null || _list_tasks === void 0 ? void 0 : _list_tasks.map((task)=>{\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                    size: \"xs\",\n                    textTransform: \"uppercase\",\n                    children: task.title\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                    pt: \"2\",\n                    fontSize: \"sm\",\n                    children: task.description\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {\n                    initialValues: {\n                        statusCheck\n                    },\n                    onSubmit: mutation.mutate({\n                        id: task.id,\n                        status: statusCheck\n                    }),\n                    children: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                    flexDirection: \"column\",\n                                    justifyContent: \"space-between\",\n                                    alignItems: \"end\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {\n                                        borderWidth: \"0.2vw\",\n                                        colorScheme: \"purple\",\n                                        borderColor: \"purple.900\",\n                                        isChecked: statusCheck,\n                                        onChange: handleCheckboxChange\n                                    }, void 0, false, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true);\n    });\n};\n_s(ListTasksCardWeb, \"2SeposP73LIwW1WX2nCYS50gh38=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone,\n        react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = ListTasksCardWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTasksCardWeb);\nvar _c;\n$RefreshReg$(_c, \"ListTasksCardWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL0xpc3RUYXNrc0NhcmRXZWIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQUdVO0FBQ3VGO0FBQ3RIO0FBQ007QUFDRjtBQVMxQyxNQUFNWSxtQkFBbUIsU0FBcUI7UUFBcEIsRUFBRUMsS0FBSSxFQUFTO1FBZWpDQTs7SUFkSixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUNwRCxNQUFNTSxZQUFZaEIsd0VBQWNBO0lBQ2hDLE1BQU1pQixXQUFXTix3REFBV0EsQ0FBQztRQUFFTyxZQUFZakIsOEVBQWtCQTtJQUFDO0lBRTlELE1BQU1rQix1QkFBdUIsQ0FBQ0MsUUFBK0M7UUFDekVMLGVBQWVLLE1BQU1DLE1BQU0sQ0FBQ0MsT0FBTztRQUNuQ0MsUUFBUUMsR0FBRyxDQUFDVixhQUFhO0lBRTdCO0lBQ0FMLGdEQUFTQSxDQUFDLElBQU07UUFDWkk7SUFFSixHQUFHO1FBQUNBO0tBQUs7SUFDVCxPQUNJQSxDQUFBQSxjQUFBQSxLQUFLWSxLQUFLLGNBQVZaLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFZYSxJQUFJQyxDQUFBQSxPQUFRO3NCQUNwQjs7OEJBQ0ksOERBQUN0QixxREFBT0E7b0JBQUN1QixNQUFLO29CQUFLQyxlQUFjOzhCQUM1QkYsS0FBS0csS0FBSzs7Ozs7OzhCQUVmLDhEQUFDeEIsa0RBQUlBO29CQUFDeUIsSUFBRztvQkFBSUMsVUFBUzs4QkFBTUwsS0FBS00sV0FBVzs7Ozs7OzhCQUU1Qyw4REFBQ3pCLDBDQUFNQTtvQkFDSDBCLGVBQWU7d0JBQUVwQjtvQkFBWTtvQkFDN0JxQixVQUFVbEIsU0FBU21CLE1BQU0sQ0FBQzt3QkFBRUMsSUFBSVYsS0FBS1UsRUFBRTt3QkFBRUMsUUFBUXhCO29CQUFZOzhCQUc1RCxDQUFDeUIsc0JBQ0UsOERBQUNoQyx3Q0FBSUE7c0NBQ0QsNEVBQUNILHlEQUFXQTswQ0FDUiw0RUFBQ0Qsa0RBQUlBO29DQUFDcUMsZUFBYztvQ0FBU0MsZ0JBQWU7b0NBQWdCQyxZQUFXOzhDQUVuRSw0RUFBQ3hDLHNEQUFRQTt3Q0FBQ3lDLGFBQVk7d0NBQVFDLGFBQVk7d0NBQVNDLGFBQVk7d0NBQWFDLFdBQVdoQzt3Q0FBYWlDLFVBQVU1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVUxSTtBQUlSO0dBOUNNUDs7UUFFZ0JaLG9FQUFjQTtRQUNmVyxvREFBV0E7OztLQUgxQkM7QUFnRE4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL0xpc3RUYXNrc0NhcmRXZWIvaW5kZXgudHN4PzdmNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29sb3JzUGhvbmUgfSBmcm9tIFwiQC9ob29rc1BlcnNvbi9jb2xvcnNQaG9uZVwiO1xuaW1wb3J0IHsgT3V0cHV0TGlzdER0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by9saXN0X2R0b1wiO1xuaW1wb3J0IHsgT3V0cHV0VGFza0R0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by90YXNrX2R0b1wiO1xuaW1wb3J0IHsgcGF0Y2hUYXNrQ29tcGxldGVkIH0gZnJvbSBcIkAvc2VydmljZXMvaGFuZGxlci90YXNrX2hhbmRsZXJcIjtcbmltcG9ydCB7IEFjY29yZGlvblBhbmVsLCBCb3gsIEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENoZWNrYm94LCBGbGV4LCBGb3JtQ29udHJvbCwgSGVhZGluZywgU3RhY2ssIFN0YWNrRGl2aWRlciwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGxpc3Q6IE91dHB1dExpc3REdG9cblxufVxuaW50ZXJmYWNlIEZvcm1WYWx1ZXMge1xuICAgIGFncmVlVG9UZXJtczogYm9vbGVhbjtcbn1cbmNvbnN0IExpc3RUYXNrc0NhcmRXZWIgPSAoeyBsaXN0IH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3N0YXR1c0NoZWNrLCBzZXRTdGF0dXNDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYWxsQ29sb3JzID0gdXNlQ29sb3JzUGhvbmUoKTtcbiAgICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uKHsgbXV0YXRpb25GbjogcGF0Y2hUYXNrQ29tcGxldGVkIH0pXG4gIFxuICAgIGNvbnN0IGhhbmRsZUNoZWNrYm94Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBzZXRTdGF0dXNDaGVjayhldmVudC50YXJnZXQuY2hlY2tlZClcbiAgICAgICAgY29uc29sZS5sb2coc3RhdHVzQ2hlY2ssICdmb2knKVxuXG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsaXN0XG5cbiAgICB9LCBbbGlzdF0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgbGlzdC50YXNrcz8ubWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPSd4cycgdGV4dFRyYW5zZm9ybT0ndXBwZXJjYXNlJz5cbiAgICAgICAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxUZXh0IHB0PScyJyBmb250U2l6ZT0nc20nPnt0YXNrLmRlc2NyaXB0aW9ufTwvVGV4dD5cblxuICAgICAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBzdGF0dXNDaGVjayB9fVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17bXV0YXRpb24ubXV0YXRlKHsgaWQ6IHRhc2suaWQsIHN0YXR1czogc3RhdHVzQ2hlY2sgfSl9XG5cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiZW5kXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBib3JkZXJXaWR0aD1cIjAuMnZ3XCIgY29sb3JTY2hlbWU9XCJwdXJwbGVcIiBib3JkZXJDb2xvcj1cInB1cnBsZS45MDBcIiBpc0NoZWNrZWQ9e3N0YXR1c0NoZWNrfSBvbkNoYW5nZT17aGFuZGxlQ2hlY2tib3hDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0Zvcm1paz5cblxuICAgICAgICAgICAgPC8+XG4gICAgICAgIH0pXG5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdFRhc2tzQ2FyZFdlYjsiXSwibmFtZXMiOlsidXNlQ29sb3JzUGhvbmUiLCJwYXRjaFRhc2tDb21wbGV0ZWQiLCJDaGVja2JveCIsIkZsZXgiLCJGb3JtQ29udHJvbCIsIkhlYWRpbmciLCJUZXh0IiwiRm9ybSIsIkZvcm1payIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTXV0YXRpb24iLCJMaXN0VGFza3NDYXJkV2ViIiwibGlzdCIsInN0YXR1c0NoZWNrIiwic2V0U3RhdHVzQ2hlY2siLCJhbGxDb2xvcnMiLCJtdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJoYW5kbGVDaGVja2JveENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJ0YXNrcyIsIm1hcCIsInRhc2siLCJzaXplIiwidGV4dFRyYW5zZm9ybSIsInRpdGxlIiwicHQiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwibXV0YXRlIiwiaWQiLCJzdGF0dXMiLCJwcm9wcyIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJXaWR0aCIsImNvbG9yU2NoZW1lIiwiYm9yZGVyQ29sb3IiLCJpc0NoZWNrZWQiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\n"));

/***/ })

});