/* eslint-disable react/react-in-jsx-scope */
import { Container, Row, Col } from 'react-bootstrap';
import ThreadFormInput from '../../components/threads/ThreadFormInput';

export default function ThredNewPage() {
  return (
    <Container>
      <Row className="justify-content-start g-3">
        <Col>
          <ThreadFormInput />
        </Col>
      </Row>
    </Container>
  );
}
