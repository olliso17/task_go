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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ListTasksCardWeb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListTasksCardWeb */ \"./components/ComponentsWeb/ListTasksWeb/ListTasksCardWeb/index.tsx\");\n/* harmony import */ var _ListTasksCheckboxWeb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListTasksCheckboxWeb */ \"./components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\");\n/* harmony import */ var _ListTasksTimeweb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListTasksTimeweb */ \"./components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ListTasksWeb = (param)=>{\n    let { list  } = param;\n    _s();\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const [tipeTaskSelect, setTipeTaskSelect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        list;\n        valueTipeTask();\n    }, [\n        list\n    ]);\n    function valueTipeTask() {\n        var _list_tasks;\n        (_list_tasks = list.tasks) === null || _list_tasks === void 0 ? void 0 : _list_tasks.map((task)=>{\n            switch(list === null || list === void 0 ? void 0 : list.type_task){\n                case \"checkbox\":\n                    return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasksCheckboxWeb__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        task: task\n                    }, task.id, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 46\n                    }, this));\n                case \"card\":\n                    return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasksCardWeb__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        task: task\n                    }, task.id, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 46\n                    }, this));\n                case \"time\":\n                    return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasksTimeweb__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        task: task\n                    }, task.id, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 46\n                    }, this));\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card, {\n        backgroundColor: allColors.bg,\n        margin: \"0.5vw\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.CardBody, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.StackDivider, {}, void 0, false, void 0, void 0),\n                spacing: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    children: tipeTaskSelect\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ListTasksWeb, \"vmJkRRh0GZAHzpel/67ut7+7q1U=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone\n    ];\n});\n_c = ListTasksWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTasksWeb);\nvar _c;\n$RefreshReg$(_c, \"ListTasksWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEQ7QUFJVztBQUtwQjtBQUNRO0FBQ1I7QUFDMEI7QUFRM0UsTUFBTVcsZUFBZSxTQUFxQjtRQUFwQixFQUFFQyxLQUFJLEVBQVM7O0lBQ2pDLE1BQU1DLFlBQVliLHdFQUFjQTtJQUNoQyxNQUFNLENBQUNjLGdCQUFnQkMsa0JBQWtCLEdBQUdiLCtDQUFRQSxlQUFDO0lBR3JERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pXO1FBQ0FJO0lBQ0osR0FBRztRQUFDSjtLQUFLO0lBQ1QsU0FBU0ksZ0JBQWdCO1lBQ3JCSjtRQUFBQSxDQUFBQSxjQUFBQSxLQUFLSyxLQUFLLGNBQVZMLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFZTSxJQUFJQyxDQUFBQSxPQUFRO1lBQ3BCLE9BQVFQLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVEsU0FBUztnQkFDbkIsS0FBSztvQkFDRCxPQUFPTCxnQ0FBa0IsOERBQUNYLDZEQUFvQkE7d0JBQWVlLE1BQU1BO3VCQUFmQSxLQUFLRSxFQUFFOzs7OztnQkFDL0QsS0FBSztvQkFDRCxPQUFPTixnQ0FBa0IsOERBQUNaLHlEQUFnQkE7d0JBQWVnQixNQUFNQTt1QkFBZkEsS0FBS0UsRUFBRTs7Ozs7Z0JBQzNELEtBQUs7b0JBQ0QsT0FBT04sZ0NBQWtCLDhEQUFDVix5REFBZ0JBO3dCQUFlYyxNQUFNQTt1QkFBZkEsS0FBS0UsRUFBRTs7Ozs7WUFDL0Q7UUFDSjtJQUVKO0lBRUEscUJBQ0ksOERBQUNkLGtEQUFJQTtRQUFDZSxpQkFBaUJULFVBQVVVLEVBQUU7UUFBRUMsUUFBTztrQkFDeEMsNEVBQUNoQixzREFBUUE7c0JBQ0wsNEVBQUNDLG1EQUFLQTtnQkFBQ2dCLHVCQUFTLDhEQUFDZiwwREFBWUE7Z0JBQUtnQixTQUFROzBCQUN0Qyw0RUFBQ3BCLGlEQUFHQTs4QkFDQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6QjtHQXBDTUg7O1FBQ2dCWCxvRUFBY0E7OztLQUQ5Qlc7QUFzQ04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzV2ViL0xpc3RUYXNrc1dlYi9pbmRleC50c3g/NmM4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCJcbmltcG9ydCB7IE91dHB1dExpc3REdG8gfSBmcm9tIFwiQC9zZXJ2aWNlcy9kdG8vbGlzdF9kdG9cIlxuaW1wb3J0IHsgT3V0cHV0VGFza0R0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by90YXNrX2R0b1wiXG5pbXBvcnQgeyBnZXRMaXN0QWxsIH0gZnJvbSBcIkAvc2VydmljZXMvaGFuZGxlci9saXN0X2hhbmRsZXJcIlxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCJcbmltcG9ydCBBY2NvcmRpb25UYXNrc0NhcmQgZnJvbSBcIi4vTGlzdFRhc2tzQ2FyZFdlYlwiXG5pbXBvcnQgQWNjb3JkaW9uVGFza3NDaGVja2JveCBmcm9tIFwiLi9MaXN0VGFza3NDaGVja2JveFdlYlwiXG5pbXBvcnQgQWNjb3JkaW9uVGFza3NUaW1lIGZyb20gXCIuL0xpc3RUYXNrc1RpbWV3ZWJcIlxuaW1wb3J0IExpc3RUYXNrc0NhcmRXZWIgZnJvbSBcIi4vTGlzdFRhc2tzQ2FyZFdlYlwiXG5pbXBvcnQgTGlzdFRhc2tzQ2hlY2tib3hXZWIgZnJvbSBcIi4vTGlzdFRhc2tzQ2hlY2tib3hXZWJcIlxuaW1wb3J0IExpc3RUYXNrc1RpbWV3ZWIgZnJvbSBcIi4vTGlzdFRhc2tzVGltZXdlYlwiXG5pbXBvcnQgeyBCb3gsIENhcmQsIENhcmRCb2R5LCBTdGFjaywgU3RhY2tEaXZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgbGlzdDogT3V0cHV0TGlzdER0b1xuXG59XG5cbmNvbnN0IExpc3RUYXNrc1dlYiA9ICh7IGxpc3QgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBhbGxDb2xvcnMgPSB1c2VDb2xvcnNQaG9uZSgpO1xuICAgIGNvbnN0IFt0aXBlVGFza1NlbGVjdCwgc2V0VGlwZVRhc2tTZWxlY3RdID0gdXNlU3RhdGUoPD48Lz4pO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsaXN0XG4gICAgICAgIHZhbHVlVGlwZVRhc2soKVxuICAgIH0sIFtsaXN0XSlcbiAgICBmdW5jdGlvbiB2YWx1ZVRpcGVUYXNrKCkge1xuICAgICAgICBsaXN0LnRhc2tzPy5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGxpc3Q/LnR5cGVfdGFzaykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0VGlwZVRhc2tTZWxlY3QoPExpc3RUYXNrc0NoZWNrYm94V2ViIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gLz4pO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjYXJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaXBlVGFza1NlbGVjdCg8TGlzdFRhc2tzQ2FyZFdlYiBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IC8+KTtcbiAgICAgICAgICAgICAgICBjYXNlIFwidGltZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0VGlwZVRhc2tTZWxlY3QoPExpc3RUYXNrc1RpbWV3ZWIga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSAvPik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBiYWNrZ3JvdW5kQ29sb3I9e2FsbENvbG9ycy5iZ30gbWFyZ2luPVwiMC41dndcIj5cbiAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgZGl2aWRlcj17PFN0YWNrRGl2aWRlciAvPn0gc3BhY2luZz0nNCc+XG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGlwZVRhc2tTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICA8L0NhcmQ+XG5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdFRhc2tzV2ViIl0sIm5hbWVzIjpbInVzZUNvbG9yc1Bob25lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaXN0VGFza3NDYXJkV2ViIiwiTGlzdFRhc2tzQ2hlY2tib3hXZWIiLCJMaXN0VGFza3NUaW1ld2ViIiwiQm94IiwiQ2FyZCIsIkNhcmRCb2R5IiwiU3RhY2siLCJTdGFja0RpdmlkZXIiLCJMaXN0VGFza3NXZWIiLCJsaXN0IiwiYWxsQ29sb3JzIiwidGlwZVRhc2tTZWxlY3QiLCJzZXRUaXBlVGFza1NlbGVjdCIsInZhbHVlVGlwZVRhc2siLCJ0YXNrcyIsIm1hcCIsInRhc2siLCJ0eXBlX3Rhc2siLCJpZCIsImJhY2tncm91bmRDb2xvciIsImJnIiwibWFyZ2luIiwiZGl2aWRlciIsInNwYWNpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/ListTasksWeb/index.tsx\n"));

/***/ })

});