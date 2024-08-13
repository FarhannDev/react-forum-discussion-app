import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {
  IoTimeOutline,
  IoMailOpenOutline,
  IoPersonOutline,
  IoLogOutOutline,
} from 'react-icons/io5';
import ReactSEOMetaTags from 'react-seo-meta-tags';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';
import { asyncUnsetAuthUser } from '../store/actions/authUserAction';
import asyncPopulateThunkMiddleware from '../store/shared/asyncPopulateThunkMiddleware';
import '../assets/styles/user-profile.css';
// Code Splitting
const ContentHeading = loadable(() =>
  import('../components/common/ContentHeading')
);
const ThreadsList = loadable(() => import('../components/threads/ThreadsList'));
const CommentsIsEmpty = loadable(() =>
  import('../components/threads/details/CommentsIsEmpty')
);

export default function ProfileMe() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, threads, authUser } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncPopulateThunkMiddleware());
  }, [dispatch]);

  const threadsList = threads
    .filter((user) => user.ownerId === authUser?.id)
    .map((thread) => ({
      ...thread,
      user: users?.find((user) => user.id === authUser?.id),
    }));

  const onLogout = () => {
    navigate('/');
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <Container>
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}</Helmet>}
        website={{
          url: 'http://localhost:5173/',
          title: 'Profil Saya',
          datePublished: new Date().toISOString(),
          description:
            'Selamat Datang di Dicoding Open Discussion! Tempat diskusi seputar teknologi, dunia dan lainnya.            ',
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

      <div className="d-flex justify-content-start align-items-center align-content-center g-3">
        <img
          src={authUser?.avatar}
          alt={authUser?.name}
          className="img-fluid rounded-pill"
          width={80}
        />
        <div className="d-flex flex-column mx-2 px-2">
          <div className="user-profile-title ">
            {' '}
            <IoPersonOutline fontSize={16} className="me-2" />
            {authUser.name}
          </div>
          <div className="user-profile-subheading">
            {' '}
            <IoMailOpenOutline fontSize={16} className="me-2" />
            {authUser.email}
          </div>
          <div className="user-profile-subheading">
            <IoTimeOutline fontSize={16} className="me-2" />
            Bergabung Sejak 2023{' '}
          </div>

          <div>
            <button
              onClick={onLogout}
              title="Klik Disini Untuk Keluar Dari Akun"
              type="button"
              className="btn border-0 px-0 mx-0 user-profile-subheading logout-button"
            >
              <IoLogOutOutline fontSize={18} /> Keluar
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column g-3 pt-5">
        <ContentHeading title="Tentang Saya" />
        <div className="user-profile-subheading">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          provident tempora, natus ex odio placeat animi nesciunt est quidem
          dignissimos!
        </div>
      </div>

      <div className="d-flex flex-column g-3 pt-5">
        {!threadsList.length ? (
          <>
            <ContentHeading title="Postingan" />
            <CommentsIsEmpty title="Belum Ada Postingan Saat Ini" />
          </>
        ) : (
          <>
            <ContentHeading
              title={`${threadsList.length} Diskusi yang sudah dibuat ${authUser?.name}`}
            />
            <ThreadsList threads={threadsList} />
          </>
        )}
      </div>
    </Container>
  );
}
