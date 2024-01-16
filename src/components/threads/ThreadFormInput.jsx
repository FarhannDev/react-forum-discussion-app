/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import ContentHeading from '../common/ContentHeading';
import useInput from '../../hooks/useInput';

export default function ThreadFormInput({ thread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, setBody] = useState('');

  const onBodyChangeEventHandler = (event) => setBody(event.target.innerHTML);

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
          <div
            contentEditable
            className="thread-form-input__textarea"
            data-placeholder="Tuliskan semua yang ada di pikiran kamu..."
            onInput={onBodyChangeEventHandler}
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
