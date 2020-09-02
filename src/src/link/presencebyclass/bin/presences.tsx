//@ts-nocheck


import React, { useEffect, useState, useCallback } from 'react';
import Paper from '../../../components/paper';
import { TstudentData, matriculeListDays } from '../../../service/lack';
import { Table } from '../../../components/table';
import Title from '../../../components/title';
import { useParams } from 'react-router-dom'
import { classData, TclassListData } from '../../../service/class';
import { printLandscape } from '../../../components/stylecompile';
import PrintPanel from '../../../components/printpanel';
import SelectYear from '../../../components/inputs/selectyear';
import SelectClass from '../../../components/inputs/selectclasses';
import SelectMonth from '../../../components/inputs/selectmonth';


export type Tmonth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12


export type TmatriculeListData = {
    alunoCodigo :number,
    alunoName :string,
    turmaCodigo :number,
    Turma :string,
    Turma_Tipo :string,
    Turno :string,
    Curso_Grau :string,
    matriculeCode:number
}


export type TParamsRequest = {year?:string, month?:string, class?:string};


export interface PresencesProps {
    
}


const monthsName = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

 
const Presences: React.SFC<PresencesProps> = () => {

    const [ year, setYear ] = useState<number>( (new Date()).getFullYear() )
    const [ classCode, setClassCode ] = useState<number>(0)
    const [ month, setMonth ] = useState<number>( (new Date()).getMonth() + 1 )

    const [data, setData] = useState<Array<Array<TstudentData>>>([])
    const [loaded, setLoaded] = useState<boolean>(false);

    const [dataClass, setdataClass] = useState<TclassListData>();

    const params:TParamsRequest = useParams<TParamsRequest>()

    useEffect(() => {
        printLandscape()
    },[])

    // const { data, loaded, erro, errocode, refresh } = useMatriculeList( year, classCode, month)
    // const { data:dataClass, loaded:loadClass, erro:erroClass, errocode:erroCodeClass, refresh:refreshClass } = useClassData(classCode)

    useEffect(() => {

        if(year && classCode && month)
            matriculeListDays(year, classCode, month).then( matricules => {
                if(matricules.erro) return window.alert(matricules.erro)
                setData(matricules)
            } ).catch( erro => {
                window.alert('ERRO ao tentar consultar a lista de matriculas\n'+erro)
            } )

    },[])

    useEffect(() => {
        classData(classCode).then( classData => {
            setdataClass(classData)
        } ).catch( erro => {
            window.alert('erro')
        } )
    },[classCode])

    const loadData = async () => {
        setLoaded(false)
        const result = await matriculeListDays(year, classCode, month)
        setData( result )
        setLoaded(true)
    }

    useEffect(() => {
        if(year && classCode && month) loadData()
    },[year, classCode, month])

    useEffect(() => {
        handleChangeInfos()
    },[params])


    const handleChangeInfos = async () => {
        if(Number( params.year )) setYear( Number( params.year ) )
        if(Number( params.class )) setClassCode( Number( params.class ) )
        if(Number( params.month )) setMonth( Number( params.month ) )
        await loadData()
    }

    const handlePrint = async () => {
        window.print()
    }

    return <>
            <PrintPanel load={!loaded || !year || !classCode || !month || (!(data || []).length) } onPrint={handlePrint}>
                <div className='grid-data'>
                    <div>ANO: </div>
                    <SelectYear value={year} onChange={e => setYear( Number(e.target.value) )} />
                    <div>TURMA: </div>
                    <SelectClass value={classCode} onChange={e => setClassCode( Number(e.target.value) || 0 )} />
                    <div>MÊS: </div>
                    <SelectMonth value={month} onChange={e => setMonth( Number(e.target.value) )} />
                    <div style={{gridColumn:'1/3'}}>
                        {
                            !year ? <div className='bg-color-red p10'>Escolha o ANO</div> :
                            !classCode ? <div className='bg-color-red p10'>Escolha a TURMA</div> :
                            !month ? <div className='bg-color-red p10'>Escolha o MÊS</div> :
                            !(data || []).length ?
                            'Nenhum registro encontrado nesta seleção' :
                            ''
                        }
                    </div>
                </div>
            </PrintPanel>
            {
                (!loaded) ?
                    <div className='flex-row center h100-porcent'>
                        AGUARDANDO...
                    </div> :

                (!data) ?
                    <div className='flex-row center h100-porcent'>
                        SEM INFORMAÇÔES RETORNADAS
                    </div> :

                ( data && data?.erro ) ?
                    <div className='flex-row center h100-porcent'>
                        ERRO: {data?.erro} - { data?.errocode}
                    </div> :

                (!(data || []).length) ?
                    <div className='flex-row center h100-porcent'>
                        NENHUM REGISTRO ENCONTRADO
                    </div> :
                    
                (() => {
                    var adjustTable:Array<Array<TstudentData>> = []
                    data.map( day => {
                        day.map( (student, index) => {
                            if( !adjustTable[index] ) adjustTable[index] = []
                            adjustTable[index].push( student )
                        } )
                    } )
                    return <Paper toTable={true}>
                            <Title
                                title='PRESENÇA DA TURMA'
                                subtitle={`${dataClass?.Turma} ${dataClass?.Turma_Tipo} ${dataClass?.Turno} - ${dataClass?.Curso_Grau} - ${year} - ${monthsName[month-1]}`}
                            />
                            {
                                !adjustTable.length ?
                                <div>Nenhum aluno encontrado nesta turma neste ano</div> :
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Cod.</th>
                                            <th>Aluno</th>
                                            {
                                                data.map( (day,index) => <th key={index}>{ ('00'+(index+1)).substr(-2) }</th> )
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            adjustTable
                                            .sort( (a,b) => a[0].alunoNome.toLowerCase() < b[0].alunoNome.toLowerCase() ? -1 : 1 )
                                            .map( student => {
                                                return <tr key={student[0].matriculaCode}>
                                                    <td>{student[0].alunoCodigo}</td>
                                                    <td>{student[0].alunoNome}</td>
                                                    {
                                                        student.map( (days, index) => {
                                                            return <td
                                                                key={ index }
                                                                title={
                                                                    days.description || undefined
                                                                }
                                                            >
                                                                {days.lack}
                                                            </td>
                                                        } )
                                                    }
                                                </tr>
                                            } )
                                        }
                                    </tbody>
                                </Table>
                            }
                            <div className='f10 color-dark-grey flex-row p5'>
                                <div className='left'>
                                    {adjustTable.length} registros
                                </div>
                                <div className='right flex-1 flex-row gap20'>
                                    <div>c - Compareceu</div>
                                    <div>fj - Falta justificada</div>
                                    <div>fnj - Falta não justificada</div>
                                </div>
                            </div>
                        </Paper>
                })()
            }
        </>

}
 
export default Presences;