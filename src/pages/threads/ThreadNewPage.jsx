/* eslint-disable react/react-in-jsx-scope */
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { asyncAddThread } from '../../store/actions/threadsAction';
import ThreadFormInput from '../../components/threads/ThreadFormInput';

export default function ThredNewPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    toast.success('Berhasil menambahkan diskusi!');
    navigate('/');
  };

  return (
    <Container>
      <Row className="justify-content-start g-3">
        <Col>
          <ThreadFormInput thread={handleThread} />
        </Col>
      </Row>
    </Container>
  );
}
