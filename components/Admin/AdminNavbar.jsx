import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../public/assets/navbar/logo.png';
import Navbar from 'react-bootstrap/Navbar';

export const AdminNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="navbarImg">
          <Link className="navbar-brand" href="/">
            <a>
              <Image src={logo} width="80" height="50" alt="Logo" />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Seccion1">Subir archivo</Nav.Link>
            <Nav.Link href="/Seccion2">Seccion2</Nav.Link>
            <Nav.Link href="/Seccion3">Seccion3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
