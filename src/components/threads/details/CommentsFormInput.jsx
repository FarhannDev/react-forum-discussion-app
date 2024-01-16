/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { IoSend } from 'react-icons/io5';

export default function CommentsFormInput({ comment }) {
  const [content, setContent] = useState('');
  const onContentHandleChange = ({ target }) => setContent(target.innerHTML);
  const disabledButton = Boolean(content);
  const handleSubmit = (event) => {
    event.preventDefault();
    comment({ content });
  };

  return (
    <Row className="justify-content-start g-3 pt-4">
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <div className="d-flex justify-content-between g-3">
              <div
                contentEditable
                className="comments-form-input__textarea me-auto"
                data-placeholder="Tuliskan semua yang ada di pikiran kamu..."
                onInput={onContentHandleChange}
              >
                {/* {content === '' ? 'Tuliskan komentar....' : ''} */}
              </div>
              <button
                disabled={!disabledButton}
                className="btn border-0"
                type="submit"
                title="Kirimkan"
              >
                <IoSend fontSize={28} />
              </button>
            </div>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
