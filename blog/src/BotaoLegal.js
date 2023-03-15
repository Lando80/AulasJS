import React from 'react'
import './BotaoLegal.css'

const BotaoLegal = ({ texto }) => {
  
    return (
    <button className='botaoLegal'>
        { texto }
    </button>
  )
}

export default BotaoLegal