import {PublicLayout} from '../components/layouts';
import {Normativa} from '../components/Normativa';

const Normativas = () => {
  const url = `${process.env.NEXT_PUBLIC_HOST}/normativas`;

  return (
    <PublicLayout
      title={'e-seguridad - Normativas'}
      pageDescription={'Normativas de seguridad informática'}
      url={url}
      imageFullUrl="https://i.postimg.cc/J01v450c/mainImg.webp"
      type="technology regulations"
    >
      <Normativa />
    </PublicLayout>
  );
};

export default Normativas;
