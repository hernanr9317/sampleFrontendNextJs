import Link from 'next/link';
import {useRouter} from 'next/router';
import {CustomButton} from './../CustomButton/index';

export const InfoCol = ({title, text, src, link}) => {
  const router = useRouter();

  return (
    <>
      <article className="card">
        <img className="card__background" src={src.src} alt={title} />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{text}</p>
          </div>
          <Link href={link}>
            <a>
              <CustomButton
                text="Más información"
                type="slide_down"
                // onClick={() => router.push(link)}
              />
            </a>
          </Link>
        </div>
      </article>
    </>
  );
};
