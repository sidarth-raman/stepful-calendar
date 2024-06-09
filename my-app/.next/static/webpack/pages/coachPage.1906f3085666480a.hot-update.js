"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/coachPage",{

/***/ "./components/CalendarPicker.tsx":
/*!***************************************!*\
  !*** ./components/CalendarPicker.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar CalendarPicker = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedDate = _useState[0], setSelectedDate = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), dateList = _useState1[0], setDateList = _useState1[1]; // Initialize the state for the list of dates\n    var handleDateChange = function(date) {\n        setSelectedDate(date);\n    };\n    //Fetch Coaches Data\n    useEffect(function() {\n        fetch(\"/api/coaches\", {\n            method: \"GET\"\n        }).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setCoaches(data);\n        })[\"catch\"](function(err) {\n            return console.error(\"Error fetching users:\", err);\n        });\n    }, []);\n    var handleStoreDate = function() {\n        if (selectedDate) {\n            // Add the new date to the list\n            setDateList(function(prevList) {\n                return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(prevList).concat([\n                    selectedDate\n                ]);\n            });\n            // Clear the selected date\n            setSelectedDate(null);\n        } else {\n            alert(\"Please select a date and time first.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello Date Picker\"\n            }, void 0, false, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/my-app/components/CalendarPicker.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_5___default()), {\n                inline: true,\n                selected: selectedDate,\n                onChange: handleDateChange,\n                dateFormat: \"MM/dd/yyyy hh:mm\",\n                showTimeSelect: true,\n                timeIntervals: 30,\n                timeFormat: \"hh:mm\"\n            }, void 0, false, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/my-app/components/CalendarPicker.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleStoreDate,\n                children: \"Add Date and Time to List\"\n            }, void 0, false, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/my-app/components/CalendarPicker.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Selected Dates and Times:\"\n            }, void 0, false, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/my-app/components/CalendarPicker.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: dateList.map(function(date, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: date.toLocaleString(\"en-US\", {\n                            month: \"2-digit\",\n                            day: \"2-digit\",\n                            year: \"numeric\",\n                            hour: \"2-digit\",\n                            minute: \"2-digit\",\n                            hour12: false\n                        })\n                    }, index, false, {\n                        fileName: \"/Users/sidraman/Desktop/stepful-calendar/my-app/components/CalendarPicker.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sidraman/Desktop/stepful-calendar/my-app/components/CalendarPicker.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sidraman/Desktop/stepful-calendar/my-app/components/CalendarPicker.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, _this);\n};\n_s(CalendarPicker, \"ad6lSh2/L8VdFwwlJ9uuHPDQWLc=\");\n_c = CalendarPicker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CalendarPicker);\nvar _c;\n$RefreshReg$(_c, \"CalendarPicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbGVuZGFyUGlja2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1M7QUFDVTtBQUVwRCxJQUFNRSxpQkFBMkI7O0lBQzdCLElBQXdDRixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWMsV0FBdkRHLGVBQWlDSCxjQUFuQkksa0JBQW1CSjtJQUN4QyxJQUFnQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTLEVBQUUsT0FBNUNLLFdBQXlCTCxlQUFmTSxjQUFlTixlQUFzQiw2Q0FBNkM7SUFFbkcsSUFBTU8sbUJBQW1CLFNBQUNDO1FBQ3RCSixnQkFBZ0JJO0lBQ3BCO0lBRUEsb0JBQW9CO0lBQ3BCQyxVQUFVO1FBQ05DLE1BQU0sZ0JBQ0o7WUFDRUMsUUFBUTtRQUNWLEdBRUNDLElBQUksQ0FBQ0MsU0FBQUE7bUJBQU9BLElBQUlDLElBQUk7V0FDcEJGLElBQUksQ0FBQ0csU0FBQUE7bUJBQVFDLFdBQVdEO1VBQ3hCRSxDQUFBQSxRQUFLLENBQUNDLFNBQUFBO21CQUFPQyxRQUFRQyxLQUFLLENBQUMseUJBQXlCRjs7SUFDekQsR0FBRyxFQUFFO0lBR1AsSUFBTUcsa0JBQWtCO1FBQ3BCLElBQUlsQixjQUFjO1lBQ2QsK0JBQStCO1lBQy9CRyxZQUFZZ0IsU0FBQUE7dUJBQVksb0VBQUlBLGlCQUFKO29CQUFjbkI7aUJBQWE7O1lBQ25ELDBCQUEwQjtZQUMxQkMsZ0JBQWdCO1FBQ3BCLE9BQU87WUFDSG1CLE1BQU07UUFDVjtJQUNKO0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ3hCLHlEQUFVQTtnQkFDUHlCLE1BQU07Z0JBQ05DLFVBQVV4QjtnQkFDVnlCLFVBQVVyQjtnQkFDVnNCLFlBQVc7Z0JBQ1hDLGNBQWM7Z0JBQ2RDLGVBQWU7Z0JBQ2ZDLFlBQVc7Ozs7OzswQkFFZiw4REFBQ0M7Z0JBQU9DLFNBQVNiOzBCQUFpQjs7Ozs7OzBCQUdsQyw4REFBQ2M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0kvQixTQUFTZ0MsR0FBRyxDQUFDLFNBQUM3QixNQUFNOEI7eUNBQ2pCLDhEQUFDQztrQ0FBZ0IvQixLQUFLZ0MsY0FBYyxDQUFDLFNBQVM7NEJBQzFDQyxPQUFPOzRCQUNQQyxLQUFLOzRCQUNMQyxNQUFNOzRCQUNOQyxNQUFNOzRCQUNOQyxRQUFROzRCQUNSQyxRQUFRO3dCQUNaO3VCQVBTUjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZN0I7R0E5RE1wQztLQUFBQTtBQWdFTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhbGVuZGFyUGlja2VyLnRzeD9mM2E0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAncmVhY3QtZGF0ZXBpY2tlcic7XG5pbXBvcnQgJ3JlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzcyc7XG5cbmNvbnN0IENhbGVuZGFyUGlja2VyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbc2VsZWN0ZWREYXRlLCBzZXRTZWxlY3RlZERhdGVdID0gdXNlU3RhdGU8RGF0ZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFtkYXRlTGlzdCwgc2V0RGF0ZUxpc3RdID0gdXNlU3RhdGU8RGF0ZVtdPihbXSk7IC8vIEluaXRpYWxpemUgdGhlIHN0YXRlIGZvciB0aGUgbGlzdCBvZiBkYXRlc1xuXG4gICAgY29uc3QgaGFuZGxlRGF0ZUNoYW5nZSA9IChkYXRlOiBEYXRlIHwgbnVsbCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZERhdGUoZGF0ZSk7XG4gICAgfTtcbiAgICBcbiAgICAvL0ZldGNoIENvYWNoZXMgRGF0YVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKCcvYXBpL2NvYWNoZXMnLCBcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRDb2FjaGVzKGRhdGEpKVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlcnM6JywgZXJyKSk7XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIFxuICAgIGNvbnN0IGhhbmRsZVN0b3JlRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBuZXcgZGF0ZSB0byB0aGUgbGlzdFxuICAgICAgICAgICAgc2V0RGF0ZUxpc3QocHJldkxpc3QgPT4gWy4uLnByZXZMaXN0LCBzZWxlY3RlZERhdGVdKTtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCBkYXRlXG4gICAgICAgICAgICBzZXRTZWxlY3RlZERhdGUobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIGRhdGUgYW5kIHRpbWUgZmlyc3QuJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuICggXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+SGVsbG8gRGF0ZSBQaWNrZXI8L2gxPlxuICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWREYXRlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTS9kZC95eXl5IGhoOm1tXCJcbiAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdFxuICAgICAgICAgICAgICAgIHRpbWVJbnRlcnZhbHM9ezMwfVxuICAgICAgICAgICAgICAgIHRpbWVGb3JtYXQ9XCJoaDptbVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdG9yZURhdGV9PlxuICAgICAgICAgICAgICAgIEFkZCBEYXRlIGFuZCBUaW1lIHRvIExpc3RcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGgyPlNlbGVjdGVkIERhdGVzIGFuZCBUaW1lczo8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtkYXRlTGlzdC5tYXAoKGRhdGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57ZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIxMjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSl9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhclBpY2tlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkRhdGVQaWNrZXIiLCJDYWxlbmRhclBpY2tlciIsInNlbGVjdGVkRGF0ZSIsInNldFNlbGVjdGVkRGF0ZSIsImRhdGVMaXN0Iiwic2V0RGF0ZUxpc3QiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiZGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic2V0Q29hY2hlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlU3RvcmVEYXRlIiwicHJldkxpc3QiLCJhbGVydCIsImRpdiIsImgxIiwiaW5saW5lIiwic2VsZWN0ZWQiLCJvbkNoYW5nZSIsImRhdGVGb3JtYXQiLCJzaG93VGltZVNlbGVjdCIsInRpbWVJbnRlcnZhbHMiLCJ0aW1lRm9ybWF0IiwiYnV0dG9uIiwib25DbGljayIsImgyIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIiwidG9Mb2NhbGVTdHJpbmciLCJtb250aCIsImRheSIsInllYXIiLCJob3VyIiwibWludXRlIiwiaG91cjEyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CalendarPicker.tsx\n"));

/***/ })

});