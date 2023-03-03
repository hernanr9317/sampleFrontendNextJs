import {Container, Row} from 'react-bootstrap';
import {InfoCol} from './InfoCol';
import etaps from '../../public/assets/info/etaps.webp';
import tips from '../../public/assets/info/tips.webp';
import normativa from '../../public/assets/info/normativa.webp';

export const Info = () => {
  return (
    <div id="info" className="container-fluid mt-3 mb-5">
      <h1 className="text-center">Informáte</h1>
      <hr />
      <Container>
        <Row>
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
        </Row>
      </Container>
    </div>
  );
};
