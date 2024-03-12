import {Categorias} from '../../components/Categorias';
import {PublicLayout} from '../../components/layouts';

const Etaps = () => {
  const url = `${process.env.NEXT_PUBLIC_HOST}/etaps`;

  return (
    <PublicLayout
      title={'e-seguridad - Etaps'}
      pageDescription={'Normativas de seguridad informática'}
      url={url}
      imageFullUrl="https://i.postimg.cc/J01v450c/mainImg.webp"
      type="technology standards"
    >
      <div style={{maxWidth: '1400px', margin: 'auto'}}>
        <Categorias />
      </div>
    </PublicLayout>
  );
};

export default Etaps;
