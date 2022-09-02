import {Carousel1} from '../components/Carousel1';
import {ModeloSeguridad} from '../components/ModeloSeguridad';
import {Info} from '../components/Info';

const HomeScreen = () => {
  return (
    <div className="bg-light bg-gradient mt-5 animate__animated animate__fadeIn">
      <Carousel1 />
      <div className="container">
        <Info />
        <ModeloSeguridad />
      </div>
    </div>
  );
};

export default HomeScreen;
