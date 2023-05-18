"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/cookieContext.tsx":
/*!***********************************!*\
  !*** ./context/cookieContext.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LayoutContext\": function() { return /* binding */ LayoutContext; },\n/* harmony export */   \"LayoutProvider\": function() { return /* binding */ LayoutProvider; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_handler_facace_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/handler/facace_list */ \"./services/handler/facace_list.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst LayoutContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nconst LayoutProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [token1, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone)();\n    const [lists, setLists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function getListAll() {\n        try {\n            const getList = await (0,_services_handler_facace_list__WEBPACK_IMPORTED_MODULE_4__.useGetListAll)();\n            setLists(getList);\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getListAll();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutContext.Provider, {\n        value: {\n            active,\n            setToken,\n            lists\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            width: \"100vw\",\n            height: \"100vh\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"List Task\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Generated by create next app\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Center, {\n                    margin: \"0.3vw\",\n                    children: // token != \"\" ?\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        width: \"10vw\",\n                        onClick: (e)=>{\n                            setActive((state)=>!state);\n                        },\n                        children: active == false ? \"Mobile\" : \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    backgroundColor: allColors.bg,\n                    width: \"100vw\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    flexDirection: \"column\",\n                    height: \"100vh\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/cookieContext.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LayoutProvider, \"PzPwLr6iHnaE5epsX57+M8Op4UY=\", false, function() {\n    return [\n        _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_2__.useColorsPhone\n    ];\n});\n_c = LayoutProvider;\nconst getServerSideProps = async (context)=>{\n    _s1();\n    const getList = await (0,_services_handler_facace_list__WEBPACK_IMPORTED_MODULE_4__.useGetListAll)();\n    return {\n        props: {\n            token: token\n        }\n    };\n};\n_s1(getServerSideProps, \"tmu/OjXf+22N+dHi1yMX8AmJJAQ=\", false, function() {\n    return [\n        _services_handler_facace_list__WEBPACK_IMPORTED_MODULE_4__.useGetListAll\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"LayoutProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2Nvb2tpZUNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ007QUFDVDtBQUM5QjtBQUVrQztBQWlCeEQsTUFBTVUsOEJBQWdCViwwREFBbUIsQ0FBQyxDQUFDLEdBQVk7QUFHdkQsTUFBTVksaUJBQWlCLFNBRWpCO1FBRmtCLEVBQzNCQyxTQUFRLEVBQ0o7O0lBQ0osTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdiLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsTUFBTSxDQUFDYyxRQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1nQixZQUFZWCx3RUFBY0E7SUFDaEMsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdsQiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUN0RCxlQUFlbUIsYUFBYTtRQUN4QixJQUFJO1lBQ0EsTUFBTUMsVUFBVSxNQUFNYiw0RUFBYUE7WUFDbkNXLFNBQVNFO1FBRWIsRUFBRSxPQUFPQyxLQUFLO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDSjtJQUNBdEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNab0I7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1gsY0FBY2dCLFFBQVE7UUFBQ0MsT0FBTztZQUFFYjtZQUFRRztZQUFVRTtRQUFNO2tCQUNyRCw0RUFBQ2hCLGlEQUFHQTtZQUFDeUIsT0FBTTtZQUFRQyxRQUFPOzs4QkFDdEIsOERBQUNyQixrREFBSUE7O3NDQUNELDhEQUFDc0I7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0M7NEJBQUtDLE1BQUs7NEJBQWNDLFNBQVE7Ozs7OztzQ0FDakMsOERBQUNGOzRCQUFLQyxNQUFLOzRCQUFXQyxTQUFROzs7Ozs7c0NBQzlCLDhEQUFDQzs0QkFBS0MsS0FBSTs0QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzhCQUUxQiw4REFBQy9CLG9EQUFNQTtvQkFBQ2dDLFFBQU87OEJBSVAsZ0JBRGdCO2tDQUNoQiw4REFBQ2pDLG9EQUFNQTt3QkFBQ3dCLE9BQU07d0JBQU9VLFNBQVNDLENBQUFBLElBQUs7NEJBQUV4QixVQUFVeUIsQ0FBQUEsUUFBUyxDQUFDQTt3QkFBTztrQ0FBSTFCLFVBQVUsS0FBSyxHQUFHLFdBQVcsS0FBSzs7Ozs7Ozs7Ozs7OEJBRTlHLDhEQUFDUixrREFBSUE7b0JBQUNtQyxpQkFBaUJ2QixVQUFVd0IsRUFBRTtvQkFBRWQsT0FBTTtvQkFBUWUsZ0JBQWU7b0JBQVNDLFlBQVc7b0JBQVNDLGVBQWM7b0JBQVNoQixRQUFPOzhCQUN4SGhCOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQixFQUFFO0dBMUNXRDs7UUFLU0wsb0VBQWNBOzs7S0FMdkJLO0FBNENOLE1BQU1rQyxxQkFBeUMsT0FBT0MsVUFBWTs7SUFDckUsTUFBTXpCLFVBQVUsTUFBTWIsNEVBQWFBO0lBRW5DLE9BQU87UUFDTHVDLE9BQU87WUFDTGhDLE9BQU9BO1FBQ1Q7SUFDRjtBQUNGLEVBQUU7SUFSUzhCOztRQUNhckMsd0VBQWFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvY29va2llQ29udGV4dC50c3g/NzBiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2VudGVyLCBGbGV4LCBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb2xvcnNQaG9uZSB9IGZyb20gXCJAL2hvb2tzUGVyc29uL2NvbG9yc1Bob25lXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlR2V0TGlzdEFsbCB9IGZyb20gXCJAL3NlcnZpY2VzL2hhbmRsZXIvZmFjYWNlX2xpc3RcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiQC9AY29yZS9kb21haW4vZW50aXRpZXMvbGlzdFwiO1xuaW1wb3J0IHsgTGlzdEh0dHBHYXRld2F5IH0gZnJvbSBcIkAvQGNvcmUvaW5mcmEvZ2F0ZXdheXMvbGlzdC5odHRwLmdhdGV3YXlcIjtcbmltcG9ydCBhcGkgZnJvbSBcIkAvc2VydmljZXMvYmFja2VuZFwiO1xuaW1wb3J0IHsgR2V0TGlzdEFsbHRVc2VDYXNlIH0gZnJvbSBcIkAvQGNvcmUvYXBwbGljYXRpb24vbGlzdC9nZXQtbGlzdC1hbGwudXNlY2FzZVwiO1xuaW1wb3J0IHsgT3V0cHV0TGlzdER0byB9IGZyb20gXCJAL3NlcnZpY2VzL2R0by9saXN0X2R0b1wiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGUsXG5cbn07XG50eXBlIFZhbHVlID0ge1xuICAgIGFjdGl2ZTogYm9vbGVhbixcbiAgICBzZXRUb2tlbjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nPj5cbiAgICBsaXN0czogT3V0cHV0TGlzdER0b1tdXG59O1xuXG5leHBvcnQgY29uc3QgTGF5b3V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30gYXMgVmFsdWUpO1xuXG5cbmV4cG9ydCBjb25zdCBMYXlvdXRQcm92aWRlciA9ICh7XG4gICAgY2hpbGRyZW5cbn06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBhbGxDb2xvcnMgPSB1c2VDb2xvcnNQaG9uZSgpXG4gICAgY29uc3QgW2xpc3RzLCBzZXRMaXN0c10gPSB1c2VTdGF0ZTxPdXRwdXRMaXN0RHRvW10+KFtdKTtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRMaXN0QWxsKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZ2V0TGlzdCA9IGF3YWl0IHVzZUdldExpc3RBbGwoKTtcbiAgICAgICAgICAgIHNldExpc3RzKGdldExpc3QpXG4gICAgICAgXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRMaXN0QWxsKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgYWN0aXZlLCBzZXRUb2tlbiwgbGlzdHMgfX0+XG4gICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwdndcIiBoZWlnaHQ9XCIxMDB2aFwiPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TGlzdCBUYXNrPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxDZW50ZXIgbWFyZ2luPVwiMC4zdndcIj5cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbiAhPSBcIlwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gd2lkdGg9XCIxMHZ3XCIgb25DbGljaz17ZSA9PiB7IHNldEFjdGl2ZShzdGF0ZSA9PiAhc3RhdGUpIH19PnthY3RpdmUgPT0gZmFsc2UgPyBcIk1vYmlsZVwiIDogXCJXZWJcIn08L0J1dHRvbj4vKjo8PjwvPiovfVxuICAgICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgICAgIDxGbGV4IGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmJnfSB3aWR0aD1cIjEwMHZ3XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xheW91dENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgZ2V0TGlzdCA9IGF3YWl0IHVzZUdldExpc3RBbGwoKTtcbiAgIFxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgIH1cbiAgICB9XG4gIH07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCb3giLCJCdXR0b24iLCJDZW50ZXIiLCJGbGV4IiwidXNlQ29sb3JzUGhvbmUiLCJIZWFkIiwidXNlR2V0TGlzdEFsbCIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTGF5b3V0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInRva2VuIiwic2V0VG9rZW4iLCJhbGxDb2xvcnMiLCJsaXN0cyIsInNldExpc3RzIiwiZ2V0TGlzdEFsbCIsImdldExpc3QiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1hcmdpbiIsIm9uQ2xpY2siLCJlIiwic3RhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/cookieContext.tsx\n"));

/***/ })

});