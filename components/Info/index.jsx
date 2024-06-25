import {Container} from 'react-bootstrap';
import {InfoCol} from './InfoCol';
import etaps from '../../public/assets/info/etaps.webp';
import tips from '../../public/assets/info/tips.webp';
import normativa from '../../public/assets/info/normativa.webp';

export const Info = () => {
  return (
    <div id="info" className="container-fluid mt-5 mb-5 infoContainer">
      <h1 className="heading-1">Informáte</h1>
      <div className="divider-1">
        {' '}
        <span></span>
      </div>
      <p>
        Mantenete al día con las mejores prácticas y regulaciones de seguridad
        informática
      </p>
      <Container>
        <div className="col-container">
          <InfoCol
            title="Etaps"
            text="Estándares Tecnológicos de la Administración Pública"
            src={etaps}
            link="/etaps"
          />
          <InfoCol
            title="Normativas"
            text="Enterate de las normas, leyes y decretos vigentes"
            src={normativa}
            link="/normativas"
          />
          <InfoCol
            title="Tips de seguridad"
            text="Tips para mantener la seguridad informática"
            src={tips}
            link="/tips"
          />
        </div>
      </Container>
    </div>
  );
};
