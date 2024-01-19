/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { Form, Row, Col } from 'react-bootstrap';

export default function SelectedThreads({
  threads,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <Row className="justify-content-end g-3 py-3">
      <Col lg={4}>
        <Form.Label>Urutkan Berdasarkan Kategori Terpopuler</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">Pilih Semua Kategori</option>

          {threads
            .filter(
              (value, index, self) =>
                index ===
                self.findIndex((obj) => obj.category === value.category),
            )
            .map((thread) => (
              <option key={thread.id} value={thread.category}>
                {thread.category}
              </option>
            ))}
        </Form.Select>
      </Col>
    </Row>
  );
}

SelectedThreads.propTypes = {
  threads: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};
