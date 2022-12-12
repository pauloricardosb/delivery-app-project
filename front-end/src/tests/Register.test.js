import '@testing-library/jest-dom';
import React from 'react';
import { api } from '../helpers/APIRequests';
import { waitFor, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '../pages/Register';
import { newUser } from './mocks/userMocks';
import renderWithRouter from './mocks/renderWithRouter';
import validator from 'validator';

describe('Testes da rota "Register"', function () {
  beforeEach(cleanup)

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    window.localStorage.removeItem('user');
  })

  it('Verifica os componentes da tela de Login', async function () {
    const { unmount } = renderWithRouter(<Register />);

    const nameInput = screen.getByTestId('common_register__input-name');

    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByTestId('common_register__input-email');

    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByTestId('common_register__input-password');

    expect(passwordInput).toBeInTheDocument();

    const btnRegister = screen.getByTestId('common_register__button-register')

    expect(btnRegister).toBeInTheDocument();

    unmount();
  })

  it.skip('Verifica se o botão de Cadastrar permanece desabilitado', async function () {
    jest.spyOn(validator, 'isEmail').mockImplementation(true);

    const { unmount } = renderWithRouter(<Register />);

    const btnRegister = screen.getByTestId('common_register__button-register')

    expect(btnRegister).toBeDisabled();

    const nameInput = screen.getByTestId('common_register__input-name');

    userEvent.type(nameInput, 'Novo Usuário');

    expect(btnRegister).toBeDisabled();

    const emailInput = screen.getByTestId('common_register__input-email');

    userEvent.type(emailInput, 'usuario@mail.com');

    expect(btnRegister).toBeDisabled();

    const passwordInput = screen.getByTestId('common_register__input-password');

    userEvent.type(passwordInput, '123456')

    expect(btnRegister).toBeEnabled();

    unmount();
  })

  it.skip('Verifica se é possível cadastrar um novo usuário', async function () {
    jest.spyOn(api, 'post').mockImplementation(() => Promise.resolve({
      data: { ...newUser }
    }))

    const { unmount, history } = renderWithRouter(<Register />);

    const nameInput = screen.getByTestId('common_register__input-name');

    userEvent.type(nameInput, 'Novo Usuário')

    const emailInput = screen.getByTestId('common_register__input-email');

    userEvent.type(emailInput, 'usuario@mail.com')

    const passwordInput = screen.getByTestId('common_register__input-password');

    userEvent.type(passwordInput, '123456')

    const btnRegister = screen.getByTestId('common_register__button-register')

    userEvent.click(btnRegister);

    expect(btnRegister).toBe('/customer/products')

    unmount();
  })

  it.skip('Verifica se não é possível cadastrar um usuário já existente', async function () {
    jest.spyOn(api, 'post').mockImplementation(() => Promise.reject())

    const { unmount, history } = renderWithRouter(<Register />);

    const nameInput = screen.getByTestId('common_register__input-name');

    userEvent.type(nameInput, 'Cliente Zé Birita')

    const emailInput = screen.getByTestId('common_register__input-email');

    userEvent.type(emailInput, 'zebirita@email.com')

    const passwordInput = screen.getByTestId('common_register__input-password');

    userEvent.type(passwordInput, '123456')

    const btnRegister = screen.getByTestId('common_register__button-register')

    userEvent.click(btnRegister);

    const errorMessage = getByTestId('common_register__element-invalid_register');

    expect(errorMessage).toBeInTheDocument();

    unmount();
  })
})