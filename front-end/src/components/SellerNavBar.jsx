import React from 'react';
import { Link } from 'react-router-dom';
import UserFullName from './UserFullName';
import ButtonLogout from './ButtonLogout';

function SellerNavbar() {
  return (
    <div>
      <Link
        to="/seller/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        PEDIDOS
      </Link>
      <UserFullName />
      <ButtonLogout />
    </div>
  );
}

export default SellerNavbar;
