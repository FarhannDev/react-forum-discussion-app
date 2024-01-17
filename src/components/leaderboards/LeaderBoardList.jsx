/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import LeaderboardHeading from './LeaderboardHeading';
import LeaderBoardListItem from './LeaderBoardListItem';

export default function LeaderBoardList({ leaderboards }) {
  const content = (
    <>
      <LeaderboardHeading />
      <Row className="justify-content-start g-3 pt-3">
        <Col>
          {leaderboards?.map((leaderboard, idx) => (
            <LeaderBoardListItem key={idx + 1} {...leaderboard} />
          ))}
        </Col>
      </Row>
    </>
  );

  return content;
}

LeaderBoardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
