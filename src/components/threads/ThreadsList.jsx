/* eslint-disable react/require-default-props */
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

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object.isRequired),
  users: PropTypes.arrayOf(PropTypes.string.isRequired),
};
