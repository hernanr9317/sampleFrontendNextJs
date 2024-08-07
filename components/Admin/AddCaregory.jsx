import React, {useContext, useState} from 'react';
import Cookies from 'js-cookie';
import {useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import {postDataAxios} from '../../utils/axiosConfig';
import {FcAddDatabase} from 'react-icons/fc';
import {FaSave} from 'react-icons/fa';
import {ChangeDataContext} from './../../context/changeData/ChangeDataContext';

export const AddCategory = () => {
  const {isNewData} = useContext(ChangeDataContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const [disabled, setDisabled] = useState(false);

  const [show, setShow] = useState(false);

  const [display, setDisplay] = useState('none');
  const [alertMessage, setAlertMessage] = useState({msg: '', variant: ''});

  const handleClose = () => {
    setShow(false);
    reset();
  };
  const handleShow = () => setShow(true);

  const onSaveChanges = async (data) => {
    try {
      const tokenCookie = Cookies.get('token');
      const resp = await postDataAxios('/categorias/', data, tokenCookie);
      isNewData();

      if (resp.status === 201) {
        setDisabled(true);
        setDisplay('');
        setAlertMessage({
          msg: 'Categoría creada exitosamente',
          variant: 'success',
        });

        setTimeout(() => {
          setDisabled(false);
          setDisplay('none');
        }, 3500);
      } else {
        setDisabled(true);
        setDisplay('');
        setAlertMessage({
          msg: resp.response.data.msg || 'Error al crear la nueva categoría',
          variant: 'danger',
        });

        setTimeout(() => {
          setDisabled(false);
          setDisplay('none');
        }, 3500);
      }
    } catch (error) {}
  };

  return (
    <>
      <Button
        variant={'success'}
        onClick={handleShow}
        style={{marginRight: '3px'}}
      >
        Agregar categoría{' '}
        <FcAddDatabase size={'25px'} style={{marginLeft: '3px'}} />
      </Button>

      <Modal backdrop="static" show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit(onSaveChanges)} autoComplete="off">
          <Modal.Header closeButton>
            <Modal.Title>Agregar categoría</Modal.Title>
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
            <Button
              variant="primary"
              type="submit"
              disabled={disabled}
              style={{display: 'flex'}}
            >
              Guardar <FaSave size={'20px'} style={{marginLeft: '3px'}} />
            </Button>
          </Modal.Footer>
          <Alert variant={alertMessage.variant} style={{display: display}}>
            {alertMessage.msg}
          </Alert>
        </Form>
      </Modal>
    </>
  );
};
