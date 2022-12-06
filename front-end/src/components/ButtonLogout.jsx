import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { localLogout } from '../helpers/localStorage';

function ButtonLogout({ userType }) {
  const [isLogout, setIsLogout] = useState(false);

  const logout = () => {
    localLogout();
    setIsLogout(true);
  };

  if (isLogout) return <Navigate to="/login" />;

  return (
    <button
      type="button"
      data-testid={ `${userType}__element-navbar-link-logout` }
      onClick={ logout }
    >
      Sair
    </button>
  );
}

ButtonLogout.propTypes = {
  userType: PropTypes.string.isRequired,
};

export default ButtonLogout;
