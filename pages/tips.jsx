import {PublicLayout} from '../components/layouts';
import {Multimedia} from '../components/Multimedia';
import {MainCarousel} from '../components/MainCarousel/index';
import slider1 from '../public/assets/carousel/contraseña.webp';
import slider2 from '../public/assets/carousel/escritorio.webp';
import slider3 from '../public/assets/carousel/navegacion.webp';

const Tips = () => {
  const url = `${process.env.NEXT_PUBLIC_HOST}/tips`;

  return (
    <PublicLayout
      title={'e-seguridad - Tips'}
      pageDescription={'Tips de seguridad informática'}
      url={url}
      imageFullUrl="https://i.postimg.cc/K8jtb5HT/img3-47a48d0c.webp"
      type="technology tips"
    >
      <MainCarousel img={slider1} img2={slider2} img3={slider3} />
      <Multimedia />
    </PublicLayout>
  );
};

export default Tips;
