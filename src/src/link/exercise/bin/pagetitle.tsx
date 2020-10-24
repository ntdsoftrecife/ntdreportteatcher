import * as React from 'react';



export interface PageTitleProps {
    
}
 
const PageTitle: React.SFC<PageTitleProps> = () => {

    return <div className='page flex-column'>
        <div>
            <div>
                <div>Nome da escola</div>
                <div>Fone: (81) 00000-0000</div>
                <div>www.sitedaescola.com.br</div>
            </div>
        </div>
        <div className=''>
            <div>
                <div>Exercício sobre a descoberta do brasil</div>
                <div>História</div>
            </div>
        </div>
        <div>
            <div>
                <div>Aluno:</div>
                <div>______________________</div>
                <div>Data: 25/09/2020</div>
            </div>
        </div>
    </div>

}
 
export default PageTitle;