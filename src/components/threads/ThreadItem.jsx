/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import parse from 'html-react-parser';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, Stack } from 'react-bootstrap';
import { IoChatbubbleOutline, IoShareSocialOutline } from 'react-icons/io5';
import { postedAt } from '../../utils/showFormattedDate';
import ThreadButtonVote from './button/ThreadButtonVote';
import '../../assets/styles/thread-card-item.css';

function ThreadCardItem({
  id,
  title,
  body,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
}) {
  const dispatch = useDispatch();

  function ThreadUserInfo() {
    return (
      <Stack direction="horizontal" gap={3}>
        <div className="thread-card-item__user">
          <div className="d-flex  justify-content-start align-content-start">
            <Link
              to={`/users/${user?.id}`}
              aria-label={`Profile ${user?.name}`}
              title={`Profile ${user?.name}`}
            >
              <img
                src={user?.avatar}
                alt="user"
                className="thread-card-item__user-avatar"
              />
            </Link>

            <div className="d-flex flex-column">
              <Link
                to={`/users/${user?.id}`}
                className="link-offset-2 link-underline link-underline-opacity-0 thread-card-item__user-name"
                aria-label={`Profile ${user?.name}`}
                title={`Profile ${user?.name}`}
              >
                {user?.name}
              </Link>
              <div className="thread-card-item__user-date">
                {postedAt(createdAt)}
              </div>
            </div>
          </div>
        </div>
      </Stack>
    );
  }

  function ThreadContentBody() {
    return (
      <>
        <Stack direction="vertical" gap={3}>
          <Link to={`/threads/${id}`} className="thread-card-item__title">
            {parse(title)}
          </Link>
          <div className="thread-card-item__body">
            {body.length >= 250
              ? parse(`${body.slice(0, 250)}....`)
              : parse(body)}
          </div>
          <div className="d-flex flex-wrap">
            <ThreadButtonVote
              threadId={id}
              upVotes={upVotesBy}
              downVotes={downVotesBy}
            />
            <div className="thread-card-item__action-vote-comment">
              <button type="button" className="btn btn-vote" title="Komentar">
                <div className="d-flex flex-row px-2">
                  <IoChatbubbleOutline fontSize={24} className="me-1" />
                  <div className="btn-vote__count ">{totalComments}</div>
                </div>
              </button>
            </div>

            <div className="thread-card-item__action-vote-comment">
              <button type="button" className="btn btn-vote" title="Bagikan">
                <IoShareSocialOutline fontSize={24} />
              </button>
            </div>
          </div>
        </Stack>
      </>
    );
  }

  const content = (
    <>
      <ThreadUserInfo />
      <ThreadContentBody />
    </>
  );

  return (
    <Card className="thread-card-item">
      <Card.Body>{content}</Card.Body>
    </Card>
  );
}

ThreadCardItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(string).isRequired,
  downVotesBy: PropTypes.arrayOf(string).isRequired,
  totalComments: PropTypes.number.isRequired,
};

export default ThreadCardItem;
