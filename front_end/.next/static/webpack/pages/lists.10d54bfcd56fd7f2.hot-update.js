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

/***/ "./components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx":
/*!******************************************************************************!*\
  !*** ./components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx ***!
  \******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("var public_play_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;\nvar public_pause_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;\nvar public_reset_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_countTasksTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/countTasksTime */ \"./hooksPerson/countTasksTime.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-react */ \"./node_modules/lottie-react/build/index.umd.js\");\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var public_play_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/play.json */ \"./public/play.json\");\n/* harmony import */ var public_pause_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/pause.json */ \"./public/pause.json\");\n/* harmony import */ var public_reset_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/reset.json */ \"./public/reset.json\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AccordionTasksTime = (param)=>{\n    let { task  } = param;\n    _s();\n    const handleAll = (0,_hooksPerson_countTasksTime__WEBPACK_IMPORTED_MODULE_1__.useAllHandle)(task, setAlert);\n    const style = {\n        whidth: 55,\n        height: 55\n    };\n    const styleReset = {\n        whidth: 40,\n        height: 40\n    };\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__.useColorsPhone)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AccordionPanel, {\n        padding: \"0.2vw\",\n        margin: \"0.1vw\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card, {\n            backgroundColor: allColors.bg,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.CardBody, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                    divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.StackDivider, {}, void 0, false, void 0, void 0),\n                    spacing: \"4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Heading, {\n                                size: \"xs\",\n                                textTransform: \"uppercase\",\n                                children: task.title\n                            }, void 0, false, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                                spacing: 4,\n                                align: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            handleAll.minutes.toString().padStart(2, \"0\"),\n                                            \":\",\n                                            handleAll.seconds.toString().padStart(2, \"0\")\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                                        direction: \"row\",\n                                        spacing: 2,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.IconButton, {\n                                                type: \"submit\",\n                                                \"aria-label\": \"\",\n                                                backgroundColor: allColors.bg,\n                                                icon: active == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    style: style,\n                                                    animationData: /*#__PURE__*/ (public_play_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (public_play_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(public_play_json__WEBPACK_IMPORTED_MODULE_4__, 2))),\n                                                    onClick: handleAll.handleStart\n                                                }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    style: style,\n                                                    animationData: /*#__PURE__*/ (public_pause_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (public_pause_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(public_pause_json__WEBPACK_IMPORTED_MODULE_5__, 2))),\n                                                    onClick: handleAll.handlePause\n                                                }, void 0, false, void 0, void 0),\n                                                onClick: (e)=>{\n                                                    setActive((state)=>!state);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.IconButton, {\n                                                type: \"submit\",\n                                                \"aria-label\": \"reset\",\n                                                backgroundColor: allColors.bg,\n                                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    style: styleReset,\n                                                    animationData: /*#__PURE__*/ (public_reset_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache || (public_reset_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache = __webpack_require__.t(public_reset_json__WEBPACK_IMPORTED_MODULE_6__, 2))),\n                                                    onClick: handleAll.handleReset\n                                                }, void 0, false, void 0, void 0),\n                                                onClick: (e)=>{\n                                                    setActive(false);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, task.id, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AccordionTasksTime, \"RliYRzM+LA/fkiB2mBoXESdLicU=\", false, function() {\n    return [\n        _hooksPerson_countTasksTime__WEBPACK_IMPORTED_MODULE_1__.useAllHandle,\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__.useColorsPhone\n    ];\n});\n_c = AccordionTasksTime;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccordionTasksTime);\nvar _c;\n$RefreshReg$(_c, \"AccordionTasksTime\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9BY29yZGlvblRhc2tzL0Fjb3JkaW9uVGFza3NUaW1lL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFFMEY7QUFDM0Y7QUFDekI7QUFDZ0I7QUFDRTtBQUNBO0FBQ087QUFPM0QsTUFBTWUscUJBQXFCLFNBQW9CO1FBQW5CLEVBQUVDLEtBQUksRUFBUTs7SUFDdEMsTUFBTUMsWUFBWWpCLHlFQUFZQSxDQUFDZ0IsTUFBTUU7SUFDckMsTUFBTUMsUUFBUTtRQUFFQyxRQUFRO1FBQUlDLFFBQVE7SUFBRTtJQUN0QyxNQUFNQyxhQUFhO1FBQUVGLFFBQVE7UUFBSUMsUUFBUTtJQUFJO0lBQzdDLE1BQU0sQ0FBQ0UsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU1nQixZQUFZWCx3RUFBY0E7SUFFaEMscUJBQ0ksOERBQUNiLDREQUFjQTtRQUFDeUIsU0FBUTtRQUFRQyxRQUFPO2tCQUNuQyw0RUFBQ3hCLGtEQUFJQTtZQUFDeUIsaUJBQWlCSCxVQUFVSSxFQUFFO3NCQUMvQiw0RUFBQ3pCLHNEQUFRQTswQkFDTCw0RUFBQ0csbURBQUtBO29CQUFDdUIsdUJBQVMsOERBQUN0QiwwREFBWUE7b0JBQUt1QixTQUFROzhCQUN0Qyw0RUFBQzdCLGlEQUFHQTs7MENBQ0EsOERBQUNHLHFEQUFPQTtnQ0FBQzJCLE1BQUs7Z0NBQUtDLGVBQWM7MENBQzVCakIsS0FBS2tCLEtBQUs7Ozs7OzswQ0FHZiw4REFBQzNCLG1EQUFLQTtnQ0FBQ3dCLFNBQVM7Z0NBQUdJLE9BQU07O2tEQUNyQiw4REFBQ0M7OzRDQUFLbkIsVUFBVW9CLE9BQU8sQ0FBQ0MsUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRzs0Q0FBSzs0Q0FDL0N0QixVQUFVdUIsT0FBTyxDQUFDRixRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHOzs7Ozs7O2tEQUM5Qyw4REFBQ2hDLG1EQUFLQTt3Q0FBQ2tDLFdBQVU7d0NBQU1WLFNBQVM7OzBEQUM1Qiw4REFBQ3pCLHdEQUFVQTtnREFBQ29DLE1BQUs7Z0RBQVNDLGNBQVc7Z0RBQUdmLGlCQUFpQkgsVUFBVUksRUFBRTtnREFBRWUsTUFBTXJCLFVBQVUsS0FBSyxpQkFBRyw4REFBQ2IscURBQU1BO29EQUFDUyxPQUFPQTtvREFBTzBCLGVBQWVsQywwTkFBYUE7b0RBQUVtQyxTQUFTN0IsVUFBVThCLFdBQVc7a0dBQUksOERBQUNyQyxxREFBTUE7b0RBQUNTLE9BQU9BO29EQUFPMEIsZUFBZWpDLDZOQUFjQTtvREFBRWtDLFNBQVM3QixVQUFVK0IsV0FBVztpRkFBRztnREFBRUYsU0FBU0csQ0FBQUEsSUFBSztvREFBRXpCLFVBQVUwQixDQUFBQSxRQUFTLENBQUNBO2dEQUFPOzs7Ozs7MERBRXhULDhEQUFDNUMsd0RBQVVBO2dEQUFDb0MsTUFBSztnREFBU0MsY0FBVztnREFBUWYsaUJBQWlCSCxVQUFVSSxFQUFFO2dEQUFFZSxvQkFBTSw4REFBQ2xDLHFEQUFNQTtvREFBQ1MsT0FBT0c7b0RBQVl1QixlQUFlaEMsNk5BQWNBO29EQUFFaUMsU0FBUzdCLFVBQVVrQyxXQUFXOztnREFBTUwsU0FBU0csQ0FBQUEsSUFBSztvREFBRXpCLFVBQVUsS0FBSztnREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZnpMUixLQUFLb0MsRUFBRTs7Ozs7QUF5Qm5FO0dBakNNckM7O1FBQ2dCZixxRUFBWUE7UUFJWmMsb0VBQWNBOzs7S0FMOUJDO0FBbUNOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzUGhvbmUvQWNvcmRpb25UYXNrcy9BY29yZGlvblRhc2tzVGltZS9pbmRleC50c3g/MjE5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBbGxIYW5kbGUgfSBmcm9tIFwiQC9ob29rc1BlcnNvbi9jb3VudFRhc2tzVGltZVwiO1xuaW1wb3J0IHsgT3V0cHV0VGFza0R0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by90YXNrX2R0b1wiO1xuaW1wb3J0IHsgQWNjb3JkaW9uUGFuZWwsIEJveCwgQnV0dG9uLCBDYXJkLCBDYXJkQm9keSwgQ2hlY2tib3gsIEZsZXgsIEZvcm1Db250cm9sLCBIZWFkaW5nLCBJY29uQnV0dG9uLCBTdGFjaywgU3RhY2tEaXZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb3R0aWUgZnJvbSBcImxvdHRpZS1yZWFjdFwiO1xuaW1wb3J0ICogYXMgcGxheUFuaW1hdGlvbiBmcm9tIFwicHVibGljL3BsYXkuanNvblwiO1xuaW1wb3J0ICogYXMgcGF1c2VBbmltYXRpb24gZnJvbSBcInB1YmxpYy9wYXVzZS5qc29uXCI7XG5pbXBvcnQgKiBhcyByZXNldEFuaW1hdGlvbiBmcm9tIFwicHVibGljL3Jlc2V0Lmpzb25cIjtcbmltcG9ydCB7IHVzZUNvbG9yc1Bob25lIH0gZnJvbSBcIkAvaG9va3NQZXJzb24vY29sb3JzUGhvbmVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICB0YXNrOiBPdXRwdXRUYXNrRHRvXG4gICBcbn1cblxuY29uc3QgQWNjb3JkaW9uVGFza3NUaW1lID0gKHsgdGFza306IFByb3BzKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQWxsID0gdXNlQWxsSGFuZGxlKHRhc2ssIHNldEFsZXJ0KVxuICAgIGNvbnN0IHN0eWxlID0geyB3aGlkdGg6IDU1LCBoZWlnaHQ6IDU1fTtcbiAgICBjb25zdCBzdHlsZVJlc2V0ID0geyB3aGlkdGg6IDQwLCBoZWlnaHQ6IDQwLCB9O1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYWxsQ29sb3JzID0gdXNlQ29sb3JzUGhvbmUoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBY2NvcmRpb25QYW5lbCBwYWRkaW5nPVwiMC4ydndcIiBtYXJnaW49XCIwLjF2d1wiIGtleT17dGFzay5pZH0gPlxuICAgICAgICAgICAgPENhcmQgYmFja2dyb3VuZENvbG9yPXthbGxDb2xvcnMuYmd9PlxuICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpdmlkZXI9ezxTdGFja0RpdmlkZXIgLz59IHNwYWNpbmc9JzQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPSd4cycgdGV4dFRyYW5zZm9ybT0ndXBwZXJjYXNlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2hhbmRsZUFsbC5taW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFuZGxlQWxsLnNlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgYXJpYS1sYWJlbD1cIlwiIGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmJnfSBpY29uPXthY3RpdmUgPT0gZmFsc2UgPyA8TG90dGllIHN0eWxlPXtzdHlsZX0gYW5pbWF0aW9uRGF0YT17cGxheUFuaW1hdGlvbn0gb25DbGljaz17aGFuZGxlQWxsLmhhbmRsZVN0YXJ0fS8+OjxMb3R0aWUgc3R5bGU9e3N0eWxlfSBhbmltYXRpb25EYXRhPXtwYXVzZUFuaW1hdGlvbn0gb25DbGljaz17aGFuZGxlQWxsLmhhbmRsZVBhdXNlfS8+fSBvbkNsaWNrPXtlID0+IHsgc2V0QWN0aXZlKHN0YXRlID0+ICFzdGF0ZSkgfX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cInN1Ym1pdFwiIGFyaWEtbGFiZWw9XCJyZXNldFwiIGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmJnfSBpY29uPXs8TG90dGllIHN0eWxlPXtzdHlsZVJlc2V0fSBhbmltYXRpb25EYXRhPXtyZXNldEFuaW1hdGlvbn0gb25DbGljaz17aGFuZGxlQWxsLmhhbmRsZVJlc2V0fS8+fSAgb25DbGljaz17ZSA9PiB7IHNldEFjdGl2ZShmYWxzZSkgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvQWNjb3JkaW9uUGFuZWw+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25UYXNrc1RpbWU7Il0sIm5hbWVzIjpbInVzZUFsbEhhbmRsZSIsIkFjY29yZGlvblBhbmVsIiwiQm94IiwiQ2FyZCIsIkNhcmRCb2R5IiwiSGVhZGluZyIsIkljb25CdXR0b24iLCJTdGFjayIsIlN0YWNrRGl2aWRlciIsInVzZVN0YXRlIiwiTG90dGllIiwicGxheUFuaW1hdGlvbiIsInBhdXNlQW5pbWF0aW9uIiwicmVzZXRBbmltYXRpb24iLCJ1c2VDb2xvcnNQaG9uZSIsIkFjY29yZGlvblRhc2tzVGltZSIsInRhc2siLCJoYW5kbGVBbGwiLCJzZXRBbGVydCIsInN0eWxlIiwid2hpZHRoIiwiaGVpZ2h0Iiwic3R5bGVSZXNldCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImFsbENvbG9ycyIsInBhZGRpbmciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZyIsImRpdmlkZXIiLCJzcGFjaW5nIiwic2l6ZSIsInRleHRUcmFuc2Zvcm0iLCJ0aXRsZSIsImFsaWduIiwiZGl2IiwibWludXRlcyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJzZWNvbmRzIiwiZGlyZWN0aW9uIiwidHlwZSIsImFyaWEtbGFiZWwiLCJpY29uIiwiYW5pbWF0aW9uRGF0YSIsIm9uQ2xpY2siLCJoYW5kbGVTdGFydCIsImhhbmRsZVBhdXNlIiwiZSIsInN0YXRlIiwiaGFuZGxlUmVzZXQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\n"));

/***/ })

});