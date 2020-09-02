import React from 'react';


export interface TitleProps {
    title:string,
    subtitle?:string
}
 
const Title: React.SFC<TitleProps> = ({title, subtitle=''}) => {
    return <div className='center p10'>
        <div className='b f18'>{title}</div>
        {
            !subtitle ? null :
            <div className='f12 color-dark-grey'>{subtitle}</div>
        }
    </div>
}
 
export default Title;