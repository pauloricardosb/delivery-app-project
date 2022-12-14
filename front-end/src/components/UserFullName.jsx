import React, { useState, useEffect } from 'react';
import { localUser } from '../helpers/localStorage';

function UserFullName() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const { name } = localUser();
    setUserName(name);
  }, []);

  return (
    <p
      data-testid="customer_products__element-navbar-user-full-name"
    >
      { userName }
    </p>
  );
}

export default UserFullName;
