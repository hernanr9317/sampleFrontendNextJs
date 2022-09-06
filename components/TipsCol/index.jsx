import Image from 'next/image';
import Link from 'next/link';
import {Col} from 'react-bootstrap';

export const TipsCol = ({
  title,
  src,
  subtitle,
  subtitle2,
  link,
  link2,
  link3,
  link4,
}) => {
  return (
    <Col>
      <div className="card mb-1" style={{width: 300}}>
        <Image
          src={src}
          className="card-img-top img-thumbnail"
          alt="..."
          style={{width: 300}}
        />
        <div className="card-body">
          <h5 className="card-title mb-4">{title}</h5>
          <a
            href={link}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>{subtitle}</h6>
          </a>
          <a
            href={link2}
            className="card-link m-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>{subtitle2}</h6>
          </a>
        </div>
      </div>
    </Col>
  );
};
