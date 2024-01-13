/* eslint-disable react/prop-types */
import React from 'react';
import MenuTopNavigation from '../components/menu/MenuTopNavigation';

export default function AppLayout({ children }) {
  return (
    <>
      <MenuTopNavigation />
      <main className="app-content-main">{children}</main>
    </>
  );
}
