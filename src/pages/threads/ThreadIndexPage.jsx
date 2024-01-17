/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import ReactSEOMetaTags from 'react-seo-meta-tags';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';
import asyncPopulateThunkMiddleware from '../../store/shared/asyncPopulateThunkMiddleware';

// Code Splitting

const ThreadsList = loadable(() =>
  import('../../components/threads/ThreadsList')
);
const ContentHeading = loadable(() =>
  import('../../components/common/ContentHeading')
);
const SearchBar = loadable(() => import('../../components/common/SearchBar'));
const SearchBarEmpty = loadable(() =>
  import('../../components/common/SearchBarEmpty')
);

export default function ThreadIndexPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { threads, users } = useSelector((state) => state);
  const [keyword, setKeyword] = useState(
    () => searchParams.get('keyword') || ''
  );
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThunkMiddleware());
  }, [dispatch]);

  const onKeywordChangeHandler = (keyword) => {
    setIsLoading(true);
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const threadsList = searchParams.get('keyword')
    ? threads
        ?.filter((filteredData) =>
          filteredData.title.toLowerCase().includes(keyword.toLowerCase())
        )
        .map((thread) => ({
          ...thread,
          user: users?.find((user) => user.id === thread.ownerId),
        }))
    : null;

  return (
    <Container>
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}</Helmet>}
        website={{
          url: 'http://localhost:5173/',
          title: 'Cari Semua Diskusi',
          datePublished: new Date().toISOString(),
          description: 'Cari semua diskusi yang sudah dibuat dan dibagikan',
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

      <SearchBar
        placeholder="Mau Cari Apa?"
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />

      {!searchParams.get('keyword') ? (
        <SearchBarEmpty title="Belum ada hasil pencarian nih! Yuk cari semua diskusi sekarang." />
      ) : (
        <>
          {threadsList.length ? (
            <>
              <ContentHeading
                title={`${
                  threadsList.length
                } Hasil Pencarian ${searchParams.get('keyword')}`}
              />
              <ThreadsList threads={threadsList} />
            </>
          ) : (
            <SearchBarEmpty title="Hasil pencarian tidak ditemukan! Coba dengan kata kunci lain." />
          )}
        </>
      )}
    </Container>
  );
}
