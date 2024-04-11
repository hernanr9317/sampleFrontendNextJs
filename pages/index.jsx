import {useRouter} from 'next/router';
import {ModeloSeguridad} from '../components/ModeloSeguridad';
import {Info} from '../components/Info';
import {Contacto} from '../components/Contacto';
import {PublicLayout} from '../components/layouts';
import {BlogIndex} from './../components/Blog/index';
import {PageHeader} from '../components/Header/PageHeader';
import {CustomButton} from '../components/CustomButton';

const HomeScreen = () => {
  const url = process.env.NEXT_PUBLIC_HOST;
  const router = useRouter();

  return (
    <PublicLayout
      title={'e-seguridad - Chaco'}
      pageDescription={
        'Encuentra los estandares de equipamiento informático y seguridad'
      }
      url={url}
      imageFullUrl="https://i.postimg.cc/J01v450c/mainImg.webp"
      type="technology"
    >
      <div className="bg-gradient container-fluid p-0 main-page">
        <PageHeader />
        <div className="font-page-containner">
          <div className="container left-font-page">
            <Info />
            <ModeloSeguridad />
            <Contacto />
          </div>
          <aside className="right-aside">
            <BlogIndex limitItems={4} paginator={false} />
            <CustomButton
              text="Ver más"
              type="slide_right"
              onClick={() => router.push('/blog')}
            />
          </aside>
        </div>
      </div>
    </PublicLayout>
  );
};

export default HomeScreen;
