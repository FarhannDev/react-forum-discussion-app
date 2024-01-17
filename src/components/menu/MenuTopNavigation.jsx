/* eslint-disable object-curly-newline */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiHome, FiBell } from 'react-icons/fi';
import { IoSearchOutline, IoMedalOutline } from 'react-icons/io5';
import { FaRegPenToSquare } from 'react-icons/fa6';

import '../../assets/styles/menu-top-navigation.css';
import { useSelector } from 'react-redux';

export default function MenuTopNavigation() {
  const { authUser } = useSelector((states) => states);

  const menu = [
    {
      title: 'Beranda',
      icons: <FiHome fontSize={28} />,
      link: '/',
    },
    {
      title: 'Thread',
      icons: <IoSearchOutline fontSize={28} />,
      link: '/threads',
    },
    {
      title: 'Buat Pertanyaan Baru',
      icons: <FaRegPenToSquare fontSize={28} />,
      link: '/threads/new',
    },
    {
      title: 'Papan Peringkat',
      icons: <IoMedalOutline fontSize={28} />,
      link: '/leaderboards',
    },

    {
      title: 'Notifikasi',
      icons: <FiBell fontSize={28} />,
      link: '/notifications',
    },
  ];

  const MenuItem = () =>
    menu.map((menu, idx) => (
      <Link
        key={idx}
        to={menu.link}
        className="mx-md-3  nav-link"
        title={menu.title}
      >
        {/* <FiHome fontSize={26} /> */}
        {menu.icons}
      </Link>
    ));

  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="mx-lg-0">Open Discussion</Navbar.Brand>
        <Nav className="me-auto d-none d-lg-flex justify-content-start align-item-center">
          <MenuItem />
        </Nav>
        <div className="d-flex justify-content-start d-none d-lg-flex">
          <Link to="/users/me" aria-label="Profile">
            <img
              src={authUser?.avatar}
              alt={authUser?.name}
              className="img-fluid rounded-pill"
              width={40}
            />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}
