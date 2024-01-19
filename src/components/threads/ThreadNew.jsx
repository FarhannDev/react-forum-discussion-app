import React from 'react';
import PropTypes from 'prop-types'; // ES6
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

ThreadNew.propTypes = {
  user: PropTypes.func.isRequired,
};
