import React from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

const Loading = loadable(() => import('../components/common/Loading'));
/* eslint-disable react/prop-types */
export default function AuthLayout({ children }) {
  return (
    <>
      <Loading />
      <main className="main-content-auth">{children}</main>
      <ToastContainer
        position="top-right"
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
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
