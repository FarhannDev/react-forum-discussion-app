/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import loadable from '@loadable/component';
import asyncPopulateThunkMiddleware from '../store/shared/asyncPopulateThunkMiddleware';
// Code Splitting
const ThreadsList = loadable(() => import('../components/threads/ThreadsList'));

export default function HomePage() {
  const { threads, users, authUser } = useSelector((state) => state);
  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThunkMiddleware());
  }, [dispatch]);

  const threadsList = threads?.map((thread) => ({
    ...thread,
    user: users?.find((user) => user.id === thread.ownerId),
  }));

  // const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredThreads = !selectedOption
    ? threadsList
    : threadsList?.filter((thread) => {
        const { label } = selectedOption;
        return thread.category === label;
      });

  const options = threadsList
    ?.filter(
      (value, index, self) =>
        index === self.findIndex((obj) => obj.category === value.category)
    )
    .map((thread) => ({
      value: thread.id,
      label: thread.category,
    }));

  return (
    <>
      <Container>
        <CreatableSelect
          isClearable
          onChange={setSelectedOption}
          options={options}
          className="mb-4"
          placeholder="Pilih Kategori Terpopuler"
        />

        <ThreadsList threads={filteredThreads} />
      </Container>
    </>
  );
}
