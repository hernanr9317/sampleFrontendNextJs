import logoHeader from '../../public/assets/header/logoHeader.webp';

export const PageHeader = () => {
  return (
    <div className="pageHeader">
      <div className="wrapper">
        <h1>Bienvenido a e-seguridad !</h1>
        <h4>
          Busca estándares para la adquisición de equipamiento informático y
          obtén información sobre ciberseguridad
        </h4>
        <div className="logo-container">
          <img className="logo" src={logoHeader.src} />
        </div>
      </div>
    </div>
  );
};
