import React from 'react';
import ReactDOM from 'react-dom/client';
import Botao from './Botao';
import Logo from './Logo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Olá Enfermeira</h1>
    <Logo/>
    <Botao/>
  </div>
);

