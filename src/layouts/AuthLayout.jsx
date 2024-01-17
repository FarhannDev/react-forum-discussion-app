/* eslint-disable react/react-in-jsx-scope */

import { LoadingBar } from 'react-redux-loading-bar';

/* eslint-disable react/prop-types */
export default function AuthLayout({ children }) {
  return (
    <>
      <LoadingBar className="loading" />
      <main className="main-content-auth">{children}</main>
    </>
  );
}
