/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ContentEditable from 'react-contenteditable';
import { Card, Form, Button } from 'react-bootstrap';
import useInput from '../../hooks/useInput';
import ContentHeading from '../common/ContentHeading';

export default function ThreadFormInput({ thread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  const disabledButton = Boolean(title && category && body);

  const handleSubmit = (event) => {
    event.preventDefault();
    thread({ title, category, body });
  };

  return (
    <Card body className="thread-card-form-input">
      <ContentHeading title="Buat Pertanyaan Baru " />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInputTitle">
          <Form.Label>Judul Pertanyaan</Form.Label>
          <Form.Control
            type="title"
            placeholder="Judul Pertanyaan"
            autoComplete="name"
            value={title}
            onChange={onTitleChange}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInputCategory"
        >
          <Form.Label>Kategori</Form.Label>
          <Form.Control
            type="text"
            placeholder="Kategori Terkait cth:pertanyaan"
            autoComplete="name"
            value={category}
            onChange={onCategoryChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Isi Pertanyaan</Form.Label>
          <ContentEditable
            html={body}
            onChange={onBodyChange}
            className="thread-form-input__textarea"
            title="Buat Pertanyaan Baru "
            tagName="article"
          />
        </Form.Group>

        <div className="d-grid gap-3 mx-auto">
          <Button
            disabled={!disabledButton}
            type="submit"
            variant="danger"
            className="notelist-form-input__button rounded-pill"
          >
            Buat Pertanyaan Baru
          </Button>
          <Button
            type="button"
            variant="outline-none"
            className="notelist-form-input__button"
          >
            Batalkan
          </Button>
        </div>
      </Form>
    </Card>
  );
}
