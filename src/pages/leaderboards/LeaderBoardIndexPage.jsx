import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import asyncPopulateThunkMiddleware from '../../store/shared/asyncPopulateThunkMiddleware';
import ContentHeading from '../../components/common/ContentHeading';
import LeaderBoardList from '../../components/leaderboards/LeaderBoardList';
import '../../assets/styles/leaderboards.css';

export default function LeaderBoardIndexPage() {
  const dispatch = useDispatch();
  const { leaderBoards } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncPopulateThunkMiddleware());
  }, [dispatch]);

  return (
    <Container>
      <ContentHeading title="Selamat Datang Di Leader Boards" />

      <Card body className="leaderboards-card-item">
        <ContentHeading title="Klasemen Pengguna Aktif" />
        <hr />
        <LeaderBoardList leaderboards={leaderBoards} />
      </Card>
    </Container>
  );
}
