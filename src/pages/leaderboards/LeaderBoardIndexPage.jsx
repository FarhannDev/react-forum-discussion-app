/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import ReactSEOMetaTags from 'react-seo-meta-tags';
import { Helmet } from 'react-helmet';
import asyncPopulateThunkMiddleware from '../../store/shared/asyncPopulateThunkMiddleware';
import '../../assets/styles/leaderboards.css';

// Code Splitting
const ContentHeading = loadable(() => import('../../components/common/ContentHeading'));
const LeaderBoardList = loadable(() => import('../../components/leaderboards/LeaderBoardList'));
const LeaderBoardSelected = loadable(() => import('../../components/leaderboards/LeaderBoardSelected'));

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
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}</Helmet>}
        website={{
          url: 'http://localhost:5173/',
          title: 'Klasemen Pengguna Aktif ',
          datePublished: new Date().toISOString(),
          description: 'Klasemen Pengguna Aktif',
          language: 'en-US',
          author: {
            email: 'farhan18042002@gmail.com',
            name: 'Farhan',
            image: 'https://avatars.githubusercontent.com/u/101630148?s=96&v=4',
          },
          site: {
            siteName: 'DICODING OPEN DISCUSSION',
            searchUrl: 'https://www.google.com/search?q=',
          },
        }}
      />

      <Card body className="leaderboards-card-item">
        <ContentHeading title="Klasemen Pengguna Aktif" />
        <hr />

        {/* <LeaderBoardSelected
          selectedFilter={selectedFilter}
          setSelectedFilter={handleFilterChange}
        /> */}

        <LeaderBoardList leaderboards={filterData()} />
      </Card>
    </Container>
  );
}
