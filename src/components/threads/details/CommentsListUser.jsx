import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { Stack } from 'react-bootstrap';
import CommentsItemListUser from './CommentItemListUser';
import '../../../assets/styles/comment-user.css';

export default function CommentsListUser({ comments }) {
  return (
    <Stack direction="vertical" gap={3}>
      {comments?.map((comment) => (
        <CommentsItemListUser key={comment.id} {...comment} />
      ))}
    </Stack>
  );
}

CommentsListUser.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
