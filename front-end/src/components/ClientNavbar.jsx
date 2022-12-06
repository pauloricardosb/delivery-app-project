import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { localUser } from '../helpers/localStorage';

function ClientNavbar() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const { name } = localUser();
    setUserName(name);
  }, []);

  return (
    <div>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </Link>
      <Link
        to="/costumer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </Link>
      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { userName }
      </p>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </div>
  );
}

export default ClientNavbar;
