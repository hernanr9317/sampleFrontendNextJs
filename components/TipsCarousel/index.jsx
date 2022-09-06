import Image from 'next/image';
import {Carousel, Container} from 'react-bootstrap';
import slider1 from '../../public/assets/carousel/contraseña.png';
import slider2 from '../../public/assets/carousel/escritorio.png';
import slider3 from '../../public/assets/carousel/navegacion.png';

export const TipsCarousel = () => {
  return (
    <Container
      style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}
    >
      <Carousel variant="dark">
        <Carousel.Item>
          <Image src={slider1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image src={slider2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image src={slider3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
