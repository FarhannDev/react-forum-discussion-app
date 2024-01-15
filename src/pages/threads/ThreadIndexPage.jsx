/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import asyncPopulateThunkMiddleware from '../../store/shared/asyncPopulateThunkMiddleware';

import ThreadsList from '../../components/threads/ThreadsList';
import ContentHeading from '../../components/common/ContentHeading';

export default function ThreadIndexPage() {
  const { threads, users } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThunkMiddleware());
  }, [dispatch]);

  const threadsList = threads?.map((thread) => ({
    ...thread,
    user: users?.find((user) => user.id === thread.ownerId),
  }));

  return (
    <Container>
      <ContentHeading title="Semua Daftar Pertanyaan" />
      <ThreadsList threads={threadsList} />
    </Container>
  );
}
