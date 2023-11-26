import Image from 'next/image';
import {Carousel} from 'react-bootstrap';

export const MainCarousel = ({img, img2, img3}) => {
  const slides = [img, img2, img3];

  return (
    <Carousel className="mainCarousel">
      {slides?.map((slide, index) => (
        <Carousel.Item key={index}>
          <Image priority src={slide} alt={`Slide ${index + 1}`} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
