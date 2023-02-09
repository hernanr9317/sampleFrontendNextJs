import {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import {AuthContext} from './../../../context/auth/AuthContext';

export const DataBox = () => {
  const data = useContext(AuthContext);

  const [display, setDisplay] = useState('none');
  const [edit, setEdit] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nombre: data?.user?.nombre,
      correo: data?.user?.correo,
    },
  });

  const onSaveChanges = (data) => {
    console.log(data);
  };

  const editInfo = () => {
    setEdit(!edit);
    setDisplay('none');
  };

  return (
    <div className="col-md-8 data-box">
      <form onSubmit={handleSubmit(onSaveChanges)} autoComplete="off">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Nombre completo</h6>
              </div>
              <input
                disabled={edit}
                className="col-sm-9 text-secondary"
                defaultValue={data?.user?.nombre}
                {...register('nombre', {
                  required: 'Este campo es requerido',
                  minLength: {value: 3, message: 'Mínimo 3 caracteres'},
                })}
              />
              <div className="invalid-feedback d-block">
                {errors.nombre?.message}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <input
                disabled={edit}
                type="email"
                className="col-sm-9 text-secondary"
                defaultValue={data?.user?.correo}
                {...register('correo', {
                  required: 'Este campo es requerido',
                })}
              />
              <div className="invalid-feedback d-block">
                {errors.correo?.message}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Contraseña</h6>
              </div>
              <input
                disabled={edit}
                type="password"
                className="col-sm-9 text-secondary"
                defaultValue={'contraseña'}
                {...register('contraseña')}
              />
              <div className="invalid-feedback d-block">
                {errors.contraseña?.message}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12 button-group">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={editInfo}
                >
                  Editar
                </button>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={edit}
                  style={{display: 'flex'}}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
