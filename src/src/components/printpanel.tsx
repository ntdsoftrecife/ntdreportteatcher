import React from 'react';



export interface PrintPanelProps {
    onPrint?:()=>any,
    load:boolean
}
 
const PrintPanel: React.SFC<PrintPanelProps> = ({ onPrint, load, children }) => {

    const handlePrint = (e:any) => {
        if(load) return;
        if(onPrint) return onPrint()
        window.print()
    }

    return <div className='h100-porcent no-print flex-row center'>
        <div className='bg-color-smooth border-radius-4 shadow-3 flex-column gap20 p20 bg-color-theme-1'>
            <div>
                {children}
            </div>
            <div>
                <button onClick={handlePrint} className='bg-color-theme-2'>{ load ? 'PROCESSANDO...' : 'IMPRIMIR' }</button>
            </div>
        </div>
    </div>
}
 
export default PrintPanel;