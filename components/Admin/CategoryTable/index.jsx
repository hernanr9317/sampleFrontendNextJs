import {useState, useEffect, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Button, Card, Form} from 'react-bootstrap';
import {FaFolderPlus} from 'react-icons/fa';
import {ModalElement} from './../ModalElement/index';
import {ButtonsTable} from './ButtonsTable';
import {InputsTable} from './InputsTable';
import {MainTable} from './MainTable';
import {deleteItem, editItem, saveItem} from './tableHelpers';
import {ChangeDataContext} from '../../../context/changeData/ChangeDataContext';

export const CategoryTable = ({categories, title, id, description}) => {
  const {isNewData} = useContext(ChangeDataContext);
  const [display, setDisplay] = useState('none');
  const [messageAlert, setMessageAlert] = useState('');
  const [type, setType] = useState('');

  const [element, setElement] = useState('');
  const [interaction, setInteraction] = useState(false);
  const [editButton, setEditButton] = useState(true);
  const [editForm, setEditForm] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nombre: title || '',
      descripcion: description || '',
    },
  });

  useEffect(() => {
    reset({
      nombre: title || '',
      descripcion: description || '',
    });

    if (id) setEditButton(false);
  }, [reset, categories]);

  const selectItem = (element) => {
    setType('editElement');
    setElement(element);
    setInteraction(!interaction);
  };

  const addElement = () => {
    setType('addElement');
    setElement({
      categoria: {
        _id: id,
        nombre: title,
      },
    });
    setInteraction(!interaction);
  };

  const handleSave = (data) => {
    saveItem(
      data,
      setEditForm,
      editForm,
      setMessageAlert,
      setDisplay,
      id,
      isNewData,
    );
  };

  const handleDelete = () => {
    deleteItem(setEditForm, setMessageAlert, setDisplay, id, isNewData);
  };

  const handleEdit = () => {
    editItem(setEditForm, editForm);
  };

  return (
    <div>
      <Card className="mt-5">
        <Form onSubmit={handleSubmit(handleSave)} autoComplete="off">
          <Card.Header className="colorHeaderTh">
            Informe de la categoria
          </Card.Header>
          <Card.Body>
            <InputsTable
              title={title}
              editForm={editForm}
              errors={errors}
              description={description}
              register={register}
            />

            <ButtonsTable
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              editButton={editButton}
              editForm={editForm}
            />
          </Card.Body>
          <Alert variant="success" style={{display: display, margin: '5px'}}>
            {messageAlert}
          </Alert>
        </Form>
      </Card>

      <Button
        variant="success"
        disabled={title === '' ? true : false}
        onClick={() => addElement('')}
        style={{display: 'flex', marginTop: '50px'}}
      >
        Agregar elemento
        <FaFolderPlus size={'22px'} style={{marginLeft: '4px'}} />
      </Button>

      <MainTable categories={categories} selectItem={selectItem} />

      <ModalElement element={element} interaction={interaction} type={type} />
    </div>
  );
};
