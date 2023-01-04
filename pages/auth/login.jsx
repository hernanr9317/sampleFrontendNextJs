import {AuthLayout} from '../../components/layouts';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import {useForm} from 'react-hook-form';
import {postDataAxios} from '../../utils/axiosConfig';
import {useState} from 'react';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const [loginData, setLoginData] = useState([]);

  console.log(loginData);

  const onLoginUser = (data) => {
    postDataAxios('/auth/login/', data).then(setLoginData);
  };

  return (
    <AuthLayout title="Login">
      <h1 className="text-center" style={{marginTop: '100px'}}>
        Iniciar Sesión
      </h1>
      <Form
        style={{width: '300px', margin: 'auto', marginTop: '50px'}}
        onSubmit={handleSubmit(onLoginUser)}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className={!!errors.email ? 'is-invalid' : ''}
            type="email"
            placeholder="Ingresar correo"
            {...register('email', {
              required: 'Este campo es requerido',
            })}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className={!!errors.password ? 'is-invalid' : ''}
            type="password"
            placeholder="Contraseña"
            {...register('password', {
              required: 'Este campo es requerido',
            })}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
        <Link href="/auth/register">
          <Button variant="light" style={{float: 'right'}}>
            ¿No tienes cuenta?
          </Button>
        </Link>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;
