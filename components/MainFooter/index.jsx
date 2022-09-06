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
                className="footerImg"
                src={firstLogo}
                alt="image-alt-text"
                width={368}
                height={65}
                quality={100}
                fixed="true"
              />
            </Col>
            <Col style={{marginBottom: '16px'}}>
              <Image
                className="footerImg"
                src={secondtLogo}
                alt="image-alt-text"
                width={190}
                height={65}
                quality={100}
                fixed="true"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
