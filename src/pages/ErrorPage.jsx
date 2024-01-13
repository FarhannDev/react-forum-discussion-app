import React from 'react';
import ErrorNotFound from '../components/common/ErrorNotFound';
import ErrorLayout from '../layouts/ErrorLayout';

export default function ErrorPage() {
  return (
    <ErrorLayout>
      <ErrorNotFound title="Halaman Tidak Ditemukan" />
    </ErrorLayout>
  );
}
