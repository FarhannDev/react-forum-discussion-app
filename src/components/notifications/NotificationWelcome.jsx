/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React from 'react';
import ContentHeading from '../common/ContentHeading';
import { Link } from 'react-router-dom';

export default function NotificationWelcome() {
  return (
    <div className="page-notfound-container">
      <div className="mx-auto text-center">
        <img
          src="/images/notification_welcome.png"
          className="img-fluid page-notfound-images"
          alt="logo error"
          loading="lazy"
        />
        <ContentHeading title="Selamat Datang di Dicoding Open Discussion!" />
        <ContentHeading title="Tempat diskusi seputar teknologi, dunia dan lainnya." />

        <Link
          to="/thread/new"
          aria-label="Menuju halaman forum diskusi"
          className="btn btn-danger btn-md rounded-pill"
        >
          Yuk, mulai berdiskusi sekarang
          {/* <FaPlus fontSize={18} className="me-1" /> Kembali Halaman Utama */}
        </Link>
      </div>
    </div>
  );
}
