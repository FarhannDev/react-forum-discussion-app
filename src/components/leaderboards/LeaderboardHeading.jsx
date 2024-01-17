/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function LeaderboardHeading() {
  return (
    <Row className="justify-content-start g-3">
      <Col>
        <div className="d-flex justify-content-between g-3">
          <h5 className="leaderboard-heading__name">Pengguna</h5>
          <h5 className="leaderboard-heading__score">Skor</h5>
        </div>
      </Col>
    </Row>
  );
}
