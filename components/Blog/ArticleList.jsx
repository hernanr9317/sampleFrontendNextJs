import {Suspense, useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {CardBlog} from './CardBlog';
import {Paginator} from './../Paginator/index';

export const ArticleList = ({list, limitItems, paginator = true, title}) => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const numberItems = limitItems || 7;
  const totalPages = Math.ceil(list?.length / numberItems);

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
        {!title && <h1>Últimas publicaciones</h1>}
        {title && (
          <h1>
            Notas sobre <span className="title-tag">{title}</span>
          </h1>
        )}
        <div className="divider-1">
          {' '}
          <span></span>
        </div>
      </header>
      <Suspense fallback={<div style={{margin: 'auto'}}>Cargando...</div>}>
        <CardBlog
          filterCategory={list}
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
