import React, {useState} from 'react';
import Cookies from 'js-cookie';
import {useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {postDataAxios} from '../../utils/axiosConfig';
import {FcAddDatabase} from 'react-icons/fc';

export const AddCategory = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const [disabled, setDisabled] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    reset();
  };
  const handleShow = () => setShow(true);

  const onSaveChanges = async (data) => {
    console.log(data);

    try {
      const tokenCookie = Cookies.get('token');
      await postDataAxios('/categorias/', data, tokenCookie);

      setDisabled(true);

      setTimeout(() => {
        setDisabled(false);
      }, 2000);
    } catch (error) {}
  };

  return (
    <>
      <Button
        variant={'success'}
        onClick={handleShow}
        style={{marginRight: '3px'}}
      >
        Agregar categoria{' '}
        <FcAddDatabase size={'25px'} style={{marginLeft: '3px'}} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit(onSaveChanges)} autoComplete="off">
          <Modal.Header closeButton>
            <Modal.Title>Agregar nueva categoria</Modal.Title>
          </Modal.Header>
          <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="name"
              placeholder="Nombre de la categoria"
              autoFocus
              {...register('name', {
                required: 'Este campo es requerido',
                minLength: {value: 3, message: 'Mínimo 3 caracteres'},
              })}
            />
            <div className="invalid-feedback d-block">
              {errors.name?.message}
            </div>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit" disabled={disabled}>
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
