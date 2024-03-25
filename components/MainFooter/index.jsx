import Image from 'next/image';
import {Container} from 'react-bootstrap';

import mainLogo from '../../public/assets/footer/footerLogo.webp';

export const MainFooter = () => {
  return (
    <div className="bg-dark containerFooter">
      <div className="main-footer">
        <Container className="footer-container">
          <Image
            className="mainLogo"
            src={mainLogo}
            alt="Subsecretaría de Modernización del Estado"
            width={622}
            height={170}
            quality={100}
            fixed="true"
          />
        </Container>
      </div>
      <div className="subfooter">
        <hr></hr>
        <p className="text-center">
          <a href="https://www.linkedin.com/in/hernanrascon/" target="_blank">
            Powered by <strong>Hernan Rascon ⚡</strong>
          </a>
        </p>
      </div>
    </div>
  );
};
