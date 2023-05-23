import {BlogIndex} from '../../components/Blog';
import {PublicLayout} from '../../components/layouts';

const Blog = () => {
  return (
    <PublicLayout
      title={'e-seguridad - Blog'}
      pageDescription={'Artículos de interés sobre seguridad informática'}
    >
      <div style={{maxWidth: '1400px', margin: 'auto'}}>
        <BlogIndex />
      </div>
    </PublicLayout>
  );
};

export default Blog;
