"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var classlist_1 = require("./bin/classlist");
var ClassesScholl = function () {
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: '/report/classlist' },
            react_1["default"].createElement(classlist_1["default"], null)));
};
exports["default"] = ClassesScholl;
