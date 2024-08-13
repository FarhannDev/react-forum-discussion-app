import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5';

import { useTheme } from '../../hooks/useTheme';
import '../../assets/styles/menu-top-navigation.css';

export default function MenuTopNavigation() {
  const { theme, toggleTheme } = useTheme();

  // const menu = [
  //   {
  //     title: 'Beranda',
  //     icons: <FiHome fontSize={28} />,
  //     link: '/',
  //   },
  //   {
  //     title: 'Search Thread',
  //     icons: <IoSearchOutline fontSize={28} />,
  //     link: '/search',
  //   },
  //   {
  //     title: 'Buat Pertanyaan Baru',
  //     icons: <FaRegPenToSquare fontSize={28} />,
  //     link: '/threads/new',
  //   },
  //   {
  //     title: 'Papan Peringkat',
  //     icons: <IoMedalOutline fontSize={28} />,
  //     link: '/leaderboards',
  //   },
  // ];

  // const MenuItem = () => menu.map((menu, idx) => (
  //   <Link
  //     key={idx}
  //     to={menu.link}
  //     className="mx-md-3  nav-link"
  //     title={menu.title}
  //   >
  //     {/* <FiHome fontSize={26} /> */}
  //     {menu.icons}
  //   </Link>
  // ));

  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="mx-lg-0">
          Forum Discussion
        </Navbar.Brand>
        <Nav className="me-auto d-none d-lg-flex justify-content-start align-item-center">
          {/* <MenuItem /> */}
        </Nav>
        <button
          onClick={toggleTheme}
          type="button"
          className="btn border-0 mx-md-2 color-mode-toggle"
        >
          {theme === 'dark' ? (
            <IoMoonSharp fontSize={24} color="f6f6f6" />
          ) : (
            <IoSunnyOutline fontSize={24} color="000" />
          )}
        </button>
        {/* <div className="d-flex justify-content-start d-none d-lg-flex">
          <Link to="/users/me" aria-label="Profile">
            <img
              src={authUser?.avatar}
              alt={authUser?.name}
              className="img-fluid rounded-pill toggle-user-profile"
              width={40}
            />
          </Link>
        </div> */}
      </Container>
    </Navbar>
  );
}
