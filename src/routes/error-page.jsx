import React from 'react';
import loadable from '@loadable/component';
import MenuTopNavigation from '../components/menu/MenuTopNavigation';
import MenuBottomNavigation from '../components/menu/MenuBottomNavigation';

// Code Splitting
const ErrorNotFound = loadable(() =>
  import('../components/common/ErrorNotFound')
);

export default function ErrorPage() {
  return (
    <>
      <MenuTopNavigation />
      <main className="app-content-main">
        <ErrorNotFound title="Halaman Tidak Ditemukan" />
      </main>
      <MenuBottomNavigation />
    </>
  );
}
