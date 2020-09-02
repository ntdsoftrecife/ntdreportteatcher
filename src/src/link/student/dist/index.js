"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var studentlist_1 = require("./bin/studentlist");
var Student = function () {
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: '/report/studentlist' },
            react_1["default"].createElement(studentlist_1["default"], null)));
};
exports["default"] = Student;
