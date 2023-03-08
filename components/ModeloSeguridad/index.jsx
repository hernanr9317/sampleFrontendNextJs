import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import integridad from '../../public/assets/modelo/integridad.webp';
import confidencialidad from '../../public/assets/modelo/confiden.webp';
import disponibilidad from '../../public/assets/modelo/dispo.webp';
import {ModelCol} from './ModelCol';
import {useIsmobile} from './../../hooks/useIsMobile';

export const ModeloSeguridad = () => {
  const isMobile = useIsmobile();

  const getModelo = (url, isMobile, nombre) => {
    const link = document.createElement('a');
    if (isMobile) {
      link.href = url;
      link.download = `${nombre}.pdf`;
      link.setAttribute('download', `${nombre}.pdf`);
    } else {
      link.href = url;
      link.target = '_blank';
    }
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div id="modelo" className="container-fluid modeloContainer">
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
          <button
            className="btn btn-primary btn-lg"
            onClick={() =>
              getModelo(
                '../assets/images/ModeloSeguridad.pdf',
                isMobile,
                'Modelo',
              )
            }
            role="button"
          >
            Descargar Modelo
          </button>
        </div>
      </Container>
    </div>
  );
};
