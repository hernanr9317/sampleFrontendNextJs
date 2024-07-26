import Link from 'next/link';
import dayjs from 'dayjs';
import Image from 'next/image';
import CardPlaceholder from '../../public/assets/CardPlaceholder.webp';
import CardBlur from '../../public/assets/CardPlaceholder.webp';

export const CardBlog = ({filterCategory, currentPage, numberItems}) => {
  const defaultImg = CardPlaceholder.src;

  const blurImg = CardBlur.src;

  const Loader = (fetchUrl) => {
    let url = fetchUrl;

    setTimeout(() => {
      url = fetchUrl;
    });

    return url;
  };

  const sliceArray = filterCategory?.slice(
    (currentPage - 1) * numberItems,
    filterCategory.lenght,
  );

  return (
    <div className="band">
      {sliceArray?.map(
        (article, index) =>
          index < numberItems && (
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
                        loader={() =>
                          Loader(article.otherImgs[0] || defaultImg)
                        }
                        blurDataURL={blurImg}
                        placeholder="blur"
                      />
                    </div>
                    <article>
                      <h1>{article.nombre}</h1>
                      {article?.subtitle !== '' && <p>{article.subtitle}</p>}
                      <span>
                        {dayjs(article.createdAt).format('DD/MM/YYYY')}
                      </span>
                    </article>
                  </div>
                </a>
              </Link>
            </div>
          ),
      )}
    </div>
  );
};
