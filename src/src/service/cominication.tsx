//@ts-nocheck


import { useState, useEffect } from "react"

const axios = require('axios')


const TEST = 0

const HOST = TEST === 1 ? 'http://localhost:8888/' :
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
    erro:string,
    errocode:string
}


export type Tprops = {
    headers:{
        token:string
    }
}

const getToken = () => {
    return window.localStorage.getItem('tokenProfessor') | ''
}


async function get<RETURN>(url:string, props?:Tprops={}):Promise<RETURN>{
    try{
        const result = await api.get(url, props)
        return result.data;
    }catch(erro){
        return {erro, errocode:erro.code}
    }
}


async function post<RETURN, DATA>(url:string, data?:DATA, props?:Tprops={}):Promise<RETURN>{
    try{
        const result = await api.post(url, data, props)
        return result.data;
    }catch(erro){
        return {erro, errocode:erro.code}
    }
}


async function put<RETURN, DATA>(url:string, data?:DATA, props?:Tprops={}):Promise<RETURN>{
    try{
        const result = await api.put(url, data, props)
        return result.data;
    }catch(erro){
        return {erro, errocode:erro.code}
    }
}


async function deleteFunction<RETURN>(url:string, props?:Tprops={}):Promise<RETURN>{
    try{
        const result = await api.delete(url, props)
        return result.data;
    }catch(erro){
        return {erro, errocode:erro.code}
    }
}


const comunication = { get, post, put, delete:deleteFunction }


function useComunication<RETURN>(url:string):{
    loaded:boolean, data:RETURN, erro:string, errocode:string, refresh:()=>any
}{

    const [loaded, setLoaded] = useState<boolean>(false);
    const [data, setData] = useState<RETURN | null | Terro>(null);
    const [erro, setErro] = useState<string>('');
    const [errocode, setErrocode] = useState<string>('');
    const [refreshData, setRefreshData] = useState<number>(0);

    useEffect(() => {
        comunication.get<RETURN>(url)
                .then( result => {
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
        loaded, data, erro, errocode,
        refresh:():any => setRefreshData( Math.round( Math.random() * 100000000 ) ),
        randomRefreshNumber:refreshData
    };
}


export default comunication
export {
    useComunication, HOST
}