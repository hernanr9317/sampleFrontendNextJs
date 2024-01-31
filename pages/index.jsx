import {MainCarousel} from '../components/MainCarousel';
import {ModeloSeguridad} from '../components/ModeloSeguridad';
import {Info} from '../components/Info';
import {Contacto} from '../components/Contacto';
import {PublicLayout} from '../components/layouts';
import slider1 from '../public/assets/carousel/img3.webp';
import slider2 from '../public/assets/carousel/img1.webp';
import slider3 from '../public/assets/carousel/img2.webp';
import {BlogIndex} from './../components/Blog/index';

const HomeScreen = () => {
  const url = process.env.NEXT_PUBLIC_HOST;

  return (
    <PublicLayout
      title={'e-seguridad - Home'}
      pageDescription={
        'Encuentra los estandares de equipamiento informático y seguridad'
      }
      url={url}
      imageFullUrl="https://i.postimg.cc/K8jtb5HT/img3-47a48d0c.webp"
      type="technology"
    >
      <div className="bg-gradient container-fluid p-0 main-page">
        <MainCarousel img={slider1} img2={slider2} img3={slider3} />
        <div className="font-page-containner">
          <div className="container left-font-page">
            <Info />
            <ModeloSeguridad />
            <Contacto />
          </div>
          <aside className="right-aside">
            <BlogIndex numberItems={4} />
          </aside>
        </div>
      </div>
    </PublicLayout>
  );
};

export default HomeScreen;
