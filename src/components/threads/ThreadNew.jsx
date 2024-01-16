/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form } from 'react-bootstrap';

export default function ThreadNew({ user }) {
  const navigate = useNavigate();

  const handleClick = () => navigate('/threads/new');

  return (
    <Card body className="thread-card-new mb-3">
      <div className="d-flex align-items-center">
        <div>
          <img
            src={user?.avatar}
            alt={user?.name}
            className="thread-card-new__avatar"
          />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            onClick={handleClick}
            type="text"
            placeholder="Apa yang ingin kamu tanyakan atau bagikan?"
            readOnly
            className="mx-2"
          />
        </Form.Group>
      </div>
    </Card>
  );
}
