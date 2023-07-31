import Link from 'next/link';
import dayjs from 'dayjs';
import Image from 'next/image';
import CardPlaceholder from '../../public/assets/CardPlaceholder.webp';
import CardBlur from '../../public/assets/CardPlaceholder.webp';

export const CardBlog = ({filterCategory}) => {
  //   const defaultImg =
  //     'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  //   const blurImg =
  //   'https://images.pond5.com/super-soft-blurred-background-footage-068745073_iconl.jpeg';

  const defaultImg = CardPlaceholder.src;

  const blurImg = CardBlur.src;

  //ESTA ES LA SOLUCION PARA QUE CARGUEN URLS DE IMAGENES EN NEXTJS
  const Loader = (fetchUrl) => {
    let url = fetchUrl;

    setTimeout(() => {
      url = fetchUrl;
    });

    return url;
  };

  return (
    <div className="band">
      {filterCategory?.map((article, index) => (
        <div className={`item-${index + 1}`} key={index}>
          <Link href={`/blog/${[article.pathname]}`}>
            <a>
              <div className="card">
                <div>
                  <Image
                    alt={article.nombre}
                    src={defaultImg}
                    layout="responsive"
                    width="100%"
                    height="62.5%" // 16:10 aspect ratio
                    objectFit="cover"
                    unoptimized={article.otherImgs[0] ? false : true}
                    loader={() => Loader(article.otherImgs[0] || defaultImg)}
                    blurDataURL={blurImg}
                    placeholder="blur"
                  />
                </div>
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
  );
};
