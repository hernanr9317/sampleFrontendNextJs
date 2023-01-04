import Link from 'next/link';
import {AuthLayout} from '../../components/layouts';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <h1 className="text-center" style={{marginTop: '100px'}}>
        Crear cuenta
      </h1>
      <Form style={{width: '300px', margin: 'auto', marginTop: '50px'}}>
        <Form.Group className="mb-3" controlId="formBasicName">
          {/* <Form.Label>Nombre</Form.Label> */}
          <Form.Control type="name" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Correo</Form.Label> */}
          <Form.Control type="email" placeholder="Correo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Contraseña</Form.Label> */}
          <Form.Control type="password" placeholder="Contraseña" />
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
