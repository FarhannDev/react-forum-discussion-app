import React from 'react';
import { Form } from 'react-bootstrap';
import '../../assets/styles/search-bar.css';

export default function SearchBar() {
  return (
    <Form className="search-bar-item">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Cari" />
      </Form.Group>
    </Form>
  );
}
