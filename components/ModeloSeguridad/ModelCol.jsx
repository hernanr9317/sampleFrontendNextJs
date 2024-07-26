export const ModelCol = ({title, description, src}) => {
  return (
    <li className="honeycomb-cell">
      <img className="honeycomb-cell__image" src={src.src} alt={title} />
      <div className="honeycomb-cell__title">{title}</div>
      <p className="honeycomb-cell__description">{description}</p>
    </li>
  );
};
