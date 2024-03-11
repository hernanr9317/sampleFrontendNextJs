import {IoMdDownload} from 'react-icons/io';

export const CustomButton = ({type, text, onClick, iconType}) => {
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'download':
        return <IoMdDownload size={'22px'} />;
      default:
        return null;
    }
  };

  switch (type) {
    case 'slide_down':
      return (
        <button className="button_slide slide_down" onClick={onClick}>
          {text}
          {iconType && getIcon(iconType)}
        </button>
      );
    case 'slide_right':
      return (
        <button className="button_slide slide_right" onClick={onClick}>
          {text}
        </button>
      );
    case 'slide_left':
      return (
        <button className="button_slide slide_left" onClick={onClick}>
          {text}
        </button>
      );
    case 'slide_diagonal':
      return (
        <button className="button_slide slide_diagonal" onClick={onClick}>
          {text}
        </button>
      );
    default:
      return (
        <button className="button_slide slide_down" onClick={onClick}>
          {text}
        </button>
      );
  }
};
