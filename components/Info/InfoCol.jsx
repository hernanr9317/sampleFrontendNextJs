import Image from 'next/image';
import Link from 'next/link';
import {Card, Col} from 'react-bootstrap';

export const InfoCol = ({title, src, link}) => {
  return (
    <>
      <Col>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
        >
          <Card style={{width: '18rem'}}>
            <Image variant="top" src={src} height="220" width="350" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Estándares Tecnológicos de la Administración Pública.
              </Card.Text>
              <Link href={link} className="btn btn-primary">
                <a className="btn btn-primary">Ver más</a>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </>
  );
};
