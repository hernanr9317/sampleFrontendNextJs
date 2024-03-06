import {useRouter} from 'next/router';
import {CustomButton} from './../CustomButton/index';

export const InfoCol = ({title, text, src, link}) => {
  const router = useRouter();

  return (
    <>
      <article className="card">
        <img
          className="card__background"
          src={src.src}
          alt={title}
          width={1920}
          height={2193}
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{text}</p>
          </div>
          <CustomButton
            text="Más información"
            type="slide_down"
            onClick={() => router.push(link)}
          />
        </div>
      </article>
    </>
  );
};
