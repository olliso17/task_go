"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./components/ComponentsWeb/LoginAcessWeb/index.tsx":
/*!**********************************************************!*\
  !*** ./components/ComponentsWeb/LoginAcessWeb/index.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("var public_light_off_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;\nvar public_light_on_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;\nvar public_register_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var public_light_off_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/light_off.json */ \"./public/light_off.json\");\n/* harmony import */ var public_light_on_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/light_on.json */ \"./public/light_on.json\");\n/* harmony import */ var public_register_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/register.json */ \"./public/register.json\");\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lottie-react */ \"./node_modules/lottie-react/build/index.umd.js\");\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var _services_handler_muation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/services/handler/muation */ \"./services/handler/muation.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst LoginAccessWeb = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__.useColorsPhone)();\n    const { colorMode , toggleColorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.useColorMode)();\n    const style = {\n        whidth: 40,\n        height: 40\n    };\n    const styleRegister = {\n        whidth: \"25vw\",\n        height: \"25vh\"\n    };\n    const initialValues = {\n        email: \"\",\n        password: \"\"\n    };\n    const mutation = (0,_services_handler_muation__WEBPACK_IMPORTED_MODULE_8__.useMutationPostLogin)();\n    const dontLogin = \"Don't have an account? \";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n        flexDirection: \"column\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                colorScheme: allColors.bgAccordionButton,\n                backgroundColor: allColors.bgCenter,\n                rounded: \"full\",\n                onClick: toggleColorMode,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    style: style,\n                    animationData: colorMode == \"light\" ? /*#__PURE__*/ (public_light_off_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (public_light_off_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(public_light_off_json__WEBPACK_IMPORTED_MODULE_3__, 2))) : /*#__PURE__*/ (public_light_on_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (public_light_on_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(public_light_on_json__WEBPACK_IMPORTED_MODULE_4__, 2)))\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                height: \"50vh\",\n                marginTop: \"0.5vw\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Heading, {\n                        marginLeft: \"0.5vw\",\n                        size: \"2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {\n                            bgGradient: allColors.bgHeadingGradientColor,\n                            bgClip: \"text\",\n                            fontWeight: \"extrabold\",\n                            children: \"Welcome,\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {\n                        marginLeft: \"0.5vw\",\n                        bgGradient: allColors.bgGradientColor,\n                        bgClip: \"text\",\n                        fontSize: \"1xl\",\n                        fontWeight: \"extrabold\",\n                        children: \"Access your to-do lists by logging in!\"\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            style: styleRegister,\n                            animationData: /*#__PURE__*/ (public_register_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (public_register_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(public_register_json__WEBPACK_IMPORTED_MODULE_5__, 2)))\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n                        initialValues: initialValues,\n                        onSubmit: ()=>{\n                            mutation.mutate({\n                                email,\n                                password\n                            });\n                        },\n                        children: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.FormControl, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                                            flexDirection: \"column\",\n                                            justifyContent: \"center\",\n                                            alignItems: \"center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Input, {\n                                                    backgroundColor: \"white\",\n                                                    focusBorderColor: \"purple.600\",\n                                                    borderColor: \"purple.400\",\n                                                    borderWidth: \"0.2vw\",\n                                                    width: \"16vw\",\n                                                    type: \"email\",\n                                                    onChange: (e)=>{\n                                                        setEmail(e.target.value);\n                                                    },\n                                                    placeholder: \"Email\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Input, {\n                                                    backgroundColor: \"white\",\n                                                    focusBorderColor: \"purple.600\",\n                                                    borderColor: \"purple.400\",\n                                                    borderWidth: \"0.2vw\",\n                                                    width: \"16vw\",\n                                                    type: \"password\",\n                                                    onChange: (e)=>{\n                                                        setPassword(e.target.value);\n                                                    },\n                                                    placeholder: \"Password\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                                        justifyContent: \"center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {\n                                            fontSize: \"sm\",\n                                            children: [\n                                                dontLogin,\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {\n                                                    color: \"teal.500\",\n                                                    href: \"http://localhost:3001/\",\n                                                    children: \"Create Account\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                                        marginRight: \"1vw\",\n                                        marginBottom: \"0.3vw\",\n                                        justifyContent: \"end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                            mt: 4,\n                                            backgroundColor: \"purple.800\",\n                                            colorScheme: \"purple\",\n                                            textColor: \"white\",\n                                            type: \"submit\",\n                                            children: \"login\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/components/ComponentsWeb/LoginAcessWeb/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LoginAccessWeb, \"05cvKHqsNWlxbPkHr+yvTB1qNT8=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_7__.useColorsPhone,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.useColorMode,\n        _services_handler_muation__WEBPACK_IMPORTED_MODULE_8__.useMutationPostLogin\n    ];\n});\n_c = LoginAccessWeb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginAccessWeb);\nvar _c;\n$RefreshReg$(_c, \"LoginAccessWeb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudHNXZWIvTG9naW5BY2Vzc1dlYi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRztBQUN0RTtBQUNFO0FBQ1c7QUFDRjtBQUNDO0FBQ2Y7QUFDd0I7QUFDTztBQUVqRSxNQUFNbUIsaUJBQWlCLElBQU07O0lBQ3pCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFDekMsTUFBTVksWUFBWVAsd0VBQWNBO0lBQ2hDLE1BQU0sRUFBRVEsVUFBUyxFQUFFQyxnQkFBZSxFQUFFLEdBQUdsQiw4REFBWUE7SUFDbkQsTUFBTW1CLFFBQVE7UUFBRUMsUUFBUTtRQUFJQyxRQUFRO0lBQUk7SUFDeEMsTUFBTUMsZ0JBQWdCO1FBQUVGLFFBQVE7UUFBUUMsUUFBUTtJQUFRO0lBQ3hELE1BQU1FLGdCQUFnQjtRQUFFWCxPQUFPO1FBQUlFLFVBQVU7SUFBRztJQUNoRCxNQUFNVSxXQUFXZCwrRUFBb0JBO0lBQ3JDLE1BQU1lLFlBQVk7SUFFbEIscUJBQ0ksOERBQUMvQixrREFBSUE7UUFBQ2dDLGVBQWM7UUFBU0MsZ0JBQWU7UUFBZ0JDLFlBQVc7OzBCQUNuRSw4REFBQ25DLG9EQUFNQTtnQkFBQ29DLGFBQWFiLFVBQVVjLGlCQUFpQjtnQkFBRUMsaUJBQWlCZixVQUFVZ0IsUUFBUTtnQkFBRUMsU0FBUTtnQkFBT0MsU0FBU2hCOzBCQUMzRyw0RUFBQ1YscURBQU1BO29CQUFDVyxPQUFPQTtvQkFBT2dCLGVBQWVsQixhQUFhLFVBQVVaLHlPQUFRQSxHQUFHQyxzT0FBTzs7Ozs7Ozs7Ozs7MEJBR2xGLDhEQUFDZCxpREFBR0E7Z0JBQUM2QixRQUFPO2dCQUFPZSxXQUFVOztrQ0FDekIsOERBQUN4QyxxREFBT0E7d0JBQUN5QyxZQUFXO3dCQUFRQyxNQUFLO2tDQUM3Qiw0RUFBQ3ZDLGtEQUFJQTs0QkFDRHdDLFlBQVl2QixVQUFVd0Isc0JBQXNCOzRCQUM1Q0MsUUFBTzs0QkFDUEMsWUFBVztzQ0FDZDs7Ozs7Ozs7Ozs7a0NBRUwsOERBQUMzQyxrREFBSUE7d0JBQ0RzQyxZQUFXO3dCQUNYRSxZQUFZdkIsVUFBVTJCLGVBQWU7d0JBQ3JDRixRQUFPO3dCQUNQRyxVQUFTO3dCQUNURixZQUFXO2tDQUNkOzs7Ozs7a0NBRUQsOERBQUNsRCxpREFBR0E7a0NBQ0EsNEVBQUNnQixxREFBTUE7NEJBQUNXLE9BQU9HOzRCQUFlYSxlQUFlNUIsc09BQVFBOzs7Ozs7Ozs7OztrQ0FFekQsOERBQUNMLDBDQUFNQTt3QkFDSHFCLGVBQWVBO3dCQUNmc0IsVUFBVSxJQUFNOzRCQUNackIsU0FBU3NCLE1BQU0sQ0FBQztnQ0FBRWxDO2dDQUFPRTs0QkFBUzt3QkFFdEM7a0NBRUMsQ0FBQ2lDLHNCQUVFLDhEQUFDOUMsd0NBQUlBOztrREFDRCw4REFBQ04seURBQVdBO2tEQUNSLDRFQUFDRCxrREFBSUE7NENBQUNnQyxlQUFjOzRDQUFTQyxnQkFBZTs0Q0FBU0MsWUFBVzs7OERBQzVELDhEQUFDL0IsbURBQUtBO29EQUFDa0MsaUJBQWdCO29EQUFRaUIsa0JBQWlCO29EQUFhQyxhQUFZO29EQUFhQyxhQUFZO29EQUFRQyxPQUFNO29EQUFPQyxNQUFLO29EQUFRQyxVQUFVLENBQUNDLElBQU07d0RBQUV6QyxTQUFTeUMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29EQUFFO29EQUFHQyxhQUFZOzs7Ozs7OERBQy9MLDhEQUFDNUQsbURBQUtBO29EQUFDa0MsaUJBQWdCO29EQUFRaUIsa0JBQWlCO29EQUFhQyxhQUFZO29EQUFhQyxhQUFZO29EQUFRQyxPQUFNO29EQUFPQyxNQUFLO29EQUFXQyxVQUFVLENBQUNDLElBQU07d0RBQUV2QyxZQUFZdUMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29EQUFFO29EQUFHQyxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztrREFJN00sOERBQUMvRCxrREFBSUE7d0NBQUNpQyxnQkFBZTtrREFDakIsNEVBQUM1QixrREFBSUE7NENBQUM2QyxVQUFTOztnREFDVm5COzhEQUNELDhEQUFDM0Isa0RBQUlBO29EQUNENEQsT0FBTTtvREFDTkMsTUFBSzs4REFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBR1QsOERBQUNqRSxrREFBSUE7d0NBQUNrRSxhQUFZO3dDQUFNQyxjQUFhO3dDQUFRbEMsZ0JBQWU7a0RBQ3hELDRFQUFDbEMsb0RBQU1BOzRDQUNIcUUsSUFBSTs0Q0FDSi9CLGlCQUFnQjs0Q0FDaEJGLGFBQVk7NENBQ1prQyxXQUFVOzRDQUNWWCxNQUFLO3NEQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZWpDO0dBcEZNekM7O1FBR2dCRixvRUFBY0E7UUFDT1QsMERBQVlBO1FBSWxDVSwyRUFBb0JBOzs7S0FSbkNDO0FBc0ZOLCtEQUFlQSxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tcG9uZW50c1dlYi9Mb2dpbkFjZXNzV2ViL2luZGV4LnRzeD85YmYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBGb3JtQ29udHJvbCwgSGVhZGluZywgSW5wdXQsIExpbmssIFRleHQsIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IEZvcm0sIEZvcm1payB9IGZyb20gJ2Zvcm1paydcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBsaWdodE9mZiBmcm9tIFwicHVibGljL2xpZ2h0X29mZi5qc29uXCI7XG5pbXBvcnQgKiBhcyBsaWdodE9uIGZyb20gXCJwdWJsaWMvbGlnaHRfb24uanNvblwiO1xuaW1wb3J0ICogYXMgcmVnaXN0ZXIgZnJvbSBcInB1YmxpYy9yZWdpc3Rlci5qc29uXCI7XG5pbXBvcnQgTG90dGllIGZyb20gXCJsb3R0aWUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbG9yc1Bob25lIH0gZnJvbSBcIkAvaG9va3NQZXJzb24vY29sb3JzUGhvbmVcIlxuaW1wb3J0IHsgdXNlTXV0YXRpb25Qb3N0TG9naW4gfSBmcm9tIFwiQC9zZXJ2aWNlcy9oYW5kbGVyL211YXRpb25cIlxuXG5jb25zdCBMb2dpbkFjY2Vzc1dlYiA9ICgpID0+IHtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBhbGxDb2xvcnMgPSB1c2VDb2xvcnNQaG9uZSgpXG4gICAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcbiAgICBjb25zdCBzdHlsZSA9IHsgd2hpZHRoOiA0MCwgaGVpZ2h0OiA0MCwgfTtcbiAgICBjb25zdCBzdHlsZVJlZ2lzdGVyID0geyB3aGlkdGg6IFwiMjV2d1wiLCBoZWlnaHQ6IFwiMjV2aFwiLCB9O1xuICAgIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH1cbiAgICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uUG9zdExvZ2luKClcbiAgICBjb25zdCBkb250TG9naW4gPSBcIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gXCJcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPXthbGxDb2xvcnMuYmdBY2NvcmRpb25CdXR0b259IGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmJnQ2VudGVyfSByb3VuZGVkPVwiZnVsbFwiIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX0+XG4gICAgICAgICAgICAgICAgPExvdHRpZSBzdHlsZT17c3R5bGV9IGFuaW1hdGlvbkRhdGE9e2NvbG9yTW9kZSA9PSBcImxpZ2h0XCIgPyBsaWdodE9mZiA6IGxpZ2h0T259IC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCI1MHZoXCIgbWFyZ2luVG9wPVwiMC41dndcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBtYXJnaW5MZWZ0PVwiMC41dndcIiBzaXplPScyeGwnPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgYmdHcmFkaWVudD17YWxsQ29sb3JzLmJnSGVhZGluZ0dyYWRpZW50Q29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBiZ0NsaXA9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PSdleHRyYWJvbGQnXG4gICAgICAgICAgICAgICAgICAgID5XZWxjb21lLDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cIjAuNXZ3XCJcbiAgICAgICAgICAgICAgICAgICAgYmdHcmFkaWVudD17YWxsQ29sb3JzLmJnR3JhZGllbnRDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgYmdDbGlwPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT0nMXhsJ1xuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PSdleHRyYWJvbGQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBY2Nlc3MgeW91ciB0by1kbyBsaXN0cyBieSBsb2dnaW5nIGluITwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Qm94ID5cbiAgICAgICAgICAgICAgICAgICAgPExvdHRpZSBzdHlsZT17c3R5bGVSZWdpc3Rlcn0gYW5pbWF0aW9uRGF0YT17cmVnaXN0ZXJ9IC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24ubXV0YXRlKHsgZW1haWwsIHBhc3N3b3JkIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsocHJvcHMpID0+IChcblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiIGZvY3VzQm9yZGVyQ29sb3I9XCJwdXJwbGUuNjAwXCIgYm9yZGVyQ29sb3I9XCJwdXJwbGUuNDAwXCIgYm9yZGVyV2lkdGg9XCIwLjJ2d1wiIHdpZHRoPVwiMTZ2d1wiIHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSkgfX0gcGxhY2Vob2xkZXI9J0VtYWlsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCIgZm9jdXNCb3JkZXJDb2xvcj1cInB1cnBsZS42MDBcIiBib3JkZXJDb2xvcj1cInB1cnBsZS40MDBcIiBib3JkZXJXaWR0aD1cIjAuMnZ3XCIgd2lkdGg9XCIxNnZ3XCIgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9eyhlKSA9PiB7IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKSB9fSBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RvbnRMb2dpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3RlYWwuNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Q3JlYXRlIEFjY291bnQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggbWFyZ2luUmlnaHQ9XCIxdndcIiBtYXJnaW5Cb3R0b209XCIwLjN2d1wiIGp1c3RpZnlDb250ZW50PVwiZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10PXs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwicHVycGxlLjgwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT0ncHVycGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9GbGV4PlxuXG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luQWNjZXNzV2ViIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJGb3JtQ29udHJvbCIsIkhlYWRpbmciLCJJbnB1dCIsIkxpbmsiLCJUZXh0IiwidXNlQ29sb3JNb2RlIiwiRm9ybSIsIkZvcm1payIsIlJlYWN0IiwidXNlU3RhdGUiLCJsaWdodE9mZiIsImxpZ2h0T24iLCJyZWdpc3RlciIsIkxvdHRpZSIsInVzZUNvbG9yc1Bob25lIiwidXNlTXV0YXRpb25Qb3N0TG9naW4iLCJMb2dpbkFjY2Vzc1dlYiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiYWxsQ29sb3JzIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwic3R5bGUiLCJ3aGlkdGgiLCJoZWlnaHQiLCJzdHlsZVJlZ2lzdGVyIiwiaW5pdGlhbFZhbHVlcyIsIm11dGF0aW9uIiwiZG9udExvZ2luIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbG9yU2NoZW1lIiwiYmdBY2NvcmRpb25CdXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZ0NlbnRlciIsInJvdW5kZWQiLCJvbkNsaWNrIiwiYW5pbWF0aW9uRGF0YSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJzaXplIiwiYmdHcmFkaWVudCIsImJnSGVhZGluZ0dyYWRpZW50Q29sb3IiLCJiZ0NsaXAiLCJmb250V2VpZ2h0IiwiYmdHcmFkaWVudENvbG9yIiwiZm9udFNpemUiLCJvblN1Ym1pdCIsIm11dGF0ZSIsInByb3BzIiwiZm9jdXNCb3JkZXJDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJ3aWR0aCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiY29sb3IiLCJocmVmIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtdCIsInRleHRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ComponentsWeb/LoginAcessWeb/index.tsx\n"));

/***/ })

});