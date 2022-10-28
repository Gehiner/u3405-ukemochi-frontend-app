import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Componentes/Header/Header';
import HeaderAdmin from './Componentes/Header/HeaderAdmin';
import Productos from './Componentes/Tablas/Productos';
import Usuarios from './Componentes/Tablas/Usuarios';
import CrearUsuarios from './Componentes/Create/CrearUsuarios';
import CrearProductos from './Componentes/Create/CrearProductos';
import {BrowserRouter, Routes, Route} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderAdmin/>
    <BrowserRouter>
      <Routes>
        <Route path='/productos' element={<Productos/>} exact>
        </Route>

        <Route path='/productos/create' element={<CrearProductos/>} exact>
        </Route>

        <Route path='/usuarios' element={<Usuarios/>} exact>
        </Route>

        <Route path='/usuarios/crear' element={<CrearUsuarios/>} exact>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



