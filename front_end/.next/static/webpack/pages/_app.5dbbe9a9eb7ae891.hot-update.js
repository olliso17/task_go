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

/***/ "./hooksPerson/getCookie.ts":
/*!**********************************!*\
  !*** ./hooksPerson/getCookie.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"./node_modules/next/headers.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_headers__WEBPACK_IMPORTED_MODULE_0__);\n\nconst page = async ()=>{\n    //     const nextCookies = cookies().get('session_token');\n    //    return nextCookies?.value\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    var cookieName = \"\";\n    cookieStore.getAll().map((cookie)=>{\n        if (cookie.name == \"session_token\") {\n            cookieName = cookie.value;\n        }\n    });\n    return cookieName;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rc1BlcnNvbi9nZXRDb29raWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVDO0FBRXZDLE1BQU1DLE9BQU8sVUFBWTtJQUNyQiwwREFBMEQ7SUFFMUQsK0JBQStCO0lBQy9CLE1BQU1DLGNBQWNGLHFEQUFPQTtJQUMzQixJQUFJRyxhQUFhO0lBQ2pCRCxZQUFZRSxNQUFNLEdBQUdDLEdBQUcsQ0FBQyxDQUFDQyxTQUFXO1FBQzdCLElBQUdBLE9BQU9DLElBQUksSUFBRyxpQkFBZ0I7WUFDN0JKLGFBQWFHLE9BQU9FLEtBQUs7UUFDN0IsQ0FBQztJQUNMO0lBQ0osT0FBT0w7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rc1BlcnNvbi9nZXRDb29raWUudHM/YTJlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcblxuY29uc3QgcGFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgbmV4dENvb2tpZXMgPSBjb29raWVzKCkuZ2V0KCdzZXNzaW9uX3Rva2VuJyk7XG5cbiAgICAvLyAgICByZXR1cm4gbmV4dENvb2tpZXM/LnZhbHVlXG4gICAgY29uc3QgY29va2llU3RvcmUgPSBjb29raWVzKCk7XG4gICAgdmFyIGNvb2tpZU5hbWUgPSAnJ1xuICAgIGNvb2tpZVN0b3JlLmdldEFsbCgpLm1hcCgoY29va2llKSA9PiB7XG4gICAgICAgICAgICBpZihjb29raWUubmFtZSA9PSdzZXNzaW9uX3Rva2VuJyl7XG4gICAgICAgICAgICAgICAgY29va2llTmFtZSA9IGNvb2tpZS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICByZXR1cm4gY29va2llTmFtZVxufSJdLCJuYW1lcyI6WyJjb29raWVzIiwicGFnZSIsImNvb2tpZVN0b3JlIiwiY29va2llTmFtZSIsImdldEFsbCIsIm1hcCIsImNvb2tpZSIsIm5hbWUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooksPerson/getCookie.ts\n"));

/***/ })

});