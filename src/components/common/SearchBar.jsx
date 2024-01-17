import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import '../../assets/styles/search-bar.css';

export default function SearchBar({ keyword, keywordChange, placeholder }) {
  return (
    <Form className="search-bar-item" onSubmit={(e) => e.preventDefault()}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="search"
          value={keyword}
          onChange={(event) => keywordChange(event.target.value)}
          placeholder={placeholder}
          autoComplete="name"
        />
      </Form.Group>
    </Form>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
