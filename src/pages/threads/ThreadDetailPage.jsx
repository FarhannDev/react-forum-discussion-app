/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ReactSEOMetaTags from 'react-seo-meta-tags';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';
import { asyncReceiveThreadsDetail } from '../../store/actions/detailThreadAction';

// Code Splitting

const ThreadDetail = loadable(() =>
  import('../../components/threads/ThreadDetail')
);

export default function ThreadDetailPage() {
  const { id } = useParams();
  const { detailThread = null } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadsDetail(id));
  }, [dispatch, id]);

  if (detailThread === null) return null;

  return (
    <Container>
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}</Helmet>}
        website={{
          url: `http://localhost:5173/threads/${id}`,
          title: detailThread?.title,
          datePublished: new Date().toISOString(),
          description: detailThread?.body,
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
      <ThreadDetail {...detailThread} />
    </Container>
  );
}
