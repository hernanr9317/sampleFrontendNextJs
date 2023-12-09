import Image from 'next/image';
import {Carousel} from 'react-bootstrap';

export const MainCarousel = ({img, img2, img3}) => {
  const slides = [img, img2, img3];
  //TODO: APLICAR EL BLUR CON EN LAS IMAGENS DEL CARDBLOG
  //ES POSIBLE HACER UN ELEMENTO IMAGE PARA NO REPETIR CODIGO
  //SE VA A CORREGIR CUANDO SE ACTUALICE LA VERSION DE NEXT.JS DEL PROYECTO

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
