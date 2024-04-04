import {useContext} from 'react';
import {useRouter} from 'next/router';
import {PublicLayout} from './../../components/layouts/PublicLayout';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';
import ReadOnlyText from '../../components/Slate/TextRead';
import dayjs from 'dayjs';
import {es} from 'dayjs/locale/es';
import localeData from 'dayjs/plugin/localeData';
import {SocialLinks} from './../../components/SocialLinks/index';
import {Loading} from '../../components/Loading';
import {CustomButton} from '../../components/CustomButton';
import Link from 'next/link';

dayjs.locale('es');
dayjs.extend(localeData);

const Article = () => {
  const router = useRouter();
  const {products} = useContext(ChangeDataContext);
  const articleId = router.query.id;

  const clickButton = () => router.push('/blog');

  const findArticle = products?.productos?.find(
    (e) => e.pathname === articleId,
  );

  const bodyDescription = findArticle?.description
    ? JSON.parse(findArticle?.description)
    : false;

  const date = dayjs(findArticle?.updatedAt)
    .format('dddd D [de] MMMM [de] YYYY')
    .replace(/^\w/, (c) => c.toUpperCase());

  const ogImage = findArticle?.otherImgs?.[1] || findArticle?.otherImgs?.[0];
  const url = `${process.env.NEXT_PUBLIC_HOST}${router.asPath}`;

  //TODO: REFACTORIZAR EN OTRO COMPONENTE TODO LO QUE TENGA QUE VER CON TAGS
  const quitarSimbolo = (arr) => {
    return arr?.map((cadena) => cadena.replace('#', ''));
  };

  const tags = quitarSimbolo(findArticle?.tags);

  //arma el path del tag
  const tagPath = (cadena) => {
    return cadena.toLowerCase().replace(/\s+/g, '-');
  };

  // Mapear cada tag a un elemento <span>
  const tagSpans = tags?.map((tag, index) => (
    <Link href={`/blog/tags/${tagPath(tag)}`} key={index}>
      <a>
        <span key={index} className="tag">
          {tag}
        </span>
      </a>
    </Link>
  ));

  const showArticle = router.isReady && findArticle && (
    <>
      <div className="title">
        <h2>{findArticle?.nombre}</h2>
        <div className="date">{date}</div>
        <SocialLinks url={url} />
      </div>
      {findArticle?.otherImgs?.[1] && (
        <div className="main-media">
          <img src={findArticle?.otherImgs?.[1]} />
        </div>
      )}
      <div className="body">
        {bodyDescription &&
          bodyDescription.map((element, index) => (
            <ReadOnlyText {...element} key={index} />
          ))}
        {tags?.length > 0 && (
          <>
            <h6 className="tags-title">Temas de la nota</h6>
            <div className="divider-1">
              {' '}
              <span></span>
            </div>
            <div className="tags-container">{tagSpans}</div>
          </>
        )}
      </div>
    </>
  );

  let load = true;

  if (router.isReady && products?.length !== 0) load = false;

  const notResults = (
    <div className="not-results">
      <h4>
        <strong>No se encontraron resultados...</strong>
      </h4>
      <p>
        <strong>Mirá otras notas en el blog</strong>
      </p>
      <CustomButton
        text="Ir al blog"
        type="slide_right"
        onClick={clickButton}
      />
    </div>
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
        <div className="textContainer">
          {load && <Loading />}
          {!load && showArticle}
          {!load && !showArticle && notResults}
        </div>
      </div>
    </PublicLayout>
  );
};

export default Article;
