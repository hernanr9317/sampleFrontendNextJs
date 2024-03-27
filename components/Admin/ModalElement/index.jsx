import React, {useState, useEffect, useContext} from 'react';
import {useRouter} from 'next/router';
import Cookies from 'js-cookie';
import {useForm} from 'react-hook-form';
import {Alert, Form, Modal} from 'react-bootstrap';
import {ChangeDataContext} from '../../../context/changeData/ChangeDataContext';
import {ModalFooter} from './ModalFooter';
import {ModalBody} from './ModalBody';
import {deleteItemModal, saveItemModal} from './modalHelpers';
import {extractTags} from '../../helpers/helpers';

export const ModalElement = ({element, interaction, type, setType}) => {
  const {isNewData, categories} = useContext(ChangeDataContext);
  const [display, setDisplay] = useState('none');
  const [alertMessage, setAlertMessage] = useState({msg: '', variant: ''});

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
    getValues,
  } = useForm({
    defaultValues: {
      nombre: element?.nombre,
      subtitulo: element?.subtitle,
      preview: element?.otherImgs?.[0],
      categoria: element?.categoria?._id,
      precio: element?.precio,
      descripcion: element?.description,
      mainMedia: element?.otherImgs?.[1],
      pathname: element?.pathname,
      tags: element?.tags?.join(' '),
    },
  });

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(true);

  const handleClose = () => {
    Cookies.remove('newId', {path: '/'});
    setShow(false);
    setEdit(true);
    setDisplay('none');
    router.push(
      {
        pathname: router.pathname,
        query: {},
      },
      undefined,
      {scroll: false},
    );
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    reset({
      nombre: element?.nombre,
      subtitulo: element?.subtitle,
      preview: element?.otherImgs?.[0],
      categoria: element?.categoria?._id,
      precio: element?.precio,
      descripcion: element?.description,
      mainMedia: element?.otherImgs?.[1],
      pathname: element?.pathname,
      tags: element?.tags?.join(' '),
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
    data = {...data, descripcion: textBody, tags: extractTags(data.tags)};

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
    deleteItemModal(
      setShow,
      element,
      isNewData,
      setAlertMessage,
      setEdit,
      router,
    );
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
              {getValues()?.nombre ||
                `NUEVO ELEMENTO DE ${element?.categoria?.nombre}`}
            </Modal.Title>
          </Modal.Header>

          <ModalBody
            getValues={getValues}
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

          <Alert variant={alertMessage.variant} style={{display: display}}>
            {alertMessage.msg}
          </Alert>
        </Form>
      </Modal>
    </>
  );
};
