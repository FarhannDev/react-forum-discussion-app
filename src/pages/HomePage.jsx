import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import loadable from '@loadable/component';
import asyncPopulateThunkMiddleware from '../store/shared/asyncPopulateThunkMiddleware';

// Code Splitting
const ThreadsList = loadable(() => import('../components/threads/ThreadsList'));

export default function HomePage() {
  const { threads, users } = useSelector((state) => state);
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
      (value, index, self) => index === self.findIndex((obj) => obj.category === value.category),
    )
    .map((thread) => ({
      value: thread.id,
      label: thread.category,
    }));

  return (
    <Container>
      <Select
        isClearable
        onChange={setSelectedOption}
        options={options}
        className="mb-4 text-dark react-select-container"
        placeholder="Pilih Kategori Terpopuler"
      />

      <ThreadsList threads={filteredThreads} />
    </Container>
  );
}
