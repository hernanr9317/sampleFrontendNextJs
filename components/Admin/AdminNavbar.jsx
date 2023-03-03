import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../public/assets/navbar/logo.webp';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import {useContext} from 'react';
import {AuthContext} from './../../context/auth/AuthContext';
import {FaUserAlt} from 'react-icons/fa';
import {useRouter} from 'next/router';

export const AdminNavbar = () => {
  const router = useRouter();
  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    router.replace('/auth/login');
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="userNav"
    >
      <Container>
        <Navbar.Brand>
          <Link className="navbar-brand" href="/">
            <a>
              <Image src={logo} width="80" height="50" alt="Logo" />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/admin">
              <a className="nav-link">Panel de administración</a>
            </Link>
          </Nav>
          <Dropdown align="end" className="dropDownUser">
            <Dropdown.Toggle
              id="toggleDropdown"
              className="userToggle"
              variant="dark"
            >
              <FaUserAlt size={'20px'} className="userImg" /> {user?.nombre}
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark" className="userMenuBox">
              <Link href="/admin/profile">
                <Dropdown.Item as="a" className="userMenuItem">
                  Perfil
                </Dropdown.Item>
              </Link>

              <Dropdown.Divider color="white"></Dropdown.Divider>
              <Dropdown.Item
                className="userMenuItem"
                onClick={() => handleLogout()}
              >
                Salir
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
