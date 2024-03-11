import Image from 'next/image';
import {CustomButton} from '../CustomButton';

export const TipsCol = ({data}) => {
  const {title, src, description, links} = data;

  return (
    <div className="card tipsCard">
      <div className="imgTip">
        <Image className="card-img-next" src={src} alt={src} />
      </div>
      <div className="card-body">
        <h4 className="card-title h5 h4-sm">{title}</h4>
        <p className="card-text">{description}</p>
        <div className="linksContainer">
          {links.map((link, index) => (
            <a href={link?.href} target="_blank" key={index}>
              <CustomButton text={link?.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
