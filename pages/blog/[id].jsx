import {useContext} from 'react';
import {useRouter} from 'next/router';
import {PublicLayout} from './../../components/layouts/PublicLayout';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import ReadOnlyText from '../../components/Slate/TextRead';
import Link from 'next/link';

const Article = () => {
  const router = useRouter();
  const {products} = useContext(ChangeDataContext);
  const articleId = router.query.id;

  const findArticle = products?.productos?.find(
    (e) => e.pathname === articleId,
  );

  const bodyDescription = findArticle?.description
    ? JSON.parse(findArticle?.description)
    : false;

  const showArticle = findArticle ? (
    <>
      <div className="title">
        <h2>{findArticle?.nombre}</h2>
      </div>
      <div className="body">
        {bodyDescription &&
          bodyDescription.map((element, index) => (
            <ReadOnlyText {...element} key={index} />
          ))}
      </div>
    </>
  ) : (
    <>
      <h1>No encontramos esta nota...</h1>
      <Link href="/blog" className="link">
        <a className="link">⇒ Ir a las últimas publiaciones</a>
      </Link>
    </>
  );

  return (
    <PublicLayout
      title={findArticle?.nombre || ''}
      pageDescription={'Artículos de interés sobre seguridad informática'}
    >
      <div className="articleContainer">
        <div className="textContainer">{showArticle}</div>
      </div>
    </PublicLayout>
  );
};

export default Article;
