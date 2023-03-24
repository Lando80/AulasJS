import React, { useState } from 'react'

const ConsultaApi = () => {
  var [erro, setErro] = useState(false)

  /* código complexo com erro */
  setTimeout(() => {
    setErro(true)
  }, 2000)

  return (
    <div>
        { erro == true ? (<p>Há erros</p>) : (null) }
    </div>
  )
}

export default ConsultaApi