import {useContext, Suspense, useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import {CardBlog} from './CardBlog';
import {Paginator} from './../Paginator/index';

export const ArticleList = ({limitItems, paginator = true}) => {
  const router = useRouter();
  const {products} = useContext(ChangeDataContext);

  const filterCategory = products?.productos?.filter(
    (element) => element?.categoria?.nombre === 'NOTA',
  );

  const [currentPage, setCurrentPage] = useState(1);
  const numberItems = limitItems || 7;
  const totalPages = Math.ceil(filterCategory?.length / numberItems);

  useEffect(() => {
    if (router.isReady && router.query.page) {
      setCurrentPage(Number(router.query.page));
    }
  }, [router.isReady]);

  const handlePageChange = (page) => {
    router.push({
      pathname: router.pathname,
      query: {...router.query, page: page},
    });

    setCurrentPage(page);
  };

  return (
    <div className="articleList">
      <header>
        <h1>Últimas publicaciones</h1>
        <div className="divider-1">
          {' '}
          <span></span>
        </div>
      </header>
      <Suspense fallback={<div style={{margin: 'auto'}}>Cargando...</div>}>
        <CardBlog
          filterCategory={filterCategory}
          numberItems={numberItems}
          currentPage={currentPage}
        />
      </Suspense>
      {totalPages > 1 && paginator && (
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
