import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';

export default function LoginFormInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const disabledButton = Boolean(email && password);

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="auth-form-label">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email Address"
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
          placeholder="Password"
          className="auth-form-input"
          value={password}
          onChange={onPasswordChange}
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
          Masuk
        </Button>
      </div>

      <div className="d-flex justify-content-center py-4">
        <div>
          <span className="auth-form-label">Belum punya akun?</span>
          {' '}
          <Link
            className="auth-form-label text-decoration-underline"
            to="/register"
          >
            Register Disini!
          </Link>
        </div>
      </div>
    </Form>
  );
}

LoginFormInput.propTypes = { login: PropTypes.func.isRequired };
