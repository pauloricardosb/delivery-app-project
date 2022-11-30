function LoginComponent() {
  return (
    <div className="login">
      <h2>logo</h2>
      <div className="login-form">
        <input
          type="text"
          data-testid="common_login__input-email"
          placeholder="email@tryber.com.br"
        />
        <input
          type="password"
          data-testid="common_login__input-password"
          placeholder="*****"
        />
        <button
          type="button"
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="button"
          data-data-testid="common_login__button-register"
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
