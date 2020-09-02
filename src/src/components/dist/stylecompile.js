"use strict";
exports.__esModule = true;
exports.printLandscape = exports.printPortrait = void 0;
var cssPagedMedia = (function () {
    var style = document.createElement('style');
    document.head.appendChild(style);
    return function (rule) {
        style.innerHTML += '\n' + rule;
    };
}());
var printPortrait = function () {
    cssPagedMedia('@page{ size:portrait; }');
};
exports.printPortrait = printPortrait;
var printLandscape = function () {
    cssPagedMedia('@page{ size:landscape; }');
};
exports.printLandscape = printLandscape;
exports["default"] = cssPagedMedia;
