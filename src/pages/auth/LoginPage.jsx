/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import loadable from '@loadable/component';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../../store/actions/authUserAction';

// Code Splitting
const LoginFormInput = loadable(() =>
  import('../../components/auth/LoginFormInput')
);
const Heading = loadable(() => import('../../components/auth/Heading'));
const SubHeading = loadable(() => import('../../components/auth/SubHeading'));

export default function LoginPage() {
  const dispatch = useDispatch();
  const handleLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <Container>
      <Card body className="auth-card-container">
        <Row className="justify-content-start align-self-center align-items-center g-3 py-3">
          <Col lg={12} xl={6} md={12}>
            <img
              src="/images/background/free_epik_auth_background.jpg"
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

            <LoginFormInput login={handleLogin} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
