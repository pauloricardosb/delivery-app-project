import React, {} from 'react';
import Navbar from '../components/NavbarComponent';
import RegisterForm from '../components/RegisterForm';
import UserManage from '../components/UserManage';

function Admin() {
  return (
    <div>
      <Navbar />
      <RegisterForm />
      <UserManage />
    </div>
  );
}

export default Admin;
