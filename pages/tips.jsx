import {PublicLayout} from '../components/layouts';
import {Multimedia} from '../components/Multimedia';
import {MainCarousel} from '../components/MainCarousel/index';
import slider1 from '../public/assets/carousel/contraseña.png';
import slider2 from '../public/assets/carousel/escritorio.png';
import slider3 from '../public/assets/carousel/navegacion.png';

const Tips = () => {
  return (
    <PublicLayout
      title={'e-seguridad - Tips'}
      pageDescription={'Tips de seguridad informática'}
    >
      <MainCarousel img={slider1} img2={slider2} img3={slider3} />
      <Multimedia />
    </PublicLayout>
  );
};

export default Tips;
