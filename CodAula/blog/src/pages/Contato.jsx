import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UsuariosContext } from '../context/UsuariosContext'

const Contato = () => {
  
  const {usuarios, setUsuarios} = useContext(UsuariosContext)

  return (
    <div>
        {
            usuarios.map((usuario) => (
                <div key={usuario.id}>
                    <span>{ usuario.nome }</span><br/>
                    <Link to={`/usuario/${usuario.id}`}>Editar Usuário</Link>
                    <br/><br/>
                </div>
            ))
        }
    </div>
  )
}

export default Contato