import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { requestRegister, setToken } from '../helpers/APIRequests';
import { setLocalUser } from '../helpers/localStorage';
import '../css/register.css';

function RegisterComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [failedTryRegister, setFailedTryRegister] = useState(false);

  async function hadleRegister() {
    const { name, email, password } = formData;
    try {
      const data = await requestRegister('/register', { name, email, password });
      setToken(data.token);
      setLocalUser(data);
      navigate('/customer/products');
    } catch (e) {
      setFailedTryRegister(true);
    }
  }

  function isButtonDisabled() {
    const { name, email, password } = formData;
    const MIN_CHARACTERS_NAME = 12;
    const MIN_CHARACTERS_PASS = 6;
    return (password.length < MIN_CHARACTERS_PASS)
      || (name.length < MIN_CHARACTERS_NAME)
      || (!validator.isEmail(email));
  }

  return (
    <div className="register-form">
      <label htmlFor="common_register__input-name">
        Nome:
        <input
          type="text"
          id="common_register__input-name"
          data-testid="common_register__input-name"
          value={ formData.name }
          onChange={
            (e) => setFormData((current) => ({
              ...current,
              name: e.target.value,
            }))
          }
        />
      </label>
      <label htmlFor="common_register__input-email">
        Email:
        <input
          type="text"
          id="common_register__input-email"
          data-testid="common_register__input-email"
          value={ formData.email }
          onChange={
            (e) => setFormData((current) => ({
              ...current,
              email: e.target.value,
            }))
          }
        />
      </label>
      <label htmlFor="common_register__input-password">
        Password:
        <input
          type="password"
          id="common_register__input-password"
          data-testid="common_register__input-password"
          value={ formData.password }
          onChange={
            (e) => setFormData((current) => ({
              ...current,
              password: e.target.value,
            }))
          }
        />
      </label>
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ isButtonDisabled() }
        onClick={ hadleRegister }
      >
        CADASTRAR
      </button>
      {
        failedTryRegister && (
          <p data-testid="common_register__element-invalid_register">
            Falha ao cadastrar usuário
          </p>
        )
      }
    </div>
  );
}

export default RegisterComponent;
