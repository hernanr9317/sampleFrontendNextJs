import {useState, useEffect, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Card, Form} from 'react-bootstrap';
import {ModalElement} from './../ModalElement/index';
import {ButtonsTable} from './ButtonsTable';
import {InputsTable} from './InputsTable';
import {MainTable} from './MainTable';
import {deleteItem, editItem, saveItem} from './tableHelpers';
import {ChangeDataContext} from '../../../context/changeData/ChangeDataContext';
import {ascendingOrder} from '../../helpers/helpers';
import {HeaderTable} from './HeaderTable';

export const CategoryTable = ({
  categories,
  elementSelected,
  setElementSelected,
}) => {
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
      nombre: elementSelected.nombre || '',
      descripcion: elementSelected.description || '',
    },
  });

  useEffect(() => {
    reset({
      nombre: elementSelected.nombre || '',
      descripcion: elementSelected.description || '',
    });

    if (elementSelected._id) setEditButton(false);
  }, [reset, categories]);

  ascendingOrder(categories);

  const selectItem = (element) => {
    setType('editElement');
    setElement(element);
    setInteraction(!interaction);
  };

  const addElement = () => {
    setType('addElement');
    setElement({
      categoria: {
        _id: elementSelected._id,
        nombre: elementSelected.nombre,
      },
    });
    setInteraction(!interaction);
  };

  const handleSave = (data) => {
    // const textBody = deserialize(localStorage.getItem('content')) || '';
    const textBody = localStorage.getItem('content') || '';

    // data = {...data, descripcion: textBody[0]?.children[0]?.text};
    data = {...data, descripcion: textBody};

    saveItem(
      data,
      setEditForm,
      editForm,
      setMessageAlert,
      setDisplay,
      elementSelected._id,
      isNewData,
      setElementSelected,
    );
  };

  const handleDelete = () => {
    deleteItem(setEditForm, elementSelected._id, isNewData, setElementSelected);
  };

  const handleEdit = () => {
    editItem(setEditForm, editForm);
  };

  return (
    <div className="mb-5">
      <Card className="mt-1">
        <Form onSubmit={handleSubmit(handleSave)} autoComplete="off">
          <Card.Header className="colorHeaderTh">
            Informe de la categoría
          </Card.Header>
          <Card.Body>
            <InputsTable
              title={elementSelected.nombre}
              editForm={editForm}
              errors={errors}
              description={elementSelected.description}
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

      <HeaderTable title={elementSelected.nombre} addElement={addElement} />
      <MainTable categories={categories} selectItem={selectItem} />

      <ModalElement
        element={element}
        interaction={interaction}
        type={type}
        setType={setType}
      />
    </div>
  );
};
