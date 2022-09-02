import {Container, Row} from 'react-bootstrap';
import {InfoCol} from './InfoCol';
import etaps from '../../public/assets/info/etaps.png';
import tips from '../../public/assets/info/tips.jpg';
import normativa from '../../public/assets/info/normativa.jpg';

export const Info = () => {
  return (
    <div id="info" className="container-fluid mt-3 mb-5">
      <h1 className="text-center">Informáte</h1>
      <hr />
      <Container>
        <Row>
          <InfoCol title="Etaps" src={etaps} link="/etaps" />
          <InfoCol title="Tips de seguridad" src={tips} link="/tips" />
          <InfoCol title="Normativa" src={normativa} link="/normativa" />
        </Row>
      </Container>
    </div>
  );
};
