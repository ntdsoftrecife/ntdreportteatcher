"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var presences_1 = require("./bin/presences");
var PresenceByClass = function () {
    return react_1["default"].createElement(react_router_dom_1.Route, { path: '/report/presencebyclass/:year?/:month?/:class?' },
        react_1["default"].createElement(presences_1["default"], null));
};
exports["default"] = PresenceByClass;
