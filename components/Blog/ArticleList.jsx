import {useContext} from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';

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
      <div className="band">
        {filterCategory?.map((article, index) => (
          <div className={`item-${index + 1}`} key={index}>
            <Link href={`/blog/${[article.pathname]}`}>
              <a>
                <div className="card">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage: `url(${
                        article.otherImgs[0] ||
                        'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      })`,
                    }}
                  ></div>
                  <article>
                    <h1>{article.nombre}</h1>
                    {article?.subtitle !== '' && <p>{article.subtitle}</p>}
                    <span>{dayjs(article.createdAt).format('DD/MM/YYYY')}</span>
                  </article>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
