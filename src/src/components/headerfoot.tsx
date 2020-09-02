import React from 'react';
import useScholl, { Tscholl } from '../service/school';
import styled from 'styled-components'



const Header = styled.div`
    border:solid 1px #000;
    border-radius:5px;
    img{
        max-width:100px;
        max-height:50px;
    }
`


const Foot = styled.div`
    border-top:solid 1px var(--color-dark-grey);
    border-bottom:solid 1px var(--color-dark-grey);
    padding:2px 10px;
    margin-top:10px;
`


export interface HeaderFootProps {
    children:any,
    foto?:string,
    onLoad?:(scholl?:Tscholl)=>any
}
 
const HeaderFoot: React.SFC<HeaderFootProps> = ({children, foto='', onLoad}) => {

    const {data, loaded, erro, errocode} = useScholl()

    if(!loaded)
        return <div className='flex-row center h100-porcent'>
            CARREGANDO DADOS DA EMPRESA
        </div>

    if(erro)
        return <div className='flex-row center h100-porcent'>
            {erro}
        </div>

    if(!data)
        return <div className='flex-row center h100-porcent'>
            dados da empresa não retornados
        </div>

    if(onLoad) onLoad(data)

    return <>

            <Header className='flex-row gap10 p10 center'>
                <div>
                    <img src={`https://ntdsoft.net.br:8114/scholl/logoscholl?token=${localStorage.getItem('tokenProfessor')}`} />
                </div>
                <div className='flex-1 center'>
                    <div>{data.Nome}</div>
                    <div>{data.Endereco} - {data.Bairro} - {data.Cidade} - {data.UF} - {data.CEP}</div>
                    <div><b>Email:</b> {data.Email} / <b>Fone:</b> {data.Fone} {data.Fax ? '/ ' + data.Fax : ''}</div>
                </div>
                {
                    !foto ? null :
                    <div>
                        <img src={foto} />
                    </div>
                }
            </Header>

            {children}

            <Foot className='flex-row f10'>
                <div className='flex-1 left'>Soft Gestão escolar</div>
                <div className='flex-1 right'>NTD Soft e Digital</div>
            </Foot>

        </>
}
 
export default HeaderFoot;