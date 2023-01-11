import Image from 'next/image';
import {Col} from 'react-bootstrap';
import LinesEllipsis from 'react-lines-ellipsis';

export const TipsCol = ({data}) => {
  const {title, src, description, link, link2, link3, link4} = data;

  const handleReflow = (rleState) => {
    const {clamped, text} = rleState;
    // console.log(clamped, text)
  };

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
            {/* <p className="card-text">{description}</p> */}
            <LinesEllipsis
              className="card-text pb-3"
              text={description}
              maxLine="2"
              ellipsis=" ..."
              trimRight
              basedOn="letters"
              onReflow={(e) => handleReflow(e)}
            />
            <a href={link?.href} className="card-link" target="_blank">
              {link?.name}
            </a>
            <a href={link2?.href} className="card-link" target="_blank">
              {link2?.name}
            </a>
            <a href={link3?.href} className="card-link" target="_blank">
              {link3?.name}
            </a>
            <a href={link4?.href} className="card-link" target="_blank">
              {link4?.name}
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
