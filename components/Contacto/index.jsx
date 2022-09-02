import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {
  PinMapFill,
  TelephoneOutboundFill,
  EnvelopeCheckFill,
} from 'react-bootstrap-icons';
import {ContactoCol} from './ContactoCol';

export const Contacto = () => {
  return (
    <div id="contacto" className="p-5">
      <center>
        <h1>Contáctese con nosotros</h1>
      </center>
      <hr />
      <Container>
        <Row xs={1} md={2} lg={3}>
          <ContactoCol
            icon={<PinMapFill size="40" />}
            text="Marcelo T. de Alvear 154"
          />
          <ContactoCol
            icon={<TelephoneOutboundFill size="40" />}
            text="362-4448000 | Int. 8211"
          />

          <ContactoCol
            icon={<EnvelopeCheckFill size="40" />}
            text="eseguridad@chaco.gov.ar"
          />
        </Row>
      </Container>
    </div>
  );
};
