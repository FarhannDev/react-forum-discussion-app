import React from 'react';
import loadable from '@loadable/component';
import ReactSEOMetaTags from 'react-seo-meta-tags';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { asyncSetAuthUser } from '../store/actions/authUserAction';

// Code Splitting
const LoginFormInput = loadable(() =>
  import('../components/auth/LoginFormInput')
);
const Heading = loadable(() => import('../components/auth/Heading'));
const SubHeading = loadable(() => import('../components/auth/SubHeading'));

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <Container>
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}</Helmet>}
        website={{
          url: 'http://localhost:5173/',
          title: 'Masuk Ke Akun ',
          datePublished: new Date().toISOString(),
          description:
            'Proyek: Membangun Aplikasi React dengan Redux          ',
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

      <Card body className="auth-card-container">
        <Row className="justify-content-start align-self-center align-items-center g-3 py-3">
          <Col lg={12} xl={6} md={12}>
            <img
              src="/images/free_epik_auth_background.png"
              className="img-fluid"
              alt="logo"
              loading="lazy"
            />
          </Col>
          <Col lg={12} xl={6} md={12}>
            <div className="d-flex justify-content-center g-2 mb-4">
              <div className="d-flex flex-column pt-3">
                <Heading title="Forum Discussion" />
                <SubHeading title=" Tempat diskusi seputar teknologi, dunia dan lainnya." />
              </div>
            </div>

            <LoginFormInput login={handleLogin} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
