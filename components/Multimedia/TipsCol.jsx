import Image from 'next/image';
import {useIsmobile} from './../../hooks/useIsMobile';

export const TipsCol = ({data}) => {
  const {title, src, description, links} = data;

  const isMobile = useIsmobile();

  const widthImg = isMobile ? '300px' : '270px';
  const heighImg = isMobile ? '220px' : '200px';

  return (
    <div className="card tipsCard">
      <div className="imgTip">
        <Image
          className="card-img-next"
          width={widthImg}
          height={heighImg}
          layout="responsive"
          src={src}
        />
      </div>
      <div className="card-body">
        <h4 className="card-title h5 h4-sm">{title}</h4>
        <p className="card-text">{description}</p>
        <div className="linksContainer">
          {links.map((link, index) => (
            <a
              href={link?.href}
              key={index}
              className="card-link"
              target="_blank"
            >
              {link?.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
