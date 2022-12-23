import React, { useState, useEffect } from 'react';
import { requestAPI, setToken } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';
import RegisterForm from './RegisterForm';
import UserRow from './UserRow';
import '../css/tableUsers.css';

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
        fetch={ fetchUsers }
      />
    ));

    return rows;
  };

  return (
    <div>
      <RegisterForm fetch={ fetchUsers } />
      <h3 className="title">Lista de Usuários</h3>
      <table className="table-users">
        <thead>
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
