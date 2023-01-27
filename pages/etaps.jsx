import {PublicLayout} from '../components/layouts';
import {Categorias} from '../components/Categorias/index';

const Etaps = () => {
  return (
    <PublicLayout
      title={'e-seguridad - Etaps'}
      pageDescription={'Normativas de seguridad informática'}
    >
      <div style={{maxWidth: '1400px', margin: 'auto'}}>
        <Categorias />
      </div>
    </PublicLayout>
  );
};

export default Etaps;
