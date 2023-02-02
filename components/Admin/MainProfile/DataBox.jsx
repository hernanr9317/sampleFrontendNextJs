import {useContext} from 'react';
import {AuthContext} from './../../../context/auth/AuthContext';

export const DataBox = () => {
  const data = useContext(AuthContext);

  return (
    <div className="col-md-8">
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Nombre completo</h6>
            </div>
            <div className="col-sm-9 text-secondary">{data.user.nombre}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">{data.user.correo}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Contraseña</h6>
            </div>
            <div className="col-sm-9 text-secondary">******</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-12">
              <button className="btn btn-primary">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
