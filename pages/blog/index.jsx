import {useContext} from 'react';
import {BlogIndex} from '../../components/Blog';
import {PublicLayout} from '../../components/layouts';
import {ChangeDataContext} from '../../context/changeData/ChangeDataContext';

const Blog = () => {
  const {products} = useContext(ChangeDataContext);

  const img = products?.productos?.[0]?.otherImgs?.[0];
  const url = `${process.env.NEXT_PUBLIC_HOST}/blog`;

  return (
    <PublicLayout
      title={'e-seguridad - Blog'}
      pageDescription={'Artículos de interés sobre seguridad informática'}
      imageFullUrl={img}
      type="blog"
      url={url}
    >
      <div style={{maxWidth: '1400px', margin: 'auto'}}>
        <BlogIndex />
      </div>
    </PublicLayout>
  );
};

export default Blog;
