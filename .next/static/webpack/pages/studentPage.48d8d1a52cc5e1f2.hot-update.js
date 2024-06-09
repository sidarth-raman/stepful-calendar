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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar StudentPage = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), role = _useState[0], setRole = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), selectedCoach = _useState1[0], setSelectedCoach = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), selectedStudent = _useState2[0], setSelectedStudent = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), coaches = _useState3[0], setCoaches = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), students = _useState4[0], setStudents = _useState4[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    //Fetch Coaches Data\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetch(\"/api/coaches\", {\n            method: \"GET\"\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setCoaches(data);\n        })[\"catch\"](function(err) {\n            return console.error(\"Error fetching users:\", err);\n        });\n    }, []);\n    //Fetch Coaches Data\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetch(\"/api/students\", {\n            method: \"GET\"\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setStudents(data);\n        })[\"catch\"](function(err) {\n            return console.error(\"Error fetching users:\", err);\n        });\n    }, []);\n    var handleChange = function(event) {\n        var selectedRole = event.target.value;\n        setRole(selectedRole);\n        if (selectedRole === \"coach\") {\n            router.push(\"/coachPage\");\n        } else if (selectedRole === \"student\") {\n            router.push(\"/studentPage\");\n        }\n    };\n    //Select Different Coach\n    var handleCoachChange = function(event) {\n        var selected = event.target.value;\n        setSelectedCoach(selected);\n    };\n    var handleStudentChange = function(event) {\n        var selected = event.target.value;\n        setSelectedStudent(selected);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Student Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Welcome, Student!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"role\",\n                children: \"Select your role: \"\n            }, void 0, false, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"role\",\n                value: role,\n                onChange: handleChange,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"--Choose a role--\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"coach\",\n                        children: \"Coach\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"student\",\n                        children: \"Student\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Student Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"student-select\",\n                        children: \"Select which student you are:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"student-select\",\n                        value: selectedStudent,\n                        onChange: handle,\n                        style: {\n                            marginLeft: \"10px\",\n                            padding: \"5px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"--Select a Student--\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 9\n                            }, _this),\n                            coaches.map(function(coach) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: coach.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 11\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 7\n                    }, _this),\n                    selectedCoach && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Selected Coach: \",\n                            selectedCoach\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"coach-select\",\n                        children: \"Select which coach you want to book with:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"coach-select\",\n                        value: selectedStudent,\n                        onChange: handleCoachChange,\n                        style: {\n                            marginLeft: \"10px\",\n                            padding: \"5px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"--Select a Coach--\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 9\n                            }, _this),\n                            students.map(function(student) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: student.name\n                                }, student, false, {\n                                    fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 11\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 7\n                    }, _this),\n                    selectedStudent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Selected Student: \",\n                            selectedStudent\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 27\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sidraman/Desktop/stepful-calendar/pages/studentPage.tsx\",\n        lineNumber: 62,\n        columnNumber: 7\n    }, _this);\n};\n_s(StudentPage, \"PxW9ZYQLusm3XrsLA67Hw+cab1E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = StudentPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentPage);\nvar _c;\n$RefreshReg$(_c, \"StudentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Uzt3QkFBTTs7MENBRTVDLDhEQUFDRjtnQ0FBT2IsT0FBTTswQ0FBRzs7Ozs7OzRCQUNoQm5CLFFBQVFxQyxHQUFHLENBQUMsU0FBQ0M7cURBQ1osOERBQUNOOzhDQUNFTSxNQUFNQyxJQUFJOzs7Ozs7Ozs7Ozs7O29CQUloQjNDLCtCQUFpQiw4REFBQzhCOzs0QkFBRTs0QkFBaUI5Qjs7Ozs7OztrQ0FFdEMsOERBQUMrQjt3QkFBTUMsU0FBUTtrQ0FBZTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQ0NDLElBQUc7d0JBQ0hYLE9BQU9yQjt3QkFDUGlDLFVBQVVWO3dCQUNWWSxPQUFPOzRCQUFFRyxZQUFZOzRCQUFRRixTQUFTO3dCQUFNOzswQ0FFNUMsOERBQUNGO2dDQUFPYixPQUFNOzBDQUFHOzs7Ozs7NEJBQ2hCakIsU0FBU21DLEdBQUcsQ0FBQyxTQUFDRztxREFDYiw4REFBQ1I7OENBQ0VRLFFBQVFELElBQUk7bUNBREZDOzs7Ozs7Ozs7Ozs7b0JBS2hCMUMsaUNBQW1CLDhEQUFDNEI7OzRCQUFFOzRCQUFtQjVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhEO0dBNUdNTDs7UUFNYUosa0RBQVNBOzs7S0FOdEJJO0FBOEdOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0dWRlbnRQYWdlLnRzeD80NWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdHVkZW50UGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkQ29hY2gsIHNldFNlbGVjdGVkQ29hY2hdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkU3R1ZGVudCwgc2V0U2VsZWN0ZWRTdHVkZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICAgIGNvbnN0IFtjb2FjaGVzLCBzZXRDb2FjaGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc3R1ZGVudHMsIHNldFN0dWRlbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG4gICAgLy9GZXRjaCBDb2FjaGVzIERhdGFcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2goJy9hcGkvY29hY2hlcycsIFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9XG4gICAgICApXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHNldENvYWNoZXMoZGF0YSkpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlcnM6JywgZXJyKSk7XG4gICAgfSwgW10pO1xuXG5cbiAgICAgIC8vRmV0Y2ggQ29hY2hlcyBEYXRhXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaCgnL2FwaS9zdHVkZW50cycsIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbihkYXRhID0+IHNldFN0dWRlbnRzKGRhdGEpKVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlcnM6JywgZXJyKSk7XG4gICAgICB9LCBbXSk7XG4gICAgXG4gIFxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZFJvbGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBzZXRSb2xlKHNlbGVjdGVkUm9sZSk7XG4gIFxuICAgICAgaWYgKHNlbGVjdGVkUm9sZSA9PT0gJ2NvYWNoJykge1xuICAgICAgICByb3V0ZXIucHVzaCgnL2NvYWNoUGFnZScpO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFJvbGUgPT09ICdzdHVkZW50Jykge1xuICAgICAgICByb3V0ZXIucHVzaCgnL3N0dWRlbnRQYWdlJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vU2VsZWN0IERpZmZlcmVudCBDb2FjaFxuICAgIGNvbnN0IGhhbmRsZUNvYWNoQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgc2V0U2VsZWN0ZWRDb2FjaChzZWxlY3RlZCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdHVkZW50Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBzZXRTZWxlY3RlZFN0dWRlbnQoc2VsZWN0ZWQpO1xufVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5TdHVkZW50IFBhZ2U8L2gxPlxuICAgICAgICAgICAgPHA+V2VsY29tZSwgU3R1ZGVudCE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJvbGVcIj5TZWxlY3QgeW91ciByb2xlOiA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkPVwicm9sZVwiIHZhbHVlPXtyb2xlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1DaG9vc2UgYSByb2xlLS08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY29hY2hcIj5Db2FjaDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzdHVkZW50XCI+U3R1ZGVudDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cbiAgICAgIFxuXG4gICAgICAgIDxoMT5TdHVkZW50IFBhZ2U8L2gxPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdHVkZW50LXNlbGVjdFwiPlNlbGVjdCB3aGljaCBzdHVkZW50IHlvdSBhcmU6PC9sYWJlbD5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgaWQ9XCJzdHVkZW50LXNlbGVjdFwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZFN0dWRlbnR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGV9XG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgcGFkZGluZzogJzVweCcgfX1cbiAgICAgID5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tU2VsZWN0IGEgU3R1ZGVudC0tPC9vcHRpb24+XG4gICAgICAgIHtjb2FjaGVzLm1hcCgoY29hY2gpID0+IChcbiAgICAgICAgICA8b3B0aW9uPlxuICAgICAgICAgICAge2NvYWNoLm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICB7c2VsZWN0ZWRDb2FjaCAmJiA8cD5TZWxlY3RlZCBDb2FjaDoge3NlbGVjdGVkQ29hY2h9PC9wPn1cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2FjaC1zZWxlY3RcIj5TZWxlY3Qgd2hpY2ggY29hY2ggeW91IHdhbnQgdG8gYm9vayB3aXRoOjwvbGFiZWw+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPVwiY29hY2gtc2VsZWN0XCJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkU3R1ZGVudH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvYWNoQ2hhbmdlfVxuICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIHBhZGRpbmc6ICc1cHgnIH19XG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLVNlbGVjdCBhIENvYWNoLS08L29wdGlvbj5cbiAgICAgICAge3N0dWRlbnRzLm1hcCgoc3R1ZGVudCkgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXtzdHVkZW50fT5cbiAgICAgICAgICAgIHtzdHVkZW50Lm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICB7c2VsZWN0ZWRTdHVkZW50ICYmIDxwPlNlbGVjdGVkIFN0dWRlbnQ6IHtzZWxlY3RlZFN0dWRlbnR9PC9wPn1cbiAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50UGFnZTsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0dWRlbnRQYWdlIiwicm9sZSIsInNldFJvbGUiLCJzZWxlY3RlZENvYWNoIiwic2V0U2VsZWN0ZWRDb2FjaCIsInNlbGVjdGVkU3R1ZGVudCIsInNldFNlbGVjdGVkU3R1ZGVudCIsImNvYWNoZXMiLCJzZXRDb2FjaGVzIiwic3R1ZGVudHMiLCJzZXRTdHVkZW50cyIsInJvdXRlciIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkUm9sZSIsInRhcmdldCIsInZhbHVlIiwicHVzaCIsImhhbmRsZUNvYWNoQ2hhbmdlIiwic2VsZWN0ZWQiLCJoYW5kbGVTdHVkZW50Q2hhbmdlIiwiZGl2IiwiaDEiLCJwIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJvbkNoYW5nZSIsIm9wdGlvbiIsInN0eWxlIiwicGFkZGluZyIsImhhbmRsZSIsIm1hcmdpbkxlZnQiLCJtYXAiLCJjb2FjaCIsIm5hbWUiLCJzdHVkZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/studentPage.tsx\n"));

/***/ })

});