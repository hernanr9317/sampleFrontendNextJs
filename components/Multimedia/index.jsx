import {Container, Row} from 'react-bootstrap';
import {TipsCol} from '../TipsCol';
import {data} from './data';

export const Multimedia = () => {
  return (
    <Container>
      <Row lg={3}>
        {data.map((element) => (
          <TipsCol data={element} />
        ))}
      </Row>
    </Container>
  );
};
