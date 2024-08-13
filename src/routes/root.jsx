import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import { asyncPreloadProcess } from '../store/actions/isPreloadAction';
import MenuBottomNavigation from '../components/menu/MenuBottomNavigation';

// Code Splitting
const MenuTopNavigation = loadable(() => import('../components/menu/MenuTopNavigation'));
const Loading = loadable(() => import('../components/common/Loading'));

export default function Root() {
  const { authUser, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  console.log({ authUser });

  useEffect(() => {
    // dispatch async action to preload app
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }
  return (
    <>
      <Loading />
      <MenuTopNavigation />

      <main className="app-content-main">
        <Outlet />
      </main>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <MenuBottomNavigation />
    </>
  );
}
