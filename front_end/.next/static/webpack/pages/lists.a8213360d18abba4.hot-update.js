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

/***/ "./components/ComponentsWeb/ListTasksWeb/index.tsx":
/*!*********************************************************!*\
  !*** ./components/ComponentsWeb/ListTasksWeb/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ListTasksCardWeb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListTasksCardWeb */ \"./components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\");\n/* harmony import */ var _ListTasksCheckboxWeb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListTasksCheckboxWeb */ \"./components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ListTasksWeb = (param)=>{\n    let { list  } = param;\n    _s();\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const [tipeTaskSelect, setTipeTaskSelect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        list;\n        valueTipeTask();\n    }, [\n        list\n    ]);\n    function valueTipeTask() {\n        switch(list === null || list === void 0 ? void 0 : list.type_task){\n            case \"checkbox\":\n                var _list_tasks;\n                return (_list_tasks = list.tasks) === null || _list_tasks === void 0 ? void 0 : _list_tasks.map((task)=>setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasksCheckboxWeb__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        task: task\n                    }, task.id, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 25\n                    }, this)));\n            case \"card\":\n                return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasksCardWeb__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    list: list\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 42\n                }, this));\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card, {\n        backgroundColor: allColors.bg,\n        margin: \"0.5vw\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.CardBody, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.StackDivider, {}, void 0, false, void 0, void 0),\n                spacing: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    children: tipeTaskSelect\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ListTasksWeb, \"vmJkRRh0GZAHzpel/67ut7+7q1U=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone\n    ];\n});\n_c = ListTasksWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTasksWeb);\nvar _c;\n$RefreshReg$(_c, \"ListTasksWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDtBQUlXO0FBS3BCO0FBQ1E7QUFFa0I7QUFRM0UsTUFBTVUsZUFBZSxTQUFxQjtRQUFwQixFQUFFQyxLQUFJLEVBQVM7O0lBQ2pDLE1BQU1DLFlBQVlaLHdFQUFjQTtJQUNoQyxNQUFNLENBQUNhLGdCQUFnQkMsa0JBQWtCLEdBQUdaLCtDQUFRQSxlQUFDO0lBR3JERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pVO1FBQ0FJO0lBQ0osR0FBRztRQUFDSjtLQUFLO0lBQ1QsU0FBU0ksZ0JBQWdCO1FBR3JCLE9BQVFKLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUssU0FBUztZQUNuQixLQUFLO29CQUNNTDtnQkFBUCxPQUFPQSxDQUFBQSxjQUFBQSxLQUFLTSxLQUFLLGNBQVZOLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFZTyxJQUFJLENBQUNDLE9BQ3BCTCxnQ0FDSSw4REFBQ1YsNkRBQW9CQTt3QkFBZWUsTUFBTUE7dUJBQWZBLEtBQUtDLEVBQUU7Ozs7O1lBRTlDLEtBQUs7Z0JBQ0QsT0FBT04sZ0NBQWtCLDhEQUFDWCx5REFBZ0JBO29CQUFDUSxNQUFNQTs7Ozs7O1FBR3pEO0lBR0o7SUFFQSxxQkFDSSw4REFBQ0wsa0RBQUlBO1FBQUNlLGlCQUFpQlQsVUFBVVUsRUFBRTtRQUFFQyxRQUFPO2tCQUN4Qyw0RUFBQ2hCLHNEQUFRQTtzQkFDTCw0RUFBQ0MsbURBQUtBO2dCQUFDZ0IsdUJBQVMsOERBQUNmLDBEQUFZQTtnQkFBS2dCLFNBQVE7MEJBQ3RDLDRFQUFDcEIsaURBQUdBOzhCQUNDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpCO0dBeENNSDs7UUFDZ0JWLG9FQUFjQTs7O0tBRDlCVTtBQTBDTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL2luZGV4LnRzeD82YzhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbG9yc1Bob25lIH0gZnJvbSBcIkAvaG9va3NQZXJzb24vY29sb3JzUGhvbmVcIlxuaW1wb3J0IHsgT3V0cHV0TGlzdER0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by9saXN0X2R0b1wiXG5pbXBvcnQgeyBPdXRwdXRUYXNrRHRvIH0gZnJvbSBcIkAvc2VydmljZXMvZHRvL3Rhc2tfZHRvXCJcbmltcG9ydCB7IGdldExpc3RBbGwgfSBmcm9tIFwiQC9zZXJ2aWNlcy9oYW5kbGVyL2xpc3RfaGFuZGxlclwiXG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIlxuaW1wb3J0IEFjY29yZGlvblRhc2tzQ2FyZCBmcm9tIFwiLi9MaXN0VGFza3NDYXJkV2ViXCJcbmltcG9ydCBBY2NvcmRpb25UYXNrc0NoZWNrYm94IGZyb20gXCIuL0xpc3RUYXNrc0NoZWNrYm94V2ViXCJcbmltcG9ydCBBY2NvcmRpb25UYXNrc1RpbWUgZnJvbSBcIi4vTGlzdFRhc2tzVGltZXdlYlwiXG5pbXBvcnQgTGlzdFRhc2tzQ2FyZFdlYiBmcm9tIFwiLi9MaXN0VGFza3NDYXJkV2ViXCJcbmltcG9ydCBMaXN0VGFza3NDaGVja2JveFdlYiBmcm9tIFwiLi9MaXN0VGFza3NDaGVja2JveFdlYlwiXG5pbXBvcnQgTGlzdFRhc2tzVGltZXdlYiBmcm9tIFwiLi9MaXN0VGFza3NUaW1ld2ViXCJcbmltcG9ydCB7IEJveCwgQ2FyZCwgQ2FyZEJvZHksIFN0YWNrLCBTdGFja0RpdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBsaXN0OiBPdXRwdXRMaXN0RHRvXG5cbn1cblxuY29uc3QgTGlzdFRhc2tzV2ViID0gKHsgbGlzdCB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGFsbENvbG9ycyA9IHVzZUNvbG9yc1Bob25lKCk7XG4gICAgY29uc3QgW3RpcGVUYXNrU2VsZWN0LCBzZXRUaXBlVGFza1NlbGVjdF0gPSB1c2VTdGF0ZSg8PjwvPik7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxpc3RcbiAgICAgICAgdmFsdWVUaXBlVGFzaygpXG4gICAgfSwgW2xpc3RdKVxuICAgIGZ1bmN0aW9uIHZhbHVlVGlwZVRhc2soKSB7XG5cblxuICAgICAgICBzd2l0Y2ggKGxpc3Q/LnR5cGVfdGFzaykge1xuICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3QudGFza3M/Lm1hcCgodGFzazogT3V0cHV0VGFza0R0bykgPT4gKFxuICAgICAgICAgICAgICAgICAgICBzZXRUaXBlVGFza1NlbGVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0VGFza3NDaGVja2JveFdlYiBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IC8+KVxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgY2FzZSBcImNhcmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VGlwZVRhc2tTZWxlY3QoPExpc3RUYXNrc0NhcmRXZWIgbGlzdD17bGlzdH0gLz4pO1xuICAgICAgICAgICAgLy8gY2FzZSBcInRpbWVcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gc2V0VGlwZVRhc2tTZWxlY3QoPExpc3RUYXNrc1RpbWV3ZWIga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSAvPik7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgYmFja2dyb3VuZENvbG9yPXthbGxDb2xvcnMuYmd9IG1hcmdpbj1cIjAuNXZ3XCI+XG4gICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpdmlkZXI9ezxTdGFja0RpdmlkZXIgLz59IHNwYWNpbmc9JzQnPlxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RpcGVUYXNrU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPC9DYXJkPlxuXG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RUYXNrc1dlYiJdLCJuYW1lcyI6WyJ1c2VDb2xvcnNQaG9uZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlzdFRhc2tzQ2FyZFdlYiIsIkxpc3RUYXNrc0NoZWNrYm94V2ViIiwiQm94IiwiQ2FyZCIsIkNhcmRCb2R5IiwiU3RhY2siLCJTdGFja0RpdmlkZXIiLCJMaXN0VGFza3NXZWIiLCJsaXN0IiwiYWxsQ29sb3JzIiwidGlwZVRhc2tTZWxlY3QiLCJzZXRUaXBlVGFza1NlbGVjdCIsInZhbHVlVGlwZVRhc2siLCJ0eXBlX3Rhc2siLCJ0YXNrcyIsIm1hcCIsInRhc2siLCJpZCIsImJhY2tncm91bmRDb2xvciIsImJnIiwibWFyZ2luIiwiZGl2aWRlciIsInNwYWNpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/ListTasksWeb/index.tsx\n"));

/***/ })

});