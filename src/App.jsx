import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { asyncPreloadProcess } from './store/actions/isPreloadAction';

// Code Splitting
const AppLayout = loadable(() => import('./layouts/AppLayout'));
const Login = loadable(() => import('./pages/auth/LoginPage'));
const Register = loadable(() => import('./pages/auth/RegisterPage'));
const ErrorPage = loadable(() => import('./pages/ErrorPage'));
const Home = loadable(() => import('./pages/HomePage'));
const ThreadIndex = loadable(() => import('./pages/threads/ThreadIndexPage'));
const ThreadAdd = loadable(() => import('./pages/threads/ThreadNewPage'));
const ThreadDetail = loadable(() => import('./pages/threads/ThreadDetailPage'));
const LeaderboardIndex = loadable(() => import('./pages/leaderboards/LeaderBoardIndexPage'));
const NotificationIndex = loadable(() => import('./pages/notifications/NotificationIndexPage'));
const UserProfileMe = loadable(() => import('./pages/profile/UsersProfileMe'));
const UserProfileUser = loadable(() => import('./pages/profile/UsersProfile'));

export default function App() {
  const { isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch async action to preload app
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  const appRoutes = (
    <AppLayout>
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/threads" element={<ThreadIndex />} />
        <Route path="/threads/:id" element={<ThreadDetail />} />
        <Route path="/threads/new" element={<ThreadAdd />} />

        <Route path="/leaderboards" element={<LeaderboardIndex />} />

        <Route path="/onboarding" element={<NotificationIndex />} />
        <Route path="/users">
          <Route path=":id" element={<UserProfileUser />} />
          <Route path="me" element={<UserProfileMe />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppLayout>
  );

  return appRoutes;
}
