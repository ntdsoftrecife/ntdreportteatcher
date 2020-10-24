import { useState, useEffect } from "react"
import axios from 'axios'


const TEST:number = 0

export const HOST = TEST === 1 ? 'http://localhost:8888/' :
    'https://ntdsoft.net.br:8114/'


const api = axios.create({
    baseURL:HOST,
    headers:{
        token: window.localStorage.getItem('tokenProfessor')
    }
})


export type TinsertUpdateDelete = {
    insertId:number,
    affectedRows:number
}


export type Terro = {
    erro?:any,
    errocode?:any
}


export type Tprops = {
    headers?:{
        token?:string
    }
}

export const getToken = () => {
    return window.localStorage.getItem('tokenProfessor') || ''
}


export async function get<RETURN=any>(url:string, props:Tprops={}):Promise<RETURN>{
    try{
        const result = await api.get(url, props)
        return result.data;
    }catch(erro){
        const result:any = {erro:erro, errocode:erro.code}
        return result;
    }
}


export async function post<RETURN=any, DATA=any>(url:string, data?:DATA, props:Tprops={}):Promise<RETURN>{
    try{
        const result = await api.post(url, data, props)
        return result.data;
    }catch(erro){
        const result:any = {erro, errocode:erro.code}
        return result;
    }
}


export async function put<RETURN=any, DATA=any>(url:string, data?:DATA, props:Tprops={}):Promise<RETURN>{
    try{
        const result = await api.put(url, data, props)
        return result.data;
    }catch(erro){
        const result:any = {erro, errocode:erro.code}
        return result;
    }
}


export async function deleteFunction<RETURN=any>(url:string, props:Tprops={}):Promise<RETURN>{
    try{
        const result = await api.delete(url, props)
        return result.data;
    }catch(erro){
        const result:any = {erro, errocode:erro.code}
        return result;
    }
}


export const comunication = { get, post, put, delete:deleteFunction }


export function useComunication<RETURN=any>(url:string):{
    loaded:boolean, data:RETURN | undefined, erro:string, errocode:string, refresh:()=>any, randomRefreshNumber:number
}{

    const [loaded, setLoaded] = useState<boolean>(false);
    const [data, setData] = useState<RETURN>();
    const [erro, setErro] = useState<string>('');
    const [errocode, setErrocode] = useState<string>('');
    const [refreshData, setRefreshData] = useState<number>(0);

    useEffect(() => {
        comunication.get<RETURN>(url)
                .then( (result:any) => {
                    setData(result)
                    setLoaded(true)
                    if(result.erro) setErro(result.erro)
                    if(result.errocode) setErro(result.errocode)
                } )
                .catch( erro => {
                    setErro(erro+'')
                    setLoaded(true)
                })
    },[])

    return {
        loaded, data:data, erro, errocode,
        refresh:() => setRefreshData( Math.round( Math.random() * 100000000 ) ),
        randomRefreshNumber:refreshData
    };
}


export default comunication