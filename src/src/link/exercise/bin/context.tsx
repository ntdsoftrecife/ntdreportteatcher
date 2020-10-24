import * as React from 'react';





const defaultValue = {}

const LocalContext = React.createContext(defaultValue)


export const LocalProvider:React.FC = ({children}) => {

    return <LocalContext.Provider
        value={{

        }}
    >
        {children}
    </LocalContext.Provider>

}


export const useLocalContext = () => {
    return React.useContext(LocalContext)
}