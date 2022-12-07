import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" index element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/customer/products" element={ <Products /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
