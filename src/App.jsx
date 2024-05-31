import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './componentes/Header';
import { GlobalContextProvider } from './context/GlobalContext';
import { Login } from './vistas/Login';
import { Panel } from './vistas/Panel';
import { Registro } from './vistas/Registro';


function App() {
  return (
    <GlobalContextProvider>
    <div className="container-fluid">
      <Header />

      <Routes>
        <Route path="/" element={<Panel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
    </GlobalContextProvider>
  );
}

export default App;