import React, { useState, useEffect } from 'react';
import Paper from '../../../components/paper';
import Title from '../../../components/title';
import styled from 'styled-components'
import { useStudentsList } from '../../../service/student';
import { Table } from '../../../components/table';



export interface StudentListProps {
    
}
 
const StudentList: React.SFC<StudentListProps> = () => {

    const { data, loaded, erro, errocode } = useStudentsList()
    const [loadPaper, setLoadPaper] = useState<boolean>(false);

    useEffect(() => {
        if(loadPaper && data) window.print()
    },[loadPaper, data])

    if(!loaded)
        return <div className='flex-row center flex-1'>
            CARREGANDO LISTA DE TURMAS...
        </div>

    if(erro)
        return <div className='flex-row center flex-1'>
            {erro} - {errocode}
        </div>

    if(!data)
        return <div className='flex-row center flex-1'>
            NENHUM REGISTRO ENCONTRADO
        </div>

    if(!(data || []).length)
        return <div className='flex-row center flex-1'>
            NENHUM REGISTRO ENCONTRADO
        </div>

    var studentsList = data.sort( (a,b) => a.Nome.toLowerCase() < b.Nome.toLowerCase() ? -1 : 1 )

    return <Paper toTable={true} onLoad={e => setLoadPaper(true)} >
        <Title title='Turmas' />
        <Table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Aluno</th>
                    <th>Responsável</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map( classData =>
                        <tr>
                            <td>{classData.Codigo}</td>
                            <td>{classData.Nome}</td>
                            <td>{classData.Responsavel}</td>
                        </tr>
                    )
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5}>{data.length} registros</td>
                </tr>
            </tfoot>
        </Table>
    </Paper>
    
}
 
export default StudentList;