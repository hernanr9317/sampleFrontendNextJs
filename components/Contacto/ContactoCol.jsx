import Image from 'next/image';
import {Col} from 'react-bootstrap';

export const ContactoCol = ({icon, text, margin}) => {
  return (
    <Col style={{width: '220px', marginBottom: '18px'}}>
      <Image
        src={icon}
        height={50}
        width={50}
        fixed
        style={{marginLeft: margin}}
      />
      <div>
        <h6>{text}</h6>
      </div>
    </Col>
  );
};
