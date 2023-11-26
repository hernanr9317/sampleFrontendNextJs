import Link from 'next/link';

export const InfoCol = ({title, text, src, link}) => {
  return (
    <>
      <article className="card">
        <img
          className="card__background"
          src={src.src}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
          width={1920}
          height={2193}
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{text}</p>
          </div>
          <Link href={link}>
            <a className="card__button">Más información</a>
          </Link>
        </div>
      </article>
    </>
  );
};
