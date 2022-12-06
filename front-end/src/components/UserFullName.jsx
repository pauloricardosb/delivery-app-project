import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { localUser } from '../helpers/localStorage';

function UserFullName({ userType }) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const { name } = localUser();
    setUserName(name);
  }, []);

  return (
    <p
      data-testid={ `${userType}__element-navbar-user-full-name` }
    >
      { userName }
    </p>
  );
}

UserFullName.propTypes = {
  userType: PropTypes.string.isRequired,
};

export default UserFullName;
