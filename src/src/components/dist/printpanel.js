"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PrintPanel = function (_a) {
    var onPrint = _a.onPrint, load = _a.load, children = _a.children;
    var handlePrint = function (e) {
        if (load)
            return;
        if (onPrint)
            return onPrint();
        window.print();
    };
    return react_1["default"].createElement("div", { className: 'h100-porcent no-print flex-row center' },
        react_1["default"].createElement("div", { className: 'bg-color-smooth border-radius-4 shadow-3 flex-column gap20 p20 bg-color-theme-1' },
            react_1["default"].createElement("div", null, children),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("button", { onClick: handlePrint, className: 'bg-color-theme-2' }, load ? 'PROCESSANDO...' : 'IMPRIMIR'))));
};
exports["default"] = PrintPanel;
