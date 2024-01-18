/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable object-curly-newline */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import loadable from '@loadable/component';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactSEOMetaTags from 'react-seo-meta-tags';
import { Helmet } from 'react-helmet';
import { asyncRegisterUser } from '../../store/actions/usersAction';

// Code Spiltting
const RegisterFormInput = loadable(() =>
  import('../../components/auth/RegisterFormInput')
);
const Heading = loadable(() => import('../../components/auth/Heading'));
const SubHeading = loadable(() => import('../../components/auth/SubHeading'));

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };
  return (
    <Container>
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}</Helmet>}
        website={{
          url: 'http://localhost:5173/',
          title: 'Mendaftar - Dicoding Open Forum Discussion',
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
        <Row className="justify-content-start align-self-center align-items-center g-3">
          <Col lg={12} xl={6} md={12}>
            <img
              src="/images/free_epik_auth_background.png"
              className="img-fluid"
              alt="logo"
            />
          </Col>
          <Col lg={12} xl={6} md={12}>
            <div className="d-flex justify-content-center g-2 mb-4">
              <div className="d-flex flex-column pt-3">
                <Heading title="Dicoding Forum Discussion" />
                <SubHeading title=" Tempat diskusi seputar teknologi, dunia dan lainnya." />
              </div>
            </div>
            <RegisterFormInput register={handleRegister} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
