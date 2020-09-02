import React from 'react';
import { Route } from 'react-router-dom';
import Presences from './bin/presences';


export interface PresenceByClassProps {
    
}
 
const PresenceByClass: React.SFC<PresenceByClassProps> = () => {
    return <Route path='/report/presencebyclass/:year?/:month?/:class?'>
        <Presences />
    </Route>
}
 
export default PresenceByClass;