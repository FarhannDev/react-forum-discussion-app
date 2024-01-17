/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {
  IoTimeOutline,
  IoMailOpenOutline,
  IoPersonOutline,
} from 'react-icons/io5';

import asyncPopulateThunkMiddleware from '../../store/shared/asyncPopulateThunkMiddleware';

import ContentHeading from '../../components/common/ContentHeading';
import ThreadsList from '../../components/threads/ThreadsList';
import '../../assets/styles/user-profile.css';
import CommentsIsEmpty from '../../components/threads/details/CommentsIsEmpty';

export default function UsersProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users, threads } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncPopulateThunkMiddleware());
  }, [dispatch]);

  const threadsList = threads
    .filter((user) => user.ownerId === id)
    .map((thread) => ({
      ...thread,
      user: users?.find((user) => user.id === id),
    }));

  const userProfile = users?.find((user) => user.id === id);

  return (
    <Container>
      <div className="d-flex justify-content-start align-items-center align-content-center g-3">
        <img
          src={userProfile?.avatar}
          alt={userProfile.name}
          className="img-fluid rounded-pill"
          width={80}
        />
        <div className="d-flex flex-column mx-2 px-2">
          <div className="user-profile-title ">
            {' '}
            <IoPersonOutline fontSize={16} className="me-2" />
            {userProfile.name}
          </div>
          <div className="user-profile-subheading">
            {' '}
            <IoMailOpenOutline fontSize={16} className="me-2" />
            {userProfile.email}
          </div>
          <div className="user-profile-subheading">
            <IoTimeOutline fontSize={16} className="me-2" />
            Bergabung Sejak 2023{' '}
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
              title={`${threadsList.length} Diskusi yang sudah dibuat ${userProfile.name}`}
            />
            <ThreadsList threads={threadsList} />
          </>
        )}
      </div>
    </Container>
  );
}
