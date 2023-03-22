import React from 'react'
import { useParams } from 'react-router-dom'

const Usuario = () => {

    const { id } = useParams()

    return (
        <div>
            <h1>Edição de usuário</h1>
            <h5>Você está editando o usuário de número: {id}</h5>
        </div>
  )
}

export default Usuario