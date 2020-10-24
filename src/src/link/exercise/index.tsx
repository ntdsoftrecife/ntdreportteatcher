import * as React from 'react';
import { Route } from 'react-router-dom';
import { LocalProvider } from './bin/context';
import PagePrint from './bin/pageprint';
import SelectItens from './bin/selectitens';


export interface PrintExerciseProps {
    
}
 
const PrintExercise: React.SFC<PrintExerciseProps> = () => {

    return <LocalProvider>
            <Route path='/report/exercise/:idExercise?'>
                <SelectItens />
                <PagePrint />
            </Route>
        </LocalProvider>

}
 
export default PrintExercise;