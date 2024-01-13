/* eslint-disable object-curly-newline */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { Container, Row, Col, Card } from 'react-bootstrap';
import RegisterFormInput from '../../components/auth/RegisterFormInput';
import Heading from '../../components/auth/Heading';
import SubHeading from '../../components/auth/SubHeading';

export default function RegisterPage() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center align-self-center">
        <Col lg={6}>
          <Card body>
            <div className="d-flex justify-content-center g-2 mb-4">
              <div className="d-flex flex-column pt-3">
                <Heading title="Dicoding Forum Discussion" />
                <SubHeading title=" Tempat diskusi seputar teknologi, dunia dan lainnya." />
              </div>
            </div>

            <RegisterFormInput />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
