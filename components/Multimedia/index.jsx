import {Container, Row} from 'react-bootstrap';
import {TipsCol} from './TipsCol';
import {data} from './data';

export const Multimedia = () => {
  return (
    <Container className="mt-5">
      <Row lg={4}>
        {data.map((element, key) => (
          <TipsCol key={key} data={element} />
        ))}
      </Row>
    </Container>
  );
};
