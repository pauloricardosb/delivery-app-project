import React from 'react';
import { Link } from 'react-router-dom';
import UserFullName from './UserFullName';
import ButtonLogout from './ButtonLogout';
import '../css/sellerNavbar.css';

function SellerNavbar() {
  return (
    <div className="seller-navbar">
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
