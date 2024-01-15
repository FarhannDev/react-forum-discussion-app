/* eslint-disable react/react-in-jsx-scope */
import { Card, Form, Button } from 'react-bootstrap';
import ContentHeading from '../common/ContentHeading';

export default function ThreadFormInput() {
  return (
    <Card body className="thread-card-form-input">
      <ContentHeading title="Buat Pertanyaan Baru " />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Judul Pertanyaan</Form.Label>
          <Form.Control type="email" placeholder="Judul Pertanyaan" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Kategori</Form.Label>
          <Form.Control
            type="text"
            placeholder="Kategori Terkait cth:pertanyaan"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Isi Pertanyaan</Form.Label>
          <div
            contentEditable
            className="thread-form-input__textarea"
            data-placeholder="Tuliskan semua yang ada di pikiran kamu..."
          />
        </Form.Group>

        <div className="d-grid gap-3 mx-auto">
          <Button
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
