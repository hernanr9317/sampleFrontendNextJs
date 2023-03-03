import {Container} from 'react-bootstrap';
import {ContactoCol} from './ContactoCol';
import mapa from '../../public/assets/contacto/mapa.webp';
import telefono from '../../public/assets/contacto/telefono.webp';
import MapLocation from './MapLocation';

export const Contacto = () => {
  return (
    <div id="contacto" className="p-5">
      <center>
        <h1>Contáctese con nosotros</h1>
      </center>
      <hr />
      <Container className="contacto-contianer">
        <ContactoCol icon={mapa} text="Marcelo T. de Alvear 154" />
        <ContactoCol icon={telefono} text="362-4448000 | Int. 8211" />
      </Container>
      <MapLocation />
    </div>
  );
};
