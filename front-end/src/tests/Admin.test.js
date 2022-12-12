import '@testing-library/jest-dom';
import React from 'react';
import { api } from '../helpers/APIRequests';
import { waitFor, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Admin from '../pages/Admin';
import { users, usersDB } from './mocks/userMocks';
import renderWithRouter from './mocks/renderWithRouter';
import { act } from 'react-dom/test-utils';

describe('Testes da rota "LOGIN"', function () {

  beforeEach(() => {
    cleanup();
    window.localStorage.setItem('user', JSON.stringify(users[2]));
  })

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    window.localStorage.removeItem('user');
  })

  it('Verifica os componentes da tela de Admin', async function () {
    jest.spyOn(api, 'get').mockImplementation(() => Promise.resolve({
      data: { ...usersDB }
    }))

    const { unmount } = renderWithRouter(<Admin />);

    const linkUsers = screen.getByTestId('admin__element-navbar-link-users');

    expect(linkUsers).toBeInTheDocument();

    const userName = screen.getByTestId('admin__element-navbar-user-full-name')

    expect(userName).toBeInTheDocument();

    const btnLogout = screen.getByTestId('admin__element-navbar-link-logout')

    expect(btnLogout).toBeInTheDocument();

    const nameInput = screen.getByTestId('admin_manage__input-name')

    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByTestId('admin_manage__input-email')

    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByTestId('admin_manage__input-password')

    expect(passwordInput).toBeInTheDocument();

    const roleSelect = screen.getByTestId('admin_manage__select-role')

    expect(roleSelect).toBeInTheDocument();

    const btnRegister = screen.getByTestId('admin_manage__button-register')

    expect(btnRegister).toBeInTheDocument();

    unmount();
  })
})