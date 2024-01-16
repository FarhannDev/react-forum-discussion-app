/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, Stack } from 'react-bootstrap';
import {
  IoThumbsUpOutline,
  IoThumbsDownOutline,
  IoChatbubbleOutline,
  IoShareSocialOutline,
  IoThumbsDown,
  IoThumbsUp,
} from 'react-icons/io5';
import '../../assets/styles/thread-card-item.css';
import { postedAt } from '../../utils/showFormattedDate';
import parse from 'html-react-parser';
import {
  asyncAddThreadsUpVote,
  asyncAddThreadsDownVote,
} from '../../store/actions/threadsAction';

function ThreadCardItem({
  id,
  title,
  body,
  createdAt,
  ownerId,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
}) {
  const dispatch = useDispatch();

  const handleUpVote = () => {
    dispatch(asyncAddThreadsUpVote(id));
  };
  const handleDownVote = () => dispatch(asyncAddThreadsDownVote(id));

  function ThreadUserInfo() {
    return (
      <Stack direction="horizontal" gap={3}>
        <div className="thread-card-item__user">
          <div className="d-flex  justify-content-start align-content-start">
            <img
              src={user?.avatar}
              alt="user"
              className="thread-card-item__user-avatar"
            />

            <div className="d-flex flex-column">
              <div className="thread-card-item__user-name">{user?.name}</div>
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
            <div className="thread-card-item__action me-2">
              <div className="thread-card-item__action-vote">
                <button
                  type="button"
                  className="btn btn-vote"
                  title="Dukung Naik"
                  onClick={handleUpVote}
                >
                  <div className="d-flex flex-row">
                    {upVotesBy.length ? (
                      <IoThumbsUp fontSize={24} />
                    ) : (
                      <IoThumbsUpOutline fontSize={24} />
                    )}

                    <div className="btn-vote__count">{upVotesBy.length}</div>
                  </div>
                </button>
                |
                <button
                  type="button"
                  className="btn btn-vote"
                  title="Dukung Turun"
                  onClick={handleDownVote}
                >
                  <div className="d-flex flex-row">
                    {downVotesBy.length ? (
                      <IoThumbsDown fontSize={24} />
                    ) : (
                      <IoThumbsDownOutline fontSize={24} />
                    )}

                    <div className="btn-vote__count">{downVotesBy.length}</div>
                  </div>
                </button>
              </div>
            </div>

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
