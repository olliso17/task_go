"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(220);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
([_services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AccordionTasks = ({ task  })=>{
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({
        mutationFn: _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__/* .patchTaskEdit */ .q
    });
    const onChangeStatus = ()=>{
        mutation.mutate({
            status
        });
        console.log(status);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AccordionPanel, {
        height: "10vh",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            rounded: "md",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
            width: "15vw",
            backgroundColor: task.status == true ? "purple.400" : "white",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: "1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            fontWeight: "bold",
                            children: task.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            fontSize: "sm",
                            children: task.description
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "end",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                        borderWidth: "0.2vw",
                        borderColor: "purple.900",
                        isDisabled: task.status,
                        isChecked: status,
                        onChange: (e)=>setStatus(e.target.checked)
                    })
                })
            ]
        })
    }, task.id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionTasks);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var public_light_off_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache;
var public_light_on_json__WEBPACK_IMPORTED_MODULE_7___namespace_cache;
var public_list_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_handler_list_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(397);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(164);
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var public_list_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(830);
/* harmony import */ var public_light_off_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(162);
/* harmony import */ var public_light_on_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooksPerson_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(148);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_handler_list_handler__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _hooksPerson_colors__WEBPACK_IMPORTED_MODULE_9__]);
([_services_handler_list_handler__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _hooksPerson_colors__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const CardAllAddList = ()=>{
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    const allColors = (0,_hooksPerson_colors__WEBPACK_IMPORTED_MODULE_9__/* .useColors */ .c)();
    const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)({
        mutationFn: _services_handler_list_handler__WEBPACK_IMPORTED_MODULE_1__/* .postList */ .$,
        onSuccess: ()=>{
            toast({
                title: "Liste create.",
                description: `"List "${name}" successfully created."`,
                status: "success",
                duration: 9000,
                isClosable: true
            });
        }
    });
    const onCreateList = ()=>{
        mutation.mutate({
            name
        });
        setName("");
    };
    const { colorMode , toggleColorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)();
    const style = {
        whidth: 40,
        height: 40
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        height: "60vh",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "8px",
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                width: "19vw",
                justifyContent: "end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    colorScheme: allColors.bgAccordionButton,
                    backgroundColor: allColors.bgAccordionButton,
                    rounded: "full",
                    onClick: toggleColorMode,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {
                        style: style,
                        animationData: colorMode == "light" ? /*#__PURE__*/ (public_light_off_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache || (public_light_off_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache = __webpack_require__.t(public_light_off_json__WEBPACK_IMPORTED_MODULE_6__, 2))) : /*#__PURE__*/ (public_light_on_json__WEBPACK_IMPORTED_MODULE_7___namespace_cache || (public_light_on_json__WEBPACK_IMPORTED_MODULE_7___namespace_cache = __webpack_require__.t(public_light_on_json__WEBPACK_IMPORTED_MODULE_7__, 2)))
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                marginTop: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                        marginLeft: "16px",
                        size: "3xl",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            bgGradient: allColors.bgHeadingGradientColor,
                            bgClip: "text",
                            fontWeight: "extrabold",
                            children: "Hello,"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        marginLeft: "16px",
                        bgGradient: allColors.bgGradientColor,
                        bgClip: "text",
                        fontSize: "2xl",
                        fontWeight: "extrabold",
                        children: "Add your to-do list"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        marginTop: "20px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {
                            animationData: /*#__PURE__*/ (public_list_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (public_list_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(public_list_json__WEBPACK_IMPORTED_MODULE_5__, 2)))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_8__.Formik, {
                initialValues: {
                    name: ""
                },
                onSubmit: onCreateList,
                children: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_8__.Form, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                        fontWeight: "bold",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            bgGradient: allColors.bgGradientColor,
                                            bgClip: "text",
                                            fontSize: "sm",
                                            fontWeight: "extrabold",
                                            children: "Name List"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                        backgroundColor: "white",
                                        focusBorderColor: "purple.600",
                                        borderColor: "purple.400",
                                        borderWidth: "2px",
                                        width: "16vw",
                                        onChange: (e)=>setName(e.target.value),
                                        placeholder: "create name list"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                justifyContent: "end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    mt: 4,
                                    backgroundColor: "purple.800",
                                    colorScheme: "purple",
                                    textColor: "white",
                                    type: "submit",
                                    children: "Save"
                                })
                            })
                        ]
                    })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardAllAddList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooksPerson_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooksPerson_colors__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
([_hooksPerson_colors__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const TabNameAdd = ({ nameTab  })=>{
    const allColors = (0,_hooksPerson_colors__WEBPACK_IMPORTED_MODULE_1__/* .useColors */ .c)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
        roundedTop: "2xl",
        textColor: allColors.textColor,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            bgGradient: allColors.bgGradientColor,
            bgClip: "text",
            fontSize: "1xl",
            fontWeight: "extrabold",
            children: nameTab
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabNameAdd);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooksPerson_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var _TabNameAdd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooksPerson_colors__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _TabNameAdd__WEBPACK_IMPORTED_MODULE_3__]);
([_hooksPerson_colors__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _TabNameAdd__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CardStylePhone = ({ contentCreateList , contentListAll  })=>{
    const allColors = (0,_hooksPerson_colors__WEBPACK_IMPORTED_MODULE_1__/* .useColors */ .c)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {
            backgroundColor: allColors.colorCenter,
            width: "20vw",
            height: "76vh",
            padding: "8px",
            boxShadow: "dark-lg",
            rounded: "2xl",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                backgroundColor: allColors.bgCenter,
                width: "19vw",
                borderRadius: "16px",
                rounded: "2xl",
                height: "74vh",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
                    rounded: "2xl",
                    isFitted: true,
                    variant: "enclosed",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabList, {
                            borderColor: "purple.400",
                            mb: "lem",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TabNameAdd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    nameTab: "Create List"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TabNameAdd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    nameTab: "ListAll"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanels, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                    height: "68vh",
                                    backgroundColor: allColors.bgCenter,
                                    width: "19vw",
                                    padding: "0",
                                    children: contentCreateList
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                    height: "68vh",
                                    backgroundColor: allColors.bgCenter,
                                    width: "19vw",
                                    overflow: "auto",
                                    padding: "0",
                                    children: contentListAll
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardStylePhone);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(220);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
([_services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CreateTask = ({ list_id  })=>{
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const [priority, setPriority] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [time_select, setTimeSelect] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    const mutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
        mutationFn: _services_handler_task_handler__WEBPACK_IMPORTED_MODULE_1__/* .postTask */ .$_,
        onSuccess: ()=>{
            toast({
                title: "Task created successfully.",
                status: "success",
                duration: 9000,
                isClosable: true
            });
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
        initialValues: {
            title: "",
            description: "",
            priority: false,
            list_id: list_id,
            time_select: ""
        },
        onSubmit: ()=>mutation.mutate({
                title,
                description,
                priority,
                list_id,
                time_select
            }),
        children: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                justifyContent: "end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                                    className: "m-1",
                                    isChecked: priority,
                                    onChange: (e)=>setPriority(e.target.checked),
                                    children: "Priority"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                onChange: (e)=>setTitle(e.target.value),
                                placeholder: "create title"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                className: "mt-1",
                                onChange: (e)=>setDescription(e.target.value),
                                placeholder: "create description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                onChange: (e)=>setTimeSelect(e.target.value),
                                type: "time"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        mt: 4,
                        colorScheme: "teal",
                        isLoading: props.isSubmitting,
                        type: "submit",
                        children: "Save"
                    })
                ]
            })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateTask);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 477:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_handler_list_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(397);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var _CreateTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(259);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AcordionTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(319);
/* harmony import */ var _hooksPerson_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(148);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_handler_list_handler__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _CreateTask__WEBPACK_IMPORTED_MODULE_3__, _AcordionTasks__WEBPACK_IMPORTED_MODULE_5__, _hooksPerson_colors__WEBPACK_IMPORTED_MODULE_6__]);
([_services_handler_list_handler__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _CreateTask__WEBPACK_IMPORTED_MODULE_3__, _AcordionTasks__WEBPACK_IMPORTED_MODULE_5__, _hooksPerson_colors__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ListAll = ()=>{
    const data = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)("lists", _services_handler_list_handler__WEBPACK_IMPORTED_MODULE_1__/* .getListAll */ .I);
    const allColors = (0,_hooksPerson_colors__WEBPACK_IMPORTED_MODULE_6__/* .useColors */ .c)();
    return data.data.map((list)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            rounded: "2xl",
            flexDirection: "column",
            margin: "4px",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
                rounded: "2xl",
                backgroundColor: allColors.bgAccordion,
                defaultIndex: [
                    0
                ],
                allowMultiple: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
                        variant: "enclosed",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabList, {
                                borderColor: "purple.500",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                        roundedTop: "2xl",
                                        textColor: "white",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            marginLeft: "16px",
                                            bgGradient: allColors.bgGradientColor,
                                            bgClip: "text",
                                            fontSize: "md",
                                            fontWeight: "extrabold"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                        roundedTop: "2xl",
                                        textColor: "white",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            marginLeft: "16px",
                                            bgGradient: allColors.bgGradientColor,
                                            bgClip: "text",
                                            fontSize: "md",
                                            fontWeight: "extrabold",
                                            children: "Create Task"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanels, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AccordionItem, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AccordionButton, {
                                                        rounded: "2xl",
                                                        backgroundColor: allColors.bgAccordionButton,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                                as: "span",
                                                                flex: "1",
                                                                textAlign: "left",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                    marginLeft: "16px",
                                                                    bgGradient: allColors.bgGradientColor,
                                                                    bgClip: "text",
                                                                    fontSize: "md",
                                                                    fontWeight: "extrabold",
                                                                    children: "Tasks created"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AccordionIcon, {})
                                                        ]
                                                    })
                                                }),
                                                list.tasks?.map((task)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AcordionTasks__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        task: task
                                                    }, task.id.toString()))
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreateTask__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            list_id: list.id
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        width: "full",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Progress, {
                                colorScheme: "purple",
                                hasStripe: true,
                                value: 64
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                width: "2vw",
                                marginRight: "8px",
                                backgroundColor: "purple.600",
                                rounded: "full",
                                textColor: "white",
                                "aria-label": "Delete name",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillDelete, {})
                            })
                        ]
                    })
                ]
            })
        }, list.id));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListAll);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useColors)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useBgAccordion = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("purple.300", "purple.800");
const useBgAccordionButton = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("purple.400", "purple.900");
const useBgGradientColor = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("linear(to-l, purple.900, purple.700)", "linear(to-l, purple.500, purple.200)");
const useBg = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("white", "purple.700");
const useBgCenter = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("purple.200", "purple.900");
const useColorCenter = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.700", "gray.900");
const useTextColor = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.700", "white");
const useBgHeadingGradientColor = ()=>(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("linear(to-l, purple.500, purple.900)", "linear(to-l, purple.600, purple.200)");
const useColors = ()=>{
    const bgAccordion = useBgAccordion();
    const bgAccordionButton = useBgAccordionButton();
    const bgGradientColor = useBgGradientColor();
    const bgCenter = useBgCenter();
    const bg = useBg();
    const colorCenter = useColorCenter();
    const textColor = useTextColor();
    const bgHeadingGradientColor = useBgHeadingGradientColor();
    const allColors = {
        bgAccordion,
        bgAccordionButton,
        bgGradientColor,
        bg,
        bgCenter,
        colorCenter,
        textColor,
        bgHeadingGradientColor
    };
    return allColors;
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CardStylePhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(656);
/* harmony import */ var _components_CardAllAddList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(782);
/* harmony import */ var _components_ListAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(477);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(210);
/* harmony import */ var _hooksPerson_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(148);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CardStylePhone__WEBPACK_IMPORTED_MODULE_2__, _components_CardAllAddList__WEBPACK_IMPORTED_MODULE_3__, _components_ListAll__WEBPACK_IMPORTED_MODULE_4__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__, _hooksPerson_colors__WEBPACK_IMPORTED_MODULE_6__]);
([_components_CardStylePhone__WEBPACK_IMPORTED_MODULE_2__, _components_CardAllAddList__WEBPACK_IMPORTED_MODULE_3__, _components_ListAll__WEBPACK_IMPORTED_MODULE_4__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__, _hooksPerson_colors__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Home() {
    const allColors = (0,_hooksPerson_colors__WEBPACK_IMPORTED_MODULE_6__/* .useColors */ .c)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "List Task"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
                backgroundColor: allColors.bg,
                width: "100vw",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100vh",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardStylePhone__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    contentCreateList: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardAllAddList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    contentListAll: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ListAll__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:8080"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ postList),
/* harmony export */   "I": () => (/* binding */ getListAll)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend__WEBPACK_IMPORTED_MODULE_1__]);
_backend__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getListAll = async ()=>{
    const url = "lists";
    const res = await _backend__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(url);
    const data = res.data;
    return data;
};
const getListId = async (input)=>{
    const url = `list/${input}`;
    const res = await api.get(url);
    const data = res.data;
    return data;
};
const postList = async (input)=>{
    const url = `list/create`;
    const res = await _backend__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(url, input);
    return res.data;
};
// const deleteList = async (input: DeleteListInputDto): Promise<OutputDeleteListDto> => {
//     const url = `list/delete`
//     const res = await api.delete(url, input);
//     return res.data
// }
const useMutationPostList = ()=>useMutation({
        mutationFn: postList
    });
const useQueryListAll = ()=>useQuery("lists", getListAll);
const useHandlerList = ()=>{
    const postList = useMutationPostList();
    const getListAll = useQueryListAll();
    const handler_list = {
        postList,
        getListAll
    };
    return handler_list;
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 220:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* binding */ postTask),
/* harmony export */   "q": () => (/* binding */ patchTaskEdit)
/* harmony export */ });
/* unused harmony exports getTaskId, getTaskTitle, getTasks */
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_backend__WEBPACK_IMPORTED_MODULE_0__]);
_backend__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const postTask = async (input)=>{
    const url = "task/create";
    const res = await _backend__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(url, input);
    return res.data;
};
const getTaskId = async (input)=>{
    const url = `task/id/${input}`;
    const res = await api.get(url);
    return res.data;
};
const getTaskTitle = async (input)=>{
    const url = `task/title/${input}`;
    const res = await api.get(url);
    return res.data;
};
const patchTaskEdit = async (input)=>{
    const url = "list/edit";
    const res = await _backend__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch(url, input);
    const data = res.data;
    return data;
};
const getTasks = async ()=>{
    const url = "tasks";
    const res = await api.get(url);
    const data = res.data;
    return data;
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 164:
/***/ ((module) => {

module.exports = require("lottie-react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 259:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.21","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":301,"w":400,"h":562,"nm":"18_Illustrations","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.455],"y":[1]},"o":{"x":[0.532],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.397],"y":[1]},"o":{"x":[0.586],"y":[0]},"t":28,"s":[-3]},{"i":{"x":[0.385],"y":[1]},"o":{"x":[0.598],"y":[0]},"t":50,"s":[3]},{"i":{"x":[0.398],"y":[1]},"o":{"x":[0.585],"y":[0]},"t":71,"s":[-3]},{"i":{"x":[0.447],"y":[1]},"o":{"x":[0.539],"y":[0]},"t":93.033,"s":[3]},{"i":{"x":[0.469],"y":[1]},"o":{"x":[0.352],"y":[0]},"t":120,"s":[0]},{"i":{"x":[0.455],"y":[1]},"o":{"x":[0.532],"y":[0]},"t":150,"s":[0]},{"i":{"x":[0.397],"y":[1]},"o":{"x":[0.586],"y":[0]},"t":178,"s":[-3]},{"i":{"x":[0.385],"y":[1]},"o":{"x":[0.598],"y":[0]},"t":200,"s":[3]},{"i":{"x":[0.398],"y":[1]},"o":{"x":[0.585],"y":[0]},"t":221,"s":[-3]},{"i":{"x":[0.447],"y":[1]},"o":{"x":[0.539],"y":[0]},"t":243.033,"s":[3]},{"t":270,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.424,"y":1},"o":{"x":0.509,"y":0},"t":6,"s":[199.933,494.501,0],"to":[0,-11,0],"ti":[0,11,0]},{"i":{"x":0.562,"y":0.562},"o":{"x":0.409,"y":0.409},"t":34,"s":[199.933,428.501,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.424,"y":1},"o":{"x":0.509,"y":0},"t":99,"s":[199.933,428.501,0],"to":[0,11,0],"ti":[0,-11,0]},{"i":{"x":0.432,"y":0.432},"o":{"x":0.503,"y":0.503},"t":127,"s":[199.933,494.501,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.424,"y":1},"o":{"x":0.509,"y":0},"t":156,"s":[199.933,494.501,0],"to":[0,-11,0],"ti":[0,11,0]},{"i":{"x":0.562,"y":0.562},"o":{"x":0.409,"y":0.409},"t":184,"s":[199.933,428.501,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.424,"y":1},"o":{"x":0.509,"y":0},"t":249,"s":[199.933,428.501,0],"to":[0,11,0],"ti":[0,-11,0]},{"t":277,"s":[199.933,494.501,0]}],"ix":2},"a":{"a":0,"k":[157.952,411.697,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.045,-39.559],[7.915,0],[0,7.915],[-55.383,0.059],[0,-7.915],[7.916,0]],"o":[[-39.559,0.045],[0,7.915],[-7.915,0],[0.061,-55.383],[7.916,0],[0,7.916],[0,0]],"v":[[-0.001,-85.864],[-71.663,-14.202],[-85.995,0.13],[-100.327,-14.202],[-0.001,-114.525],[14.331,-100.193],[-0.001,-85.861]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,-83.33],[-25.197,-28.667],[-8.823,-29.757],[-0.036,-0.233],[0,0],[-0.036,0.241],[-14.797,16.885],[0.052,38.167],[87.299,-0.268]],"o":[[-0.052,38.167],[14.798,16.885],[0.036,0.233],[0,0],[0.036,-0.233],[8.824,-29.757],[25.198,-28.667],[0,-87.236],[-91.374,0.278]],"v":[[-157.65,-14.202],[-118.632,89.506],[-71.866,171.422],[-71.767,172.12],[71.765,172.12],[71.865,171.422],[118.63,89.506],[157.65,-14.202],[-0.494,-171.852]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.195999998205,0.172999991623,0.310000011968,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[157.952,172.37],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-3.123,-4.695],[0,0],[-9.593,-0.001],[0,0],[-5.311,7.989],[0,0],[-0.007,5.64],[0,0],[0,0],[0,0]],"o":[[0.007,5.64],[0,0],[5.311,7.99],[0,0],[9.593,0],[0,0],[3.125,-4.695],[0,0],[0,0],[0,0],[0,0]],"v":[[-71.607,-8.648],[-66.807,7.197],[-51.499,30.208],[-27.638,42.999],[27.638,42.999],[51.498,30.209],[66.813,7.197],[71.615,-8.648],[71.65,-43],[-71.65,-43],[-71.606,-8.648]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.195999998205,0.172999991623,0.310000011968,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[157.952,416.145],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":21370,"st":0,"bm":0}],"markers":[]}');

/***/ }),

/***/ 61:
/***/ ((module) => {

module.exports = JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.21","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":301,"w":386,"h":562,"nm":"17_Illustrations","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.332,"y":1},"o":{"x":0.602,"y":0},"t":0,"s":[190.932,493.512,0],"to":[0,-13,0],"ti":[0,13,0]},{"i":{"x":0.444,"y":0.444},"o":{"x":0.512,"y":0.512},"t":60,"s":[190.932,415.512,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.332,"y":1},"o":{"x":0.602,"y":0},"t":150,"s":[190.932,415.512,0],"to":[0,13,0],"ti":[0,-13,0]},{"t":210,"s":[190.932,493.512,0]}],"ix":2},"a":{"a":0,"k":[142.583,378.248,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.041,-36.206],[7.244,0],[0,7.245],[-50.688,0.054],[0,-7.244],[7.245,0]],"o":[[-36.206,0.041],[0,7.245],[-7.245,0],[0.055,-50.688],[7.245,0],[0,7.244],[0,0]],"v":[[0,-78.585],[-65.587,-12.998],[-78.704,0.119],[-91.821,-12.998],[0,-104.816],[13.117,-91.699],[0,-78.582]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,-76.266],[-23.061,-26.237],[-8.076,-27.234],[-0.033,-0.213],[0,0],[-0.032,0.221],[-13.543,15.453],[0.046,34.932],[79.899,-0.246]],"o":[[-0.047,34.932],[13.543,15.453],[0.032,0.213],[0,0],[0.033,-0.213],[8.077,-27.234],[23.06,-26.237],[0,-79.84],[-83.629,0.255]],"v":[[-144.286,-12.998],[-108.575,81.92],[-65.772,156.891],[-65.682,157.53],[65.683,157.53],[65.773,156.891],[108.576,81.92],[144.287,-12.998],[-0.451,-157.284]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.332],"y":[1]},"o":{"x":[0.602],"y":[0]},"t":0,"s":[0.196078434587,0.172549024224,0.309803932905,1]},{"i":{"x":[0.444],"y":[1]},"o":{"x":[0.512],"y":[0]},"t":60,"s":[0.910000026226,0.824000000954,0.165000006557,1]},{"i":{"x":[0.332],"y":[1]},"o":{"x":[0.602],"y":[0]},"t":150,"s":[0.910000026226,0.824000000954,0.165000006557,1]},{"t":210,"s":[0.196078434587,0.172549024224,0.309803932905,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[144.583,157.78],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-2.859,-4.297],[0,0],[-8.78,-0.001],[0,0],[-4.861,7.312],[0,0],[-0.006,5.161],[0,0],[0,0],[0,0]],"o":[[0.007,5.161],[0,0],[4.861,7.313],[0,0],[8.78,0],[0,0],[2.86,-4.297],[0,0],[0,0],[0,0],[0,0]],"v":[[-65.537,-7.916],[-61.142,6.587],[-47.132,27.647],[-25.295,39.355],[25.296,39.355],[47.133,27.648],[61.15,6.587],[65.545,-7.916],[65.577,-39.355],[-65.577,-39.355],[-65.536,-7.916]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.195999998205,0.172999991623,0.310000011968,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[144.583,380.891],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":21370,"st":0,"bm":0}],"markers":[]}');

/***/ }),

/***/ 830:
/***/ ((module) => {

module.exports = JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":25,"ip":0,"op":100,"w":1600,"h":1200,"nm":"Clipboard Success","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Yellow Bubble Ellipse","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-282,-15,0],"ix":2},"a":{"a":0,"k":[-309,40,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.639,0.816,0.925,0.624,0.512,0.749,0.92,1,0.384,0.682,0.914],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.05,"y":0.05},"t":50,"s":[-394,40],"to":[0,0],"ti":[0,0]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":68,"s":[-394,40],"to":[-1,-11.667],"ti":[1,-10]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":73,"s":[-400,-30],"to":[-1,10],"ti":[-1,-11.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":83,"s":[-400,100],"to":[1,11.667],"ti":[-1,10]},{"t":93,"s":[-394,40]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-314,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":68,"s":[0,0],"to":[-1.667,-12],"ti":[1.667,-10.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":73,"s":[-10,-72],"to":[-1.667,10.667],"ti":[-1.667,-12]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":83,"s":[-10,64],"to":[1.667,12],"ti":[-1.667,10.667]},{"t":93,"s":[0,0]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.596,0.596,0.867,0.624,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-394,40],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-304,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":1,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-229,40],"ix":2},"a":{"a":0,"k":[-389,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.639,0.816,0.925,0.624,0.512,0.749,0.92,1,0.384,0.682,0.914],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.05,"y":0.05},"t":50,"s":[-394,40],"to":[0,0],"ti":[0,0]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":63,"s":[-394,40],"to":[-1,-11.667],"ti":[1,-10]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":68,"s":[-400,-30],"to":[-1,10],"ti":[-1,-11.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":78,"s":[-400,100],"to":[1,11.667],"ti":[-1,10]},{"t":88,"s":[-394,40]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-314,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":63,"s":[0,0],"to":[-1.667,-12],"ti":[1.667,-10.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":68,"s":[-10,-72],"to":[-1.667,10.667],"ti":[-1.667,-12]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":78,"s":[-10,64],"to":[1.667,12],"ti":[-1.667,10.667]},{"t":88,"s":[0,0]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.596,0.596,0.867,0.624,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-394,40],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-304,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":1,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-309,40],"ix":2},"a":{"a":0,"k":[-389,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.639,0.816,0.925,0.624,0.512,0.749,0.92,1,0.384,0.682,0.914],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.05,"y":0.05},"t":50,"s":[-394,40],"to":[0,0],"ti":[0,0]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":58,"s":[-394,40],"to":[-1,-11.667],"ti":[1,-10]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":63,"s":[-400,-30],"to":[-1,10],"ti":[-1,-11.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":73,"s":[-400,100],"to":[1,11.667],"ti":[-1,10]},{"t":83,"s":[-394,40]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-314,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":58,"s":[0,0],"to":[-1.667,-12],"ti":[1.667,-10.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":63,"s":[-10,-72],"to":[-1.667,10.667],"ti":[-1.667,-12]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":73,"s":[-10,64],"to":[1.667,12],"ti":[-1.667,10.667]},{"t":83,"s":[0,0]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.596,0.596,0.867,0.624,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-394,40],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-304,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":1,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-389,40],"ix":2},"a":{"a":0,"k":[-389,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Yellow Chat Bubble","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":25,"s":[1197,726,0],"to":[0,-38.167,0],"ti":[0,-15,0]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":50,"s":[1197,497,0],"to":[0,15,0],"ti":[0,-38.167,0]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":75,"s":[1197,816,0],"to":[0,38.167,0],"ti":[0,15,0]},{"t":99,"s":[1197,726,0]}],"ix":2},"a":{"a":0,"k":[-282,-14,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-69.036],[0,0],[69.036,0],[0,0],[0,0],[0,0],[0,0],[0,69.036],[0,0],[-69.036,0],[0,0]],"o":[[0,0],[0,69.036],[0,0],[0,0],[0,0],[0,0],[-69.036,0],[0,0],[0,-69.036],[0,0],[69.036,0]],"v":[[182,-17],[182,17],[57,142],[41,142],[-64,235],[-46,143],[-57,142],[-182,17],[-182,-17],[-57,-142],[57,-142]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"Round Corners 1","r":{"a":0,"k":108,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.976,0.945,0.808,0.254,0.945,0.863,0.622,1,0.914,0.78,0.435],"ix":9}},"s":{"a":0,"k":[-96,-108],"ix":5},"e":{"a":0,"k":[130,152],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-282,-14],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Red Bubble Ellipse","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-287,-20,0],"ix":2},"a":{"a":0,"k":[-309,40,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.639,0.816,0.925,0.624,0.512,0.749,0.92,1,0.384,0.682,0.914],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":10,"s":[-394,40],"to":[-1,-11.667],"ti":[1,-10]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":15,"s":[-400,-30],"to":[-1,10],"ti":[-1,-11.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":25,"s":[-400,100],"to":[1,11.667],"ti":[-1,10]},{"t":35,"s":[-394,40]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-314,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":10,"s":[0,0],"to":[-1.667,-12],"ti":[1.667,-10.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":15,"s":[-10,-72],"to":[-1.667,10.667],"ti":[-1.667,-12]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":25,"s":[-10,64],"to":[1.667,12],"ti":[-1.667,10.667]},{"t":35,"s":[0,0]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.596,0.596,0.867,0.624,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-394,40],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-304,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":1,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-229,40],"ix":2},"a":{"a":0,"k":[-389,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.639,0.816,0.925,0.624,0.512,0.749,0.92,1,0.384,0.682,0.914],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":5,"s":[-394,40],"to":[-1,-11.667],"ti":[1,-10]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":10,"s":[-400,-30],"to":[-1,10],"ti":[-1,-11.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":20,"s":[-400,100],"to":[1,11.667],"ti":[-1,10]},{"t":30,"s":[-394,40]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-314,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":5,"s":[0,0],"to":[-1.667,-12],"ti":[1.667,-10.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":10,"s":[-10,-72],"to":[-1.667,10.667],"ti":[-1.667,-12]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":20,"s":[-10,64],"to":[1.667,12],"ti":[-1.667,10.667]},{"t":30,"s":[0,0]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.596,0.596,0.867,0.624,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-394,40],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-304,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":1,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-309,40],"ix":2},"a":{"a":0,"k":[-389,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.639,0.816,0.925,0.624,0.512,0.749,0.92,1,0.384,0.682,0.914],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":0,"s":[-394,40],"to":[-1,-11.667],"ti":[1,-10]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":5,"s":[-400,-30],"to":[-1,10],"ti":[-1,-11.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":15,"s":[-400,100],"to":[1,11.667],"ti":[-1,10]},{"t":25,"s":[-394,40]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-314,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56,56],"ix":2},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":0,"s":[0,0],"to":[-1.667,-12],"ti":[1.667,-10.667]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":5,"s":[-10,-72],"to":[-1.667,10.667],"ti":[-1.667,-12]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":15,"s":[-10,64],"to":[1.667,12],"ti":[-1.667,10.667]},{"t":25,"s":[0,0]}],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.596,0.596,0.867,0.624,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[-12,-20],"ix":5},"e":{"a":0,"k":[13,24],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-394,40],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-304,40],"ix":2},"a":{"a":0,"k":[-314,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":1,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-389,40],"ix":2},"a":{"a":0,"k":[-389,40],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Red Chat Bubble","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":0,"s":[376.6,646,0],"to":[0,-26.167,0],"ti":[0,-20.333,0]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":25,"s":[376.6,489,0],"to":[0,20.333,0],"ti":[0,-26.167,0]},{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":50,"s":[376.6,768,0],"to":[0,26.167,0],"ti":[0,20.333,0]},{"t":99,"s":[376.6,646,0]}],"ix":2},"a":{"a":0,"k":[-282,-14,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-69.036],[0,0],[69.036,0],[0,0],[0,0],[0,0],[0,0],[0,69.036],[0,0],[-69.036,0],[0,0]],"o":[[0,0],[0,69.036],[0,0],[0,0],[0,0],[0,0],[-69.036,0],[0,0],[0,-69.036],[0,0],[69.036,0]],"v":[[182,-17],[182,17],[57,142],[41,142],[-64,235],[-46,143],[-57,142],[-182,17],[-182,-17],[-57,-142],[57,-142]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"Round Corners 1","r":{"a":0,"k":108,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.973,0.737,0.753,0.624,0.939,0.606,0.647,1,0.906,0.475,0.541],"ix":9}},"s":{"a":0,"k":[-204,-224],"ix":5},"e":{"a":0,"k":[74,112],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-282,-14],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Check 2","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[10,32,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[19.613,36.774],[107,-61],[39,-22],[-38.373,24.094]],"o":[[-16,-30],[-13.031,7.429],[-42.33,23.878],[129,-81]],"v":[[104,-49],[-49,7],[-108,-34],[-40,75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.05],"y":[0]},"t":58,"s":[50]},{"t":75,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.05],"y":[0]},"t":58,"s":[50]},{"t":75,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.639,0.816,0.925,0.452,0.512,0.749,0.92,1,0.384,0.682,0.914],"ix":9}},"s":{"a":0,"k":[-39,-27],"ix":5},"e":{"a":0,"k":[3,40],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Ellipse Check","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[800,840,0],"ix":2},"a":{"a":0,"k":[10,27,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0],"y":[1,1,1]},"o":{"x":[0.05,0.05,0.05],"y":[0,0,0]},"t":50,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.05,0.05,0.05],"y":[0,0,0]},"t":75,"s":[60,60,100]},{"t":99,"s":[60,60,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[200,200],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,1,0.963,0.975,0.71,0.856,0.819,0.858,1,0.711,0.675,0.741],"ix":9}},"s":{"a":0,"k":[-37.322,-49.763],"ix":5},"e":{"a":0,"k":[152.873,172.614],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[10,27],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[148.891,148.891],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[800,600,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":3,"nm":"Null 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[800,600,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Clip Liver Mask","parent":10,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-16,-448,0],"ix":2},"a":{"a":0,"k":[-16,-446,0],"ix":1},"s":{"a":0,"k":[39.521,39.521,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[196,196],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.949,0.914,0.925,0.381,0.896,0.857,0.902,1,0.843,0.8,0.878],"ix":9}},"s":{"a":0,"k":[0,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-16,-446],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[87.735,87.735],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Clip Liver","parent":11,"tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[9,-24,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[196,196],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.949,0.914,0.925,0.381,0.896,0.857,0.902,1,0.843,0.8,0.878],"ix":9}},"s":{"a":0,"k":[2.28,61.549],"ix":5},"e":{"a":0,"k":[-2.582,-93.464],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-16,-446],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[87.735,87.735],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Clip Body","parent":23,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[88.871,58.48,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[348,156],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":69,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.949,0.914,0.925,0.381,0.896,0.857,0.902,1,0.843,0.8,0.878],"ix":9}},"s":{"a":0,"k":[2,-14],"ix":5},"e":{"a":0,"k":[2,79],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-10,-344],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[348,156],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":69,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.596,0.596,0.867,0.381,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[0,-80],"ix":5},"e":{"a":0,"k":[2,18],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-4,-332],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Check","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[606.5,523.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[26,26,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[19.613,36.774],[107,-61],[39,-22],[-38.373,24.094]],"o":[[-16,-30],[-13.031,7.429],[-42.33,23.878],[129,-81]],"v":[[104,-49],[-49,7],[-108,-34],[-40,75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.05],"y":[0]},"t":12,"s":[50]},{"t":29,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.05],"y":[0]},"t":12,"s":[50]},{"t":29,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.639,0.816,0.925,0.452,0.512,0.749,0.92,1,0.384,0.682,0.914],"ix":9}},"s":{"a":0,"k":[-39,-27],"ix":5},"e":{"a":0,"k":[3,40],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Text Top Tick Box","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[599.89,523.186,0],"ix":2},"a":{"a":0,"k":[-201.61,-79.314,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0],"y":[1,1,1]},"o":{"x":[0.05,0.05,0.05],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"t":29,"s":[100,105.492,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[52,47],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":12,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.949,0.914,0.925,0.625,0.896,0.857,0.902,1,0.843,0.8,0.878],"ix":9}},"s":{"a":0,"k":[0,-20],"ix":5},"e":{"a":0,"k":[0,18],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-206,-75.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[52,47],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":12,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.596,0.596,0.867,0.625,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[-33.488,-30.522],"ix":5},"e":{"a":0,"k":[19.749,18.779],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-201,-80.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[116.459,121.628],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Text Top","parent":21,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-77.517,-89.394,0],"ix":2},"a":{"a":0,"k":[-158.941,-78.691,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0],"y":[1,1,1]},"o":{"x":[0.05,0.05,0.05],"y":[0,0,0]},"t":0,"s":[0,88.536,100]},{"t":25,"s":[98.927,88.536,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[392.937,61.637],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.949,0.914,0.925,0.625,0.896,0.857,0.902,1,0.843,0.8,0.878],"ix":9}},"s":{"a":0,"k":[-15.409,-53.933],"ix":5},"e":{"a":0,"k":[-15.996,40.857],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[35.955,-73.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[392.937,61.637],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.596,0.596,0.867,0.625,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[1.526,-38.413],"ix":5},"e":{"a":0,"k":[0.914,2.071],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[41.955,-80.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[101.173,116.719],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Text Middle Check","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[606.5,611.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[26,26,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[19.613,36.774],[107,-61],[39,-22],[-38.373,24.094]],"o":[[-16,-30],[-13.031,7.429],[-42.33,23.878],[129,-81]],"v":[[104,-49],[-49,7],[-108,-34],[-40,75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.05],"y":[0]},"t":17,"s":[50]},{"t":34,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.05],"y":[0]},"t":17,"s":[50]},{"t":34,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.973,0.737,0.753,0.452,0.939,0.606,0.647,1,0.906,0.475,0.541],"ix":9}},"s":{"a":0,"k":[-39,-27],"ix":5},"e":{"a":0,"k":[3,40],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Text Middle Tick Box","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[599.89,611.186,0],"ix":2},"a":{"a":0,"k":[-201.61,-79.314,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0],"y":[1,1,1]},"o":{"x":[0.05,0.05,0.05],"y":[0,0,0]},"t":5,"s":[0,0,100]},{"t":34,"s":[100,105.492,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[52,47],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":12,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.949,0.914,0.925,0.625,0.896,0.857,0.902,1,0.843,0.8,0.878],"ix":9}},"s":{"a":0,"k":[0,-20],"ix":5},"e":{"a":0,"k":[0,18],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-206,-75.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[52,47],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":12,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.596,0.596,0.867,0.625,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[-33.488,-30.522],"ix":5},"e":{"a":0,"k":[19.749,18.779],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-201,-80.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[116.459,121.628],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Text Middle","parent":21,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-79.073,10.617,0],"ix":2},"a":{"a":0,"k":[-160.514,-79.591,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0],"y":[1,1,1]},"o":{"x":[0.05,0.05,0.05],"y":[0,0,0]},"t":5,"s":[0,88.536,100]},{"t":30,"s":[72.025,88.536,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[392.937,61.637],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.949,0.914,0.925,0.625,0.896,0.857,0.902,1,0.843,0.8,0.878],"ix":9}},"s":{"a":0,"k":[-15.409,-53.933],"ix":5},"e":{"a":0,"k":[-15.152,20.155],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[35.955,-73.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[392.937,61.637],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.596,0.596,0.867,0.625,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[1.526,-38.413],"ix":5},"e":{"a":0,"k":[0.914,2.071],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[41.955,-80.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[101.173,116.719],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Text Bottom Check","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[606.5,697.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[26,26,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[19.613,36.774],[107,-61],[39,-22],[-38.373,24.094]],"o":[[-16,-30],[-13.031,7.429],[-42.33,23.878],[129,-81]],"v":[[104,-49],[-49,7],[-108,-34],[-40,75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.05],"y":[0]},"t":22,"s":[50]},{"t":39,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.05],"y":[0]},"t":22,"s":[50]},{"t":39,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.973,0.737,0.753,0.452,0.939,0.606,0.647,1,0.906,0.475,0.541],"ix":9}},"s":{"a":0,"k":[-39,-27],"ix":5},"e":{"a":0,"k":[3,40],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Text Bottom Tick Box","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[599.89,697.186,0],"ix":2},"a":{"a":0,"k":[-201.61,-79.314,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0],"y":[1,1,1]},"o":{"x":[0.05,0.05,0.05],"y":[0,0,0]},"t":10,"s":[0,0,100]},{"t":39,"s":[100,105.492,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[52,47],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":12,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.949,0.914,0.925,0.625,0.896,0.857,0.902,1,0.843,0.8,0.878],"ix":9}},"s":{"a":0,"k":[0,-20],"ix":5},"e":{"a":0,"k":[0,18],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-206,-75.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[52,47],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":12,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.596,0.596,0.867,0.625,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[-33.488,-30.522],"ix":5},"e":{"a":0,"k":[19.749,18.779],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-201,-80.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[116.459,121.628],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"Text Bottom","parent":21,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-79.073,109.135,0],"ix":2},"a":{"a":0,"k":[-160.514,-79.591,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0],"y":[1,1,1]},"o":{"x":[0.05,0.05,0.05],"y":[0,0,0]},"t":10,"s":[0,88.536,100]},{"t":35,"s":[84.441,88.536,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[392.937,61.637],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.949,0.914,0.925,0.625,0.896,0.857,0.902,1,0.843,0.8,0.878],"ix":9}},"s":{"a":0,"k":[-15.409,-53.933],"ix":5},"e":{"a":0,"k":[-12.409,17.567],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[35.955,-73.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[392.937,61.637],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0.002,0.596,0.596,0.867,0.625,0.478,0.439,0.751,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[1.526,-38.413],"ix":5},"e":{"a":0,"k":[0.914,2.071],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[41.955,-80.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[101.173,116.719],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Papper","parent":22,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-4.139,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[97.681,97.632,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[645.614,802.339],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":100,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.639,0.816,0.925,0.381,0.512,0.749,0.92,1,0.384,0.682,0.914],"ix":9}},"s":{"a":0,"k":[-6.955,-447.496],"ix":5},"e":{"a":0,"k":[4.983,255.413],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[81.871,58.48],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[85.204,85.204],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"Papper Shadow","parent":23,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[4,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[96.638,89.412,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[645.614,802.339],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":100,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.596,0.596,0.867,0.316,0.426,0.398,0.659,1,0.256,0.2,0.451],"ix":9}},"s":{"a":0,"k":[-270.187,-470.577],"ix":5},"e":{"a":0,"k":[302.024,152.831],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[81.871,58.48],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[85.204,85.204],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"Clip Board Body","parent":8,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-81.871,1.52,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[645.614,802.339],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":100,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":5,"k":{"a":0,"k":[0,0.596,0.596,0.867,0.187,0.504,0.475,0.776,0.49,0.412,0.353,0.686,0.726,0.386,0.318,0.661,1,0.361,0.282,0.635],"ix":9}},"s":{"a":0,"k":[-16.344,-193.987],"ix":5},"e":{"a":0,"k":[-27.879,447.892],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[81.871,58.48],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0}],"markers":[]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(186));
module.exports = __webpack_exports__;

})();