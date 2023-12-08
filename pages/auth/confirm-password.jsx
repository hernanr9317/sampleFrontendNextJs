import {useState} from 'react';
import {useRouter} from 'next/router';
import {Form, Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {AuthLayout} from '../../components/layouts';
import {changePasswordWithCode} from '../../utils/axiosConfig';
import showEye from '../../public/show.png';
import hideEye from '../../public/hide.png';

const ConfirmPassword = () => {
  const [showStatus, setShowStatus] = useState({visible: false, text: ''});
  const [hideToggle, setHideToggle] = useState(true);
  const router = useRouter();

  const eyeImg = hideToggle ? hideEye : showEye;

  const changeEye = () => {
    setHideToggle(!hideToggle);
  };

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const changePasword = async (data) => {
    try {
      const resp = await changePasswordWithCode(data);
      if (resp.status === 200) {
        setShowStatus({
          visible: true,
          text: 'Contraseña cambiada con éxito',
        });
        setTimeout(() => {
          router.push('/auth/login');
        }, 3000);
      } else {
        setShowStatus({
          visible: true,
          text: 'Datos incorrectos',
        });
      }
    } catch (error) {
      setShowStatus({
        visible: true,
        text: 'Datos incorrectos',
      });
    }
  };

  return (
    <AuthLayout title="Nueva contraseña">
      <Form
        className="form-login-register"
        onSubmit={handleSubmit(changePasword)}
      >
        <h1 className="text-center title">Nueva contraseña</h1>
        <div
          className="alert alert-success"
          role="alert"
          style={{display: showStatus.visible ? 'flex' : 'none'}}
        >
          {showStatus.text}
        </div>
        <Form.Group className="mb-3" controlId="formBasicCode">
          <Form.Control
            className={!!errors.codigo ? 'is-invalid' : ''}
            type="number"
            placeholder="Código"
            {...register('codigo', {
              required: 'Este campo es requerido',
            })}
          />
          <div className="invalid-feedback">{errors.codigo?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className={!!errors.email ? 'is-invalid' : ''}
            type="email"
            placeholder="Correo"
            {...register('email', {
              required: 'Este campo es requerido',
            })}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className={!!errors.password ? 'is-invalid' : ''}
            type={hideToggle ? 'password' : 'text'}
            placeholder="Nueva contraseña"
            {...register('password', {
              required: 'Este campo es requerido',
              minLength: {value: 6, message: 'Mínimo 6 caracteres'},
            })}
          />
          <img className="eye" src={eyeImg?.src} onClick={changeEye}></img>
          <div className="invalid-feedback">{errors.password?.message}</div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Confirmar cambios
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default ConfirmPassword;
