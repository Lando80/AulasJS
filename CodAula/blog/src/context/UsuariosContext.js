import { createContext, useState } from "react";

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({ children }) => {
    const [usuarios, setUsuarios] = useState([
        {id: 1, nome: 'João'},
        {id: 2, nome: 'Maria'},
        {id: 3, nome: "Roberta"}
      ])

    return (
        <UsuariosContext.Provider value={{ usuarios, setUsuarios }}>
            { children }
        </UsuariosContext.Provider>
    )
}

