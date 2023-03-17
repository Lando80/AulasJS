import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsuarios(response.data)
            })
    }, [])

  return (
    <div>
        <ul>
            {
                usuarios.map((usuario) => (
                    <li>
                        <div>{ usuario.name }</div>
                        <div>{ usuario.email}</div>
                        <br />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Usuarios