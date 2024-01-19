import React from 'react';
import PropTypes from 'prop-types';
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

LeaderBoardSelected.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  setSelectedFilter: PropTypes.func.isRequired,
};
