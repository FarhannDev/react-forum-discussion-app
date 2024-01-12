/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './assets/styles/App.css';
import { useSelector, useDispatch } from 'react-redux';
import asyncPopulateThunkMiddleware from './store/shared/asyncPopulateThunkMiddleware';

export default function App() {
  const [count, setCount] = useState(0);
  const { users, threads, leaderBoards } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThunkMiddleware());
  }, [dispatch]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
