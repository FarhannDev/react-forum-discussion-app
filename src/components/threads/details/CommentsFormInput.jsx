import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';
import { Form, Row, Col } from 'react-bootstrap';
import { IoSend } from 'react-icons/io5';

export default function CommentsFormInput({ comment }) {
  const [content, setContent] = useState('');
  const onContentHandleChange = ({ target }) => setContent(target.value);
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
              <ContentEditable
                html={content}
                onChange={onContentHandleChange}
                className="comments-form-input__textarea me-auto"
                title="Tuliskan semua yang ada di pikiran kamu..."
                tagName="article"
                data-testid="editable-content"
              />

              <button
                disabled={!disabledButton}
                className="btn border-0 comments-btn-send"
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

CommentsFormInput.propTypes = { comment: PropTypes.func.isRequired };
