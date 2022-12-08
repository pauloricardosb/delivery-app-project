import React from 'react';
import { Link } from 'react-router-dom';
import UserFullName from './UserFullName';
import ButtonLogout from './ButtonLogout';

function AdminNavbar() {
  return (
    <div>
      <Link
        to="/admin/manage"
        data-testid="admin__element-navbar-link-users"
      >
        GERENCIAR USUÁRIOS
      </Link>
      <UserFullName userType="admin" />
      <ButtonLogout userType="admin" />
    </div>
  );
}

export default AdminNavbar;
