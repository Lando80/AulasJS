import React from 'react'
import { Link } from 'react-router-dom'

const Contato = () => {

    const usuarios = [
        {id: 1, name: "João"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Pedro" }
    ]

  return (
    <div>
      {
        usuarios.map((usuario) => (
            <div>
                <span>{ usuario.name }</span><br/>
                <Link to={"/usuario/"+usuario.id}>Editar usuário</Link>
                <br/><br/>
            </div>
        ))
      }
    </div>
  )
}

export default Contato