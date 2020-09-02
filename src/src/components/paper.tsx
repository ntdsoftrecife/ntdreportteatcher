import React from 'react';
import HeaderFoot from './headerfoot';
import { Tscholl } from '../service/school';


export interface PaperProps {
    children:any,
    toTable?:boolean,
    onLoad?:(scholl?:Tscholl)=>any
}
 
const Paper: React.SFC<PaperProps> = ({children, toTable=false, onLoad}) => {

    if(toTable)
        return <HeaderFoot onLoad={onLoad}>
                <span className='flex-1'>
                    {children}
                </span>
            </HeaderFoot>

    return <div className='paper h100-porcent flex-column'>
        <HeaderFoot>
            <span className='flex-1'>
                {children}
            </span>
        </HeaderFoot>
    </div>
}
 
export default Paper;