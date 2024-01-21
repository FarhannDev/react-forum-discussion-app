import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import LoginFormInput from '../../components/auth/LoginFormInput';

/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email address typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
describe('LoginFormInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle username typing correctly', async () => {
    render(
      <MemoryRouter>
        <LoginFormInput login={() => {}} />
      </MemoryRouter>,
    );
    const emailInput = await screen.getByPlaceholderText('Email Address');
    await userEvent.type(emailInput, 'emailtest@gmail.com');

    expect(emailInput.value).toBe('emailtest@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    render(
      <MemoryRouter>
        <LoginFormInput login={() => {}} />
      </MemoryRouter>,
    );

    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');

    expect(passwordInput.value).toBe('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(
      <MemoryRouter>
        <LoginFormInput login={mockLogin} />
      </MemoryRouter>,
    );

    const emailInput = await screen.getByPlaceholderText('Email Address');
    await userEvent.type(emailInput, 'emailtest@gmail.com');

    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');

    const loginButton = await screen.getByRole('button', { name: 'Masuk' });
    // Action
    await userEvent.click(loginButton);
    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'emailtest@gmail.com',
      password: 'passwordtest',
    });
  });
});
