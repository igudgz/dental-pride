import React, {createContext, useState} from 'react';

const Context = createContext();


function AuthProvider({ children }) {
    const [logado,setLogado] = useState(false)
    const [usuario, setUsuario] = useState(null)


    return(
        <Context.Provider value={{logado,setLogado, usuario, setUsuario}}>
        {children}
        </Context.Provider>
    )
}

export {Context,AuthProvider}