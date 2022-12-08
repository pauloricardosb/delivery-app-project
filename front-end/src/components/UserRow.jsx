import React from 'react';
import PropTypes from 'prop-types';

function UserRow({ user: { name, email, role }, index }) {
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
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

UserRow.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.bool.isRequired,
};

export default UserRow;
