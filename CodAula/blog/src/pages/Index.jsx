import React, { useEffect, useState } from 'react'

const Index = () => {
  const [usuario, setUsuario] = useState("")

  useEffect(() => {
    let valorSalvo = localStorage.getItem("nomeDoUsuario")
    if (valorSalvo) {
      setUsuario(valorSalvo)
    } else {
      let valorDigitado = prompt("Digite seu nome")
      setUsuario(valorDigitado)
      localStorage.setItem("nomeDoUsuario", valorDigitado)
    }
  }, [])
  return (
    <div>
      O valor digitado é: { usuario }
    </div>
  )
}

export default Index