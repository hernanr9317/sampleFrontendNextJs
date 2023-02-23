import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {AuthLayout} from '../../components/layouts';
import {sendEmailCode} from '../../utils/axiosConfig';

const RecoverPassword = () => {
  const [showStatus, setShowStatus] = useState({visible: false, text: ''});

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const sendEmailData = async (data) => {
    try {
      sendEmailCode(data);
      setShowStatus({
        visible: true,
        text: 'Código enviado, verifique su correo',
      });
    } catch (error) {
      setShowStatus({
        visible: true,
        text: 'Se produjo un problema al enviar el código',
      });
    }
  };

  return (
    <AuthLayout title="Recuperar contraseña">
      <Form
        className="form-login-register"
        onSubmit={handleSubmit(sendEmailData)}
      >
        <h1 className="text-center title">Recuperar contraseña</h1>
        <div
          className="alert alert-success"
          role="alert"
          style={{display: showStatus.visible ? 'flex' : 'none'}}
        >
          {showStatus.text}
        </div>
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
        <Button variant="primary" type="submit">
          Enviar código
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default RecoverPassword;
