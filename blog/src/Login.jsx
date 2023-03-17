import React, { useState } from 'react'

const Login = () => {

    

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [type, setType] = useState('password')
    const [valorBotao, setValorBotao] = useState('Mostrar Senha')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setLogin('')
    setSenha('')
    setType('password')
  }

  const mostrarSenha = (event) => {
    event.preventDefault()
       if(type == "password"){
            setType('type')
            setValorBotao('Ocultar Senha')
       }else{
            setType('password')
            setValorBotao('Mostrar Senha')
       }
    
   

  }
  
    return (
    <>
        <br />
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='Login'
                       onChange={(e) => setLogin(e.target.value)}
                       value={login} />
                       
            </div>
            <div>
                <input type={type} placeholder='Senha'
                       onChange={(e) => setSenha(e.target.value)}
                       value={senha} />
                <button onClick={mostrarSenha}>{valorBotao}</button>
                       
            </div>

            <input type="submit" value="Login" />

            <div>
                {login} / {senha}
            </div>
        </form>
        <br />
    </>
  )
}

export default Login