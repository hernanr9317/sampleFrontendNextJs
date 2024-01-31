import {useContext} from 'react';
import {useRouter} from 'next/router';
import {PublicLayout} from './../../components/layouts/PublicLayout';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import ReadOnlyText from '../../components/Slate/TextRead';
import dayjs from 'dayjs';
import {es} from 'dayjs/locale/es';
import localeData from 'dayjs/plugin/localeData';

dayjs.locale('es');
dayjs.extend(localeData);

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

  const date = dayjs(findArticle?.updatedAt)
    .format('dddd D [de] MMMM [de] YYYY')
    .replace(/^\w/, (c) => c.toUpperCase());

  const ogImage = findArticle?.otherImgs?.[0];
  const url = `${process.env.NEXT_PUBLIC_HOST}${router.asPath}`;

  const showArticle = findArticle && (
    <>
      <div className="title">
        <h2>{findArticle?.nombre}</h2>
        <div className="date">{date}</div>
      </div>
      <div className="body">
        {bodyDescription &&
          bodyDescription.map((element, index) => (
            <ReadOnlyText {...element} key={index} />
          ))}
      </div>
    </>
  );

  return (
    <PublicLayout
      title={findArticle?.nombre || ''}
      pageDescription={findArticle?.subtitle}
      imageFullUrl={ogImage}
      url={url}
      type="article"
    >
      <div className="articleContainer">
        <div className="textContainer">{showArticle}</div>
      </div>
    </PublicLayout>
  );
};

export default Article;
