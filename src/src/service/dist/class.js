"use strict";
exports.__esModule = true;
exports.classData = exports.classList = exports.useClassStudentList = exports.useClassDisciplineList = exports.useClassData = exports.useClassList = void 0;
var cominication_1 = require("./cominication");
function useClassList() {
    return cominication_1.useComunication('/class');
}
exports.useClassList = useClassList;
function useClassData(classCode) {
    return cominication_1.useComunication('/class/' + classCode);
}
exports.useClassData = useClassData;
function useClassDisciplineList(classCode) {
    return cominication_1.useComunication('/class/disciplines/' + classCode);
}
exports.useClassDisciplineList = useClassDisciplineList;
function useClassStudentList(classCode) {
    return cominication_1.useComunication('/class/students/' + classCode);
}
exports.useClassStudentList = useClassStudentList;
function classList() {
    return cominication_1["default"].get('/class/');
}
exports.classList = classList;
function classData(classCode) {
    return cominication_1["default"].get('/class/' + classCode);
}
exports.classData = classData;
