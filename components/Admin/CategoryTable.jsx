import {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import {useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {ModalElement} from './ModalElement';
import {putDataAxios} from '../../utils/axiosConfig';

export const CategoryTable = ({categories, title, id, description}) => {
  const [display, setDisplay] = useState('none');

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nombre: title,
      descripcion: description,
    },
  });

  useEffect(() => {
    reset({
      nombre: title,
      descripcion: description,
    });
  }, [reset, categories]);

  const [element, setElement] = useState('');
  const [interaction, setInteraction] = useState(false);
  const [editButton, setEditButton] = useState(true);
  const [editForm, setEditForm] = useState(true);

  const selectItem = (element) => {
    setElement(element);
    setInteraction(!interaction);
  };

  useEffect(() => {
    if (categories?.length > 0) setEditButton(false);
  }, [categories]);

  const handleEdit = () => {
    setEditForm(!editForm);
  };

  const onSaveChanges = async (data) => {
    setEditForm(!editForm);

    try {
      const tokenCookie = Cookies.get('token');
      await putDataAxios(`/categorias/${id}`, data, tokenCookie);
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
            <div className="mb-3">
              <input
                className="form-control"
                id="exampleFormControlInput1"
                defaultValue={title}
                disabled={editForm}
                {...register('nombre', {
                  required: 'Este campo es requerido',
                  minLength: {value: 3, message: 'Mínimo 3 caracteres'},
                })}
              />
              <div className="invalid-feedback d-block">
                {errors.nombre?.message}
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                defaultValue={description}
                disabled={editForm}
                {...register('descripcion', {
                  required: 'Este campo es requerido',
                  minLength: {value: 3, message: 'Mínimo 3 caracteres'},
                })}
              ></textarea>
              <div className="invalid-feedback d-block">
                {errors.descripcion?.message}
              </div>
            </div>
            <Button
              variant="primary"
              onClick={handleEdit}
              disabled={editButton}
            >
              Editar
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={editForm}
              style={{marginLeft: '5px'}}
            >
              Guardar
            </Button>
          </Card.Body>
          <Alert variant="success" style={{display: display, margin: '5px'}}>
            Cambios guardados
          </Alert>
        </Form>
      </Card>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
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
      <ModalElement element={element} interaction={interaction} />
    </div>
  );
};
