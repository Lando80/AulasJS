import React from 'react'
import './BotaoLegal.css'

const BotaoLegal = ({ texto, cor }) => {

  return (
    <button className={ 'botaoLegal ' + cor }>
        { texto ?? 'Texto padrão' }
    </button>
  )
}

export default BotaoLegal