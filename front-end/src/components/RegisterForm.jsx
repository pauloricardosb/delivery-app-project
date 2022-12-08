import React, { useState } from 'react';
import validator from 'validator';
import { requestRegister, setToken } from '../helpers/APIRequests';
import { localUser } from '../helpers/localStorage';

function RegisterForm() {
  const [failedTryRegister, setFailedTryRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'role',
  });

  const handleRegister = async () => {
    const { name, email, password, role } = formData;
    try {
      const { token } = localUser();

      setToken(token);

      await requestRegister('/register/admin', { name, email, password, role });
    } catch (e) {
      setFailedTryRegister(true);
    }
  };

  const isButtonDisabled = () => {
    const { name, email, password, role } = formData;
    const MIN_CHARACTERS_NAME = 12;
    const MIN_CHARACTERS_PASS = 6;
    return (password.length < MIN_CHARACTERS_PASS)
      || (name.length < MIN_CHARACTERS_NAME)
      || (role === 'role')
      || (!validator.isEmail(email));
  };

  return (
    <div>
      <label htmlFor="admin_manage__input-name">
        Nome
        <input
          type="text"
          id="admin_manage__input-name"
          data-testid="admin_manage__input-name"
          value={ formData.name }
          onChange={
            (e) => setFormData((current) => ({
              ...current,
              name: e.target.value,
            }))
          }
        />
      </label>
      <label htmlFor="admin_manage__input-email">
        Email
        <input
          type="text"
          id="admin_manage__input-email"
          data-testid="admin_manage__input-email"
          value={ formData.email }
          onChange={
            (e) => setFormData((current) => ({
              ...current,
              email: e.target.value,
            }))
          }
        />
      </label>
      <label htmlFor="admin_manage__input-password">
        password
        <input
          type="password"
          id="admin_manage__input-password"
          data-testid="admin_manage__input-password"
          value={ formData.password }
          onChange={
            (e) => setFormData((current) => ({
              ...current,
              password: e.target.value,
            }))
          }
        />
      </label>
      <label htmlFor="admin_manage__select-role">
        Tipo
        <select
          id="admin_manage__select-role"
          data-testid="admin_manage__select-role"
          value={ formData.role }
          onChange={
            (e) => setFormData((current) => ({
              ...current,
              role: e.target.value,
            }))
          }
        >
          <option value="role">Tipo</option>
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
        </select>
      </label>
      <button
        type="button"
        data-testid="admin_manage__button-register"
        disabled={ isButtonDisabled() }
        onClick={ handleRegister }
      >
        CADASTRAR
      </button>
      {
        failedTryRegister && (
          <p data-testid="admin_manage__element-invalid_register">
            Falha ao cadastrar usuário
          </p>
        )
      }
    </div>
  );
}

export default RegisterForm;
