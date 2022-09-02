import {Col} from 'react-bootstrap';

export const ContactoCol = ({icon, text}) => {
  return (
    <Col>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '16px',
        }}
      >
        {icon}
        <h6 className="m-2 mt-auto">{text}</h6>
      </div>
    </Col>
  );
};
