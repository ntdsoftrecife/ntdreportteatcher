import React from 'react';
import { useComunication } from './cominication';



export type TstudentList = {
    Codigo:number,
    Nome:string,
    Responsavel:string
}


function useStudentsList(){
    return useComunication<Array<TstudentList>>('/students')
}



export {
    useStudentsList
}