import '@testing-library/jest-dom';
import React from 'react';
import { api } from '../helpers/APIRequests';
import { render, waitFor, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Login from '../pages/Login';
import { users } from './mocks/userMocks';
import renderWithRouter from './mocks/renderWithRouter';

describe('Testes da rota "LOGIN"', function () {

  beforeEach(cleanup)

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    window.localStorage.removeItem('user');
  })

  it('Verifica os componentes da tela de Login', async function () {
    const { unmount } = renderWithRouter(<Login />);

    const [emailInput] = screen.getAllByTestId('common_login__input-email');

    expect(emailInput).toBeInTheDocument();

    const [passwordInput] = screen.getAllByTestId('common_login__input-password');

    expect(passwordInput).toBeInTheDocument();

    const [btnLogin] = screen.getAllByTestId('common_login__button-login')

    expect(btnLogin).toBeInTheDocument();

    const [btnRegister] = screen.getAllByTestId('common_login__button-register')

    expect(btnRegister).toBeInTheDocument();

    unmount();
  })

  it('Verifica se o botão de Login permanece desabilitado', async function () {
    const { unmount } = renderWithRouter(<Login />);

    const [btnLogin] = screen.getAllByTestId('common_login__button-login')

    expect(btnLogin).toBeDisabled();

    const [emailInput] = screen.getAllByTestId('common_login__input-email');

    userEvent.type(emailInput, 'zebirita@email.com');

    expect(btnLogin).toBeDisabled();

    const [passwordInput] = screen.getAllByTestId('common_login__input-password');

    userEvent.type(passwordInput, '$#zebirita#$');

    expect(btnLogin).not.toBeDisabled();

    unmount();
  })

  it('Verifica se é exibido um alerta ao efetuar um Login com um usuário não existente', async function () {
    jest.spyOn(api, 'post').mockImplementation(() => Promise.reject());

    const { unmount } = renderWithRouter(<Login />);

    const [emailInput] = screen.getAllByTestId('common_login__input-email');

    userEvent.type(emailInput, 'teste@mail.com');

    const [passwordInput] = screen.getAllByTestId('common_login__input-password');

    userEvent.type(passwordInput, '1234567');

    const [btnLogin] = screen.getAllByTestId('common_login__button-login')

    await waitFor(() => userEvent.click(btnLogin));

    const [errorMessage] = screen.getAllByTestId('common_login__element-invalid-email');

    expect(errorMessage).toBeInTheDocument();

    unmount();
  })

  it('Verifica se é possível efetuar um Login como "Costumer"', async function () {
    jest.spyOn(api, 'post').mockImplementation(() => Promise.resolve({
      data: { ...users[0] }
    }))

    const { unmount, history } = renderWithRouter(<Login />);

    const [emailInput] = screen.getAllByTestId('common_login__input-email');

    userEvent.type(emailInput, 'zebirita@email.com');

    const [passwordInput] = screen.getAllByTestId('common_login__input-password');

    userEvent.type(passwordInput, '$#zebirita#$');

    const [btnLogin] = screen.getAllByTestId('common_login__button-login')

    await waitFor(() => userEvent.click(btnLogin));

    expect(history.location.pathname).toBe('/customer/products');

    unmount();
  })

  it('Verifica se é possível efetuar um Login como "Administrator"', async function () {
    jest.spyOn(api, 'post').mockImplementation(() => Promise.resolve({
      data: { ...users[2] }
    }))

    const { unmount, history } = renderWithRouter(<Login />);

    const [emailInput] = screen.getAllByTestId('common_login__input-email');

    userEvent.type(emailInput, 'adm@deliveryapp.com');

    const [passwordInput] = screen.getAllByTestId('common_login__input-password');

    userEvent.type(passwordInput, '--adm2@21!!--');

    const [btnLogin] = screen.getAllByTestId('common_login__button-login')

    await waitFor(() => userEvent.click(btnLogin));

    expect(history.location.pathname).toBe('/admin/manage');

    unmount();
  })
})