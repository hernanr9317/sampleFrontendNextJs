import {useContext, Suspense} from 'react';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import {CardBlog} from './CardBlog';

export const ArticleList = () => {
  const {products} = useContext(ChangeDataContext);

  const filterCategory = products?.productos?.filter(
    (element) => element?.categoria?.nombre === 'NOTA',
  );

  return (
    <div className="articleList">
      <header>
        <h1>Últimas publicaciones</h1>
      </header>
      <Suspense fallback={<div style={{margin: 'auto'}}>Cargando...</div>}>
        <CardBlog filterCategory={filterCategory} />
      </Suspense>
    </div>
  );
};
