import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Pedido from './Pages/Pedido';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Pedido />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;