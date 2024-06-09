"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/studentPage",{

/***/ "./pages/studentPage.tsx":
/*!*******************************!*\
  !*** ./pages/studentPage.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar StudentPage = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), role = _useState[0], setRole = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), selectedCoach = _useState1[0], setSelectedCoach = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), selectedStudent = _useState2[0], setselectedStudent = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), coaches = _useState3[0], setCoaches = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), students = _useState4[0], setStudents = _useState4[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    //Fetch Coaches Data\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetch(\"/api/coaches\", {\n            method: \"GET\"\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setCoaches(data);\n        })[\"catch\"](function(err) {\n            return console.error(\"Error fetching users:\", err);\n        });\n    }, []);\n    //Fetch Coaches Data\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetch(\"/api/students\", {\n            method: \"GET\"\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setStudents(data);\n        })[\"catch\"](function(err) {\n            return console.error(\"Error fetching users:\", err);\n        });\n    }, []);\n    var handleChange = function(event) {\n        var selectedRole = event.target.value;\n        setRole(selectedRole);\n        if (selectedRole === \"coach\") {\n            router.push(\"/coachPage\");\n        } else if (selectedRole === \"student\") {\n            router.push(\"/studentPage\");\n        }\n    };\n    //Select Different Coach\n    var handleCoachChange = function(event) {\n        var selected = event.target.value;\n        setSelectedCoach(selected);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Student Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Welcome, Student!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"role\",\n                children: \"Select your role: \"\n            }, void 0, false, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"role\",\n                value: role,\n                onChange: handleChange,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"--Choose a role--\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"coach\",\n                        children: \"Coach\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"student\",\n                        children: \"Student\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Student Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"student-select\",\n                        children: \"Select which student you are:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"student-select\",\n                        value: selectedStudent,\n                        onChange: handleCoachChange,\n                        style: {\n                            marginLeft: \"10px\",\n                            padding: \"5px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"--Select a Student--\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 9\n                            }, _this),\n                            coaches.map(function(coach) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: coach.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 11\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 7\n                    }, _this),\n                    selectedCoach && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Selected Coach: \",\n                            selectedCoach\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"coach-select\",\n                        children: \"Select which coach you want to book with:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"coach-select\",\n                        value: selectedStudent,\n                        onChange: handleCoachChange,\n                        style: {\n                            marginLeft: \"10px\",\n                            padding: \"5px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"--Select a Coach--\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 9\n                            }, _this),\n                            students.map(function(student) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: student.name\n                                }, student, false, {\n                                    fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 11\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 7\n                    }, _this),\n                    selectedStudent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Selected Student: \",\n                            selectedStudent\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 27\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n        lineNumber: 57,\n        columnNumber: 7\n    }, _this);\n};\n_s(StudentPage, \"U7HxaZ8RVlfk0HFgiUBMfgA3LpI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = StudentPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentPage);\nvar _c;\n$RefreshReg$(_c, \"StudentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0w7OENBQ0VLLE1BQU1DLElBQUk7Ozs7Ozs7Ozs7Ozs7b0JBSWhCekMsK0JBQWlCLDhEQUFDNkI7OzRCQUFFOzRCQUFpQjdCOzs7Ozs7O2tDQUV0Qyw4REFBQzhCO3dCQUFNQyxTQUFRO2tDQUFlOzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFDQ0MsSUFBRzt3QkFDSFYsT0FBT3JCO3dCQUNQZ0MsVUFBVVQ7d0JBQ1ZXLE9BQU87NEJBQUVFLFlBQVk7NEJBQVFELFNBQVM7d0JBQU07OzBDQUU1Qyw4REFBQ0Y7Z0NBQU9aLE9BQU07MENBQUc7Ozs7Ozs0QkFDaEJqQixTQUFTaUMsR0FBRyxDQUFDLFNBQUNHO3FEQUNiLDhEQUFDUDs4Q0FDRU8sUUFBUUQsSUFBSTttQ0FERkM7Ozs7Ozs7Ozs7OztvQkFLaEJ4QyxpQ0FBbUIsOERBQUMyQjs7NEJBQUU7NEJBQW1CM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEQ7R0F0R01MOztRQU1hSixrREFBU0E7OztLQU50Qkk7QUF3R04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudFBhZ2UudHN4PzQ1YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0dWRlbnRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRDb2FjaCwgc2V0U2VsZWN0ZWRDb2FjaF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRTdHVkZW50LCBzZXRzZWxlY3RlZFN0dWRlbnRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgW2NvYWNoZXMsIHNldENvYWNoZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzdHVkZW50cywgc2V0U3R1ZGVudHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbiAgICAvL0ZldGNoIENvYWNoZXMgRGF0YVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmZXRjaCgnL2FwaS9jb2FjaGVzJywgXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4gc2V0Q29hY2hlcyhkYXRhKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyczonLCBlcnIpKTtcbiAgICB9LCBbXSk7XG5cblxuICAgICAgLy9GZXRjaCBDb2FjaGVzIERhdGFcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKCcvYXBpL3N0dWRlbnRzJywgXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0U3R1ZGVudHMoZGF0YSkpXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyczonLCBlcnIpKTtcbiAgICAgIH0sIFtdKTtcbiAgICBcbiAgXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkUm9sZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHNldFJvbGUoc2VsZWN0ZWRSb2xlKTtcbiAgXG4gICAgICBpZiAoc2VsZWN0ZWRSb2xlID09PSAnY29hY2gnKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvY29hY2hQYWdlJyk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkUm9sZSA9PT0gJ3N0dWRlbnQnKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvc3R1ZGVudFBhZ2UnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9TZWxlY3QgRGlmZmVyZW50IENvYWNoXG4gICAgY29uc3QgaGFuZGxlQ29hY2hDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBzZXRTZWxlY3RlZENvYWNoKHNlbGVjdGVkKTtcbiAgfVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5TdHVkZW50IFBhZ2U8L2gxPlxuICAgICAgICAgICAgPHA+V2VsY29tZSwgU3R1ZGVudCE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJvbGVcIj5TZWxlY3QgeW91ciByb2xlOiA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkPVwicm9sZVwiIHZhbHVlPXtyb2xlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1DaG9vc2UgYSByb2xlLS08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY29hY2hcIj5Db2FjaDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzdHVkZW50XCI+U3R1ZGVudDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cblxuICAgICAgICA8aDE+U3R1ZGVudCBQYWdlPC9oMT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwic3R1ZGVudC1zZWxlY3RcIj5TZWxlY3Qgd2hpY2ggc3R1ZGVudCB5b3UgYXJlOjwvbGFiZWw+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPVwic3R1ZGVudC1zZWxlY3RcIlxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRTdHVkZW50fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29hY2hDaGFuZ2V9XG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgcGFkZGluZzogJzVweCcgfX1cbiAgICAgID5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tU2VsZWN0IGEgU3R1ZGVudC0tPC9vcHRpb24+XG4gICAgICAgIHtjb2FjaGVzLm1hcCgoY29hY2gpID0+IChcbiAgICAgICAgICA8b3B0aW9uPlxuICAgICAgICAgICAge2NvYWNoLm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICB7c2VsZWN0ZWRDb2FjaCAmJiA8cD5TZWxlY3RlZCBDb2FjaDoge3NlbGVjdGVkQ29hY2h9PC9wPn1cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2FjaC1zZWxlY3RcIj5TZWxlY3Qgd2hpY2ggY29hY2ggeW91IHdhbnQgdG8gYm9vayB3aXRoOjwvbGFiZWw+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPVwiY29hY2gtc2VsZWN0XCJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkU3R1ZGVudH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvYWNoQ2hhbmdlfVxuICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIHBhZGRpbmc6ICc1cHgnIH19XG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLVNlbGVjdCBhIENvYWNoLS08L29wdGlvbj5cbiAgICAgICAge3N0dWRlbnRzLm1hcCgoc3R1ZGVudCkgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXtzdHVkZW50fT5cbiAgICAgICAgICAgIHtzdHVkZW50Lm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICB7c2VsZWN0ZWRTdHVkZW50ICYmIDxwPlNlbGVjdGVkIFN0dWRlbnQ6IHtzZWxlY3RlZFN0dWRlbnR9PC9wPn1cbiAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50UGFnZTsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0dWRlbnRQYWdlIiwicm9sZSIsInNldFJvbGUiLCJzZWxlY3RlZENvYWNoIiwic2V0U2VsZWN0ZWRDb2FjaCIsInNlbGVjdGVkU3R1ZGVudCIsInNldHNlbGVjdGVkU3R1ZGVudCIsImNvYWNoZXMiLCJzZXRDb2FjaGVzIiwic3R1ZGVudHMiLCJzZXRTdHVkZW50cyIsInJvdXRlciIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkUm9sZSIsInRhcmdldCIsInZhbHVlIiwicHVzaCIsImhhbmRsZUNvYWNoQ2hhbmdlIiwic2VsZWN0ZWQiLCJkaXYiLCJoMSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwic3R5bGUiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIm1hcCIsImNvYWNoIiwibmFtZSIsInN0dWRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/studentPage.tsx\n"));

/***/ })

});