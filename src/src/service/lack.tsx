import React from 'react';
import comunication, { useComunication } from './cominication';

// /lack/:year/:classCode

export type TstudentData = {
    Responsavel: string,
    alunoCodigo: number,
    alunoNome: string,
    cause: string,
    classPresenceId: number,
    date: string,
    description: string
    lack: string,
    matriculaCode: number
}


// export type Tmonth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type Tmonth = number

const corrigeNumber = (number:number) => {
    return ('00'+number).substr(-2)
}


const monthLimit = (year:number, month:Tmonth):number => {
    const adjustFevDate = (year % 4 === 0) ? 29 : 28 ;
    return ([ 31, adjustFevDate, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ])[month - 1]
}


const useMatriculeList = (year:number, classCode:number, month:Tmonth) => {
    return useComunication<Array<Array<TstudentData>>>(
            `/classpresence/students?year=${year}&classCode=${classCode}&dateFrom=${year}/${month}/01&dateTo=${year}/${month}/${corrigeNumber(monthLimit(year, month))}`
        )
}


const matriculeList = async (year:number, classCode:number, month:Tmonth) => {
    return await comunication.get<Array<Array<TstudentData>> | {erro:string, errocode:string}>(
        `/classpresence/students?year=${year}&classCode=${classCode}&dateFrom=${year}/${month}/01&dateTo=${year}/${month}/${corrigeNumber(monthLimit(year, month))}`
    )
}


const matriculeListDays = async (year:number, classCode:number, month:Tmonth) => {
    return await comunication.get<Array<Array<TstudentData>> | {erro:string, errocode:string}>(
        `/classpresence/studentsdays?year=${year}&classCode=${classCode}&dateFrom=${year}/${month}/01&dateTo=${year}/${month}/${corrigeNumber(monthLimit(year, month))}`
    )
}



export {
    useMatriculeList,
    matriculeList,
    matriculeListDays
}