import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useGetData} from '../../hooks/useGetData';

export const ModalElement = ({element, interaction}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nombre: element?.nombre,
      categoria: element?.categoria?.nombre,
      orden: element?.precio,
      descripcion: element?.description,
    },
  });

  useEffect(() => {
    reset({
      nombre: element?.nombre,
      categoria: element?.categoria?.nombre,
      orden: element?.precio,
      descripcion: element?.description,
    });
  }, [reset, element]);

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(true);
  const handleClose = () => {
    setShow(false);
    setEdit(true);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (element !== '' || undefined) handleShow();
  }, [element, interaction]);

  const categorias = useGetData('/categorias/');

  const editInfo = () => {
    setEdit(!edit);
  };

  const onSaveChanges = (data) => {
    console.log(data);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
        <Form onSubmit={handleSubmit(onSaveChanges)}>
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
                {...register('nombre', {required: true})}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                type="categoria"
                defaultValue={element?.categoria?.nombre}
                disabled={edit}
                {...register('categoria', {required: true})}
              >
                {categorias?.data?.categorias?.map((catElement, index) => (
                  <option key={index} value={catElement?.nombre}>
                    {catElement?.nombre}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="order">
              <Form.Label>Orden</Form.Label>
              <Form.Control
                defaultValue={element?.precio}
                type="number"
                min="0"
                disabled={edit}
                {...register('orden')}
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
                {...register('descripcion', {required: true})}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Subir archivo</Form.Label>
              <Form.Control type="file" disabled={edit} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={editInfo}>
              Editar
            </Button>
            <Button variant="primary" type="submit">
              Gaurdar cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
