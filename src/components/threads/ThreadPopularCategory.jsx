/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { Card, ListGroup } from 'react-bootstrap';
import ContentHeading from '../common/ContentHeading';
import '../../assets/styles/thread-card-category-item.css';

export default function ThreadPopularCategory({ threads }) {
  const category = threads?.map((thread) => (
    <ListGroup.Item key={thread.id} className="px-md-0 mx-md-0">
      {thread.category}
    </ListGroup.Item>
  ));

  return (
    <Card className="thread-card-category-item" body>
      <ContentHeading title="Kategori Terpopuler" />
      <hr />

      <ListGroup variant="flush">{category}</ListGroup>
    </Card>
  );
}
