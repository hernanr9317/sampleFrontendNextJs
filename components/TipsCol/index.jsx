import Image from 'next/image';
import Link from 'next/link';
import {Col} from 'react-bootstrap';

export const TipsCol = ({data}) => {
  const {title, src, description, link, link2, link3, link4} = data;

  return (
    <Col>
      <div class="card" style={{width: '18rem'}}>
        <Image
          class="card-img-top"
          src={src}
          alt="Card image cap"
          fill="responsive"
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
        <div class="card-body">
          <a href={link?.href} class="card-link" target="_blank">
            {link?.name}
          </a>
          <a href={link2?.href} class="card-link" target="_blank">
            {link2?.name}
          </a>
          <a href={link3?.href} class="card-link" target="_blank">
            {link3?.name}
          </a>
          <a href={link4?.href} class="card-link" target="_blank">
            {link4?.name}
          </a>
        </div>
      </div>
    </Col>
  );
};
