import * as comunication from './cominication'



export type TexerciseList = {
    id:number,
    titulo:string,
    qtd_pergunta:number,
    ano:number,
    chance:number,
    datecreate:string | Date,
    tCodigo:number,
    Turma:string,
    Turma_Tipo:string,
    Turno:string,
    Curso_Grau:string,
    dCodigo:number,
    Disciplina:string,
    UsuCodigo:number,
    UsuNomeCompleto:string,
    totalmatriculas:number,
}



export const listExercise = async function(){
    const url = '/exercicios/listaexercicios'
    return await comunication.get<TexerciseList[] & {erro:string}>(url)
}