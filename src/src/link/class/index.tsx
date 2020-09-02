import React from 'react';
import {Route} from 'react-router-dom'
import ClassList from './bin/classlist';


export interface ClassesSchollProps {
    
}
 
const ClassesScholl: React.SFC<ClassesSchollProps> = () => {
    return <>
            <Route path='/report/classlist'>
                <ClassList />
            </Route>
        </>
}
 
export default ClassesScholl;