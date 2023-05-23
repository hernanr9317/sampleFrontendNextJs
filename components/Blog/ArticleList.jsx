import {useContext} from 'react';
import {useRouter} from 'next/router';
import dayjs from 'dayjs';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';

export const ArticleList = () => {
  const router = useRouter();
  const {products} = useContext(ChangeDataContext);

  const filterCategory = products?.productos?.filter(
    (element) => element?.categoria?.nombre === 'NOTA',
  );

  const vewArticle = (article) => {
    router.push(`/blog/${[article.pathname]}`);
  };

  return (
    <div className="articleList">
      <header>
        <h1>Cool Articles</h1>
      </header>
      <div className="band">
        {filterCategory?.map((article, index) => (
          <div
            className={`item-${index + 1}`}
            key={index}
            onClick={() => vewArticle(article)}
          >
            <div className="card">
              <div
                className="thumb"
                style={{
                  backgroundImage:
                    'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)',
                }}
              ></div>
              <article>
                <h1>{article.nombre}</h1>
                {/* TODO: HAY QUE AGREGAR EL SUBTITULO EN LOS MODELS DEL BACKEND*/}
                <p>
                  Welcome to our monthly feature of fantastic tutorial results
                  created by you, the Envato Tuts+ community!{' '}
                </p>
                <span>{dayjs(article.createdAt).format('DD/MM/YYYY')}</span>
              </article>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
