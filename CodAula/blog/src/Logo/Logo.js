import React from 'react'
import Imagem from './Logo.png'
import './Logo.css'

const Logo = () => {
  return (
    <div>
      <img src={Imagem} className="logo"/>
    </div>
  )
}

export default Logo