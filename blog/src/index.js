import React from 'react';
import ReactDOM from 'react-dom/client';
import Botao from './Botao';
import Logo from './Logo';
import ListaTarefas from './ListaTarefas';
import ListaImagens from './ListaImagens';
import BotaoLegal from './BotaoLegal';
import Alert from './Alert';
import Login from './Login';
import Usuarios from './Usuarios/Usuarios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Olá Enfermeira</h1>
    <Logo/>
    <Botao/>
    <ListaTarefas/>
    <ListaImagens/>
    <BotaoLegal texto="Cadastrar"/>
    <BotaoLegal texto="Um rango Legal"/>
    <Alert>
      <p>Descrição do Erro</p>
    </Alert>
    <Login/>
    <Usuarios/>
    
  </div>
);

