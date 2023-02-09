import {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import Swal from 'sweetalert2';
import {putDataAxios} from '../../../utils/axiosConfig';
import {AuthContext} from './../../../context/auth/AuthContext';
import Cookies from 'js-cookie';

export const DataBox = () => {
  const {loginUser, user} = useContext(AuthContext);

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
      nombre: user?.nombre,
      correo: user?.correo,
    },
  });
  //TODO: TERMINAR DE HACER FUNCIONAR LA ACTUALIZACION DE CONTRASEÑA
  const onSaveChanges = async (data) => {
    const tokenCookie = Cookies.get('token');
    await putDataAxios(`/usuarios/${user.id}`, data, tokenCookie);
  };

  const editInfo = async () => {
    Swal.fire({
      title: 'Ingrese su contraseña',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      input: 'password',
      showCancelButton: true,
      confirmButtonText: 'Confirrmar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: (password) => {
        const data = {
          email: user?.correo,
          password: password,
        };
        return loginUser(data)
          .then((response) => {
            if (!response) {
              throw new Error(response.statusText);
            }
          })
          .catch((error) => {
            Swal.showValidationMessage(`Contraseña incorrecta: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        setEdit(!edit);
        setDisplay('none');
      }
    });
  };

  return (
    <form
      className="col-md-8 data-box"
      onSubmit={handleSubmit(onSaveChanges)}
      autoComplete="off"
    >
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Nombre completo</h6>
            </div>
            <input
              disabled={edit}
              className="col-sm-9 text-secondary"
              defaultValue={user?.nombre}
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
              defaultValue={user?.correo}
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
              <h6 className="mb-0">Cambiar contraseña</h6>
            </div>
            <input
              disabled={edit}
              type="password"
              className="col-sm-9 text-secondary"
              defaultValue={'contraseña'}
              {...register('contraseñaForm', {
                minLength: {value: 6, message: 'Mínimo 6 caracteres'},
              })}
            />
            <div className="invalid-feedback d-block">
              {errors.contraseñaForm?.message}
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
  );
};
