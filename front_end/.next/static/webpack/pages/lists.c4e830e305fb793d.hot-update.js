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

eval(__webpack_require__.ts("var public_play_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;\nvar public_pause_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;\nvar public_reset_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_countTasksTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/countTasksTime */ \"./hooksPerson/countTasksTime.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-react */ \"./node_modules/lottie-react/build/index.umd.js\");\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var public_play_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/play.json */ \"./public/play.json\");\n/* harmony import */ var public_pause_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/pause.json */ \"./public/pause.json\");\n/* harmony import */ var public_reset_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/reset.json */ \"./public/reset.json\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AccordionTasksTime = (param)=>{\n    let { task , setAlert  } = param;\n    _s();\n    const handleAll = (0,_hooksPerson_countTasksTime__WEBPACK_IMPORTED_MODULE_1__.useAllHandle)(task, setAlert);\n    const style = {\n        whidth: 55,\n        height: 55\n    };\n    const styleReset = {\n        whidth: 40,\n        height: 40\n    };\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__.useColorsPhone)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AccordionPanel, {\n        padding: \"0.2vw\",\n        margin: \"0.1vw\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card, {\n            backgroundColor: allColors.bg,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.CardBody, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                    divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.StackDivider, {}, void 0, false, void 0, void 0),\n                    spacing: \"4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Heading, {\n                                size: \"xs\",\n                                textTransform: \"uppercase\",\n                                children: task.title\n                            }, void 0, false, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                                spacing: 4,\n                                align: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            handleAll.minutes.toString().padStart(2, \"0\"),\n                                            \":\",\n                                            handleAll.seconds.toString().padStart(2, \"0\")\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                                        direction: \"row\",\n                                        spacing: 2,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.IconButton, {\n                                                type: \"submit\",\n                                                \"aria-label\": \"\",\n                                                backgroundColor: allColors.bg,\n                                                icon: active == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    style: style,\n                                                    animationData: /*#__PURE__*/ (public_play_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (public_play_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(public_play_json__WEBPACK_IMPORTED_MODULE_4__, 2))),\n                                                    onClick: handleAll.handleStart\n                                                }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    style: style,\n                                                    animationData: /*#__PURE__*/ (public_pause_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (public_pause_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(public_pause_json__WEBPACK_IMPORTED_MODULE_5__, 2))),\n                                                    onClick: handleAll.handlePause\n                                                }, void 0, false, void 0, void 0),\n                                                onClick: (e)=>{\n                                                    setActive((state)=>!state);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.IconButton, {\n                                                type: \"submit\",\n                                                \"aria-label\": \"reset\",\n                                                backgroundColor: allColors.bg,\n                                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    style: styleReset,\n                                                    animationData: /*#__PURE__*/ (public_reset_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache || (public_reset_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache = __webpack_require__.t(public_reset_json__WEBPACK_IMPORTED_MODULE_6__, 2))),\n                                                    onClick: handleAll.handleReset\n                                                }, void 0, false, void 0, void 0),\n                                                onClick: (e)=>{\n                                                    setActive(false);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, task.id, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AccordionTasksTime, \"RliYRzM+LA/fkiB2mBoXESdLicU=\", false, function() {\n    return [\n        _hooksPerson_countTasksTime__WEBPACK_IMPORTED_MODULE_1__.useAllHandle,\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__.useColorsPhone\n    ];\n});\n_c = AccordionTasksTime;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccordionTasksTime);\nvar _c;\n$RefreshReg$(_c, \"AccordionTasksTime\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9BY29yZGlvblRhc2tzL0Fjb3JkaW9uVGFza3NUaW1lL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFFMEY7QUFDM0Y7QUFDekI7QUFDZ0I7QUFDRTtBQUNBO0FBQ087QUFPM0QsTUFBTWUscUJBQXFCLFNBQStCO1FBQTlCLEVBQUVDLEtBQUksRUFBRUMsU0FBUSxFQUFTOztJQUNqRCxNQUFNQyxZQUFZbEIseUVBQVlBLENBQUNnQixNQUFNQztJQUNyQyxNQUFNRSxRQUFRO1FBQUVDLFFBQVE7UUFBSUMsUUFBUTtJQUFFO0lBQ3RDLE1BQU1DLGFBQWE7UUFBRUYsUUFBUTtRQUFJQyxRQUFRO0lBQUk7SUFDN0MsTUFBTSxDQUFDRSxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsTUFBTWdCLFlBQVlYLHdFQUFjQTtJQUVoQyxxQkFDSSw4REFBQ2IsNERBQWNBO1FBQUN5QixTQUFRO1FBQVFDLFFBQU87a0JBQ25DLDRFQUFDeEIsa0RBQUlBO1lBQUN5QixpQkFBaUJILFVBQVVJLEVBQUU7c0JBQy9CLDRFQUFDekIsc0RBQVFBOzBCQUNMLDRFQUFDRyxtREFBS0E7b0JBQUN1Qix1QkFBUyw4REFBQ3RCLDBEQUFZQTtvQkFBS3VCLFNBQVE7OEJBQ3RDLDRFQUFDN0IsaURBQUdBOzswQ0FDQSw4REFBQ0cscURBQU9BO2dDQUFDMkIsTUFBSztnQ0FBS0MsZUFBYzswQ0FDNUJqQixLQUFLa0IsS0FBSzs7Ozs7OzBDQUdmLDhEQUFDM0IsbURBQUtBO2dDQUFDd0IsU0FBUztnQ0FBR0ksT0FBTTs7a0RBQ3JCLDhEQUFDQzs7NENBQUtsQixVQUFVbUIsT0FBTyxDQUFDQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHOzRDQUFLOzRDQUMvQ3JCLFVBQVVzQixPQUFPLENBQUNGLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7Ozs7Ozs7a0RBQzlDLDhEQUFDaEMsbURBQUtBO3dDQUFDa0MsV0FBVTt3Q0FBTVYsU0FBUzs7MERBQzVCLDhEQUFDekIsd0RBQVVBO2dEQUFDb0MsTUFBSztnREFBU0MsY0FBVztnREFBR2YsaUJBQWlCSCxVQUFVSSxFQUFFO2dEQUFFZSxNQUFNckIsVUFBVSxLQUFLLGlCQUFHLDhEQUFDYixxREFBTUE7b0RBQUNTLE9BQU9BO29EQUFPMEIsZUFBZWxDLDBOQUFhQTtvREFBRW1DLFNBQVM1QixVQUFVNkIsV0FBVztrR0FBSSw4REFBQ3JDLHFEQUFNQTtvREFBQ1MsT0FBT0E7b0RBQU8wQixlQUFlakMsNk5BQWNBO29EQUFFa0MsU0FBUzVCLFVBQVU4QixXQUFXO2lGQUFHO2dEQUFFRixTQUFTRyxDQUFBQSxJQUFLO29EQUFFekIsVUFBVTBCLENBQUFBLFFBQVMsQ0FBQ0E7Z0RBQU87Ozs7OzswREFFeFQsOERBQUM1Qyx3REFBVUE7Z0RBQUNvQyxNQUFLO2dEQUFTQyxjQUFXO2dEQUFRZixpQkFBaUJILFVBQVVJLEVBQUU7Z0RBQUVlLG9CQUFNLDhEQUFDbEMscURBQU1BO29EQUFDUyxPQUFPRztvREFBWXVCLGVBQWVoQyw2TkFBY0E7b0RBQUVpQyxTQUFTNUIsVUFBVWlDLFdBQVc7O2dEQUFNTCxTQUFTRyxDQUFBQSxJQUFLO29EQUFFekIsVUFBVSxLQUFLO2dEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FmekxSLEtBQUtvQyxFQUFFOzs7OztBQXlCbkU7R0FqQ01yQzs7UUFDZ0JmLHFFQUFZQTtRQUlaYyxvRUFBY0E7OztLQUw5QkM7QUFtQ04sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9BY29yZGlvblRhc2tzL0Fjb3JkaW9uVGFza3NUaW1lL2luZGV4LnRzeD8yMTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFsbEhhbmRsZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvdW50VGFza3NUaW1lXCI7XG5pbXBvcnQgeyBPdXRwdXRUYXNrRHRvIH0gZnJvbSBcIkAvc2VydmljZXMvZHRvL3Rhc2tfZHRvXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25QYW5lbCwgQm94LCBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDaGVja2JveCwgRmxleCwgRm9ybUNvbnRyb2wsIEhlYWRpbmcsIEljb25CdXR0b24sIFN0YWNrLCBTdGFja0RpdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvdHRpZSBmcm9tIFwibG90dGllLXJlYWN0XCI7XG5pbXBvcnQgKiBhcyBwbGF5QW5pbWF0aW9uIGZyb20gXCJwdWJsaWMvcGxheS5qc29uXCI7XG5pbXBvcnQgKiBhcyBwYXVzZUFuaW1hdGlvbiBmcm9tIFwicHVibGljL3BhdXNlLmpzb25cIjtcbmltcG9ydCAqIGFzIHJlc2V0QW5pbWF0aW9uIGZyb20gXCJwdWJsaWMvcmVzZXQuanNvblwiO1xuaW1wb3J0IHsgdXNlQ29sb3JzUGhvbmUgfSBmcm9tIFwiQC9ob29rc1BlcnNvbi9jb2xvcnNQaG9uZVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHRhc2s6IE91dHB1dFRhc2tEdG9cbiAgICBzZXRBbGVydDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248SlNYLkVsZW1lbnQ+PlxufVxuXG5jb25zdCBBY2NvcmRpb25UYXNrc1RpbWUgPSAoeyB0YXNrLCBzZXRBbGVydCB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUFsbCA9IHVzZUFsbEhhbmRsZSh0YXNrLCBzZXRBbGVydClcbiAgICBjb25zdCBzdHlsZSA9IHsgd2hpZHRoOiA1NSwgaGVpZ2h0OiA1NX07XG4gICAgY29uc3Qgc3R5bGVSZXNldCA9IHsgd2hpZHRoOiA0MCwgaGVpZ2h0OiA0MCwgfTtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsbENvbG9ycyA9IHVzZUNvbG9yc1Bob25lKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QWNjb3JkaW9uUGFuZWwgcGFkZGluZz1cIjAuMnZ3XCIgbWFyZ2luPVwiMC4xdndcIiBrZXk9e3Rhc2suaWR9ID5cbiAgICAgICAgICAgIDxDYXJkIGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmJnfT5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXZpZGVyPXs8U3RhY2tEaXZpZGVyIC8+fSBzcGFjaW5nPSc0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT0neHMnIHRleHRUcmFuc2Zvcm09J3VwcGVyY2FzZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntoYW5kbGVBbGwubWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhbmRsZUFsbC5zZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cInN1Ym1pdFwiIGFyaWEtbGFiZWw9XCJcIiBiYWNrZ3JvdW5kQ29sb3I9e2FsbENvbG9ycy5iZ30gaWNvbj17YWN0aXZlID09IGZhbHNlID8gPExvdHRpZSBzdHlsZT17c3R5bGV9IGFuaW1hdGlvbkRhdGE9e3BsYXlBbmltYXRpb259IG9uQ2xpY2s9e2hhbmRsZUFsbC5oYW5kbGVTdGFydH0vPjo8TG90dGllIHN0eWxlPXtzdHlsZX0gYW5pbWF0aW9uRGF0YT17cGF1c2VBbmltYXRpb259IG9uQ2xpY2s9e2hhbmRsZUFsbC5oYW5kbGVQYXVzZX0vPn0gb25DbGljaz17ZSA9PiB7IHNldEFjdGl2ZShzdGF0ZSA9PiAhc3RhdGUpIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBhcmlhLWxhYmVsPVwicmVzZXRcIiBiYWNrZ3JvdW5kQ29sb3I9e2FsbENvbG9ycy5iZ30gaWNvbj17PExvdHRpZSBzdHlsZT17c3R5bGVSZXNldH0gYW5pbWF0aW9uRGF0YT17cmVzZXRBbmltYXRpb259IG9uQ2xpY2s9e2hhbmRsZUFsbC5oYW5kbGVSZXNldH0vPn0gIG9uQ2xpY2s9e2UgPT4geyBzZXRBY3RpdmUoZmFsc2UpIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uVGFza3NUaW1lOyJdLCJuYW1lcyI6WyJ1c2VBbGxIYW5kbGUiLCJBY2NvcmRpb25QYW5lbCIsIkJveCIsIkNhcmQiLCJDYXJkQm9keSIsIkhlYWRpbmciLCJJY29uQnV0dG9uIiwiU3RhY2siLCJTdGFja0RpdmlkZXIiLCJ1c2VTdGF0ZSIsIkxvdHRpZSIsInBsYXlBbmltYXRpb24iLCJwYXVzZUFuaW1hdGlvbiIsInJlc2V0QW5pbWF0aW9uIiwidXNlQ29sb3JzUGhvbmUiLCJBY2NvcmRpb25UYXNrc1RpbWUiLCJ0YXNrIiwic2V0QWxlcnQiLCJoYW5kbGVBbGwiLCJzdHlsZSIsIndoaWR0aCIsImhlaWdodCIsInN0eWxlUmVzZXQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJhbGxDb2xvcnMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwiYmciLCJkaXZpZGVyIiwic3BhY2luZyIsInNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwidGl0bGUiLCJhbGlnbiIsImRpdiIsIm1pbnV0ZXMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwic2Vjb25kcyIsImRpcmVjdGlvbiIsInR5cGUiLCJhcmlhLWxhYmVsIiwiaWNvbiIsImFuaW1hdGlvbkRhdGEiLCJvbkNsaWNrIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVQYXVzZSIsImUiLCJzdGF0ZSIsImhhbmRsZVJlc2V0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\n"));

/***/ })

});