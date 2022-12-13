import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import SellerOrders from './pages/SellerOrders';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" index element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/seller/orders" element={ <SellerOrders /> } />
        <Route path="/seller/orders/:id" element={ <OrderDetails /> } />
        <Route path="/customer/orders" element={ <Orders /> } />
        <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
        <Route path="/admin/manage" element={ <Admin /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
