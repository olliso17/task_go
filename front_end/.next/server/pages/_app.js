/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/layoutContext.tsx":
/*!***********************************!*\
  !*** ./context/layoutContext.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LayoutContext\": () => (/* binding */ LayoutContext),\n/* harmony export */   \"LayoutProvider\": () => (/* binding */ LayoutProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooksPerson/colorsPhone */ \"./hooksPerson/colorsPhone.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst LayoutContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nconst LayoutProvider = ({ children  })=>{\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const allColors = (0,_hooksPerson_colorsPhone__WEBPACK_IMPORTED_MODULE_3__.useColorsPhone)();\n    // const [lists, setLists] = useState<OutputListDto[]>([]);\n    // async function getListAll() {\n    //     try {\n    //         const getList = await useGetListAll();\n    //         setLists(getList)\n    //     } catch (err) {\n    //         console.log(err);\n    //     }\n    // }\n    // useEffect(() => {\n    //     getListAll();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutContext.Provider, {\n        value: {\n            active,\n            setToken\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            width: \"100vw\",\n            height: \"100vh\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"List Task\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/layoutContext.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Generated by create next app\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/layoutContext.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/layoutContext.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/layoutContext.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/layoutContext.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                    backgroundColor: allColors.bg,\n                    width: \"100vw\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    flexDirection: \"column\",\n                    height: \"100vh\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/layoutContext.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/layoutContext.tsx\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/context/layoutContext.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2xheW91dENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ007QUFDVDtBQUM5QjtBQW1CdEIsTUFBTU0sOEJBQWdCTiwwREFBbUIsQ0FBQyxDQUFDLEdBQVk7QUFHdkQsTUFBTVEsaUJBQWlCLENBQUMsRUFDM0JDLFNBQVEsRUFDSixHQUFLO0lBQ1QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1hLFlBQVlWLHdFQUFjQTtJQUNoQywyREFBMkQ7SUFDM0QsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixpREFBaUQ7SUFDakQsNEJBQTRCO0lBRTVCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsUUFBUTtJQUNSLElBQUk7SUFDSixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFFVixxQkFDSSw4REFBQ0UsY0FBY1MsUUFBUTtRQUFDQyxPQUFPO1lBQUVOO1lBQVFHO1FBQVM7a0JBQzlDLDRFQUFDWCxpREFBR0E7WUFBQ2UsT0FBTTtZQUFRQyxRQUFPOzs4QkFDdEIsOERBQUNiLGtEQUFJQTs7c0NBQ0QsOERBQUNjO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUFLQyxNQUFLOzRCQUFjQyxTQUFROzs7Ozs7c0NBQ2pDLDhEQUFDRjs0QkFBS0MsTUFBSzs0QkFBV0MsU0FBUTs7Ozs7O3NDQUM5Qiw4REFBQ0M7NEJBQUtDLEtBQUk7NEJBQU9DLE1BQUs7Ozs7Ozs7Ozs7Ozs4QkFRMUIsOERBQUN0QixrREFBSUE7b0JBQUN1QixpQkFBaUJaLFVBQVVhLEVBQUU7b0JBQUVWLE9BQU07b0JBQVFXLGdCQUFlO29CQUFTQyxZQUFXO29CQUFTQyxlQUFjO29CQUFTWixRQUFPOzhCQUN4SFQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udF9lbmQvLi9jb250ZXh0L2xheW91dENvbnRleHQudHN4P2NhYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIENlbnRlciwgRmxleCwgU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29sb3JzUGhvbmUgfSBmcm9tIFwiQC9ob29rc1BlcnNvbi9jb2xvcnNQaG9uZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZUdldExpc3RBbGwgfSBmcm9tIFwiQC9zZXJ2aWNlcy9oYW5kbGVyL2ZhY2FjZV9saXN0XCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIkAvQGNvcmUvZG9tYWluL2VudGl0aWVzL2xpc3RcIjtcbmltcG9ydCB7IExpc3RIdHRwR2F0ZXdheSB9IGZyb20gXCJAL0Bjb3JlL2luZnJhL2dhdGV3YXlzL2xpc3QuaHR0cC5nYXRld2F5XCI7XG5pbXBvcnQgYXBpIGZyb20gXCJAL3NlcnZpY2VzL2JhY2tlbmRcIjtcbmltcG9ydCB7IEdldExpc3RBbGx0VXNlQ2FzZSB9IGZyb20gXCJAL0Bjb3JlL2FwcGxpY2F0aW9uL2xpc3QvZ2V0LWxpc3QtYWxsLnVzZWNhc2VcIjtcbmltcG9ydCB7IE91dHB1dExpc3REdG8gfSBmcm9tIFwiQC9zZXJ2aWNlcy9kdG8vbGlzdF9kdG9cIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlLFxuXG59O1xudHlwZSBWYWx1ZSA9IHtcbiAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgc2V0VG9rZW46IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZz4+XG4gICAgLy8gbGlzdHM6IE91dHB1dExpc3REdG9bXVxufTtcblxuZXhwb3J0IGNvbnN0IExheW91dENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9IGFzIFZhbHVlKTtcblxuXG5leHBvcnQgY29uc3QgTGF5b3V0UHJvdmlkZXIgPSAoe1xuICAgIGNoaWxkcmVuXG59OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgYWxsQ29sb3JzID0gdXNlQ29sb3JzUGhvbmUoKVxuICAgIC8vIGNvbnN0IFtsaXN0cywgc2V0TGlzdHNdID0gdXNlU3RhdGU8T3V0cHV0TGlzdER0b1tdPihbXSk7XG4gICAgLy8gYXN5bmMgZnVuY3Rpb24gZ2V0TGlzdEFsbCgpIHtcbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IGdldExpc3QgPSBhd2FpdCB1c2VHZXRMaXN0QWxsKCk7XG4gICAgLy8gICAgICAgICBzZXRMaXN0cyhnZXRMaXN0KVxuXG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycikge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBnZXRMaXN0QWxsKCk7XG4gICAgLy8gfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgYWN0aXZlLCBzZXRUb2tlbiB9fT5cbiAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDB2d1wiIGhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5MaXN0IFRhc2s8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgey8qIDxDZW50ZXIgbWFyZ2luPVwiMC4zdndcIj5cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbiAhPSBcIlwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gd2lkdGg9XCIxMHZ3XCIgb25DbGljaz17ZSA9PiB7IHNldEFjdGl2ZShzdGF0ZSA9PiAhc3RhdGUpIH19PnthY3RpdmUgPT0gZmFsc2UgPyBcIk1vYmlsZVwiIDogXCJXZWJcIn08L0J1dHRvbj46PD48Lz59XG4gICAgICAgICAgICAgICAgPC9DZW50ZXI+ICovfVxuICAgICAgICAgICAgICAgIDxGbGV4IGJhY2tncm91bmRDb2xvcj17YWxsQ29sb3JzLmJnfSB3aWR0aD1cIjEwMHZ3XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xheW91dENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkZsZXgiLCJ1c2VDb2xvcnNQaG9uZSIsIkhlYWQiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkxheW91dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ0b2tlbiIsInNldFRva2VuIiwiYWxsQ29sb3JzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJhY2tncm91bmRDb2xvciIsImJnIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/layoutContext.tsx\n");

/***/ }),

/***/ "./hooksPerson/colorsPhone.ts":
/*!************************************!*\
  !*** ./hooksPerson/colorsPhone.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useColorsPhone\": () => (/* binding */ useColorsPhone)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst useBgAccordion = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)(\"purple.200\", \"purple.800\");\nconst useBgAccordionButton = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)(\"purple.400\", \"purple.900\");\nconst useBgGradientColor = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)(\"linear(to-l, purple.900, purple.700)\", \"linear(to-l, purple.500, purple.200)\");\nconst useBg = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)(\"white\", \"purple.700\");\nconst useBgCenter = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)(\"purple.200\", \"purple.900\");\nconst useColorCenter = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)(\"gray.700\", \"gray.900\");\nconst useColorCard = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)(\"#fff\", \"purple.600\");\nconst useTextColor = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)(\"gray.700\", \"white\");\nconst useBgHeadingGradientColor = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)(\"linear(to-l, purple.500, purple.900)\", \"linear(to-l, purple.600, purple.200)\");\nconst useColorsPhone = ()=>{\n    const bgAccordion = useBgAccordion();\n    const bgAccordionButton = useBgAccordionButton();\n    const bgGradientColor = useBgGradientColor();\n    const bgCenter = useBgCenter();\n    const bg = useBg();\n    const colorCenter = useColorCenter();\n    const textColor = useTextColor();\n    const colorCard = useColorCard();\n    const bgHeadingGradientColor = useBgHeadingGradientColor();\n    const allColors = {\n        bgAccordion,\n        colorCard,\n        bgAccordionButton,\n        bgGradientColor,\n        bg,\n        bgCenter,\n        colorCenter,\n        textColor,\n        bgHeadingGradientColor\n    };\n    return allColors;\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rc1BlcnNvbi9jb2xvcnNQaG9uZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxRDtBQUVyRCxNQUFNQyxpQkFBaUIsSUFBSUQsbUVBQWlCQSxDQUFDLGNBQWM7QUFDM0QsTUFBTUUsdUJBQXNCLElBQUtGLG1FQUFpQkEsQ0FBQyxjQUFjO0FBQ2pFLE1BQU1HLHFCQUFvQixJQUFLSCxtRUFBaUJBLENBQUMsd0NBQXdDO0FBQ3pGLE1BQU1JLFFBQU8sSUFBS0osbUVBQWlCQSxDQUFDLFNBQVM7QUFDN0MsTUFBTUssY0FBYyxJQUFJTCxtRUFBaUJBLENBQUMsY0FBYztBQUN4RCxNQUFNTSxpQkFBZ0IsSUFBS04sbUVBQWlCQSxDQUFDLFlBQVk7QUFDekQsTUFBTU8sZUFBYyxJQUFLUCxtRUFBaUJBLENBQUMsUUFBUTtBQUNuRCxNQUFNUSxlQUFlLElBQUlSLG1FQUFpQkEsQ0FBQyxZQUFZO0FBQ3ZELE1BQU1TLDRCQUEyQixJQUFJVCxtRUFBaUJBLENBQUMsd0NBQXdDO0FBRS9GLE1BQU1VLGlCQUFlLElBQUk7SUFFckIsTUFBTUMsY0FBY1Y7SUFDcEIsTUFBTVcsb0JBQW9CVjtJQUMxQixNQUFNVyxrQkFBa0JWO0lBQ3hCLE1BQU1XLFdBQVdUO0lBQ2pCLE1BQU1VLEtBQUlYO0lBQ1YsTUFBTVksY0FBY1Y7SUFDcEIsTUFBTVcsWUFBWVQ7SUFDbEIsTUFBTVUsWUFBWVg7SUFDbEIsTUFBTVkseUJBQXlCVjtJQUMvQixNQUFNVyxZQUFVO1FBQ1pUO1FBQVlPO1FBQVdOO1FBQW1CQztRQUFpQkU7UUFBSUQ7UUFBVUU7UUFBYUM7UUFBV0U7SUFDckc7SUFDQSxPQUFPQztBQUNYO0FBQ3VCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRfZW5kLy4vaG9va3NQZXJzb24vY29sb3JzUGhvbmUudHM/ZDYyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IHVzZUJnQWNjb3JkaW9uID0gKCk9PnVzZUNvbG9yTW9kZVZhbHVlKCdwdXJwbGUuMjAwJywgJ3B1cnBsZS44MDAnKVxuY29uc3QgdXNlQmdBY2NvcmRpb25CdXR0b24gPSgpPT4gdXNlQ29sb3JNb2RlVmFsdWUoJ3B1cnBsZS40MDAnLCAncHVycGxlLjkwMCcpXG5jb25zdCB1c2VCZ0dyYWRpZW50Q29sb3IgPSgpPT4gdXNlQ29sb3JNb2RlVmFsdWUoJ2xpbmVhcih0by1sLCBwdXJwbGUuOTAwLCBwdXJwbGUuNzAwKScsICdsaW5lYXIodG8tbCwgcHVycGxlLjUwMCwgcHVycGxlLjIwMCknKVxuY29uc3QgdXNlQmcgPSgpPT4gdXNlQ29sb3JNb2RlVmFsdWUoJ3doaXRlJywgJ3B1cnBsZS43MDAnKVxuY29uc3QgdXNlQmdDZW50ZXIgPSAoKT0+dXNlQ29sb3JNb2RlVmFsdWUoJ3B1cnBsZS4yMDAnLCAncHVycGxlLjkwMCcpXG5jb25zdCB1c2VDb2xvckNlbnRlciA9KCk9PiB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS43MDAnLCAnZ3JheS45MDAnKVxuY29uc3QgdXNlQ29sb3JDYXJkID0oKT0+IHVzZUNvbG9yTW9kZVZhbHVlKCcjZmZmJywgJ3B1cnBsZS42MDAnKVxuY29uc3QgdXNlVGV4dENvbG9yID0gKCk9PnVzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjcwMCcsICd3aGl0ZScpXG5jb25zdCB1c2VCZ0hlYWRpbmdHcmFkaWVudENvbG9yID0oKT0+dXNlQ29sb3JNb2RlVmFsdWUoJ2xpbmVhcih0by1sLCBwdXJwbGUuNTAwLCBwdXJwbGUuOTAwKScsICdsaW5lYXIodG8tbCwgcHVycGxlLjYwMCwgcHVycGxlLjIwMCknKVxuXG5jb25zdCB1c2VDb2xvcnNQaG9uZT0oKT0+e1xuICAgXG4gICAgY29uc3QgYmdBY2NvcmRpb24gPSB1c2VCZ0FjY29yZGlvbigpXG4gICAgY29uc3QgYmdBY2NvcmRpb25CdXR0b24gPSB1c2VCZ0FjY29yZGlvbkJ1dHRvbigpXG4gICAgY29uc3QgYmdHcmFkaWVudENvbG9yID0gdXNlQmdHcmFkaWVudENvbG9yKClcbiAgICBjb25zdCBiZ0NlbnRlciA9IHVzZUJnQ2VudGVyKClcbiAgICBjb25zdCBiZyA9dXNlQmcoKVxuICAgIGNvbnN0IGNvbG9yQ2VudGVyID0gdXNlQ29sb3JDZW50ZXIoKVxuICAgIGNvbnN0IHRleHRDb2xvciA9IHVzZVRleHRDb2xvcigpXG4gICAgY29uc3QgY29sb3JDYXJkID0gdXNlQ29sb3JDYXJkKClcbiAgICBjb25zdCBiZ0hlYWRpbmdHcmFkaWVudENvbG9yID0gdXNlQmdIZWFkaW5nR3JhZGllbnRDb2xvcigpXG4gICAgY29uc3QgYWxsQ29sb3JzPXtcbiAgICAgICAgYmdBY2NvcmRpb24sY29sb3JDYXJkLCBiZ0FjY29yZGlvbkJ1dHRvbiwgYmdHcmFkaWVudENvbG9yLCBiZywgYmdDZW50ZXIsIGNvbG9yQ2VudGVyLCB0ZXh0Q29sb3IsIGJnSGVhZGluZ0dyYWRpZW50Q29sb3JcbiAgICB9XG4gICAgcmV0dXJuIGFsbENvbG9yc1xufVxuZXhwb3J0IHt1c2VDb2xvcnNQaG9uZX0iXSwibmFtZXMiOlsidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VCZ0FjY29yZGlvbiIsInVzZUJnQWNjb3JkaW9uQnV0dG9uIiwidXNlQmdHcmFkaWVudENvbG9yIiwidXNlQmciLCJ1c2VCZ0NlbnRlciIsInVzZUNvbG9yQ2VudGVyIiwidXNlQ29sb3JDYXJkIiwidXNlVGV4dENvbG9yIiwidXNlQmdIZWFkaW5nR3JhZGllbnRDb2xvciIsInVzZUNvbG9yc1Bob25lIiwiYmdBY2NvcmRpb24iLCJiZ0FjY29yZGlvbkJ1dHRvbiIsImJnR3JhZGllbnRDb2xvciIsImJnQ2VudGVyIiwiYmciLCJjb2xvckNlbnRlciIsInRleHRDb2xvciIsImNvbG9yQ2FyZCIsImJnSGVhZGluZ0dyYWRpZW50Q29sb3IiLCJhbGxDb2xvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooksPerson/colorsPhone.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_layoutContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/layoutContext */ \"./context/layoutContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_layoutContext__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__]);\n([_context_layoutContext__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const [queryClient] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(()=>new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_layoutContext__WEBPACK_IMPORTED_MODULE_1__.LayoutProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/_app.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 23\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/task_go/front_end/pages/_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 11\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDMUI7QUFDb0I7QUFFeEI7QUFDcUM7QUFFL0MsU0FBU0ssSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELE1BQU0sQ0FBQ0MsWUFBWSxHQUFHTixxREFBYyxDQUFDLElBQU0sSUFBSUMsb0RBQVdBO0lBRTFELHFCQUFRLDhEQUFDQyw0REFBbUJBO1FBQUNNLFFBQVFGO2tCQUNuQyw0RUFBQ1AsNERBQWNBO3NCQUNiLDRFQUFDRCxrRUFBY0E7MEJBQUMsNEVBQUNNO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRfZW5kLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xheW91dFByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L2xheW91dENvbnRleHQnXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW3F1ZXJ5Q2xpZW50XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IG5ldyBRdWVyeUNsaWVudCgpKVxuXG4gIHJldHVybiAoPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgPExheW91dFByb3ZpZGVyPjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz48L0xheW91dFByb3ZpZGVyPlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG5cbiAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPilcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXRQcm92aWRlciIsIkNoYWtyYVByb3ZpZGVyIiwiUmVhY3QiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJxdWVyeUNsaWVudCIsInVzZVN0YXRlIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();