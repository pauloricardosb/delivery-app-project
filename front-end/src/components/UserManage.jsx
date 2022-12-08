import React, { useState, useEffect } from 'react';
import { requestAPI, setToken } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';
import UserRow from './UserRow';

function UserManage() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const { token } = localUser();

      setToken(token);

      const usersAPI = await requestAPI('/users');

      setUsers(usersAPI);
    } catch (error) {
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const usersRows = () => {
    const rows = users.map((user, index) => (
      <UserRow
        key={ index }
        user={ user }
        index={ index }
      />
    ));

    return rows;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Lista de Usuários</th>
          </tr>
          <tr>
            <td>Item</td>
            <td>Nome</td>
            <td>E-mail</td>
            <td>Tipo</td>
            <td>Excluir</td>
          </tr>
        </thead>
        <tbody>
          { users.length > 0 ? usersRows() : null }
        </tbody>
      </table>
    </div>
  );
}

export default UserManage;
