import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { validateLogin } from '../validates/validateLogin';
import { requestLogin, setToken } from '../helpers/APIRequests';
import { setLocalUser } from '../helpers/localStorage';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnLogin, setBtnLogin] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  useEffect(() => {
    const login = validateLogin(email, password);
    setBtnLogin(!login);
  }, [email, password]);

  const handleLogin = async () => {
    try {
      const result = await requestLogin('/login', { email, password });
      const { token } = result;

      setToken(token);

      setLocalUser(result);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  if (isLogged) return <Navigate to="/costumer/products" />;

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
          onClick={ handleLogin }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta.
        </button>

        {failedTryLogin ? (
          <p data-testid="common_login__element-invalid-email">
            usuario não cadastrado
          </p>
        )
          : null}
      </div>
    </div>
  );
}
// test
export default LoginComponent;
