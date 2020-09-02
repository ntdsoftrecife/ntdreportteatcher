import React, { ChangeEvent, memo, useEffect, useRef } from 'react';



export interface SelectYearProps {
    defaultNull?:boolean,
    value?:any,
    onChange?:(e:ChangeEvent<HTMLSelectElement>)=>any,
    autoFocus?:boolean
}
 
const SelectYear: React.SFC<SelectYearProps> = memo( ({defaultNull=false, value, onChange, autoFocus}) => {

    var years = []
    var yearNow = (new Date()).getFullYear()
    for( var year = yearNow - 30; year <= yearNow + 10; year++ )
        years.push(year)

    return <select value={value} onChange={onChange} autoFocus={autoFocus}>
        {
            !defaultNull ? null :
            <option value='' key={0}>Escolha o ano</option>
        }
        {
            years.map(
                year => <option value={year} key={year}>{year}</option>
            )
        }
    </select>
} )
 
export default SelectYear;