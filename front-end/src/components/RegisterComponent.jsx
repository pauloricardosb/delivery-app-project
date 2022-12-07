import { useState } from 'react';

function RegisterComponent() {
  const [failedTryRegister] = useState(false);

  return (
    <div>
      <label htmlFor="common_register__input-name">
        Nome
        <input
          type="text"
          id="common_register__input-name"
          data-testid="common_register__input-name"
        />
      </label>
      <label htmlFor="common_register__input-email">
        Email
        <input
          type="text"
          id="common_register__input-email"
          data-testid="common_register__input-email"
        />
      </label>
      <label htmlFor="common_register__input-password">
        password
        <input
          type="password"
          id="common_register__input-password"
          data-testid="common_register__input-password"
        />
      </label>
      <button
        type="button"
        data-testid="common_register__button-register"
      >
        CADASTRAR
      </button>
      {
        failedTryRegister && (
          <p data-testid="common_register__element-invalid_register">
            usuario não cadastrado
          </p>
        )
      }
    </div>
  );
}

export default RegisterComponent;
