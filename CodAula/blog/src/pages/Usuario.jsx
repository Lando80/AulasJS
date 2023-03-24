import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UsuariosContext } from '../context/UsuariosContext'

const Usuario = () => {
  const { id } = useParams()
  const {usuarios, setUsuarios} = useContext(UsuariosContext)
  const [usuario, setUsuario] = useState()

  useEffect(() => {
    setUsuario(usuarios.filter((usuario) => usuario.id === parseInt(id))[0])
  }, [])
  

  return (
    <div>
        <h1>Edição de Usuário</h1>
        <h5>Você está editando o usuário de id: { id }</h5>
        <p>O valor do context é: { usuario?.nome }</p>
    </div>
  )
}

export default Usuario