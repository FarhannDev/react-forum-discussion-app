/* eslint-disable object-curly-newline */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../../store/actions/authUserAction';
import LoginFormInput from '../../components/auth/LoginFormInput';
import Heading from '../../components/auth/Heading';
import SubHeading from '../../components/auth/SubHeading';

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
