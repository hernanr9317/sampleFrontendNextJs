import Image from 'next/image';
import Link from 'next/link';
import {Card, Col, Container, Row} from 'react-bootstrap';
import etaps from '../public/assets/images/etaps.png';
import tips from '../public/assets/images/tips.jpg';
import normativa from '../public/assets/images/normativa.jpg';

export const Info = () => {
  return (
    <div id="info" className="container-fluid mt-3 mb-5">
      <h1 className="text-center">Informáte</h1>
      <hr />
      <Container>
        <Row>
          <Col>
            <Card style={{width: '18rem'}}>
              <Image variant="top" src={etaps} height="220" width="350" />
              <Card.Body>
                <Card.Title>Etaps</Card.Title>
                <Card.Text>
                  Estándares Tecnológicos de la Administración Pública.
                </Card.Text>
                <Link href="/etaps" className="btn btn-primary">
                  Ver más
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{width: '18rem'}}>
              <Image variant="top" src={tips} height="220" width="350" />
              <Card.Body>
                <Card.Title>Tips de seguridad</Card.Title>
                <Card.Text>
                  Tips para mantener la seguridad informática.
                </Card.Text>
                <Link href="/tips" className="btn btn-primary">
                  Ver más
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{width: '18rem'}}>
              <Image variant="top" src={normativa} height="220" width="350" />
              <Card.Body>
                <Card.Title>Normativa</Card.Title>
                <Card.Text>
                  Los beneficios que proporciona el cumplimiento de las normas
                  ISO.
                </Card.Text>
                <Link href="google.com" className="btn btn-primary">
                  Ver más
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
