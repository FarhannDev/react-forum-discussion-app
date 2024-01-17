/* eslint-disable react/react-in-jsx-scope */
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ReactSEOMetaTags } from 'react-seo-meta-tags';
import { Helmet } from 'react-helmet';
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
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}</Helmet>}
        website={{
          url: 'http://localhost:5173/',
          title: 'Buat Pertanyaan Baru ',
          datePublished: new Date().toISOString(),
          description: 'Buat Pertanyaan Baru dan bagikan kepada mereka        ',
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

      <Row className="justify-content-start g-3">
        <Col>
          <ThreadFormInput thread={handleThread} />
        </Col>
      </Row>
    </Container>
  );
}
