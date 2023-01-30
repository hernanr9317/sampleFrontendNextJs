import {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import {useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AiOutlineFieldNumber} from 'react-icons/ai';
import {FaFolderPlus} from 'react-icons/fa';
import {deleteDataAxios, putDataAxios} from '../../../utils/axiosConfig';
import {ModalElement} from './../ModalElement';
import {ButtonsTable} from './ButtonsTable';
import {InputsTable} from './InputsTable';

export const CategoryTable = ({categories, title, id, description}) => {
  const [display, setDisplay] = useState('none');
  const [messageAlert, setMessageAlert] = useState('');
  const [type, setType] = useState('');

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
  }, [reset, categories]);

  const [element, setElement] = useState('');
  const [interaction, setInteraction] = useState(false);
  const [editButton, setEditButton] = useState(true);
  const [editForm, setEditForm] = useState(true);

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

  useEffect(() => {
    if (id) setEditButton(false);
  }, [categories]);

  const handleEdit = () => {
    setEditForm(!editForm);
  };

  const onSaveChanges = async (data) => {
    setEditForm(!editForm);

    try {
      const tokenCookie = Cookies.get('token');
      await putDataAxios(`/categorias/${id}`, data, tokenCookie);
      setMessageAlert('Cambios guardados');
      setDisplay('');

      setTimeout(() => {
        setDisplay('none');
      }, 3500);
    } catch (error) {}
  };

  const handleDelete = async () => {
    try {
      const tokenCookie = Cookies.get('token');
      await deleteDataAxios(`/categorias/${id}`, tokenCookie);
      setEditForm(true);
      setMessageAlert('Categoria eliminada exitosamente');
      setDisplay('');

      setTimeout(() => {
        setDisplay('none');
      }, 3500);
    } catch (error) {}
  };

  return (
    <div>
      <Card className="mt-5">
        <Form onSubmit={handleSubmit(onSaveChanges)} autoComplete="off">
          <Card.Header>Informe de la categoria</Card.Header>
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

      <table className="table table-hover mt-3">
        <thead
          style={{
            background:
              'linear-gradient(90deg, rgba(44,80,99,1) 0%, rgba(1,1,1,1) 100%)',
            color: 'white',
          }}
        >
          <tr>
            <th scope="col">
              <AiOutlineFieldNumber size={'24px'} />
            </th>
            <th scope="col">Nombre</th>
            <th scope="col">Orden</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((element, index) => (
            <tr
              key={index}
              style={{cursor: 'pointer'}}
              onClick={() => selectItem(element)}
            >
              <th scope="row">{index + 1}</th>
              <td>{element.nombre}</td>
              <td>{element.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalElement element={element} interaction={interaction} type={type} />
    </div>
  );
};
