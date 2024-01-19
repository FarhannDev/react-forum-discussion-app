import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { asyncPreloadProcess } from './store/actions/isPreloadAction';

// Code Splitting
const AppLayout = loadable(() => import('./layouts/AppLayout'));
const AuthLayout = loadable(() => import('./layouts/AuthLayout'));
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
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AuthLayout>
  );

  const privateRoute = (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/threads" element={<ThreadIndex />} />
        <Route path="/threads/:id" element={<ThreadDetail />} />
        <Route path="/threads/new" element={<ThreadAdd />} />

        <Route path="/leaderboards" element={<LeaderboardIndex />} />

        <Route path="/notifications" element={<NotificationIndex />} />
        <Route path="/users">
          <Route path=":id" element={<UserProfileUser />} />
          <Route path="me" element={<UserProfileMe />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppLayout>
  );

  return !authUser ? publicRoute : privateRoute;
}
