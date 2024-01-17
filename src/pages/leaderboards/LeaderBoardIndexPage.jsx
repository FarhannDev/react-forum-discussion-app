/* eslint-disable radix */
/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import asyncPopulateThunkMiddleware from '../../store/shared/asyncPopulateThunkMiddleware';
import ContentHeading from '../../components/common/ContentHeading';
import LeaderBoardList from '../../components/leaderboards/LeaderBoardList';
import LeaderBoardSelected from '../../components/leaderboards/LeaderBoardSelected';
import '../../assets/styles/leaderboards.css';

export default function LeaderBoardIndexPage() {
  const { leaderBoards } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    dispatch(asyncPopulateThunkMiddleware());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filterData = () => {
    if (selectedFilter === 'highest') {
      // Filter data untuk nilai tertinggi
      // const highestScore = Math.max(...leaderBoards.map((item) => item.score));
      const highestScore = 50;
      return leaderBoards.filter((item) => item.score > highestScore);
    }
    if (selectedFilter === 'lowest') {
      // Filter data untuk nilai terendah
      // const lowestScore = Math.min(...leaderBoards.map((item) => item.score));
      const lowestScore = 50;
      return leaderBoards.filter((item) => item.score < lowestScore);
    }
    return leaderBoards;
  };

  return (
    <Container>
      <Card body className="leaderboards-card-item">
        <ContentHeading title="Klasemen Pengguna Aktif" />
        <hr />
        <LeaderBoardSelected
          selectedFilter={selectedFilter}
          setSelectedFilter={handleFilterChange}
        />

        <LeaderBoardList leaderboards={filterData()} />
      </Card>
    </Container>
  );
}
