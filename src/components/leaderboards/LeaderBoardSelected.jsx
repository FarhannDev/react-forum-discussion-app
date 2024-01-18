/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default function LeaderBoardSelected({
  selectedFilter,
  setSelectedFilter,
}) {
  return (
    <Row className="justify-content-end g-3 py-3">
      <Col lg={4}>
        <Form.Label>Urutkan Berdasarkan skor</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={selectedFilter}
          onChange={setSelectedFilter}
          className="leaderboard-selected"
        >
          <option value="all">Pilih Semua Nilai</option>
          <option value="highest">Urut Dari Nilai Tertinggi</option>
          <option value="lowest">Urut Dari Nilai Terendah</option>
        </Form.Select>
      </Col>
    </Row>
  );
}
