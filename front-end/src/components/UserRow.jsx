import React from 'react';
import PropTypes from 'prop-types';
import { requestDelete, setToken } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';

function UserRow({ user: { id, name, email, role }, index, fetch }) {
  const deleteUser = async () => {
    const { token } = localUser();

    setToken(token);

    await requestDelete(`/users/${id}`);

    fetch();
  };

  return (
    <tr>
      <td
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-name-${index}` }
      >
        { name }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-email-${index}` }
      >
        { email }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        { role }
      </td>
      <td>
        <button
          type="button"
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
          onClick={ () => deleteUser() }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  fetch: PropTypes.func.isRequired,
};

export default UserRow;
