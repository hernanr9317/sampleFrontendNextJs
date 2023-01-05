import {useContext, useState} from 'react';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import Link from 'next/link';
import {AuthLayout} from '../../components/layouts';
import {AuthContext} from '../../context';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterPage = () => {
  const router = useRouter();
  const {registerUser} = useContext(AuthContext);

  const [showError, setShowError] = useState(false);
  const [showSucces, setShowSucces] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onRegisterForm = async (data) => {
    setShowError(false);
    setShowSucces(false);

    const resp = await registerUser(data);

    if (!resp) {
      setShowError(true);
      return;
    }

    setShowSucces(true);

    setTimeout(() => {
      router.replace('/auth/login');
    }, 4000);
  };

  return (
    <AuthLayout title="Registro">
      <h1 className="text-center" style={{marginTop: '100px'}}>
        Crear cuenta
      </h1>
      <Form
        style={{width: '300px', margin: 'auto', marginTop: '50px'}}
        onSubmit={handleSubmit(onRegisterForm)}
      >
        <div
          className="alert alert-success"
          role="alert"
          style={{display: showSucces ? 'flex' : 'none'}}
        >
          Cuenta creada exitosamente.
        </div>
        <div
          className="alert alert-danger"
          role="alert"
          style={{display: showError ? 'flex' : 'none'}}
        >
          Error al crear la cuenta
        </div>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            className={!!errors.name ? 'is-invalid' : ''}
            type="name"
            placeholder="Nombre completo"
            {...register('name', {
              required: 'Este campo es requerido',
              minLength: {value: 2, message: 'Mínimo 2 caracteres'},
            })}
          />
          <div className="invalid-feedback">{errors.name?.message}</div>
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
            type="password"
            placeholder="Contraseña"
            {...register('password', {
              required: 'Este campo es requerido',
              minLength: {value: 6, message: 'Mínimo 6 caracteres'},
            })}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicKey">
          <Form.Control
            className={!!errors.key ? 'is-invalid' : ''}
            type="password"
            placeholder="Key"
            {...register('key', {
              required: 'Este campo es requerido',
            })}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
        <Link href="/auth/login">
          <Button variant="light" style={{float: 'right'}}>
            ¿Ya tienes cuenta?
          </Button>
        </Link>
      </Form>
    </AuthLayout>
  );
};

export default RegisterPage;
