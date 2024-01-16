/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';

export default function RegisterFormInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPasswordChange] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const disabledButton = Boolean(name && email && password && confirmPassword);
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
    // Memeriksa apakah password dan konfirmasi password cocok
    setPasswordsMatch(target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = ({ target }) => {
    setConfirmPasswordChange(target.value);
    // Memeriksa apakah password dan konfirmasi password cocok
    setPasswordsMatch(password === target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Menangani logika formulir setelah submit
    if (passwordsMatch) {
      register({ name, email, password });
    } else {
      alert('Password dan konfirmasi password tidak cocok');
      setPassword('');
      setConfirmPasswordChange('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
        <Form.Label className="auth-form-label">Nama Lengkap</Form.Label>
        <Form.Control
          type="text"
          placeholder="Masukan Nama Anda"
          className="auth-form-input"
          autoComplete="name"
          value={name}
          onChange={onNameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
        <Form.Label className="auth-form-label">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Masukan Email Address"
          className="auth-form-input"
          autoComplete="email"
          value={email}
          onChange={onEmailChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="auth-form-label">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Masukan Password"
          className="auth-form-input"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="auth-form-label">Konfirmasi Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Konfirmasi Password"
          className="auth-form-input"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </Form.Group>

      <div className="d-grid gap-3 mx-auto pt-3">
        <Button
          disabled={!disabledButton}
          type="submit"
          variant="danger"
          className="rounded-pill"
          size="lg"
        >
          Mendaftar
        </Button>
      </div>

      <div className="d-flex justify-content-center py-4">
        <div>
          <span className="auth-form-label">Sudah punya akun?</span>{' '}
          <Link className="auth-form-label text-decoration-underline" to="/">
            Login Disini!
          </Link>
        </div>
      </div>
    </Form>
  );
}
