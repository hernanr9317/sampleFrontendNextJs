import {MainCarousel} from '../components/MainCarousel';
import {ModeloSeguridad} from '../components/ModeloSeguridad';
import {Info} from '../components/Info';
import {Contacto} from '../components/Contacto';

const HomeScreen = () => {
  return (
    <div className="bg-light bg-gradient mt-5 animate__animated animate__fadeIn">
      <MainCarousel />
      <div className="container">
        <Info />
        <ModeloSeguridad />
        <Contacto />
      </div>
    </div>
  );
};

export default HomeScreen;
