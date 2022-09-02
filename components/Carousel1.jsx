import Image from 'next/image';
import {Carousel} from 'react-bootstrap';
import slider1 from '../public/assets/carousel/Etap.png';
import slider2 from '../public/assets/carousel/1.png';
import slider3 from '../public/assets/carousel/2.png';

export const Carousel1 = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={slider2} alt="Second slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={slider3} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
