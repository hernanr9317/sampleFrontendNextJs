import {PublicLayout} from '../components/layouts';
import {Normativa} from '../components/Normativa';

const Normativas = () => {
  const url = `${process.env.NEXT_PUBLIC_HOST}/normativas`;

  return (
    <PublicLayout
      title={'e-seguridad - Normativas'}
      pageDescription={'Normativas de seguridad informática'}
      url={url}
      imageFullUrl="https://i.postimg.cc/K8jtb5HT/img3-47a48d0c.webp"
      type="technology regulations"
    >
      <Normativa />
    </PublicLayout>
  );
};

export default Normativas;
