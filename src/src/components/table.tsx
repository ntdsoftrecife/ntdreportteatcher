import React from 'react';
import styled from 'styled-components'



const Table = styled.table`
    border-collapse: collapse;
    th, td{
        padding:5px 5px;
        border:solid 1px var(--color-smooth);
    }
    thead th{
        font-weight:bold;
        background-color:var(--color-grey);
    }
    tbody tr:nth-child(2n+2) td{
        background-color:var(--color-smoth); 
    }
`


export {
    Table
}