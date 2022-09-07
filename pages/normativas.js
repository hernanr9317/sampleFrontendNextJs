import {PublicLayout} from '../components/layouts';
import {Normativa} from '../components/Normativa';

const Normativas = () => {
  return (
    <PublicLayout
      title={'e-seguridad - Normativas'}
      pageDescription={'Normativas de seguridad informática'}
    >
      <Normativa />
    </PublicLayout>
  );
};

export default Normativas;
