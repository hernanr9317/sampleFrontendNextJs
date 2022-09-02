import {Col} from 'react-bootstrap';
import Image from 'next/image';

export const ModelCol = ({title, src}) => {
  return (
    <>
      <Col xs={12} sm={6} md={4}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image src={src} width="150" height="180" alt="" />
        </div>
        <h5 className="text-center" style={{marginTop: '16px'}}>
          <strong>{title}</strong>
        </h5>
      </Col>
    </>
  );
};
