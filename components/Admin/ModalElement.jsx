import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useGetData} from '../../hooks/useGetData';

export const ModalElement = ({element, interaction}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (element !== '' || undefined) handleShow();
  }, [element, interaction]);

  const categorias = useGetData('/categorias/');

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{element?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control defaultValue={element?.nombre} autoFocus disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Group className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Select defaultValue={element?.categoria?.nombre} disabled>
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
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descrripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                defaultValue={element?.description}
                as="textarea"
                rows={5}
                disabled
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Subir archivo</Form.Label>
              <Form.Control type="file" disabled />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Gaurdar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
