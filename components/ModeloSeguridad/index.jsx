import Image from 'next/image';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import integridad from '../../public/assets/images/inuevo.png';
import confidencialidad from '../../public/assets/images/cnuevo.png';
import disponibilidad from '../../public/assets/images/dnuevo.png';
import {ModelCol} from './ModelCol';

export const ModeloSeguridad = () => {
  return (
    <div id="modelo" className="container-fluid">
      <Container>
        <h1 className="text-center">
          Modelo de Políticas de Seguridad de la Información
        </h1>
        <hr />
        <Row>
          <ModelCol title={'Integridad'} src={integridad} />
          <ModelCol title={'Confidencialidad'} src={confidencialidad} />
          <ModelCol title={'Disponibilidad'} src={disponibilidad} />
        </Row>
        <div className="col text-center mt-3 mb-5">
          <a
            className="btn btn-primary btn-lg rounded-pill"
            href="../assets/images/ModeloSeguridad.pdf"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            Descargar Modelo
          </a>
        </div>
      </Container>
    </div>
  );
};
