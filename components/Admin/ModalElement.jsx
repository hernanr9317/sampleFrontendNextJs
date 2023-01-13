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
    formState: {errors},
  } = useForm();

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
        <Modal.Header closeButton>
          <Modal.Title>{element?.nombre}</Modal.Title>
        </Modal.Header>
        <Button variant="primary" size="sm" onClick={editInfo}>
          Editar
        </Button>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSaveChanges)}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="nombre"
                defaultValue={element?.nombre}
                autoFocus
                disabled={edit}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Group className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Select
                  type="categoria"
                  defaultValue={element?.categoria?.nombre}
                  disabled={edit}
                >
                  {categorias?.data?.categorias?.map((catElement, index) => (
                    <option key={index} value={catElement?.nombre}>
                      {catElement?.nombre}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3" controlId="order">
              <Form.Label>Orden</Form.Label>
              <Form.Control
                defaultValue={element?.precio}
                type="number"
                min="0"
                disabled={edit}
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
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Subir archivo</Form.Label>
              <Form.Control type="file" disabled={edit} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit">
            Gaurdar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
