import React from 'react'
import Imagem from './matrix.jpeg'
import './Logo.css'

const Logo = () => {
  return (
    <div>
        <img src={Imagem} className='logo'/>
    </div>
  )
}

export default Logo