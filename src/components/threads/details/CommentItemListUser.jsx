/* eslint-disable react/require-default-props */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Stack } from 'react-bootstrap';
import { postedAt } from '../../../utils/showFormattedDate';
import ThreadButtonVoteComment from '../button/ThreadButtonVoteComment';
import '../../../assets/styles/comment-user.css';

export default function CommentsItemListUser({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
}) {
  return (
    <Card body className="comments-card-item">
      <Stack direction="vertical" gap={3}>
        <div className="comments-card-item__user">
          <div className="d-flex  justify-content-start align-content-start">
            <Link
              to={`/users/${owner?.id}`}
              aria-label={`Profile ${owner?.name}`}
              title={`Profile ${owner?.name}`}
            >
              <img
                src={owner?.avatar}
                alt="user"
                className="comments-card-item__user-avatar"
              />
            </Link>

            <div className="d-flex flex-column">
              <Link
                to={`/users/${owner?.id}`}
                className="link-offset-2 link-underline link-underline-opacity-0 comments-card-item__user-name"
                aria-label={`Profile ${owner?.name}`}
                title={`Profile ${owner?.name}`}
              >
                {owner?.name}
              </Link>
              <div className="comments-card-item__user-date">
                {postedAt(createdAt)}
              </div>
            </div>
          </div>
        </div>
        <div className="comments-card-item__user__body">{parse(content)}</div>

        <ThreadButtonVoteComment
          commentId={id}
          upVote={upVotesBy}
          downVote={downVotesBy}
        />
      </Stack>
    </Card>
  );
}

CommentsItemListUser.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};
