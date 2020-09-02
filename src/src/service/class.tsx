import React from 'react';
import comunication, { useComunication } from './cominication';


export type TclassListData = {
    Codigo:number,
    Turma:string,
    Turma_Tipo:string,
    Turno:string,
    Curso_Grau:string
}


export type TClassDisciplineData = {
    disciplinaCodigo:number,
    Disciplina:string,
    turmaDisciplinaCodigo:number,
    turmaDisciplinaAnoBase:number
}


export type TClassStudentData = {
    matriculaCod:number,
    alunoCodigo:number,
    alunoName:string
}



function useClassList(){
    return useComunication<Array<TclassListData>>('/class')
}


function useClassData(classCode:number){
    return useComunication<TclassListData>('/class/' + classCode)
}


function useClassDisciplineList(classCode:number){
    return useComunication<Array<TClassDisciplineData>>('/class/disciplines/'+classCode)
}


function useClassStudentList(classCode:number){
    return useComunication<Array<TClassStudentData>>('/class/students/'+classCode)
}



function classList():Promise<Array<TclassListData>>{
    return comunication.get<Array<TclassListData>>('/class/')
}


function classData(classCode:number):Promise<TclassListData>{
    return comunication.get<TclassListData>('/class/' + classCode)
}


export {
    useClassList,
    useClassData,
    useClassDisciplineList,
    useClassStudentList,
    classList,
    classData
}