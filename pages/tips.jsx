import {PublicLayout} from '../components/layouts';
import {Multimedia} from '../components/Multimedia';

const Tips = () => {
  const url = `${process.env.NEXT_PUBLIC_HOST}/tips`;

  return (
    <PublicLayout
      title={'e-seguridad - Tips'}
      pageDescription={'Tips de seguridad informática'}
      url={url}
      imageFullUrl="https://i.postimg.cc/J01v450c/mainImg.webp"
      type="technology tips"
    >
      <Multimedia />
    </PublicLayout>
  );
};

export default Tips;
