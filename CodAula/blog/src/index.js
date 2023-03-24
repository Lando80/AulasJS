import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { UsuariosContextProvider } from './context/UsuariosContext';
import Contato from './pages/Contato';
import Index from './pages/Index';
import Sobre from './pages/Sobre';
import Usuario from './pages/Usuario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Minha Aplicação Linda</h1>
    <UsuariosContextProvider>
      <BrowserRouter>
        <Link to="/">Home</Link> | 
        <Link to="/sobre">Sobre</Link> | 
        <Link to="/contato">Contato</Link>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/contato' element={<Contato/>}/>
          <Route path='/usuario/:id/' element={<Usuario/>}/>
        </Routes>
      </BrowserRouter>
    </UsuariosContextProvider>
  </div>
);
