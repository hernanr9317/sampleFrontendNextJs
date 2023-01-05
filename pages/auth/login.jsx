import {useState, useContext} from 'react';
import {useRouter} from 'next/router';
import {AuthLayout} from '../../components/layouts';
import {AuthContext} from './../../context';
import {useForm} from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

const LoginPage = () => {
  const router = useRouter();
  const {loginUser} = useContext(AuthContext);
  const [showError, setShowError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onLoginUser = async (data) => {
    setShowError(false);

    const isValidLogin = await loginUser(data);
    if (!isValidLogin) {
      setShowError(true);
      return;
    }

    router.replace('/');
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
        <div
          className="alert alert-danger"
          role="alert"
          style={{display: showError ? 'flex' : 'none'}}
        >
          Correo o contraseña incorrectos
        </div>
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
