/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LeaderBoardListItem({ user, score }) {
  return (
    <ListGroup variant="flush " className="leaderboard-list">
      <ListGroup.Item className="leaderboard-list-item">
        <div className="d-flex justify-content-between align-content-start g-3">
          <div className="leaderboard-list-item__user">
            <div className="d-flex flex-row align-items-center justify-content-start">
              <img
                className="leaderboard-list-item__user-avatar"
                src={user?.avatar}
              />

              <Link
                to={`/users/${user.id}`}
                aria-label=""
                className="leaderboard-list-item__user-name px-3 pt-2"
              >
                {user?.name}
              </Link>
            </div>
          </div>
          <div className="leaderboard-list-item__user-score">{score}</div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

LeaderBoardListItem.propTypes = {
  user: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
};
