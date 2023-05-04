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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var _services_handler_list_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/handler/list_handler */ \"./services/handler/list_handler.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _AcordionTasksCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AcordionTasksCard */ \"./components/ComponentsPhone/AcordionTasks/AcordionTasksCard/index.tsx\");\n/* harmony import */ var _AcordionTasksCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AcordionTasksCheckbox */ \"./components/ComponentsPhone/AcordionTasks/AcordionTasksCheckbox/index.tsx\");\n/* harmony import */ var _AcordionTasksTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AcordionTasksTime */ \"./components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AcordionTasks = (param)=>{\n    let { task , list_id , setAlert  } = param;\n    _s();\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const [tipeTaskSelect, setTipeTaskSelect] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n    const { data: lists  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(\"lists\", _services_handler_list_handler__WEBPACK_IMPORTED_MODULE_2__.getListAll);\n    console.log(task);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        lists;\n        valueTipeTask();\n    }, []);\n    function valueTipeTask() {\n        lists === null || lists === void 0 ? void 0 : lists.map((list)=>{\n            if (list.id == list_id) {\n                switch(list === null || list === void 0 ? void 0 : list.type_task){\n                    case \"checkbox\":\n                        return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcordionTasksCheckbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            task: task\n                        }, task.id, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 50\n                        }, this));\n                    case \"card\":\n                        return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcordionTasksCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            task: task\n                        }, task.id, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 50\n                        }, this));\n                    case \"time\":\n                        return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcordionTasksTime__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            setAlert: setAlert,\n                            task: task\n                        }, task.id, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 50\n                        }, this));\n                }\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: tipeTaskSelect\n    }, void 0, false);\n};\n_s(AcordionTasks, \"njJ23hhTEgo7U31lUz8gLorYEBU=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone,\n        react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = AcordionTasks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AcordionTasks);\nvar _c;\n$RefreshReg$(_c, \"AcordionTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9BY29yZGlvblRhc2tzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBEO0FBR0U7QUFDUztBQUMvQjtBQUNjO0FBQ1E7QUFDUjtBQVNwRCxNQUFNUSxnQkFBZ0IsU0FBd0M7UUFBdkMsRUFBRUMsS0FBSSxFQUFFQyxRQUFPLEVBQUVDLFNBQVEsRUFBUzs7SUFDckQsTUFBTUMsWUFBWVosd0VBQWNBO0lBQ2hDLE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR1gsK0NBQVFBLGVBQUM7SUFDckQsTUFBTSxFQUFFWSxNQUFNQyxNQUFLLEVBQUUsR0FBR1oscURBQVFBLENBQUMsU0FBU0gsc0VBQVVBO0lBQ3BEZ0IsUUFBUUMsR0FBRyxDQUFDVDtJQUVaUCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pjO1FBQ0FHO0lBQ0osR0FBRyxFQUFFO0lBQ0wsU0FBU0EsZ0JBQWdCO1FBQ3JCSCxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9JLEdBQUcsQ0FBQyxDQUFDQyxPQUF3QjtZQUNoQyxJQUFJQSxLQUFLQyxFQUFFLElBQUlaLFNBQVM7Z0JBQ3BCLE9BQVFXLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUUsU0FBUztvQkFDbkIsS0FBSzt3QkFDRCxPQUFPVCxnQ0FBa0IsOERBQUNSLDhEQUFzQkE7NEJBQWVHLE1BQU1BOzJCQUFmQSxLQUFLYSxFQUFFOzs7OztvQkFDakUsS0FBSzt3QkFDRCxPQUFPUixnQ0FBa0IsOERBQUNULDBEQUFrQkE7NEJBQWVJLE1BQU1BOzJCQUFmQSxLQUFLYSxFQUFFOzs7OztvQkFDN0QsS0FBSzt3QkFDRCxPQUFPUixnQ0FBa0IsOERBQUNQLDBEQUFrQkE7NEJBQUNJLFVBQVVBOzRCQUF3QkYsTUFBTUE7MkJBQWZBLEtBQUthLEVBQUU7Ozs7O2dCQUNyRjtZQUNKLENBQUM7UUFDTDtJQUVKO0lBRUEscUJBQ0k7a0JBQ0tUOztBQUtiO0dBakNNTDs7UUFDZ0JSLG9FQUFjQTtRQUVSSSxpREFBUUE7OztLQUg5Qkk7QUFtQ04sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzUGhvbmUvQWNvcmRpb25UYXNrcy9pbmRleC50c3g/MjFkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCJcbmltcG9ydCB7IE91dHB1dExpc3REdG8gfSBmcm9tIFwiQC9zZXJ2aWNlcy9kdG8vbGlzdF9kdG9cIlxuaW1wb3J0IHsgT3V0cHV0VGFza0R0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by90YXNrX2R0b1wiXG5pbXBvcnQgeyBnZXRMaXN0QWxsIH0gZnJvbSBcIkAvc2VydmljZXMvaGFuZGxlci9saXN0X2hhbmRsZXJcIlxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCJcbmltcG9ydCBBY2NvcmRpb25UYXNrc0NhcmQgZnJvbSBcIi4vQWNvcmRpb25UYXNrc0NhcmRcIlxuaW1wb3J0IEFjY29yZGlvblRhc2tzQ2hlY2tib3ggZnJvbSBcIi4vQWNvcmRpb25UYXNrc0NoZWNrYm94XCJcbmltcG9ydCBBY2NvcmRpb25UYXNrc1RpbWUgZnJvbSBcIi4vQWNvcmRpb25UYXNrc1RpbWVcIlxuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgdGFzazogT3V0cHV0VGFza0R0b1xuICAgIGxpc3RfaWQ6IHN0cmluZ1xuICAgIHNldEFsZXJ0OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxKU1guRWxlbWVudD4+XG59XG5cbmNvbnN0IEFjb3JkaW9uVGFza3MgPSAoeyB0YXNrLCBsaXN0X2lkLCBzZXRBbGVydCB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGFsbENvbG9ycyA9IHVzZUNvbG9yc1Bob25lKCk7XG4gICAgY29uc3QgW3RpcGVUYXNrU2VsZWN0LCBzZXRUaXBlVGFza1NlbGVjdF0gPSB1c2VTdGF0ZSg8PjwvPik7XG4gICAgY29uc3QgeyBkYXRhOiBsaXN0cyB9ID0gdXNlUXVlcnkoXCJsaXN0c1wiLCBnZXRMaXN0QWxsKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGlzdHNcbiAgICAgICAgdmFsdWVUaXBlVGFzaygpXG4gICAgfSwgW10pXG4gICAgZnVuY3Rpb24gdmFsdWVUaXBlVGFzaygpIHtcbiAgICAgICAgbGlzdHM/Lm1hcCgobGlzdDogT3V0cHV0TGlzdER0bykgPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3QuaWQgPT0gbGlzdF9pZCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobGlzdD8udHlwZV90YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpcGVUYXNrU2VsZWN0KDxBY2NvcmRpb25UYXNrc0NoZWNrYm94IGtleT17dGFzay5pZH0gdGFzaz17dGFza30gLz4pO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2FyZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpcGVUYXNrU2VsZWN0KDxBY2NvcmRpb25UYXNrc0NhcmQga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSAvPik7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0VGlwZVRhc2tTZWxlY3QoPEFjY29yZGlvblRhc2tzVGltZSBzZXRBbGVydD17c2V0QWxlcnR9IGtleT17dGFzay5pZH0gdGFzaz17dGFza30gLz4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7dGlwZVRhc2tTZWxlY3R9XG4gICAgICAgIDwvPlxuXG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjb3JkaW9uVGFza3MiXSwibmFtZXMiOlsidXNlQ29sb3JzUGhvbmUiLCJnZXRMaXN0QWxsIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VRdWVyeSIsIkFjY29yZGlvblRhc2tzQ2FyZCIsIkFjY29yZGlvblRhc2tzQ2hlY2tib3giLCJBY2NvcmRpb25UYXNrc1RpbWUiLCJBY29yZGlvblRhc2tzIiwidGFzayIsImxpc3RfaWQiLCJzZXRBbGVydCIsImFsbENvbG9ycyIsInRpcGVUYXNrU2VsZWN0Iiwic2V0VGlwZVRhc2tTZWxlY3QiLCJkYXRhIiwibGlzdHMiLCJjb25zb2xlIiwibG9nIiwidmFsdWVUaXBlVGFzayIsIm1hcCIsImxpc3QiLCJpZCIsInR5cGVfdGFzayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComponentsPhone/AcordionTasks/index.tsx\n"));

/***/ })

});