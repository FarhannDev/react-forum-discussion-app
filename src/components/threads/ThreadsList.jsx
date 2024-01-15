/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from 'react-bootstrap';
import ThreadItem from './ThreadItem';

/* eslint-disable no-unused-vars */
export default function ThreadsList({ threads, users }) {
  return (
    <Stack direction="vertical" gap={3}>
      {threads?.map((thread) => (
        <ThreadItem key={thread.id} users={users} {...thread} />
      ))}
    </Stack>
  );
}
