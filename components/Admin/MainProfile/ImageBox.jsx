import {useContext} from 'react';
import Image from 'next/image';
import {AuthContext} from './../../../context/auth/AuthContext';
import defaultUser from '../../../public/assets/profile/defaultUser.png';

export const ImageBox = () => {
  const data = useContext(AuthContext);

  return (
    <div className="card image-box">
      <div className="card-body">
        <div className="d-flex flex-column align-items-center text-center">
          <div className="avatar-container">
            <Image src={defaultUser} alt="Admin" />
          </div>
          <div className="mt-3">
            <h4>{data?.user?.nombre}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
