export const ModelCol = ({title, src}) => {
  return (
    <>
      <li className="honeycomb-cell">
        <img className="honeycomb-cell__image" src={src.src} alt={title} />
        <div className="honeycomb-cell__title">{title}</div>
      </li>
    </>
  );
};
