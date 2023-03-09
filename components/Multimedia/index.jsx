import {Container} from 'react-bootstrap';
import {TipsCol} from './TipsCol';
import {data} from './data';
import {FcIdea} from 'react-icons/fc';

export const Multimedia = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="text-center title">
        Tips de seguridad <FcIdea style={{verticalAlign: 'baseline'}} />
      </h1>
      <div className="info-txt">
        <p>
          La seguridad informática es un tema crucial en el mundo digital
          actual, donde la mayoría de nuestras actividades y datos personales se
          encuentran en línea. La creciente dependencia de la tecnología nos
          hace vulnerables a diversas amenazas cibernéticas, como malware,
          phishing, ataques de hackers, robo de identidad, entre otros.
        </p>
        <p>
          Por eso, es importante conocer y aplicar medidas de seguridad
          informática para proteger nuestra información y privacidad en línea.
          En este artículo, compartiremos algunos consejos y mejores prácticas
          para mantener segura nuestra información y evitar ser víctimas de
          ataques cibernéticos.
        </p>
      </div>
      {data.map((element, key) => (
        <TipsCol key={key} data={element} />
      ))}
    </Container>
  );
};
