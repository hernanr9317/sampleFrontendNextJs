import {Container} from 'react-bootstrap';
import integridad from '../../public/assets/modelo/integridad.webp';
import confidencialidad from '../../public/assets/modelo/confiden.webp';
import disponibilidad from '../../public/assets/modelo/dispo.webp';
import {ModelCol} from './ModelCol';
import {useIsmobile} from './../../hooks/useIsMobile';
import {CustomButton} from './../CustomButton/index';

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
        <h1 className="heading-1">
          Modelo de Políticas de Seguridad de la Información
        </h1>
        <div className="divider-1">
          {' '}
          <span></span>
        </div>
        <p>
          La seguridad de la información se entiende como la preservación de las
          siguientes características:
        </p>
        <ul className="honeycomb">
          <ModelCol title={'Integridad'} src={integridad} />
          <ModelCol title={'Confidencialidad'} src={confidencialidad} />
          <ModelCol title={'Disponibilidad'} src={disponibilidad} />
        </ul>
        <div className="button-container">
          <CustomButton
            type="slide_right"
            text="Descargar Modelo"
            onClick={() =>
              getModelo(
                '../assets/images/ModeloSeguridad.pdf',
                isMobile,
                'Modelo',
              )
            }
          />
        </div>
      </Container>
    </div>
  );
};
