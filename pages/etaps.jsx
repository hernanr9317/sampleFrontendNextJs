import {PublicLayout} from '../components/layouts';
import {Categorias} from '../components/Categorias/index';

const Etaps = () => {
  return (
    <PublicLayout
      title={'e-seguridad - Etaps'}
      pageDescription={'Normativas de seguridad informática'}
    >
      <Categorias />
    </PublicLayout>
  );
};

export default Etaps;
