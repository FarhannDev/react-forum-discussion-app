/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Helmet from 'react-helmet';
import { ReactSEOMetaTags } from 'react-seo-meta-tags';
import MenuTopNavigation from '../components/menu/MenuTopNavigation';
import Loading from '../components/common/Loading';

export default function AppLayout({ children }) {
  return (
    <>
      <Loading />
      <MenuTopNavigation />
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}</Helmet>}
        website={{
          url: 'http://localhost:5173/',
          title: 'Dicoding Open Forum Discussion',
          datePublished: new Date().toISOString(),
          description:
            'Proyek: Membangun Aplikasi React dengan Redux          ',
          language: 'en-US',
          author: {
            email: 'farhan18042002@gmail.com',
            name: 'Farhan',
            image: 'https://avatars.githubusercontent.com/u/101630148?s=96&v=4',
          },
          site: {
            siteName: 'DICODING OPEN DISCUSSION',
            searchUrl: 'https://www.google.com/search?q=',
          },
        }}
      />

      <main className="app-content-main">{children}</main>

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
    </>
  );
}
