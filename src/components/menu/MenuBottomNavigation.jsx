/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiHome } from 'react-icons/fi';
import { IoSearchOutline, IoMedalOutline } from 'react-icons/io5';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { FaRegUserCircle } from 'react-icons/fa';
import '../../assets/styles/menu-top-navigation.css';

export default function MenuBottomNavigation() {
  const menu = [
    {
      title: 'Beranda',
      icons: <FiHome fontSize={26} />,
      link: '/',
    },
    {
      title: 'Search Thread',
      icons: <IoSearchOutline fontSize={26} />,
      link: '/search',
    },
    {
      title: 'Buat Pertanyaan Baru',
      icons: <FaRegPenToSquare fontSize={26} />,
      link: '/thread/new',
    },
    {
      title: 'Papan Peringkat',
      icons: <IoMedalOutline fontSize={26} />,
      link: '/leaderboards',
    },
    {
      title: 'Profile saya',
      icons: <FaRegUserCircle fontSize={26} />,
      link: '/profile',
    },
  ];

  const MenuItem = () => menu.map((menu, idx) => (
    <Link
      key={idx}
      to={menu.link}
      className="d-flex justify-content-center align-item-center mx-md-5 mx-3  nav-link"
      title={menu.title}
    >
      {/* <FiHome fontSize={26} /> */}
      {menu.icons}
    </Link>
  ));

  return (
    <Navbar fixed="bottom" expanded>
      <Container>
        <Nav className="mx-md-auto w-100 d-flex justify-content-around ">
          <MenuItem />
        </Nav>
      </Container>
    </Navbar>
  );
}
