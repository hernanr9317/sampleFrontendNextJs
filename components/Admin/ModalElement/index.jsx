import React, {useState, useEffect, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Form, Modal} from 'react-bootstrap';
import {ChangeDataContext} from './../../../context/changeData/ChangeDataContext';
import {useGetData} from './../../../hooks/useGetData';
import {ModalFooter} from './ModalFooter';
import {ModalBody} from './ModalBody';
import {deleteItemModal, saveItemModal} from './modalHelpers';

export const ModalElement = ({element, interaction, type}) => {
  const {isNewData} = useContext(ChangeDataContext);

  const [display, setDisplay] = useState('none');
  const [alertMessage, setAlertMessage] = useState('');

  const categorias = useGetData('/categorias/');

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

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(true);
  const handleClose = () => {
    setShow(false);
    setEdit(true);
    setDisplay('none');
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    reset({
      nombre: element?.nombre,
      categoria: element?.categoria?._id,
      precio: element?.precio,
      descripcion: element?.description,
    });
  }, [reset, element]);

  useEffect(() => {
    if (element !== '' || undefined) handleShow();
  }, [element, interaction]);

  const editInfo = () => {
    setEdit(!edit);
    setDisplay('none');
  };

  const handleSave = (data) => {
    saveItemModal(
      data,
      type,
      element,
      isNewData,
      setAlertMessage,
      setEdit,
      setDisplay,
    );
  };

  const handleDelete = () => {
    deleteItemModal(element, isNewData, setAlertMessage, setEdit, setDisplay);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="lg"
        className="modalElement"
      >
        <Form onSubmit={handleSubmit(handleSave)} autoComplete="off">
          <Modal.Header closeButton className="colorHeaderTh">
            <Modal.Title>
              {element?.nombre ||
                `NUEVO ELEMENTO DE ${element?.categoria?.nombre}`}
            </Modal.Title>
          </Modal.Header>

          <ModalBody
            element={element}
            edit={edit}
            register={register}
            errors={errors}
            categorias={categorias}
            type={type}
          />

          <ModalFooter
            editInfo={editInfo}
            edit={edit}
            handleDelete={handleDelete}
          />

          <Alert variant="success" style={{display: display}}>
            {alertMessage}
          </Alert>
        </Form>
      </Modal>
    </>
  );
};
