import {Container, Row} from 'react-bootstrap';
import {TipsCol} from '../TipsCol';
import test from '../../public/assets/multimedia/test.jpg';
import arbol from '../../public/assets/multimedia/arbol.png';
import conect from '../../public/assets/multimedia/conect.png';
import oca from '../../public/assets/multimedia/oca.png';
import memoria from '../../public/assets/multimedia/memoria.png';
import acuerdo from '../../public/assets/multimedia/acuerdo.jpg';

export const Multimedia = () => {
  return (
    <Container>
      <Row lg={3}>
        <TipsCol
          title="Test de conocimientos: ¡Preparáte!"
          subtitle="Test Ciberbullyng y Grooming"
          link="https://view.genial.ly/5d442ec40267d90fc506e802/learning-experience-challenges-test-ciberbullying-grooming"
          subtitle2="Test Sexting y Antivirus"
          link2="https://view.genial.ly/5d2c7ef7b5058a0faec4c446/learning-experience-challenges-tes-sexting-y-antivirus"
          src={test}
        />
        <TipsCol
          title="Árbol de la Seguridad"
          subtitle="Respondé SI o NO y verás que camino tomar"
          link="https://view.genial.ly/5d3bc45ba1eec80fb958873c/learning-experience-didactic-unit-arboles-de-decisiones"
          src={arbol}
        />
        <TipsCol
          title="Guía de Juguetes Conectados"
          subtitle="Con ésta infografía podes ver que hay que tener en cuenta a la hora de comprar estos tipos de jueguetes, sus ventajas y riesgos"
          link="https://www.is4k.es/de-utilidad/recursos/guia-para-el-uso-seguro-de-juguetes-conectados"
          src={conect}
        />
        <TipsCol
          title="Juego de la oca"
          subtitle="Divertite Jugando a éste juego con familiares y amigos. Recortá 
          el tablero y los robots e-cloudsi y pegalos en cartón. Descargá cuantas veces quieras. ¡Regalá!"
          link="https://res.cloudinary.com/dyzyc1dxd/image/upload/v1662424085/eseguridad/ocajuego_sketj9.png"
          src={oca}
        />
        <TipsCol
          title="Juego la memoria segura"
          subtitle="Divertite Jugando con los más chicos. Recortá las piezas y 
          cartón del mismo tamaño para mayor durabilidad. Descargá cuantas veces quieras. ¡Regalá!"
          link="https://res.cloudinary.com/dyzyc1dxd/image/upload/v1662424293/eseguridad/memoria_omupwv.pdf"
          src={memoria}
        />
        {/* TODO: FATLA REDISEÑAR ESTA PARTE PARA QUE QUEDEN ORDENADOS LOS LINKS , TAMBIEN LOS MARGENES DESKTOP Y MOBILE*/}
        <TipsCol
          title="Contratos familiares para el Buen uso de Dispositivos"
          subtitle="Estos contratos te ayudarán a organizar los tiempos en familia. 
          Te proponemos reforzar los valores familiares y uso de los dispositivos de forma resonsable. 
          Descargá todos o el más se acomode a tus necesidades"
          link="https://res.cloudinary.com/dyzyc1dxd/image/upload/v1662424293/eseguridad/memoria_omupwv.pdf"
          src={acuerdo}
        />
      </Row>
    </Container>
  );
};
