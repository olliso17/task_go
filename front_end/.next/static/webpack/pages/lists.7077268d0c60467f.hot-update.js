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

/***/ "./components/ComponentsPhone/AcordionTasks/index.tsx":
/*!************************************************************!*\
  !*** ./components/ComponentsPhone/AcordionTasks/index.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var _services_handler_list_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/handler/list_handler */ \"./services/handler/list_handler.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _AcordionTasksCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AcordionTasksCard */ \"./components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\");\n/* harmony import */ var _AcordionTasksCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AcordionTasksCheckbox */ \"./components/ComponentsPhone/AcordionTasks/AcordionTasksCheckbox/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AcordionTasks = (param)=>{\n    let { task , list_id  } = param;\n    _s();\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const [tipeTaskSelect, setTipeTaskSelect] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n    const { data: lists  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(\"lists\", _services_handler_list_handler__WEBPACK_IMPORTED_MODULE_2__.getListAll);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        lists;\n        valueTipeTask();\n    }, []);\n    function valueTipeTask() {\n        lists === null || lists === void 0 ? void 0 : lists.map((list)=>{\n            // if (list.id == list_id) {\n            console.log(list);\n            switch(list === null || list === void 0 ? void 0 : list.type_task){\n                case \"checkbox\":\n                    return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcordionTasksCheckbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        task: task\n                    }, task.toString(), false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 50\n                    }, this));\n                case \"card\":\n                    return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcordionTasksCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        task: task\n                    }, task.toString(), false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 50\n                    }, this));\n            }\n        // }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: tipeTaskSelect\n    }, void 0, false);\n};\n_s(AcordionTasks, \"njJ23hhTEgo7U31lUz8gLorYEBU=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone,\n        react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = AcordionTasks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AcordionTasks);\nvar _c;\n$RefreshReg$(_c, \"AcordionTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9BY29yZGlvblRhc2tzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEQ7QUFHYTtBQUs1QjtBQUNRO0FBQ0M7QUFDUTtBQVE1RCxNQUFNTyxnQkFBZ0IsU0FBOEI7UUFBN0IsRUFBRUMsS0FBSSxFQUFFQyxRQUFPLEVBQVM7O0lBQzNDLE1BQU1DLFlBQVlWLHdFQUFjQTtJQUNoQyxNQUFNLENBQUNXLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxlQUFDO0lBQ3JELE1BQU0sRUFBRVUsTUFBTUMsTUFBSyxFQUFFLEdBQUdWLHFEQUFRQSxDQUFDLFNBQVNILHNFQUFVQTtJQUVwREMsZ0RBQVNBLENBQUMsSUFBTTtRQUNaWTtRQUNBQztJQUNKLEdBQUcsRUFBRTtJQUNMLFNBQVNBLGdCQUFnQjtRQUNyQkQsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPRSxHQUFHLENBQUMsQ0FBQ0MsT0FBd0I7WUFDaEMsNEJBQTRCO1lBQ3hCQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1osT0FBUUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNRyxTQUFTO2dCQUNuQixLQUFLO29CQUNELE9BQU9SLGdDQUFrQiw4REFBQ04sOERBQXNCQTt3QkFBdUJFLE1BQU1BO3VCQUF2QkEsS0FBS2EsUUFBUTs7Ozs7Z0JBQ3ZFLEtBQUs7b0JBQ0QsT0FBT1QsZ0NBQWtCLDhEQUFDUCwwREFBa0JBO3dCQUF1QkcsTUFBTUE7dUJBQXZCQSxLQUFLYSxRQUFROzs7OztZQUN2RTtRQUNKLElBQUk7UUFDUjtJQUVKO0lBRUEscUJBQ0k7a0JBQ0tWOztBQUtiO0dBL0JNSjs7UUFDZ0JQLG9FQUFjQTtRQUVSSSxpREFBUUE7OztLQUg5Qkc7QUFpQ04sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzUGhvbmUvQWNvcmRpb25UYXNrcy9pbmRleC50c3g/MjFkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCJcbmltcG9ydCB7IE91dHB1dExpc3REdG8gfSBmcm9tIFwiQC9zZXJ2aWNlcy9kdG8vbGlzdF9kdG9cIlxuaW1wb3J0IHsgT3V0cHV0VGFza0R0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by90YXNrX2R0b1wiXG5pbXBvcnQgeyBnZXRMaXN0QWxsLCBnZXRMaXN0SWQgfSBmcm9tIFwiQC9zZXJ2aWNlcy9oYW5kbGVyL2xpc3RfaGFuZGxlclwiXG5pbXBvcnQgeyB1c2VNdXRhdGlvblBvc3RUYXNrIH0gZnJvbSBcIkAvc2VydmljZXMvaGFuZGxlci9tdWF0aW9uXCJcbmltcG9ydCB7IHBhdGNoVGFza0VkaXQgfSBmcm9tIFwiQC9zZXJ2aWNlcy9oYW5kbGVyL3Rhc2tfaGFuZGxlclwiXG5pbXBvcnQgeyBCdXR0b24sIENoZWNrYm94LCBGbGV4LCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCwgVGV4dCwgdXNlQ29udHJvbGxhYmxlU3RhdGUsIHVzZVRvYXN0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIlxuaW1wb3J0IEFjY29yZGlvblRhc2tzQ2FyZCBmcm9tIFwiLi9BY29yZGlvblRhc2tzQ2FyZFwiXG5pbXBvcnQgQWNjb3JkaW9uVGFza3NDaGVja2JveCBmcm9tIFwiLi9BY29yZGlvblRhc2tzQ2hlY2tib3hcIlxuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgdGFzazogT3V0cHV0VGFza0R0b1xuICAgIGxpc3RfaWQ6IHN0cmluZ1xufVxuXG5jb25zdCBBY29yZGlvblRhc2tzID0gKHsgdGFzaywgbGlzdF9pZCB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGFsbENvbG9ycyA9IHVzZUNvbG9yc1Bob25lKCk7XG4gICAgY29uc3QgW3RpcGVUYXNrU2VsZWN0LCBzZXRUaXBlVGFza1NlbGVjdF0gPSB1c2VTdGF0ZSg8PjwvPik7XG4gICAgY29uc3QgeyBkYXRhOiBsaXN0cyB9ID0gdXNlUXVlcnkoXCJsaXN0c1wiLCBnZXRMaXN0QWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxpc3RzXG4gICAgICAgIHZhbHVlVGlwZVRhc2soKVxuICAgIH0sIFtdKVxuICAgIGZ1bmN0aW9uIHZhbHVlVGlwZVRhc2soKSB7XG4gICAgICAgIGxpc3RzPy5tYXAoKGxpc3Q6IE91dHB1dExpc3REdG8pID0+IHtcbiAgICAgICAgICAgIC8vIGlmIChsaXN0LmlkID09IGxpc3RfaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0KVxuICAgICAgICAgICAgICAgIHN3aXRjaCAobGlzdD8udHlwZV90YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpcGVUYXNrU2VsZWN0KDxBY2NvcmRpb25UYXNrc0NoZWNrYm94IGtleT17dGFzay50b1N0cmluZygpfSB0YXNrPXt0YXNrfSAgLz4pO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2FyZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpcGVUYXNrU2VsZWN0KDxBY2NvcmRpb25UYXNrc0NhcmQga2V5PXt0YXNrLnRvU3RyaW5nKCl9IHRhc2s9e3Rhc2t9ICAvPik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHt0aXBlVGFza1NlbGVjdH1cbiAgICAgICAgPC8+XG5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNvcmRpb25UYXNrcyJdLCJuYW1lcyI6WyJ1c2VDb2xvcnNQaG9uZSIsImdldExpc3RBbGwiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVF1ZXJ5IiwiQWNjb3JkaW9uVGFza3NDYXJkIiwiQWNjb3JkaW9uVGFza3NDaGVja2JveCIsIkFjb3JkaW9uVGFza3MiLCJ0YXNrIiwibGlzdF9pZCIsImFsbENvbG9ycyIsInRpcGVUYXNrU2VsZWN0Iiwic2V0VGlwZVRhc2tTZWxlY3QiLCJkYXRhIiwibGlzdHMiLCJ2YWx1ZVRpcGVUYXNrIiwibWFwIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlX3Rhc2siLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComponentsPhone/AcordionTasks/index.tsx\n"));

/***/ })

});