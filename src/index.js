import React from 'react';
import ReactDOM from 'react-dom/client';
import Productos from './Componentes/Tablas/Productos';
import Usuarios from './Componentes/Tablas/Usuarios';
import CrearUsuarios from './Componentes/Create/CrearUsuarios';
import CrearProductos from './Componentes/Create/CrearProductos';
import Carrito from './Componentes/Usuarios/Carrito';
import CardProductos from './Componentes/Usuarios/CardProductos';
import ContendHome from './Componentes/Usuarios/ContendHome';
import {BrowserRouter, Routes, Route} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route 
          path='/' 
          element={<ContendHome/>} 
          exact>
        </Route>

        <Route 
          path='/productos' 
          element={<Productos/>} 
          exact>
        </Route>

        <Route 
          path='/productos/create' 
          element={<CrearProductos/>} 
          exact>
        </Route>

        <Route 
          path='/usuarios' 
          element={<Usuarios/>} 
          exact>
        </Route>

        <Route 
          path='/usuarios/crear' 
          element={<CrearUsuarios/>} 
          exact>
        </Route>

        <Route 
          path='/candys' 
          element={<CardProductos/>} 
          exact>
        </Route>

        <Route 
          path='/carrito' 
          element={<Carrito/>} 
          exact>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);





