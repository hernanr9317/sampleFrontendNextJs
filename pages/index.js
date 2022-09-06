import {MainCarousel} from '../components/MainCarousel';
import {ModeloSeguridad} from '../components/ModeloSeguridad';
import {Info} from '../components/Info';
import {Contacto} from '../components/Contacto';
import {PublicLayout} from '../components/layouts';

const HomeScreen = () => {
  return (
    <PublicLayout
      title={'e-seguridad - Home'}
      pageDescription={
        'Encuentra los estandares de equipamiento informático y seguridad'
      }
    >
      <div className="bg-light bg-gradient mt-5 animate__animated animate__fadeIn">
        <MainCarousel />
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
