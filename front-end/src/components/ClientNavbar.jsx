import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import UserFullName from './UserFullName';
import ButtonLogout from './ButtonLogout';
import '../css/clientNavBar.css';

function ClientNavbar() {
  return (
    <div>
      <div className="client-nav-bar">
        <Link
          className="client-nav-bar-link"
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Link>
        <Link
          className="client-nav-bar-link"
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
      </div>
      <div className="client-name">
        <BsPersonCircle className="icon-client" />
        <UserFullName userType="customer_products" />
      </div>
      <div className="button-sair">
        <ButtonLogout userType="customer_products" />
      </div>
    </div>
  );
}

export default ClientNavbar;
