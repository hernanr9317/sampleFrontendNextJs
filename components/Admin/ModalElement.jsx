import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {FaTrashAlt, FaSave, FaEdit} from 'react-icons/fa';
import {useGetData} from '../../hooks/useGetData';
import {
  deleteDataAxios,
  postDataAxiosElement,
  putDataAxios,
  putImageAxios,
} from '../../utils/axiosConfig';

export const ModalElement = ({element, interaction, type}) => {
  const [display, setDisplay] = useState('none');
  const [alertMessage, setAlertMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nombre: element?.nombre,
      categoria: element?.categoria?._id,
      precio: element?.precio,
      descripcion: element?.description,
    },
  });

  useEffect(() => {
    reset({
      nombre: element?.nombre,
      categoria: element?.categoria?._id,
      precio: element?.precio,
      descripcion: element?.description,
    });
  }, [reset, element]);

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(true);
  const handleClose = () => {
    setShow(false);
    setEdit(true);
    setDisplay('none');
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (element !== '' || undefined) handleShow();
  }, [element, interaction]);

  const categorias = useGetData('/categorias/');

  const editInfo = () => {
    setEdit(!edit);
    setDisplay('none');
  };

  const onSaveChanges = async (data) => {
    try {
      const tokenCookie = Cookies.get('token');
      if (type === 'editElement') {
        await putDataAxios(`/productos/${element._id}`, data, tokenCookie);
      }

      if (type === 'addElement') {
        const respAddElement = await postDataAxiosElement(
          '/productos/',
          data,
          tokenCookie,
        );

        setIdNewElement(respAddElement.data._id);
      }
      //TODO: EL ELEMENTO NO FUNCIONO BIEN TODAVIA, PROBAR DE TODAS LAS FORMAS QUE NO TENGA BUGS

      if (data.img && data.img.length > 0) {
        await putImageAxios(
          `/uploads/productos/${element._id}`,
          data.img[0],
          tokenCookie,
        );
      }
      setAlertMessage('Cambios guardados');
      setEdit(true);
      setDisplay('');
    } catch (error) {}
  };

  const handleDelete = async () => {
    try {
      const tokenCookie = Cookies.get('token');
      await deleteDataAxios(`/productos/${element._id}`, tokenCookie);
      setAlertMessage('Eliminado exitosamente');
      setEdit(true);
      setDisplay('');
    } catch (error) {}
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
        <Form onSubmit={handleSubmit(onSaveChanges)} autoComplete="off">
          <Modal.Header closeButton>
            <Modal.Title>{element?.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="nombre"
                defaultValue={element?.nombre}
                autoFocus
                disabled={edit}
                {...register('nombre', {
                  required: 'Este campo es requerido',
                  minLength: {value: 3, message: 'Mínimo 3 caracteres'},
                })}
              />
              <div className="invalid-feedback d-block">
                {errors.nombre?.message}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                type="categoria"
                defaultValue={element?.categoria?.nombre}
                disabled={edit}
                {...register('categoria', {
                  required: 'Este campo es requerido',
                })}
              >
                {categorias?.data?.categorias?.map((catElement, index) => (
                  <option
                    key={index}
                    value={catElement?._id}
                    defaultValue={catElement?.nombre}
                  >
                    {catElement?.nombre}
                  </option>
                ))}
              </Form.Select>
              <div className="invalid-feedback d-block">
                {errors.categoria?.message}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="order">
              <Form.Label>Orden</Form.Label>
              <Form.Control
                defaultValue={element?.precio}
                type="number"
                min="0"
                disabled={edit}
                {...register('precio')}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descrripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="descripcion"
                defaultValue={element?.description}
                as="textarea"
                rows={5}
                disabled={edit}
                {...register('descripcion', {
                  required: 'Este campo es requerido',
                })}
              />
              <div className="invalid-feedback d-block">
                {errors.descripcion?.message}
              </div>
            </Form.Group>

            {type === 'editElement' && (
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Subir archivo</Form.Label>
                <Form.Control
                  type="file"
                  disabled={edit}
                  {...register('img')}
                />
              </Form.Group>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              style={{display: 'flex'}}
              onClick={editInfo}
            >
              Editar <FaEdit size="20px" style={{marginLeft: '3px'}} />
            </Button>
            <Button
              variant="primary"
              type="submit"
              style={{display: 'flex'}}
              disabled={edit}
            >
              Gaurdar <FaSave size="20px" style={{marginLeft: '3px'}} />
            </Button>
            <Button
              variant="danger"
              style={{display: 'flex'}}
              disabled={edit}
              onClick={handleDelete}
            >
              Eliminar <FaTrashAlt size="20px" style={{marginLeft: '3px'}} />
            </Button>
          </Modal.Footer>
          <Alert variant="success" style={{display: display}}>
            {alertMessage}
          </Alert>
        </Form>
      </Modal>
    </>
  );
};
