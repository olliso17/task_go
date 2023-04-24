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

/***/ "./services/handler/login_handler.ts":
/*!*******************************************!*\
  !*** ./services/handler/login_handler.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLogin\": function() { return /* binding */ getLogin; },\n/* harmony export */   \"postLogin\": function() { return /* binding */ postLogin; },\n/* harmony export */   \"postLogout\": function() { return /* binding */ postLogout; }\n/* harmony export */ });\n/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend */ \"./services/backend.ts\");\n\nconst postLogin = async (input)=>{\n    const url = \"/login\";\n    const res = await _backend__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(url, input);\n    return res.data;\n};\nconst getLogin = async ()=>{\n    const url = \"login/token\";\n    const res = await _backend__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n    const data = res.data;\n    return data;\n};\nconst postLogout = async ()=>{\n    const url = \"logout\";\n    // const res = await api.post(url);\n    // const data = res.data;\n    // return data\n    const res = await _backend__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url, {\n        withCredentials: true,\n        headers: {\n            Cookie: req.headers.cookie\n        }\n    });\n    const data = await res.data;\n    return {\n        props: {\n            data\n        }\n    };\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9oYW5kbGVyL2xvZ2luX2hhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QjtBQUs3QixNQUFNQyxZQUFZLE9BQU9DLFFBQXlEO0lBRTlFLE1BQU1DLE1BQU07SUFFWixNQUFNQyxNQUFNLE1BQU1KLHFEQUFRLENBQUNHLEtBQUtEO0lBRWhDLE9BQU9FLElBQUlFLElBQUk7QUFFbkI7QUFFQSxNQUFNQyxXQUFXLFVBQVk7SUFFekIsTUFBTUosTUFBTztJQUViLE1BQU1DLE1BQU0sTUFBTUosb0RBQU8sQ0FBQ0c7SUFFMUIsTUFBTUcsT0FBT0YsSUFBSUUsSUFBSTtJQUVyQixPQUFPQTtBQUNYO0FBQ0EsTUFBTUcsYUFBYSxVQUFZO0lBRTNCLE1BQU1OLE1BQU87SUFFYixtQ0FBbUM7SUFFbkMseUJBQXlCO0lBRXpCLGNBQWM7SUFDZCxNQUFNQyxNQUFNLE1BQU1KLG9EQUFPLENBQUNHLEtBQUs7UUFDM0JPLGlCQUFpQixJQUFJO1FBQ3JCQyxTQUFTO1lBQ0xDLFFBQVFDLElBQUlGLE9BQU8sQ0FBQ0csTUFBTTtRQUM5QjtJQUNKO0lBQ0EsTUFBTVIsT0FBTyxNQUFNRixJQUFJRSxJQUFJO0lBQzNCLE9BQU87UUFBRVMsT0FBTztZQUFFVDtRQUFLO0lBQUU7QUFDN0I7QUFDMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvaGFuZGxlci9sb2dpbl9oYW5kbGVyLnRzPzUyYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaSBmcm9tIFwiLi4vYmFja2VuZFwiO1xuaW1wb3J0IHsgQ3JlYXRlTG9naW5JbnB1dER0bywgT3V0cHV0TG9naW50RHRvIH0gZnJvbSBcIi4uL2R0by9sb2dpbl9kdG9cIjtcblxuXG5cbmNvbnN0IHBvc3RMb2dpbiA9IGFzeW5jIChpbnB1dDogQ3JlYXRlTG9naW5JbnB1dER0byk6IFByb21pc2U8T3V0cHV0TG9naW50RHRvPiA9PiB7XG5cbiAgICBjb25zdCB1cmwgPSBcIi9sb2dpblwiXG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkucG9zdCh1cmwsIGlucHV0KTtcblxuICAgIHJldHVybiByZXMuZGF0YVxuXG59XG5cbmNvbnN0IGdldExvZ2luID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgY29uc3QgdXJsID0gYGxvZ2luL3Rva2VuYFxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCh1cmwpO1xuXG4gICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xuXG4gICAgcmV0dXJuIGRhdGFcbn07XG5jb25zdCBwb3N0TG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICBcbiAgICBjb25zdCB1cmwgPSBgbG9nb3V0YFxuXG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgYXBpLnBvc3QodXJsKTtcblxuICAgIC8vIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcblxuICAgIC8vIHJldHVybiBkYXRhXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCh1cmwsIHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBDb29raWU6IHJlcS5oZWFkZXJzLmNvb2tpZVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5kYXRhO1xuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XG59O1xuZXhwb3J0IHsgcG9zdExvZ2luLCBnZXRMb2dpbiwgcG9zdExvZ291dCB9XG4iXSwibmFtZXMiOlsiYXBpIiwicG9zdExvZ2luIiwiaW5wdXQiLCJ1cmwiLCJyZXMiLCJwb3N0IiwiZGF0YSIsImdldExvZ2luIiwiZ2V0IiwicG9zdExvZ291dCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcnMiLCJDb29raWUiLCJyZXEiLCJjb29raWUiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/handler/login_handler.ts\n"));

/***/ })

});