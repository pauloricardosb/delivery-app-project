import React, { useState, useEffect } from 'react';
import ClientNavbar from './ClientNavbar';
import AdminNavbar from './AdminNavbar';
import { localUser } from '../helpers/localStorage';
import SellerNavbar from './SellerNavBar';
import '../css/navbar.css';

function NavbarComponent() {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const { role } = localUser();
    setUserRole(role);
  }, []);

  const navBar = () => {
    if (userRole === 'customer') {
      return <ClientNavbar />;
    } if (userRole === 'administrator') {
      return <AdminNavbar />;
    }
    if (userRole === 'seller') {
      return <SellerNavbar />;
    }
  };

  return (
    <nav className="navbar">
      { navBar() }
    </nav>
  );
}

export default NavbarComponent;
