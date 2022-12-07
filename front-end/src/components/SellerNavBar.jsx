import React from 'react';
import { Link } from 'react-router-dom';
import UserFullName from './UserFullName';
import ButtonLogout from './ButtonLogout';

function SellerNavbar() {
  return (
    <div>
      <Link
        to="/seller/orders"
        data-testid="seller_orders__element-navbar-link-orders"
      >
        PEDIDOS
      </Link>
      <UserFullName userType="seller_orders" />
      <ButtonLogout userType="seller_orders" />
    </div>
  );
}

export default SellerNavbar;
