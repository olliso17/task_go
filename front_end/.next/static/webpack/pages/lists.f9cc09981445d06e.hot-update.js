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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/handler/task_handler */ \"./services/handler/task_handler.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AccordionTasksTime = (param)=>{\n    let { task  } = param;\n    _s();\n    const [statusCheck, setStatusCheck] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isRunning, setIsRunning] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({\n        mutationFn: _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__.patchTaskEdit\n    });\n    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const time = task.time_select.split(\":\");\n    const minutes = time[0];\n    const second = time[1];\n    const [min, setMin] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(parseInt(minutes));\n    const [sec, setSec] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(parseInt(second));\n    const onChangeStatus = ()=>{\n        mutation.mutate({\n            statusCheck\n        });\n    };\n    const handleCheckboxChange = (event)=>{\n        setStatusCheck(event.target.checked);\n    };\n    const handleStart = ()=>{\n        setIsRunning(true);\n        let seconds1 = min * 60;\n        intervalRef.current = setInterval(()=>{\n            const minutesLeft = Math.floor(seconds1 / 60);\n            const secondsLeft = seconds1 % 60;\n            setMin(minutesLeft);\n            setSec(secondsLeft);\n            if (--seconds1 < 0) {\n                clearInterval(intervalRef.current);\n                console.log(\"Contagem regressiva conclu\\xedda!\");\n            }\n        }, 1000);\n    };\n    function countdown() {}\n    const handlePause = ()=>{\n        setIsRunning(false);\n        if (intervalRef.current) clearInterval(intervalRef.current);\n    };\n    const handleReset = ()=>{\n        setIsRunning(false);\n        setMin(parseInt(minutes));\n        setSec(parseInt(seconds));\n        if (intervalRef.current) clearInterval(intervalRef.current);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AccordionPanel, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.CardBody, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                    divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.StackDivider, {}, void 0, false, void 0, void 0),\n                    spacing: \"4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                size: \"xs\",\n                                textTransform: \"uppercase\",\n                                children: task.title\n                            }, void 0, false, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n                                initialValues: {\n                                    statusCheck\n                                },\n                                onSubmit: onChangeStatus,\n                                children: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                flexDirection: \"column\",\n                                                justifyContent: \"space-between\",\n                                                alignItems: \"end\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {\n                                                    borderWidth: \"0.2vw\",\n                                                    colorScheme: \"purple\",\n                                                    borderColor: \"purple.900\",\n                                                    isChecked: statusCheck,\n                                                    onChange: handleCheckboxChange\n                                                }, void 0, false, {\n                                                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 49\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 37\n                                    }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                                spacing: 4,\n                                align: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"\".concat(min, \":\").concat(sec < 10 ? \"0\" : \"\").concat(sec)\n                                    }, void 0, false, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                                        direction: \"row\",\n                                        spacing: 4,\n                                        children: [\n                                            !isRunning && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                onClick: handleStart,\n                                                children: \"Start\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            isRunning && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                onClick: handlePause,\n                                                children: \"Pause\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                onClick: handleReset,\n                                                children: \"Reset\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, undefined)\n    }, task.id, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AccordionTasksTime, \"ic8dqCAP7JzWnfN9q+znj79Xajs=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = AccordionTasksTime;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccordionTasksTime);\nvar _c;\n$RefreshReg$(_c, \"AccordionTasksTime\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNQaG9uZS9BY29yZGlvblRhc2tzL0Fjb3JkaW9uVGFza3NUaW1lL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNnRTtBQUNtSTtBQUM3SjtBQUNHO0FBQ0M7QUFNMUMsTUFBTWlCLHFCQUFxQixTQUFxQjtRQUFwQixFQUFFQyxLQUFJLEVBQVM7O0lBQ3ZDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU1RLFdBQVdQLHdEQUFXQSxDQUFDO1FBQUVRLFlBQVl4Qix5RUFBYUE7SUFBQztJQUN6RCxNQUFNeUIsY0FBY1gsNkNBQU1BO0lBQzFCLE1BQU1ZLE9BQVFSLEtBQUtTLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDO0lBQ3JDLE1BQU1DLFVBQVVILElBQUksQ0FBQyxFQUFFO0lBQ3ZCLE1BQU1JLFNBQVNKLElBQUksQ0FBQyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQ0ssS0FBS0MsT0FBTyxHQUFHakIsK0NBQVFBLENBQUNrQixTQUFTSjtJQUN4QyxNQUFNLENBQUNLLEtBQUtDLE9BQU8sR0FBR3BCLCtDQUFRQSxDQUFDa0IsU0FBU0g7SUFDeEMsTUFBTU0saUJBQWlCLElBQU07UUFDekJiLFNBQVNjLE1BQU0sQ0FBQztZQUFFbEI7UUFBWTtJQUNsQztJQUNBLE1BQU1tQix1QkFBdUIsQ0FBQ0MsUUFBK0M7UUFDekVuQixlQUFlbUIsTUFBTUMsTUFBTSxDQUFDQyxPQUFPO0lBRXZDO0lBQ0EsTUFBTUMsY0FBYyxJQUFNO1FBQ3RCcEIsYUFBYSxJQUFJO1FBQ2pCLElBQUlxQixXQUFVWixNQUFNO1FBQ3BCTixZQUFZbUIsT0FBTyxHQUFHQyxZQUFZLElBQU07WUFDdEMsTUFBTUMsY0FBY0MsS0FBS0MsS0FBSyxDQUFDTCxXQUFVO1lBQ3pDLE1BQU1NLGNBQWNOLFdBQVU7WUFDOUJYLE9BQU9jO1lBQ1BYLE9BQU9jO1lBQ1AsSUFBSSxFQUFFTixXQUFVLEdBQUc7Z0JBQ2pCTyxjQUFjekIsWUFBWW1CLE9BQU87Z0JBQ2pDTyxRQUFRQyxHQUFHLENBQUM7WUFDZCxDQUFDO1FBQ0gsR0FBRztJQUNMO0lBQ0EsU0FBU0MsWUFBWSxDQUVyQjtJQUNBLE1BQU1DLGNBQWMsSUFBTTtRQUN4QmhDLGFBQWEsS0FBSztRQUNsQixJQUFJRyxZQUFZbUIsT0FBTyxFQUFFTSxjQUFjekIsWUFBWW1CLE9BQU87SUFDNUQ7SUFFQSxNQUFNVyxjQUFjLElBQU07UUFDeEJqQyxhQUFhLEtBQUs7UUFDbEJVLE9BQU9DLFNBQVNKO1FBQ2hCTSxPQUFPRixTQUFTVTtRQUNoQixJQUFJbEIsWUFBWW1CLE9BQU8sRUFBRU0sY0FBY3pCLFlBQVltQixPQUFPO0lBQzVEO0lBQ0YscUJBQ0ksOERBQUMzQyw0REFBY0E7a0JBQ1gsNEVBQUNHLGtEQUFJQTtzQkFDRCw0RUFBQ0Msc0RBQVFBOzBCQUNMLDRFQUFDSyxtREFBS0E7b0JBQUM4Qyx1QkFBUyw4REFBQzdDLDBEQUFZQTtvQkFBSzhDLFNBQVE7OEJBQ3RDLDRFQUFDdkQsaURBQUdBOzswQ0FDQSw4REFBQ08scURBQU9BO2dDQUFDaUQsTUFBSztnQ0FBS0MsZUFBYzswQ0FDNUJ6QyxLQUFLMEMsS0FBSzs7Ozs7OzBDQUdmLDhEQUFDL0MsMENBQU1BO2dDQUNIZ0QsZUFBZTtvQ0FBRTFDO2dDQUFZO2dDQUM3QjJDLFVBQVUxQjswQ0FHVCxDQUFDMkIsc0JBQ0UsOERBQUNuRCx3Q0FBSUE7a0RBQ0QsNEVBQUNKLHlEQUFXQTtzREFDUiw0RUFBQ0Qsa0RBQUlBO2dEQUFDeUQsZUFBYztnREFBU0MsZ0JBQWU7Z0RBQWdCQyxZQUFXOzBEQUVuRSw0RUFBQzVELHNEQUFRQTtvREFBQzZELGFBQVk7b0RBQVFDLGFBQVk7b0RBQVNDLGFBQVk7b0RBQWFDLFdBQVduRDtvREFBYW9ELFVBQVVqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBUWxJLDhEQUFDNUIsbURBQUtBO2dDQUFDK0MsU0FBUztnQ0FBR2UsT0FBTTs7a0RBQ3JCLDhEQUFDQztrREFBSyxHQUFVdkMsT0FBUEgsS0FBSSxLQUF5QkcsT0FBdEJBLE1BQU0sS0FBSyxNQUFNLEVBQUUsRUFBTyxPQUFKQTs7Ozs7O2tEQUN0Qyw4REFBQ3hCLG1EQUFLQTt3Q0FBQ2dFLFdBQVU7d0NBQU1qQixTQUFTOzs0Q0FDM0IsQ0FBQ3BDLDJCQUNFLDhEQUFDbEIsb0RBQU1BO2dEQUFDd0UsU0FBU2pDOzBEQUFhOzs7Ozs7NENBRWpDckIsMkJBQ0csOERBQUNsQixvREFBTUE7Z0RBQUN3RSxTQUFTckI7MERBQWE7Ozs7OzswREFFbEMsOERBQUNuRCxvREFBTUE7Z0RBQUN3RSxTQUFTcEI7MERBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXBDckNyQyxLQUFLMEQsRUFBRTs7Ozs7QUE2Q3BDO0dBM0ZNM0Q7O1FBR2VELG9EQUFXQTs7O0tBSDFCQztBQTZGTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tcG9uZW50c1Bob25lL0Fjb3JkaW9uVGFza3MvQWNvcmRpb25UYXNrc1RpbWUvaW5kZXgudHN4PzIxOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3V0cHV0VGFza0R0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by90YXNrX2R0b1wiO1xuaW1wb3J0IHsgcGF0Y2hUYXNrRWRpdCB9IGZyb20gXCJAL3NlcnZpY2VzL2hhbmRsZXIvdGFza19oYW5kbGVyXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25QYW5lbCwgQmFkZ2UsIEJveCwgQnV0dG9uLCBDYXJkLCBDYXJkQm9keSwgQ2hlY2tib3gsIEZsZXgsIEZvcm1Db250cm9sLCBIZWFkaW5nLCBJY29uQnV0dG9uLCBQcm9ncmVzcywgUmFkaW8sIFN0YWNrLCBTdGFja0RpdmlkZXIsIFN3aXRjaCwgVGV4dCwgVG9hc3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICB0YXNrOiBPdXRwdXRUYXNrRHRvXG59XG5cbmNvbnN0IEFjY29yZGlvblRhc2tzVGltZSA9ICh7IHRhc2sgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbc3RhdHVzQ2hlY2ssIHNldFN0YXR1c0NoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNSdW5uaW5nLCBzZXRJc1J1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IG11dGF0aW9uID0gdXNlTXV0YXRpb24oeyBtdXRhdGlvbkZuOiBwYXRjaFRhc2tFZGl0IH0pXG4gICAgY29uc3QgaW50ZXJ2YWxSZWYgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQ+KCk7XG4gICAgY29uc3QgdGltZSAgPSB0YXNrLnRpbWVfc2VsZWN0LnNwbGl0KFwiOlwiKVxuICAgIGNvbnN0IG1pbnV0ZXMgPSB0aW1lWzBdXG4gICAgY29uc3Qgc2Vjb25kID0gdGltZVsxXVxuICAgIGNvbnN0IFttaW4sIHNldE1pbl0gPSB1c2VTdGF0ZShwYXJzZUludChtaW51dGVzKSk7XG4gICAgY29uc3QgW3NlYywgc2V0U2VjXSA9IHVzZVN0YXRlKHBhcnNlSW50KHNlY29uZCkpO1xuICAgIGNvbnN0IG9uQ2hhbmdlU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBtdXRhdGlvbi5tdXRhdGUoeyBzdGF0dXNDaGVjayB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgc2V0U3RhdHVzQ2hlY2soZXZlbnQudGFyZ2V0LmNoZWNrZWQpXG5cbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1J1bm5pbmcodHJ1ZSk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gbWluICogNjA7XG4gICAgICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWludXRlc0xlZnQgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICAgICAgY29uc3Qgc2Vjb25kc0xlZnQgPSBzZWNvbmRzICUgNjA7XG4gICAgICAgICAgc2V0TWluKG1pbnV0ZXNMZWZ0KVxuICAgICAgICAgIHNldFNlYyhzZWNvbmRzTGVmdClcbiAgICAgICAgICBpZiAoLS1zZWNvbmRzIDwgMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250YWdlbSByZWdyZXNzaXZhIGNvbmNsdcOtZGEhJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH07XG4gICAgICBmdW5jdGlvbiBjb3VudGRvd24oKSB7XG4gICAgICAgXG4gICAgICB9XG4gICAgICBjb25zdCBoYW5kbGVQYXVzZSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICAgICAgaWYgKGludGVydmFsUmVmLmN1cnJlbnQpIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudCk7XG4gICAgICB9O1xuICAgIFxuICAgICAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgIHNldE1pbihwYXJzZUludChtaW51dGVzKSk7XG4gICAgICAgIHNldFNlYyhwYXJzZUludChzZWNvbmRzKSk7XG4gICAgICAgIGlmIChpbnRlcnZhbFJlZi5jdXJyZW50KSBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpO1xuICAgICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QWNjb3JkaW9uUGFuZWwga2V5PXt0YXNrLmlkfSA+XG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXZpZGVyPXs8U3RhY2tEaXZpZGVyIC8+fSBzcGFjaW5nPSc0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT0neHMnIHRleHRUcmFuc2Zvcm09J3VwcGVyY2FzZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBzdGF0dXNDaGVjayB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17b25DaGFuZ2VTdGF0dXN9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiZW5kXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBib3JkZXJXaWR0aD1cIjAuMnZ3XCIgY29sb3JTY2hlbWU9XCJwdXJwbGVcIiBib3JkZXJDb2xvcj1cInB1cnBsZS45MDBcIiBpc0NoZWNrZWQ9e3N0YXR1c0NoZWNrfSBvbkNoYW5nZT17aGFuZGxlQ2hlY2tib3hDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17NH0gYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57YCR7bWlufToke3NlYyA8IDEwID8gJzAnIDogJyd9JHtzZWN9YH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1J1bm5pbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3RhcnR9PlN0YXJ0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzUnVubmluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQYXVzZX0+UGF1c2U8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fT5SZXNldDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uVGFza3NUaW1lOyJdLCJuYW1lcyI6WyJwYXRjaFRhc2tFZGl0IiwiQWNjb3JkaW9uUGFuZWwiLCJCb3giLCJCdXR0b24iLCJDYXJkIiwiQ2FyZEJvZHkiLCJDaGVja2JveCIsIkZsZXgiLCJGb3JtQ29udHJvbCIsIkhlYWRpbmciLCJTdGFjayIsIlN0YWNrRGl2aWRlciIsIkZvcm0iLCJGb3JtaWsiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZU11dGF0aW9uIiwiQWNjb3JkaW9uVGFza3NUaW1lIiwidGFzayIsInN0YXR1c0NoZWNrIiwic2V0U3RhdHVzQ2hlY2siLCJpc1J1bm5pbmciLCJzZXRJc1J1bm5pbmciLCJtdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJpbnRlcnZhbFJlZiIsInRpbWUiLCJ0aW1lX3NlbGVjdCIsInNwbGl0IiwibWludXRlcyIsInNlY29uZCIsIm1pbiIsInNldE1pbiIsInBhcnNlSW50Iiwic2VjIiwic2V0U2VjIiwib25DaGFuZ2VTdGF0dXMiLCJtdXRhdGUiLCJoYW5kbGVDaGVja2JveENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsImhhbmRsZVN0YXJ0Iiwic2Vjb25kcyIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsIm1pbnV0ZXNMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Vjb25kc0xlZnQiLCJjbGVhckludGVydmFsIiwiY29uc29sZSIsImxvZyIsImNvdW50ZG93biIsImhhbmRsZVBhdXNlIiwiaGFuZGxlUmVzZXQiLCJkaXZpZGVyIiwic3BhY2luZyIsInNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwidGl0bGUiLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJwcm9wcyIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJXaWR0aCIsImNvbG9yU2NoZW1lIiwiYm9yZGVyQ29sb3IiLCJpc0NoZWNrZWQiLCJvbkNoYW5nZSIsImFsaWduIiwiZGl2IiwiZGlyZWN0aW9uIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ComponentsPhone/AcordionTasks/AcordionTasksTime/index.tsx\n"));

/***/ })

});