import Image from 'next/image';
import {Col} from 'react-bootstrap';

export const TipsCol = ({data}) => {
  const {title, src, description, link, link2, link3, link4} = data;

  const links = [link, link2, link3, link4];

  //TODO: AGREGAR BOTON DROPDOWNS DE LINKS EN LAS CARDS
  return (
    <Col>
      <div
        style={{
          // height: '400px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div className="card mb-2" style={{width: '18rem'}}>
          <Image
            className="card-img-top"
            src={src}
            alt="Card image cap"
            fill="responsive"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {links.map((link) => (
              <a href={link?.href} className="card-link" target="_blank">
                {link?.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};
