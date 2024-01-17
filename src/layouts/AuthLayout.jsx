/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { LoadingBar } from 'react-redux-loading-bar';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
export default function AuthLayout({ children }) {
  return (
    <>
      <LoadingBar className="loading" />
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
