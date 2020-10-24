import React, { useState, useEffect } from 'react';
import Paper from '../../../components/paper';
import Title from '../../../components/title';
import { useClassList } from '../../../service/class';
import { Table } from '../../../components/table';



export interface ClassListProps {
    
}
 
const ClassList: React.SFC<ClassListProps> = () => {

    const { data, loaded, erro, errocode } = useClassList()
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

    return <Paper toTable={true} onLoad={e => setLoadPaper(true)} >
        <Title title='Turmas' />
        <Table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Turma</th>
                    <th>Tipo</th>
                    <th>Turno</th>
                    <th>Curso/Grau</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map( classData =>
                        <tr>
                            <td>{classData.Codigo}</td>
                            <td>{classData.Turma}</td>
                            <td>{classData.Turma_Tipo}</td>
                            <td>{classData.Turno}</td>
                            <td>{classData.Curso_Grau}</td>
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
 
export default ClassList;