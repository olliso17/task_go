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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ListTasksCheckboxWeb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListTasksCheckboxWeb */ \"./components/ComponentsWeb/ListTasksWeb/ListTasksCheckboxWeb/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ListTasksWeb = (param)=>{\n    let { list  } = param;\n    _s();\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const [tipeTaskSelect, setTipeTaskSelect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        list;\n        valueTipeTask();\n    }, [\n        list\n    ]);\n    function valueTipeTask() {\n        switch(list === null || list === void 0 ? void 0 : list.type_task){\n            case \"checkbox\":\n                return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListTasksCheckboxWeb__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    tasks: list.tasks\n                }, list.id, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 42\n                }, this));\n        }\n    }\n    return {\n        tipeTaskSelect\n    };\n};\n_s(ListTasksWeb, \"vmJkRRh0GZAHzpel/67ut7+7q1U=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone\n    ];\n});\n_c = ListTasksWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTasksWeb);\nvar _c;\n$RefreshReg$(_c, \"ListTasksWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEQ7QUFJVztBQU1aO0FBVXpELE1BQU1JLGVBQWUsU0FBcUI7UUFBcEIsRUFBRUMsS0FBSSxFQUFTOztJQUNqQyxNQUFNQyxZQUFZTix3RUFBY0E7SUFDaEMsTUFBTSxDQUFDTyxnQkFBZ0JDLGtCQUFrQixHQUFHTiwrQ0FBUUEsZUFBOEI7SUFHbEZELGdEQUFTQSxDQUFDLElBQU07UUFDWkk7UUFDQUk7SUFDSixHQUFHO1FBQUNKO0tBQUs7SUFDVCxTQUFTSSxnQkFBZ0I7UUFHckIsT0FBUUosaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNSyxTQUFTO1lBQ25CLEtBQUs7Z0JBQ0QsT0FBT0YsZ0NBQWtCLDhEQUFDTCw2REFBb0JBO29CQUFlUSxPQUFPTixLQUFLTSxLQUFLO21CQUExQk4sS0FBS08sRUFBRTs7Ozs7UUFNbkU7SUFHSjtJQUVBLE9BQ0k7UUFBRUw7SUFBZTtBQUd6QjtHQTdCTUg7O1FBQ2dCSixvRUFBY0E7OztLQUQ5Qkk7QUErQk4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzV2ViL0xpc3RUYXNrc1dlYi9pbmRleC50c3g/NmM4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCJcbmltcG9ydCB7IE91dHB1dExpc3REdG8gfSBmcm9tIFwiQC9zZXJ2aWNlcy9kdG8vbGlzdF9kdG9cIlxuaW1wb3J0IHsgT3V0cHV0VGFza0R0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by90YXNrX2R0b1wiXG5pbXBvcnQgeyBnZXRMaXN0QWxsIH0gZnJvbSBcIkAvc2VydmljZXMvaGFuZGxlci9saXN0X2hhbmRsZXJcIlxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCJcbmltcG9ydCBBY2NvcmRpb25UYXNrc0NhcmQgZnJvbSBcIi4vTGlzdFRhc2tzQ2FyZFdlYlwiXG5pbXBvcnQgQWNjb3JkaW9uVGFza3NDaGVja2JveCBmcm9tIFwiLi9MaXN0VGFza3NDaGVja2JveFdlYlwiXG5pbXBvcnQgQWNjb3JkaW9uVGFza3NUaW1lIGZyb20gXCIuL0xpc3RUYXNrc1RpbWV3ZWJcIlxuaW1wb3J0IExpc3RUYXNrc0NhcmRXZWIgZnJvbSBcIi4vTGlzdFRhc2tzQ2FyZFdlYlwiXG5pbXBvcnQgTGlzdFRhc2tzQ2hlY2tib3hXZWIgZnJvbSBcIi4vTGlzdFRhc2tzQ2hlY2tib3hXZWJcIlxuaW1wb3J0IExpc3RUYXNrc1RpbWV3ZWIgZnJvbSBcIi4vTGlzdFRhc2tzVGltZXdlYlwiXG5pbXBvcnQgeyBCb3gsIENhcmQsIENhcmRCb2R5LCBTdGFjaywgU3RhY2tEaXZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgbGlzdDogT3V0cHV0TGlzdER0b1xuXG59XG5cbmNvbnN0IExpc3RUYXNrc1dlYiA9ICh7IGxpc3QgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBhbGxDb2xvcnMgPSB1c2VDb2xvcnNQaG9uZSgpO1xuICAgIGNvbnN0IFt0aXBlVGFza1NlbGVjdCwgc2V0VGlwZVRhc2tTZWxlY3RdID0gdXNlU3RhdGU8U2V0U3RhdGVBY3Rpb248SlNYLkVsZW1lbnQ+Pig8PjwvPik7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxpc3RcbiAgICAgICAgdmFsdWVUaXBlVGFzaygpXG4gICAgfSwgW2xpc3RdKVxuICAgIGZ1bmN0aW9uIHZhbHVlVGlwZVRhc2soKSB7XG5cblxuICAgICAgICBzd2l0Y2ggKGxpc3Q/LnR5cGVfdGFzaykge1xuICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpcGVUYXNrU2VsZWN0KDxMaXN0VGFza3NDaGVja2JveFdlYiBrZXk9e2xpc3QuaWR9IHRhc2tzPXtsaXN0LnRhc2tzfSAvPik7XG5cbiAgICAgICAgICAgIC8vIGNhc2UgXCJjYXJkXCI6XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHNldFRpcGVUYXNrU2VsZWN0KDxMaXN0VGFza3NDYXJkV2ViIGtleT17bGlzdC5pZH0gdGFza3M9e2xpc3QudGFza3N9IC8+KTtcbiAgICAgICAgICAgIC8vIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHNldFRpcGVUYXNrU2VsZWN0KDxMaXN0VGFza3NUaW1ld2ViIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gLz4pO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIHsgdGlwZVRhc2tTZWxlY3QgfVxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0VGFza3NXZWIiXSwibmFtZXMiOlsidXNlQ29sb3JzUGhvbmUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpc3RUYXNrc0NoZWNrYm94V2ViIiwiTGlzdFRhc2tzV2ViIiwibGlzdCIsImFsbENvbG9ycyIsInRpcGVUYXNrU2VsZWN0Iiwic2V0VGlwZVRhc2tTZWxlY3QiLCJ2YWx1ZVRpcGVUYXNrIiwidHlwZV90YXNrIiwidGFza3MiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/ListTasksWeb/index.tsx\n"));

/***/ })

});