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

/***/ "./components/ComponentsPhone/CreateTask/index.tsx":
/*!*********************************************************!*\
  !*** ./components/ComponentsPhone/CreateTask/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var _services_handler_list_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/handler/list_handler */ \"./services/handler/list_handler.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _TipeTaskCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TipeTaskCard */ \"./components/ComponentsPhone/CreateTask/TipeTaskCard/index.tsx\");\n/* harmony import */ var _TipeTaskCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TipeTaskCheckbox */ \"./components/ComponentsPhone/CreateTask/TipeTaskCheckbox/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CreateTask = (param)=>{\n    let { list_id  } = param;\n    _s();\n    const [time_select, setTimeSelect] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone)();\n    const [tipeTaskSelect, setTipeTaskSelect] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n    const { data: list  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(\"list\", ()=>(0,_services_handler_list_handler__WEBPACK_IMPORTED_MODULE_2__.getListId)(list_id));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        list;\n        valueTipeTask();\n    }, []);\n    function valueTipeTask() {\n        switch(list === null || list === void 0 ? void 0 : list.type_task){\n            case \"checkbox\":\n                return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TipeTaskCheckbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    list_id: list_id\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/CreateTask/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 42\n                }, this));\n            case \"card\":\n                return setTipeTaskSelect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TipeTaskCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    list_id: list_id\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/CreateTask/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 42\n                }, this));\n        }\n    }\n    // console.log(list)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: tipeTaskSelect\n    }, void 0, false);\n};\n_s(CreateTask, \"EMNfJLvKQXahxgfUt6Qoz3lx114=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_1__.useColorsPhone,\n        react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = CreateTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateTask);\nvar _c;\n$RefreshReg$(_c, \"CreateTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9DcmVhdGVUYXNrL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDQztBQUloQjtBQUNMO0FBQ0c7QUFDUTtBQU1qRCxNQUFNTyxhQUFhLFNBQXdCO1FBQXZCLEVBQUVDLFFBQU8sRUFBUzs7SUFDbEMsTUFBTSxDQUFDQyxhQUFhQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzlDLE1BQU1RLFlBQVlYLHdFQUFjQTtJQUNoQyxNQUFNLENBQUNZLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxlQUFDO0lBQ3JELE1BQU0sRUFBRVcsTUFBTUMsS0FBSSxFQUFFLEdBQUdYLHFEQUFRQSxDQUFDLFFBQVEsSUFBTUgseUVBQVNBLENBQUNPO0lBRXhETixnREFBU0EsQ0FBQyxJQUFNO1FBQ1phO1FBQ0FDO0lBQ0osR0FBRSxFQUFFO0lBQ0osU0FBU0EsZ0JBQWdCO1FBQ3JCLE9BQVFELGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUUsU0FBUztZQUNuQixLQUFLO2dCQUNELE9BQU9KLGdDQUFrQiw4REFBQ1AseURBQWdCQTtvQkFBQ0UsU0FBU0E7Ozs7OztZQUN4RCxLQUFLO2dCQUNELE9BQU9LLGdDQUFrQiw4REFBQ1IscURBQVlBO29CQUFDRyxTQUFTQTs7Ozs7O1FBQ3hEO0lBQ0o7SUFDQSxvQkFBb0I7SUFDcEIscUJBQ0k7a0JBQ0tJOztBQUtiO0dBMUJNTDs7UUFFZ0JQLG9FQUFjQTtRQUVUSSxpREFBUUE7OztLQUo3Qkc7QUE0Qk4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzUGhvbmUvQ3JlYXRlVGFzay9pbmRleC50c3g/MmZjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCJcbmltcG9ydCB7IGdldExpc3RJZCB9IGZyb20gXCJAL3NlcnZpY2VzL2hhbmRsZXIvbGlzdF9oYW5kbGVyXCJcbmltcG9ydCB7IHVzZU11dGF0aW9uUG9zdFRhc2sgfSBmcm9tIFwiQC9zZXJ2aWNlcy9oYW5kbGVyL211YXRpb25cIlxuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgRmxleCwgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgSW5wdXQsIFRleHQsIHVzZUNvbnRyb2xsYWJsZVN0YXRlLCB1c2VUb2FzdCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IEZvcm0sIEZvcm1payB9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIlxuaW1wb3J0IFR5cGVUYXNrQ2FyZCBmcm9tIFwiLi9UaXBlVGFza0NhcmRcIlxuaW1wb3J0IFR5cGVUYXNrQ2hlY2tib3ggZnJvbSBcIi4vVGlwZVRhc2tDaGVja2JveFwiXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgbGlzdF9pZDogc3RyaW5nLFxufVxuXG5jb25zdCBDcmVhdGVUYXNrID0gKHsgbGlzdF9pZCB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFt0aW1lX3NlbGVjdCwgc2V0VGltZVNlbGVjdF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgYWxsQ29sb3JzID0gdXNlQ29sb3JzUGhvbmUoKTtcbiAgICBjb25zdCBbdGlwZVRhc2tTZWxlY3QsIHNldFRpcGVUYXNrU2VsZWN0XSA9IHVzZVN0YXRlKDw+PC8+KTtcbiAgICBjb25zdCB7IGRhdGE6IGxpc3QgfSA9IHVzZVF1ZXJ5KFwibGlzdFwiLCAoKSA9PiBnZXRMaXN0SWQobGlzdF9pZCkpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGlzdFxuICAgICAgICB2YWx1ZVRpcGVUYXNrKClcbiAgICB9LFtdKVxuICAgIGZ1bmN0aW9uIHZhbHVlVGlwZVRhc2soKSB7XG4gICAgICAgIHN3aXRjaCAobGlzdD8udHlwZV90YXNrKSB7XG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tib3hcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VGlwZVRhc2tTZWxlY3QoPFR5cGVUYXNrQ2hlY2tib3ggbGlzdF9pZD17bGlzdF9pZH0gLz4pO1xuICAgICAgICAgICAgY2FzZSBcImNhcmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VGlwZVRhc2tTZWxlY3QoPFR5cGVUYXNrQ2FyZCBsaXN0X2lkPXtsaXN0X2lkfSAvPik7IFxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKGxpc3QpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHt0aXBlVGFza1NlbGVjdH1cbiAgICAgICAgPC8+XG5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVGFzayJdLCJuYW1lcyI6WyJ1c2VDb2xvcnNQaG9uZSIsImdldExpc3RJZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUXVlcnkiLCJUeXBlVGFza0NhcmQiLCJUeXBlVGFza0NoZWNrYm94IiwiQ3JlYXRlVGFzayIsImxpc3RfaWQiLCJ0aW1lX3NlbGVjdCIsInNldFRpbWVTZWxlY3QiLCJhbGxDb2xvcnMiLCJ0aXBlVGFza1NlbGVjdCIsInNldFRpcGVUYXNrU2VsZWN0IiwiZGF0YSIsImxpc3QiLCJ2YWx1ZVRpcGVUYXNrIiwidHlwZV90YXNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ComponentsPhone/CreateTask/index.tsx\n"));

/***/ })

});