import {MainCarousel} from '../components/MainCarousel';
import {ModeloSeguridad} from '../components/ModeloSeguridad';
import {Info} from '../components/Info';
import {Contacto} from '../components/Contacto';
import {PublicLayout} from '../components/layouts';
import slider1 from '../public/assets/carousel/img3.webp';
import slider2 from '../public/assets/carousel/img1.webp';
import slider3 from '../public/assets/carousel/img2.webp';

const HomeScreen = () => {
  return (
    <PublicLayout
      title={'e-seguridad - Home'}
      pageDescription={
        'Encuentra los estandares de equipamiento informático y seguridad'
      }
    >
      <div className="bg-light bg-gradient container-fluid p-0">
        <MainCarousel img={slider1} img2={slider2} img3={slider3} />
        <div className="container">
          <Info />
          <ModeloSeguridad />
          <Contacto />
        </div>
      </div>
    </PublicLayout>
  );
};

export default HomeScreen;
