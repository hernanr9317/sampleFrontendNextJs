import {FaFingerprint} from 'react-icons/fa';
import {FiAlertTriangle} from 'react-icons/fi';
import {ImProfile} from 'react-icons/im';
import {FaRegCheckCircle} from 'react-icons/fa';
import {RiGitRepositoryPrivateLine} from 'react-icons/ri';
import {SiHackaday} from 'react-icons/si';

export const Card = ({
  icon1,
  subtitle,
  paragraf,
  icon2,
  subtitle2,
  paragraf2,
}) => {
  const icons = [
    <FaFingerprint color="white" size={30} />,
    <FiAlertTriangle color="white" size={30} />,
    <ImProfile color="white" size={30} />,
    <FaRegCheckCircle color="white" size={30} />,
    <RiGitRepositoryPrivateLine color="white" size={30} />,
    <SiHackaday color="white" size={30} />,
  ];

  return (
    <>
      <div className="card">
        <div className="container-card bg-green-box">
          <p className="card-subtitle">
            <span> {icons[icon1]}</span>
            {subtitle}
          </p>
          <p className="card-description">{paragraf}</p>
          <p className="card-subtitle">
            <span>{icons[icon2]}</span>
            {subtitle2}
          </p>
          <p className="card-description">{paragraf2}</p>
        </div>
      </div>
    </>
  );
};
