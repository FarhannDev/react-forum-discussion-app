/* eslint-disable import/order */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from 'react-bootstrap';
import NotificationWelcome from '../../components/notifications/NotificationWelcome';

export default function NotificationIndexPage() {
  return (
    <Container>
      <NotificationWelcome />
    </Container>
  );
}
