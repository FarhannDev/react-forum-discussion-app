/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { asyncReceiveDetailThread } from '../../store/actions/detailThreadAction';
import ThreadDetail from '../../components/threads/ThreadDetail';

export default function ThreadDetailPage() {
  const { id } = useParams();
  const { detailThread = null } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(id));
  }, [dispatch, id]);

  if (detailThread === null) return null;

  return (
    <Container>
      <ThreadDetail {...detailThread} />
    </Container>
  );
}
