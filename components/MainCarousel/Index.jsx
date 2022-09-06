import Image from 'next/image';
import {Carousel} from 'react-bootstrap';

export const MainCarousel = ({img, img2, img3}) => {
  return (
    <Carousel variant="dark" className="mainCarousel">
      <Carousel.Item>
        <Image src={img} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={img2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={img3} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
