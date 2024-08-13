import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import ReactSEOMetaTags from 'react-seo-meta-tags';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { asyncReceiveThreadsDetail } from '../store/actions/detailThreadAction';

// Code Splitting

const ThreadDetail = loadable(() =>
  import('../components/threads/ThreadDetail')
);

export default function DetailThread() {
  const { id } = useParams();
  const { detailThread = null } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadsDetail(id));
  }, [dispatch, id]);

  if (detailThread === null) return null;

  return (
    <Container>
      {/* <ReactSEOMetaTags
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
      /> */}
      <ThreadDetail {...detailThread} />
    </Container>
  );
}
