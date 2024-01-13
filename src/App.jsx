/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import asyncPopulateThunkMiddleware from './store/shared/asyncPopulateThunkMiddleware';
import AuthLayout from './layouts/AuthLayout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ErrorPage from './pages/ErrorPage';
import AppLayout from './layouts/AppLayout';

export default function App() {
  const { users, threads, leaderBoards, authUser } = useSelector(
    (states) => states
  );
  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    dispatch(asyncPopulateThunkMiddleware());
  }, [dispatch]);

  const publicRoute = (
    <AuthLayout>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </AuthLayout>
  );

  const privateRoute = (
    <AppLayout>
      <Routes>
        <Route path="/" element={<div>Hello World</div>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppLayout>
  );

  return !isAuth ? publicRoute : privateRoute;
}
