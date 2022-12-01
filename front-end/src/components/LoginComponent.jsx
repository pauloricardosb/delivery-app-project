import React, { useState, useEffect } from 'react';
import { validateLogin } from '../validates/validateLogin';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnLogin, setBtnLogin] = useState(true);

  useEffect(() => {
    const login = validateLogin(email, password);
    setBtnLogin(!login);
  }, [email, password]);

  return (
    <div className="login">
      <h2>logo</h2>
      <div className="login-form">
        <input
          type="text"
          data-testid="common_login__input-email"
          placeholder="email@tryber.com.br"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <input
          type="password"
          data-testid="common_login__input-password"
          placeholder="*****"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ btnLogin }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta.
        </button>

        <p data-testid="common_login__element-invalid-email">
          Elemento Oculto(Mensagens de erro)
        </p>
      </div>
    </div>
  );
}
// test
export default LoginComponent;
