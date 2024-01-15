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
import { Card, Stack } from 'react-bootstrap';
import { postedAt } from '../../../utils/showFormattedDate';
import ButtonVoteComment from './ButtonVoteComment';
import '../../../assets/styles/comment-user.css';

export default function CommentsItemListUser({
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
            <img
              src={owner?.avatar}
              alt="user"
              className="comments-card-item__user-avatar"
            />

            <div className="d-flex flex-column">
              <div className="comments-card-item__user-name">{owner?.name}</div>
              <div className="comments-card-item__user-date">
                {postedAt(createdAt)}
              </div>
            </div>
          </div>
        </div>
        <div className="comments-card-item__user__body">{parse(content)}</div>
        <ButtonVoteComment />
      </Stack>
    </Card>
  );
}
