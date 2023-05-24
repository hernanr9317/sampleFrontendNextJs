import {useContext} from 'react';
import {useRouter} from 'next/router';
import {PublicLayout} from './../../components/layouts/PublicLayout';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import ReadOnlyText from '../../components/Slate/TextRead';

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

  const titleLayout =
    findArticle?.nombre.charAt(0).toUpperCase() +
    findArticle?.nombre.slice(1).toLowerCase();

  return (
    <PublicLayout
      title={`e-seguridad - ${titleLayout}`}
      pageDescription={'Artículos de interés sobre seguridad informática'}
    >
      <div className="articleContainer">
        <div className="textContainer">
          <div className="title">{findArticle?.nombre}</div>
          {bodyDescription &&
            bodyDescription.map((element, index) => (
              <ReadOnlyText {...element} key={index} />
            ))}
        </div>
      </div>
    </PublicLayout>
  );
};

export default Article;
