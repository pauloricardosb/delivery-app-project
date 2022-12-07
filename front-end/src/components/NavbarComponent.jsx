import React, { useState, useEffect } from 'react';
import ClientNavbar from './ClientNavbar';
import { localUser } from '../helpers/localStorage';
import SellerNavbar from './SellerNavBar';

function NavbarComponent() {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const { role } = localUser();
    setUserRole(role);
  }, []);

  const navBar = () => {
    if (userRole === 'customer') {
      return <ClientNavbar />;
    }
    if (userRole === 'seller') {
      return <SellerNavbar />;
    }
  };

  return (
    <nav>
      { navBar() }
    </nav>
  );
}

export default NavbarComponent;
