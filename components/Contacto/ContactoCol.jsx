import Image from 'next/image';

export const ContactoCol = ({icon, text}) => {
  return (
    <div className="contact-element">
      <div className="contacto-img">
        <Image src={icon} height={50} width={50} />
      </div>
      <div className="contacto-text">
        <h6>{text}</h6>
      </div>
    </div>
  );
};
