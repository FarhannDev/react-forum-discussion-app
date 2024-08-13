import React from 'react';
import loadable from '@loadable/component';
import ReactSEOMetaTags from 'react-seo-meta-tags';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const NotificationWelcome = loadable(() =>
  import('../components/notifications/NotificationWelcome')
);

export default function Onboarding() {
  return (
    <Container>
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}</Helmet>}
        website={{
          url: 'http://localhost:5173/',
          title: 'Selamat Datang',
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

      <NotificationWelcome />
    </Container>
  );
}
