import logo from '../../public/assets/images/LOGOBLANCO.png';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="d-inline-block align-top m-0 me-2 p-0"
            src={logo}
            width="70"
            height="40"
            alt="Logo"
          />
          e-seguridad
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
            <Link className="nav-link" to="/etaps">
              Etaps
            </Link>
            <a className="nav-link" href="#contacto">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
