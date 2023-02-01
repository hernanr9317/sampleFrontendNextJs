import {Container, Row} from 'react-bootstrap';
import {TipsCol} from './TipsCol';
import {data} from './data';

export const Multimedia = () => {
  return (
    <Container className="mt-5">
      {data.map((element, key) => (
        <TipsCol key={key} data={element} />
      ))}
    </Container>
  );
};
