import React, {useState, useEffect, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Form, Modal} from 'react-bootstrap';
import {ChangeDataContext} from './../../../context/changeData/ChangeDataContext';
import {ModalFooter} from './ModalFooter';
import {ModalBody} from './ModalBody';
import {deleteItemModal, saveItemModal} from './modalHelpers';

export const ModalElement = ({element, interaction, type, setType}) => {
  const {isNewData, categories} = useContext(ChangeDataContext);
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
      subtitulo: element?.subtitle,
      preview: element?.otherImgs,
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
      subtitulo: element?.subtitle,
      preview: element?.otherImgs,
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
    const isNota = element.categoria.nombre === 'NOTA';
    const textBody = isNota
      ? localStorage.getItem('content') || data
      : data.descripcion;
    data = {...data, descripcion: textBody};
    saveItemModal(
      data,
      type,
      element,
      isNewData,
      setAlertMessage,
      setEdit,
      setDisplay,
      setType,
    );
  };

  const handleDelete = () => {
    deleteItemModal(setShow, element, isNewData, setAlertMessage, setEdit);
  };

  const isFullScreen = element?.categoria?.nombre === 'NOTA' ? true : false;

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        fullscreen={isFullScreen}
        className={isFullScreen ? 'modalElement fullscreen' : 'modalElement'}
        dialogClassName="modal-90w"
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
            categorias={categories}
            type={type}
          />

          <ModalFooter
            editInfo={editInfo}
            edit={edit}
            handleDelete={handleDelete}
            type={type}
          />

          <Alert variant="success" style={{display: display}}>
            {alertMessage}
          </Alert>
        </Form>
      </Modal>
    </>
  );
};
