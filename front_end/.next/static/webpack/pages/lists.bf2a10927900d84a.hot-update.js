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

/***/ "./components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx":
/*!**************************************************************************!*\
  !*** ./components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("var public_play_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;\nvar public_pause_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;\nvar public_reset_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooksPerson_countTasksTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooksPerson/countTasksTime */ \"./hooksPerson/countTasksTime.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-react */ \"./node_modules/lottie-react/build/index.umd.js\");\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var public_play_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/play.json */ \"./public/play.json\");\n/* harmony import */ var public_pause_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/pause.json */ \"./public/pause.json\");\n/* harmony import */ var public_reset_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/reset.json */ \"./public/reset.json\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ListTasksTimeweb = (param)=>{\n    let { task  } = param;\n    _s();\n    const [alert, setAlert] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n    const handleAll = (0,_hooksPerson_countTasksTime__WEBPACK_IMPORTED_MODULE_1__.useAllHandle)(task, setAlert);\n    const style = {\n        whidth: 55,\n        height: 55\n    };\n    const styleReset = {\n        whidth: 40,\n        height: 40\n    };\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__.useColorsPhone)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card, {\n        backgroundColor: allColors.bg,\n        children: [\n            alert,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.CardBody, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                    divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.StackDivider, {}, void 0, false, void 0, void 0),\n                    spacing: \"4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Heading, {\n                                size: \"xs\",\n                                textTransform: \"uppercase\",\n                                children: task.title\n                            }, void 0, false, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                                spacing: 4,\n                                align: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            handleAll.minutes.toString().padStart(2, \"0\"),\n                                            \":\",\n                                            handleAll.seconds.toString().padStart(2, \"0\")\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n                                        direction: \"row\",\n                                        spacing: 2,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.IconButton, {\n                                                type: \"submit\",\n                                                \"aria-label\": \"\",\n                                                backgroundColor: allColors.bg,\n                                                icon: active == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    style: style,\n                                                    animationData: /*#__PURE__*/ (public_play_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (public_play_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(public_play_json__WEBPACK_IMPORTED_MODULE_4__, 2))),\n                                                    onClick: handleAll.handleStart\n                                                }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    style: style,\n                                                    animationData: /*#__PURE__*/ (public_pause_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (public_pause_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(public_pause_json__WEBPACK_IMPORTED_MODULE_5__, 2))),\n                                                    onClick: handleAll.handlePause\n                                                }, void 0, false, void 0, void 0),\n                                                onClick: (e)=>{\n                                                    setActive((state)=>!state);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.IconButton, {\n                                                type: \"submit\",\n                                                \"aria-label\": \"reset\",\n                                                backgroundColor: allColors.bg,\n                                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    style: styleReset,\n                                                    animationData: /*#__PURE__*/ (public_reset_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache || (public_reset_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache = __webpack_require__.t(public_reset_json__WEBPACK_IMPORTED_MODULE_6__, 2))),\n                                                    onClick: handleAll.handleReset\n                                                }, void 0, false, void 0, void 0),\n                                                onClick: (e)=>{\n                                                    setActive(false);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ListTasksTimeweb, \"db5Z/pXrWABsPEVer9QYhDkeHwk=\", false, function() {\n    return [\n        _hooksPerson_countTasksTime__WEBPACK_IMPORTED_MODULE_1__.useAllHandle,\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__.useColorsPhone\n    ];\n});\n_c = ListTasksTimeweb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTasksTimeweb);\nvar _c;\n$RefreshReg$(_c, \"ListTasksTimeweb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTGlzdFRhc2tzV2ViL0xpc3RUYXNrc1RpbWV3ZWIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUUwRjtBQUMzRjtBQUN6QjtBQUNnQjtBQUNFO0FBQ0E7QUFDTztBQU8zRCxNQUFNYyxtQkFBbUIsU0FBcUI7UUFBcEIsRUFBRUMsS0FBSSxFQUFTOztJQUNyQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLGVBQUM7SUFDbkMsTUFBTVUsWUFBWWxCLHlFQUFZQSxDQUFDZSxNQUFNRTtJQUNyQyxNQUFNRSxRQUFRO1FBQUVDLFFBQVE7UUFBSUMsUUFBUTtJQUFHO0lBQ3ZDLE1BQU1DLGFBQWE7UUFBRUYsUUFBUTtRQUFJQyxRQUFRO0lBQUk7SUFDN0MsTUFBTSxDQUFDRSxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU1pQixZQUFZWix3RUFBY0E7SUFFaEMscUJBQ0ksOERBQUNYLGtEQUFJQTtRQUFDd0IsaUJBQWlCRCxVQUFVRSxFQUFFOztZQUM5Qlg7MEJBQ0QsOERBQUNiLHNEQUFRQTswQkFDTCw0RUFBQ0csbURBQUtBO29CQUFDc0IsdUJBQVMsOERBQUNyQiwwREFBWUE7b0JBQUtzQixTQUFROzhCQUN0Qyw0RUFBQzVCLGlEQUFHQTs7MENBQ0EsOERBQUNHLHFEQUFPQTtnQ0FBQzBCLE1BQUs7Z0NBQUtDLGVBQWM7MENBQzVCaEIsS0FBS2lCLEtBQUs7Ozs7OzswQ0FHZiw4REFBQzFCLG1EQUFLQTtnQ0FBQ3VCLFNBQVM7Z0NBQUdJLE9BQU07O2tEQUNyQiw4REFBQ0M7OzRDQUFLaEIsVUFBVWlCLE9BQU8sQ0FBQ0MsUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRzs0Q0FBSzs0Q0FDL0NuQixVQUFVb0IsT0FBTyxDQUFDRixRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHOzs7Ozs7O2tEQUM5Qyw4REFBQy9CLG1EQUFLQTt3Q0FBQ2lDLFdBQVU7d0NBQU1WLFNBQVM7OzBEQUM1Qiw4REFBQ3hCLHdEQUFVQTtnREFBQ21DLE1BQUs7Z0RBQVNDLGNBQVc7Z0RBQUdmLGlCQUFpQkQsVUFBVUUsRUFBRTtnREFBRWUsTUFBTW5CLFVBQVUsS0FBSyxpQkFBRyw4REFBQ2QscURBQU1BO29EQUFDVSxPQUFPQTtvREFBT3dCLGVBQWVqQywwTkFBYUE7b0RBQUVrQyxTQUFTMUIsVUFBVTJCLFdBQVc7a0dBQU8sOERBQUNwQyxxREFBTUE7b0RBQUNVLE9BQU9BO29EQUFPd0IsZUFBZWhDLDZOQUFjQTtvREFBRWlDLFNBQVMxQixVQUFVNEIsV0FBVztpRkFBSTtnREFBRUYsU0FBU0csQ0FBQUEsSUFBSztvREFBRXZCLFVBQVV3QixDQUFBQSxRQUFTLENBQUNBO2dEQUFPOzs7Ozs7MERBRTVULDhEQUFDM0Msd0RBQVVBO2dEQUFDbUMsTUFBSztnREFBU0MsY0FBVztnREFBUWYsaUJBQWlCRCxVQUFVRSxFQUFFO2dEQUFFZSxvQkFBTSw4REFBQ2pDLHFEQUFNQTtvREFBQ1UsT0FBT0c7b0RBQVlxQixlQUFlL0IsNk5BQWNBO29EQUFFZ0MsU0FBUzFCLFVBQVUrQixXQUFXOztnREFBTUwsU0FBU0csQ0FBQUEsSUFBSztvREFBRXZCLFVBQVUsS0FBSztnREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqUDtHQWpDTVY7O1FBRWdCZCxxRUFBWUE7UUFJWmEsb0VBQWNBOzs7S0FOOUJDO0FBbUNOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzV2ViL0xpc3RUYXNrc1dlYi9MaXN0VGFza3NUaW1ld2ViL2luZGV4LnRzeD9mNjYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFsbEhhbmRsZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvdW50VGFza3NUaW1lXCI7XG5pbXBvcnQgeyBPdXRwdXRUYXNrRHRvIH0gZnJvbSBcIkAvc2VydmljZXMvZHRvL3Rhc2tfZHRvXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25QYW5lbCwgQm94LCBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDaGVja2JveCwgRmxleCwgRm9ybUNvbnRyb2wsIEhlYWRpbmcsIEljb25CdXR0b24sIFN0YWNrLCBTdGFja0RpdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvdHRpZSBmcm9tIFwibG90dGllLXJlYWN0XCI7XG5pbXBvcnQgKiBhcyBwbGF5QW5pbWF0aW9uIGZyb20gXCJwdWJsaWMvcGxheS5qc29uXCI7XG5pbXBvcnQgKiBhcyBwYXVzZUFuaW1hdGlvbiBmcm9tIFwicHVibGljL3BhdXNlLmpzb25cIjtcbmltcG9ydCAqIGFzIHJlc2V0QW5pbWF0aW9uIGZyb20gXCJwdWJsaWMvcmVzZXQuanNvblwiO1xuaW1wb3J0IHsgdXNlQ29sb3JzUGhvbmUgfSBmcm9tIFwiQC9ob29rc1BlcnNvbi9jb2xvcnNQaG9uZVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHRhc2s6IE91dHB1dFRhc2tEdG9cblxufVxuXG5jb25zdCBMaXN0VGFza3NUaW1ld2ViID0gKHsgdGFzayB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoPD48Lz4pXG4gICAgY29uc3QgaGFuZGxlQWxsID0gdXNlQWxsSGFuZGxlKHRhc2ssIHNldEFsZXJ0KVxuICAgIGNvbnN0IHN0eWxlID0geyB3aGlkdGg6IDU1LCBoZWlnaHQ6IDU1IH07XG4gICAgY29uc3Qgc3R5bGVSZXNldCA9IHsgd2hpZHRoOiA0MCwgaGVpZ2h0OiA0MCwgfTtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFsbENvbG9ycyA9IHVzZUNvbG9yc1Bob25lKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBiYWNrZ3JvdW5kQ29sb3I9e2FsbENvbG9ycy5iZ30+XG4gICAgICAgICAgICB7YWxlcnR9XG4gICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpdmlkZXI9ezxTdGFja0RpdmlkZXIgLz59IHNwYWNpbmc9JzQnPlxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT0neHMnIHRleHRUcmFuc2Zvcm09J3VwcGVyY2FzZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2hhbmRsZUFsbC5taW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYW5kbGVBbGwuc2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgYXJpYS1sYWJlbD1cIlwiIGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmJnfSBpY29uPXthY3RpdmUgPT0gZmFsc2UgPyA8TG90dGllIHN0eWxlPXtzdHlsZX0gYW5pbWF0aW9uRGF0YT17cGxheUFuaW1hdGlvbn0gb25DbGljaz17aGFuZGxlQWxsLmhhbmRsZVN0YXJ0fSAvPiA6IDxMb3R0aWUgc3R5bGU9e3N0eWxlfSBhbmltYXRpb25EYXRhPXtwYXVzZUFuaW1hdGlvbn0gb25DbGljaz17aGFuZGxlQWxsLmhhbmRsZVBhdXNlfSAvPn0gb25DbGljaz17ZSA9PiB7IHNldEFjdGl2ZShzdGF0ZSA9PiAhc3RhdGUpIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cInN1Ym1pdFwiIGFyaWEtbGFiZWw9XCJyZXNldFwiIGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmJnfSBpY29uPXs8TG90dGllIHN0eWxlPXtzdHlsZVJlc2V0fSBhbmltYXRpb25EYXRhPXtyZXNldEFuaW1hdGlvbn0gb25DbGljaz17aGFuZGxlQWxsLmhhbmRsZVJlc2V0fSAvPn0gb25DbGljaz17ZSA9PiB7IHNldEFjdGl2ZShmYWxzZSkgfX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdFRhc2tzVGltZXdlYjsiXSwibmFtZXMiOlsidXNlQWxsSGFuZGxlIiwiQm94IiwiQ2FyZCIsIkNhcmRCb2R5IiwiSGVhZGluZyIsIkljb25CdXR0b24iLCJTdGFjayIsIlN0YWNrRGl2aWRlciIsInVzZVN0YXRlIiwiTG90dGllIiwicGxheUFuaW1hdGlvbiIsInBhdXNlQW5pbWF0aW9uIiwicmVzZXRBbmltYXRpb24iLCJ1c2VDb2xvcnNQaG9uZSIsIkxpc3RUYXNrc1RpbWV3ZWIiLCJ0YXNrIiwiYWxlcnQiLCJzZXRBbGVydCIsImhhbmRsZUFsbCIsInN0eWxlIiwid2hpZHRoIiwiaGVpZ2h0Iiwic3R5bGVSZXNldCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImFsbENvbG9ycyIsImJhY2tncm91bmRDb2xvciIsImJnIiwiZGl2aWRlciIsInNwYWNpbmciLCJzaXplIiwidGV4dFRyYW5zZm9ybSIsInRpdGxlIiwiYWxpZ24iLCJkaXYiLCJtaW51dGVzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInNlY29uZHMiLCJkaXJlY3Rpb24iLCJ0eXBlIiwiYXJpYS1sYWJlbCIsImljb24iLCJhbmltYXRpb25EYXRhIiwib25DbGljayIsImhhbmRsZVN0YXJ0IiwiaGFuZGxlUGF1c2UiLCJlIiwic3RhdGUiLCJoYW5kbGVSZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/ListTasksWeb/ListTasksTimeweb/index.tsx\n"));

/***/ })

});