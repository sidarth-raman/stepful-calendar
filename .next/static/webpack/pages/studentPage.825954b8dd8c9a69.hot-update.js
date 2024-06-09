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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar StudentPage = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), role = _useState[0], setRole = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), selectedCoach = _useState1[0], setSelectedCoach = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), selectedStudent = _useState2[0], setselectedStudent = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), coaches = _useState3[0], setCoaches = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), students = _useState4[0], setStudents = _useState4[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    //Fetch Coaches Data\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetch(\"/api/coaches\", {\n            method: \"GET\"\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setCoaches(data);\n        })[\"catch\"](function(err) {\n            return console.error(\"Error fetching users:\", err);\n        });\n    }, []);\n    var handleChange = function(event) {\n        var selectedRole = event.target.value;\n        setRole(selectedRole);\n        if (selectedRole === \"coach\") {\n            router.push(\"/coachPage\");\n        } else if (selectedRole === \"student\") {\n            router.push(\"/studentPage\");\n        }\n    };\n    //Select Different Coach\n    var handleCoachChange = function(event) {\n        var selected = event.target.value;\n        setSelectedCoach(selected);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Student Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Welcome, Student!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"role\",\n                children: \"Select your role: \"\n            }, void 0, false, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"role\",\n                value: role,\n                onChange: handleChange,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"--Choose a role--\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"coach\",\n                        children: \"Coach\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"student\",\n                        children: \"Student\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Student Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"student-select\",\n                        children: \"Select which student you are:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"student-select\",\n                        value: selectedStudent,\n                        onChange: handleCoachChange,\n                        style: {\n                            marginLeft: \"10px\",\n                            padding: \"5px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"--Select a Student--\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 9\n                            }, _this),\n                            coaches.map(function(coach) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: coach.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 11\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 7\n                    }, _this),\n                    selectedCoach && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Selected Coach: \",\n                            selectedCoach\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"coach-select\",\n                        children: \"Select which coach you want to book with:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"coach-select\",\n                        value: selectedStudent,\n                        onChange: handleCoachChange,\n                        style: {\n                            marginLeft: \"10px\",\n                            padding: \"5px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"--Select a Coach--\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 9\n                            }, _this),\n                            students.map(function(student) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: student.name\n                                }, student, false, {\n                                    fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 11\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 7\n                    }, _this),\n                    selectedCoach && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Selected Coach: \",\n                            selectedCoach\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n        lineNumber: 43,\n        columnNumber: 7\n    }, _this);\n};\n_s(StudentPage, \"sL+yGZCyxGUUkSmYB3CjULhrJpA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = StudentPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentPage);\nvar _c;\n$RefreshReg$(_c, \"StudentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNGO2dDQUFPWixPQUFNOzBDQUFHOzs7Ozs7NEJBQ2hCakIsU0FBU2lDLEdBQUcsQ0FBQyxTQUFDRztxREFDYiw4REFBQ1A7OENBQ0VPLFFBQVFELElBQUk7bUNBREZDOzs7Ozs7Ozs7Ozs7b0JBS2hCMUMsK0JBQWlCLDhEQUFDNkI7OzRCQUFFOzRCQUFpQjdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVDO0dBeEZNSDs7UUFNYUosa0RBQVNBOzs7S0FOdEJJO0FBMEZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0dWRlbnRQYWdlLnRzeD80NWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdHVkZW50UGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkQ29hY2gsIHNldFNlbGVjdGVkQ29hY2hdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkU3R1ZGVudCwgc2V0c2VsZWN0ZWRTdHVkZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICAgIGNvbnN0IFtjb2FjaGVzLCBzZXRDb2FjaGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc3R1ZGVudHMsIHNldFN0dWRlbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG4gICAgLy9GZXRjaCBDb2FjaGVzIERhdGFcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2goJy9hcGkvY29hY2hlcycsIFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9XG4gICAgICApXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHNldENvYWNoZXMoZGF0YSkpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlcnM6JywgZXJyKSk7XG4gICAgfSwgW10pO1xuICBcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRSb2xlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgc2V0Um9sZShzZWxlY3RlZFJvbGUpO1xuICBcbiAgICAgIGlmIChzZWxlY3RlZFJvbGUgPT09ICdjb2FjaCcpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9jb2FjaFBhZ2UnKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRSb2xlID09PSAnc3R1ZGVudCcpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9zdHVkZW50UGFnZScpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvL1NlbGVjdCBEaWZmZXJlbnQgQ29hY2hcbiAgICBjb25zdCBoYW5kbGVDb2FjaENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHNldFNlbGVjdGVkQ29hY2goc2VsZWN0ZWQpO1xuICB9XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlN0dWRlbnQgUGFnZTwvaDE+XG4gICAgICAgICAgICA8cD5XZWxjb21lLCBTdHVkZW50ITwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicm9sZVwiPlNlbGVjdCB5b3VyIHJvbGU6IDwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJyb2xlXCIgdmFsdWU9e3JvbGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLUNob29zZSBhIHJvbGUtLTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjb2FjaFwiPkNvYWNoPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN0dWRlbnRcIj5TdHVkZW50PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxuXG4gICAgICAgIDxoMT5TdHVkZW50IFBhZ2U8L2gxPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdHVkZW50LXNlbGVjdFwiPlNlbGVjdCB3aGljaCBzdHVkZW50IHlvdSBhcmU6PC9sYWJlbD5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgaWQ9XCJzdHVkZW50LXNlbGVjdFwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZFN0dWRlbnR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb2FjaENoYW5nZX1cbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBwYWRkaW5nOiAnNXB4JyB9fVxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1TZWxlY3QgYSBTdHVkZW50LS08L29wdGlvbj5cbiAgICAgICAge2NvYWNoZXMubWFwKChjb2FjaCkgPT4gKFxuICAgICAgICAgIDxvcHRpb24+XG4gICAgICAgICAgICB7Y29hY2gubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIHtzZWxlY3RlZENvYWNoICYmIDxwPlNlbGVjdGVkIENvYWNoOiB7c2VsZWN0ZWRDb2FjaH08L3A+fVxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImNvYWNoLXNlbGVjdFwiPlNlbGVjdCB3aGljaCBjb2FjaCB5b3Ugd2FudCB0byBib29rIHdpdGg6PC9sYWJlbD5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgaWQ9XCJjb2FjaC1zZWxlY3RcIlxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRTdHVkZW50fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29hY2hDaGFuZ2V9XG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgcGFkZGluZzogJzVweCcgfX1cbiAgICAgID5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tU2VsZWN0IGEgQ29hY2gtLTwvb3B0aW9uPlxuICAgICAgICB7c3R1ZGVudHMubWFwKChzdHVkZW50KSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e3N0dWRlbnR9PlxuICAgICAgICAgICAge3N0dWRlbnQubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIHtzZWxlY3RlZENvYWNoICYmIDxwPlNlbGVjdGVkIENvYWNoOiB7c2VsZWN0ZWRDb2FjaH08L3A+fVxuICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnRQYWdlOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3R1ZGVudFBhZ2UiLCJyb2xlIiwic2V0Um9sZSIsInNlbGVjdGVkQ29hY2giLCJzZXRTZWxlY3RlZENvYWNoIiwic2VsZWN0ZWRTdHVkZW50Iiwic2V0c2VsZWN0ZWRTdHVkZW50IiwiY29hY2hlcyIsInNldENvYWNoZXMiLCJzdHVkZW50cyIsInNldFN0dWRlbnRzIiwicm91dGVyIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRSb2xlIiwidGFyZ2V0IiwidmFsdWUiLCJwdXNoIiwiaGFuZGxlQ29hY2hDaGFuZ2UiLCJzZWxlY3RlZCIsImRpdiIsImgxIiwicCIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwib25DaGFuZ2UiLCJvcHRpb24iLCJzdHlsZSIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwibWFwIiwiY29hY2giLCJuYW1lIiwic3R1ZGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/studentPage.tsx\n"));

/***/ })

});