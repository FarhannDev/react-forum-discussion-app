/* eslint-disable object-curly-newline */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { Card, Stack, Row, Col } from 'react-bootstrap';
import { postedAt } from '../../utils/showFormattedDate';
import {
  IoThumbsUpOutline,
  IoThumbsDownOutline,
  IoShareSocialOutline,
} from 'react-icons/io5';
import '../../assets/styles/thread-card-item.css';
import CommentsListUser from './details/CommentsListUser';
import ContentHeading from '../common/ContentHeading';
import CommentsFormInput from './details/CommentsFormInput';
import CommentsIsEmpty from './details/CommentsIsEmpty';

export default function ThreadDetail({
  id,
  title,
  body,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
}) {
  function ThreadUserInfo() {
    return (
      <Stack direction="horizontal" gap={3}>
        <div className="thread-card-item__user">
          <div className="d-flex  justify-content-start align-content-start">
            <img
              src={owner?.avatar}
              alt="user"
              className="thread-card-item__user-avatar"
            />

            <div className="d-flex flex-column">
              <div className="thread-card-item__user-name">{owner?.name}</div>
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
          <div className="thread-card-item__body">{parse(body)}</div>
          <div className="d-flex flex-wrap">
            <div className="thread-card-item__action me-2">
              <div className="thread-card-item__action-vote">
                <button
                  type="button"
                  className="btn btn-vote"
                  title="Dukung Naik"
                >
                  <div className="d-flex flex-row">
                    <IoThumbsUpOutline fontSize={24} />
                    <div className="btn-vote__count">{upVotesBy.length}</div>
                  </div>
                </button>
                |
                <button
                  type="button"
                  className="btn btn-vote"
                  title="Dukung Turun"
                >
                  <div className="d-flex flex-row">
                    <IoThumbsDownOutline fontSize={24} />
                    <div className="btn-vote__count">{downVotesBy.length}</div>
                  </div>
                </button>
              </div>
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

  function Threads() {
    return (
      <Row className="justify-content-start g-3">
        <Col>
          <Card className="thread-card-item">
            <Card.Body>
              <ThreadUserInfo />
              <ThreadContentBody />
              <CommentsFormInput />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }

  function Comments() {
    return (
      <Row className="justify-content-start g-3">
        <Col>
          {!comments.length ? (
            <CommentsIsEmpty title="Belum Ada Diskusi Terbaru" />
          ) : (
            <div className="thread-comments-item pt-5">
              <ContentHeading title={`Komentar (${comments.length})`} />
              <CommentsListUser comments={comments} />
            </div>
          )}
        </Col>
      </Row>
    );
  }

  const content = (
    <>
      <Threads />
      <Comments />
    </>
  );

  return content;
}
