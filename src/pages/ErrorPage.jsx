import React from 'react';
import loadable from '@loadable/component';

// Code Splitting
const ErrorNotFound = loadable(() => import('../components/common/ErrorNotFound'));
const ErrorLayout = loadable(() => import('../layouts/ErrorLayout'));

export default function ErrorPage() {
  return (
    <ErrorLayout>
      <ErrorNotFound title="Halaman Tidak Ditemukan" />
    </ErrorLayout>
  );
}
