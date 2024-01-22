import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import RegisterFormInput from '../../components/auth/RegisterFormInput';

/**
 * skenario testing
 *
 * - RegisterFormInput component
 *   - should handle fullname typing correctly
 *   - should handle email address typing correctly
 *   - should handle password typing correctly
 *   - should handle password confirm typing correctly
 *   - should call register function when login button is clicked
 */

describe('RegisterFormInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle fullname typing correctly', async () => {
    render(
      <MemoryRouter>
        <RegisterFormInput register={() => {}} />
      </MemoryRouter>,
    );

    const fullnameInput = await screen.getByPlaceholderText(
      'Masukan Nama Anda',
    );

    await userEvent.type(fullnameInput, 'Kunti Bogel');

    expect(fullnameInput.value).toBe('Kunti Bogel');
  });

  it('should handle email address typing correctly', async () => {
    render(
      <MemoryRouter>
        <RegisterFormInput register={() => {}} />
      </MemoryRouter>,
    );

    const emailAddressInput = await screen.getByPlaceholderText(
      'Masukan Alamat Email',
    );
    await userEvent.type(emailAddressInput, 'kuntibogel@gmail.com');

    expect(emailAddressInput.value).toBe('kuntibogel@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    render(
      <MemoryRouter>
        <RegisterFormInput register={() => {}} />
      </MemoryRouter>,
    );

    const passwordInput = await screen.getByPlaceholderText('Masukan Password');

    await userEvent.type(passwordInput, 'kuntibogel');

    expect(passwordInput.value).toBe('kuntibogel');
  });

  it('should handle password confirm typing correctly', async () => {
    render(
      <MemoryRouter>
        <RegisterFormInput register={() => {}} />
      </MemoryRouter>,
    );

    const passwordConfirmInput = await screen.getByPlaceholderText(
      'Konfirmasi Password',
    );

    await userEvent.type(passwordConfirmInput, 'kuntibogel');

    expect(passwordConfirmInput.value).toBe('kuntibogel');
  });

  it('should call register function when login button is clicked', async () => {
    const dispatch = vi.fn();
    render(
      <MemoryRouter>
        <RegisterFormInput register={dispatch} />
      </MemoryRouter>,
    );
    const fullnameInput = await screen.getByPlaceholderText(
      'Masukan Nama Anda',
    );
    await userEvent.type(fullnameInput, 'Kunti Bogel');

    const emailAddressInput = await screen.getByPlaceholderText(
      'Masukan Alamat Email',
    );
    await userEvent.type(emailAddressInput, 'kuntibogel@gmail.com');

    const passwordInput = await screen.getByPlaceholderText('Masukan Password');
    await userEvent.type(passwordInput, 'kuntibogel');

    const passwordConfirmInput = await screen.getByPlaceholderText(
      'Konfirmasi Password',
    );
    await userEvent.type(passwordConfirmInput, 'kuntibogel');

    const registerButton = await screen.getByRole('button', {
      name: 'Mendaftar',
    });
    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(dispatch).toBeCalledWith({
      name: fullnameInput.value,
      email: emailAddressInput.value,
      password: passwordInput.value,
    });
  });
});
