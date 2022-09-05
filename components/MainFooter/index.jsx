import Image from 'next/image';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

import firstLogo from '../../public/assets/footer/logoFooter1.png';
import secondtLogo from '../../public/assets/footer/logoFooter2.png';

export const MainFooter = () => {
  return (
    <div className="bg-dark pt-4 pb-4">
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Row xs={'auto'} sm={'auto'}>
            <Col style={{marginBottom: '16px'}}>
              <Image
                src={firstLogo}
                alt="image-alt-text"
                width={360}
                height={90}
                quality={100}
                fixed
              />
            </Col>
            <Col style={{marginBottom: '16px'}}>
              <Image
                src={secondtLogo}
                alt="image-alt-text"
                width={185}
                height={90}
                quality={100}
                fixed
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
