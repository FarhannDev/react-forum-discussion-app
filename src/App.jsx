/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { asyncPreloadProcess } from './store/actions/isPreloadAction';

import AuthLayout from './layouts/AuthLayout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ErrorPage from './pages/ErrorPage';
import AppLayout from './layouts/AppLayout';

import HomePage from './pages/HomePage';
import ThredNewPage from './pages/threads/ThreadNewPage';
import ThreadIndexPage from './pages/threads/ThreadIndexPage';
import ThreadDetailPage from './pages/threads/ThreadDetailPage';
import LeaderBoardIndexPage from './pages/leaderboards/LeaderBoardIndexPage';
import UsersProfileMe from './pages/profile/UsersProfileMe';
import UsersProfile from './pages/profile/UsersProfile';
import NotificationIndexPage from './pages/notifications/NotificationIndexPage';

export default function App() {
  const { authUser, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch async action to preload app
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  const publicRoute = (
    <AuthLayout>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/register" element={<RegisterPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AuthLayout>
  );

  const privateRoute = (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/threads" element={<ThreadIndexPage />} />
        <Route path="/threads/:id" element={<ThreadDetailPage />} />
        <Route path="/threads/new" element={<ThredNewPage />} />

        <Route path="/leaderboards" element={<LeaderBoardIndexPage />} />

        <Route path="/notifications" element={<NotificationIndexPage />} />
        <Route path="/users">
          <Route path=":id" element={<UsersProfile />} />
          <Route path="me" element={<UsersProfileMe />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppLayout>
  );

  return !authUser ? publicRoute : privateRoute;
}
