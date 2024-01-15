/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { FiHome, FiBell } from 'react-icons/fi';
import { FaThreads, FaUsers, FaUser } from 'react-icons/fa6';
import { MdGTranslate } from 'react-icons/md';

import '../../assets/styles/menu-top-navigation.css';
import SearchBar from '../common/SearchBar';

export default function MenuTopNavigation() {
  const menu = [
    {
      title: 'Beranda',
      icons: <FiHome fontSize={28} />,
      link: '/',
    },
    {
      title: 'Thread',
      icons: <FaThreads fontSize={28} />,
      link: '/threads',
    },
    {
      title: 'Papan Peringkat',
      icons: <FaUsers fontSize={28} />,
      link: '/leaderboards',
    },

    {
      title: 'Notifikasi',
      icons: <FiBell fontSize={28} />,
      link: '/notification',
    },
  ];

  const MenuItem = () =>
    menu.map((menu, idx) => (
      <Link
        key={idx}
        to={menu.link}
        className="mx-md-2 nav-link"
        title={menu.title}
      >
        {/* <FiHome fontSize={26} /> */}
        {menu.icons}
      </Link>
    ));

  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="mx-auto mx-lg-0">Open Discussion</Navbar.Brand>
        <Nav className="me-auto d-none d-lg-flex justify-content-start align-content-start pt-2">
          <MenuItem />
          <SearchBar />
        </Nav>
        <div className="d-flex justify-content-start d-none d-lg-flex">
          {/* <button
            type="button"
            title="Ubah Bahasa Perangkat"
            className="btn-toggle-color-mode d-none d-lg-block "
          >
            <Stack direction="horizontal" gap={2}>
              <span className="locale-icon">
                <MdGTranslate fontSize={28} color="5d5d5d" />
              </span>
              <span className="locale-codename">ID</span>
            </Stack>
          </button> */}
          <button
            type="button"
            title="Ubah Bahasa Perangkat"
            className="btn-toggle-color-mode d-none d-lg-block "
          >
            <Stack direction="horizontal" gap={2}>
              <span className="locale-icon">
                <FaUser fontSize={28} color="5d5d5d" />
              </span>
              <span className="locale-codename">Farhan</span>
            </Stack>
          </button>
        </div>
      </Container>
    </Navbar>
  );
}
