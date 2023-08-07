import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Card, Col} from 'react-bootstrap';

export const InfoCol = ({title, text, src, link}) => {
  const router = useRouter();
  return (
    <>
      {/* <Col> */}
      <article className="card">
        <img
          className="card__background"
          src={src.src}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
          width={1920}
          height={2193}
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{text}</p>
          </div>
          <Link href={link}>
            <a className="card__button">Más información</a>
          </Link>
        </div>
      </article>
      {/* <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
            cursor: 'pointer',
          }}
          onClick={() => router.push(link)}
        >
          <Card style={{width: '18rem'}}>
            <Image
              variant="top"
              src={src}
              alt={title}
              style={{aspectRatio: '16 / 9'}}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Link href={link} className="btn btn-primary">
                <a className="btn btn-primary">Más información</a>
              </Link>
            </Card.Body>
          </Card>
        </div> */}
      {/* </Col> */}
    </>
  );
};
