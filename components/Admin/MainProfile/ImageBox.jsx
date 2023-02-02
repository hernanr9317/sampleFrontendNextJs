import {useContext} from 'react';
import {AuthContext} from './../../../context/auth/AuthContext';

export const ImageBox = () => {
  const data = useContext(AuthContext);

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex flex-column align-items-center text-center">
          <button className="rounded-circle">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Admin"
              className="rounded-circle"
              width="150"
            />
          </button>
          <div className="mt-3">
            <h4>{data?.user?.nombre}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
