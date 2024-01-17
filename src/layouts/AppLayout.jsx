/* eslint-disable react/prop-types */
import React from 'react';
import { ToastContainer } from 'react-toastify';
import MenuTopNavigation from '../components/menu/MenuTopNavigation';

export default function AppLayout({ children }) {
  return (
    <>
      <MenuTopNavigation />
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
      <main className="app-content-main">{children}</main>
    </>
  );
}
