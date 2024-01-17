/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {
  IoTimeOutline,
  IoMailOpenOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import ReactSEOMetaTags from 'react-seo-meta-tags';
import { Helmet } from 'react-helmet';
import { asyncUnsetAuthUser } from '../../store/actions/authUserAction';
import asyncPopulateThunkMiddleware from '../../store/shared/asyncPopulateThunkMiddleware';
import ContentHeading from '../../components/common/ContentHeading';
import ThreadsList from '../../components/threads/ThreadsList';
import CommentsIsEmpty from '../../components/threads/details/CommentsIsEmpty';
import '../../assets/styles/user-profile.css';

export default function UsersProfileMe() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, threads, authUser } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncPopulateThunkMiddleware());
  }, [dispatch]);

  const threadsList = threads
    .filter((user) => user.ownerId === authUser.id)
    .map((thread) => ({
      ...thread,
      user: users?.find((user) => user.id === authUser.id),
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
          alt={authUser.name}
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
        </div>
      </div>

      <div className="pt-3">
        <button
          onClick={onLogout}
          type="button"
          className="btn btn-danger rounded-pill btn-md"
        >
          Keluar Dari Aplikasi
        </button>
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
              title={`${threadsList.length} Diskusi yang sudah dibuat ${authUser.name}`}
            />
            <ThreadsList threads={threadsList} />
          </>
        )}
      </div>
    </Container>
  );
}
