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
import asyncPopulateThunkMiddleware from '../../store/shared/asyncPopulateThunkMiddleware';

import ThreadsList from '../../components/threads/ThreadsList';
import ContentHeading from '../../components/common/ContentHeading';
import SearchBar from '../../components/common/SearchBar';
import SearchBarEmpty from '../../components/common/SearchBarEmpty';

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
