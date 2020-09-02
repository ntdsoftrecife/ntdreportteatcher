import React from 'react';
import {Route} from 'react-router-dom'
import StudentList from './bin/studentlist';


export interface StudentProps {
    
}
 
const Student: React.SFC<StudentProps> = () => {
    return <>
            <Route path='/report/studentlist'>
                <StudentList />
            </Route>
        </>
}
 
export default Student;