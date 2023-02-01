import Image from 'next/image';

export const TipsCol = ({data}) => {
  const {title, src, description, links} = data;
  //TODO: FALTAN ESTILOS MOBILE
  return (
    <div className="card tipsCard">
      <div className="imgTip">
        <Image
          className="card-img-left"
          width="200px"
          height="200px"
          layout="fixed"
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
