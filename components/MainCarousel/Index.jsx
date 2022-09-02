import Image from 'next/image';
import {Carousel} from 'react-bootstrap';
import slider1 from '../../public/assets/carousel/Etap.png';
import slider2 from '../../public/assets/carousel/1.png';
import slider3 from '../../public/assets/carousel/2.png';

export const MainCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={slider1} alt="First slide" height="1000px" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={slider2} alt="Second slide" height="1000px" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={slider3} alt="Third slide" height="1000px" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
