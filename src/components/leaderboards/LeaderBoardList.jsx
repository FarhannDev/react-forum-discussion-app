/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LeaderBoardList({ leaderboards }) {
  function LeaderboardHeading() {
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

  function LeaderBoardListItem({ user, score }) {
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

  const content = (
    <>
      <LeaderboardHeading />
      <Row className="justify-content-start g-3 pt-3">
        <Col>
          {leaderboards?.map((leaderboard) => (
            <LeaderBoardListItem key={leaderboard.id} {...leaderboard} />
          ))}
        </Col>
      </Row>
    </>
  );

  return content;
}
