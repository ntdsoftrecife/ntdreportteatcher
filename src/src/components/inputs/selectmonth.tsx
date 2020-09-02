import React, { ChangeEvent, memo } from 'react';



export interface SelectMonthProps {
    defaultNull?:boolean,
    value?:any,
    onChange?:(e:ChangeEvent<HTMLSelectElement>)=>any,
    autoFocus?:boolean
}
 
const SelectMonth: React.SFC<SelectMonthProps> = memo( ({defaultNull=true, value, onChange, autoFocus}) => {

    return <select value={value} onChange={onChange} autoFocus={autoFocus}>
        {
            !defaultNull ? null :
            <option value='' key={0}>Escolha o mês</option>
        }
        <option value={1}>Janeiro</option>
        <option value={2}>Fevereiro</option>
        <option value={3}>Março</option>
        <option value={4}>Abril</option>
        <option value={5}>Maio</option>
        <option value={6}>Junho</option>
        <option value={7}>Julho</option>
        <option value={8}>Agosto</option>
        <option value={9}>Setembro</option>
        <option value={10}>Outubro</option>
        <option value={11}>Novembro</option>
        <option value={12}>Dezembro</option>
    </select>
} )
 
export default SelectMonth;