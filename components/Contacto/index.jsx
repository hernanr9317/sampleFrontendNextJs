import {Container, Row} from 'react-bootstrap';
import {ContactoCol} from './ContactoCol';
import mapa from '../../public/assets/contacto/mapa.png';
import telefono from '../../public/assets/contacto/telefono.png';
import email from '../../public/assets/contacto/email.png';

export const Contacto = () => {
  return (
    <div id="contacto" className="p-5">
      <center>
        <h1>Contáctese con nosotros</h1>
      </center>
      <hr />
      <Container>
        <Row
          xs={'auto'}
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '5px',
          }}
        >
          <ContactoCol icon={mapa} text="Marcelo T. de Alvear 154" />
          <ContactoCol
            icon={telefono}
            margin="-10px"
            text="362-4448000 | Int. 8211"
          />
          <ContactoCol icon={email} text="eseguridad@chaco.gov.ar" />
        </Row>
      </Container>
    </div>
  );
};
