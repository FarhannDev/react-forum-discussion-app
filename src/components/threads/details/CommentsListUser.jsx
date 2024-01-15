/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import { Card, Stack } from 'react-bootstrap';
import '../../../assets/styles/comment-user.css';
import CommentsItemListUser from './CommentItemListUser';

export default function CommentsListUser({ comments }) {
  return (
    <Stack direction="vertical" gap={3}>
      {comments?.map((comment) => (
        <CommentsItemListUser key={comment.id} {...comment} />
      ))}
    </Stack>
  );
}
