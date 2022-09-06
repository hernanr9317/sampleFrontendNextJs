import {PublicLayout} from '../components/layouts';
import {Multimedia} from '../components/Multimedia';
import {TipsCarousel} from '../components/TipsCarousel';

const Tips = () => {
  return (
    <PublicLayout
      title={'e-seguridad - Tips'}
      pageDescription={'Tips de seguridad informática'}
    >
      <TipsCarousel />
      <Multimedia />
    </PublicLayout>
  );
};

export default Tips;
