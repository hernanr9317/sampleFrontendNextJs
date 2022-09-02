import Image from 'next/image';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import logo1 from '../../public/assets/footer/logo1.png';
import logo2 from '../../public/assets/footer/logo2.png';
import logo3 from '../../public/assets/footer/logo3.png';
import logo4 from '../../public/assets/footer/logo4.png';

export const MainFooter = () => {
  return (
    <div className="bg-dark p-4">
      <Container>
        <Row>
          <Col>
            <Image className="img-fluid" src={logo1} alt="" />
          </Col>
          <Col>
            <Image className="img-fluid" src={logo2} alt="" />
          </Col>
          <Col>
            <Image className="img-fluid" src={logo3} alt="" />
          </Col>
          <Col>
            <Image className="img-fluid" src={logo4} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
