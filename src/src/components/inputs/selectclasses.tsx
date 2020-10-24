import React, { memo, ChangeEvent } from 'react';
import { useClassList } from '../../service/class';



export interface SelectClassProps {
    defaultNull?:boolean,
    value?:any,
    onChange?:(e:ChangeEvent<HTMLSelectElement>)=>any,
    autoFocus?:boolean
}
 
const SelectClass: React.SFC<SelectClassProps> = memo( ({defaultNull=true, value, onChange, autoFocus}) => {

    const { data, loaded, erro, errocode } = useClassList()

    if(!loaded)
        return <span className='h100-porcent flex-row center b p10'>CARREGANDO...</span>

    if(erro)
        return <span className='h100-porcent flex-row center b p10'>{erro} - {errocode}</span>

    if(!data)
        return <span className='h100-porcent flex-row center b p10'>{erro} - {errocode}</span>

    console.log('data :>> ', data);

    return <select value={value} onChange={onChange} autoFocus={autoFocus}>
        {
            !defaultNull ? null :
            <option value='' key={0}>Escolha a turma</option>
        }
        {
            data.map(
                classData => <option value={classData.Codigo} key={classData.Codigo}>{classData.Turma} {classData.Turma_Tipo} {classData.Turno} {classData.Curso_Grau}</option>
            )
        }
    </select>
} )
 
export default SelectClass;