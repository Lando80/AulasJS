import { useState } from 'react'

const Login = () => {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [type, setType] = useState('password')

  const handleSubmit = (event) => {
    event.preventDefault()
    setLogin('')
    setSenha('')
  }

  const handleClick = () => {
    setType(type == 'text' ? 'password' : 'text')
  }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder='Login' onChange={(e) => setLogin(e.target.value)} value={login}/>    
        </div>
        <div>
            <input type={type} placeholder='Senha' onChange={(e) => setSenha(e.target.value)} value={senha}/>
            <button onClick={handleClick} type="button">º</button>
        </div>
        <input type="submit" value="Login"/>
        <div>
            { login } / { senha }
        </div>
    </form>
  )
}

export default Login