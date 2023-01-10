import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { localLogout } from '../helpers/localStorage';
import '../css/buttonSair.css';

function ButtonLogout() {
  const [isLogout, setIsLogout] = useState(false);

  const logout = () => {
    localLogout();
    setIsLogout(true);
  };

  if (isLogout) return <Navigate to="/login" />;

  return (
    <div className="button-logout">
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        Sair
      </button>
    </div>
  );
}

export default ButtonLogout;
