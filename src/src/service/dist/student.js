"use strict";
exports.__esModule = true;
exports.useStudentsList = void 0;
var cominication_1 = require("./cominication");
function useStudentsList() {
    return cominication_1.useComunication('/students');
}
exports.useStudentsList = useStudentsList;
