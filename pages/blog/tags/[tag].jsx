import {useContext} from 'react';
import {useRouter} from 'next/router';
import {ChangeDataContext} from './../../../context/changeData/ChangeDataContext';
import {PublicLayout} from '../../../components/layouts';
import {ArticleList} from './../../../components/Blog/ArticleList';

const TagList = () => {
  const router = useRouter();
  const {products} = useContext(ChangeDataContext);

  let tag = router.query.tag;

  //TODO: PASAR TODO ESTO A UTILS
  //remplaza guiones por espacios
  tag = tag?.replace(/-/g, ' ');

  //busca un string sin distincion de mayusculas o minuscualas
  const findArticlesWithTag = products?.productos?.filter((element) =>
    element.tags.find(
      (elemento) => elemento.toLowerCase() === `#${tag}`.toLowerCase(),
    ),
  );

  //TODO: FALTA TERMINAR ESTA PARTE
  // Función para buscar un elemento en el array y devolver su valor
  //Estoy haciendo esto para buscar el tag original y ponerlo como titulo
  const buscarElemento = (array, elementoBuscado) => {
    return array?.find(
      (elemento) =>
        elemento.toLowerCase() === `#${elementoBuscado}`.toLowerCase(),
    );
  };

  const title = buscarElemento(findArticlesWithTag?.[0]?.tags, tag);

  const url = `${process.env.NEXT_PUBLIC_HOST}${router.asPath}`;
  const ogImage =
    findArticlesWithTag?.[0]?.otherImgs?.[1] ||
    findArticlesWithTag?.[0]?.otherImgs?.[0];

  return (
    <PublicLayout
      title={title || ''}
      pageDescription={`Notas sobre ${title}`}
      imageFullUrl={ogImage}
      url={url}
      type="article"
    >
      <div className="articleContainer">
        <div style={{maxWidth: '1400px', margin: 'auto'}}>
          <div className="blog">
            <ArticleList list={findArticlesWithTag} title={`${title || ''}`} />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default TagList;
