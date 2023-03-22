import React, { useState } from 'react'

const Imc = () => {

    const [peso, setPeso] = useState()
    const [altura, setAltura] = useState()
    const [imc, setImc] = useState()
  return (
    <div>
        <form>
            <div><label htmlFor="peso">Peso: </label>
                <input type="number" placeholder='Digite o peso' step="0.01" id='peso'onChange={(evento) => setPeso(evento.target.value)} value={peso}/>
            </div>
            <div>
                <label htmlFor="">Altura: </label>
                <input type="number" placeholder='Digite a altura' step="0.01" id='altura' onChange={(envento) => setAltura(envento.target.value)} value={altura}/>
            </div>
            <div>
                <input type="submit" value="Calcular"/>
            </div>
        </form>
    </div>
  )
}

export default Imc