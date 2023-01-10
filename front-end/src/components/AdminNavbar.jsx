import React from 'react';
import { Link } from 'react-router-dom';
import UserFullName from './UserFullName';
import ButtonLogout from './ButtonLogout';
import '../css/adminNavbar.css';

function AdminNavbar() {
  return (
    <div className="admin-nav-bar">
      <Link
        to="/admin/manage"
        data-testid="admin__element-navbar-link-users"
        style={ { color: 'white' } }
      >
        GERENCIAR USUÁRIOS
      </Link>
      <UserFullName userType="admin" />
      <ButtonLogout userType="admin" />
    </div>
  );
}

export default AdminNavbar;
