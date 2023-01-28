import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../public/assets/navbar/logo.png';
import Navbar from 'react-bootstrap/Navbar';

export const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
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
            <Link href="/">
              <a className="nav-link">Inicio</a>
            </Link>
            <Link href="/etaps">
              <a className="nav-link">Etaps</a>
            </Link>
            <Link href="/normativas">
              <a className="nav-link">Normativas</a>
            </Link>
            <Link href="/tips">
              <a className="nav-link">Tips de seguridad</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
