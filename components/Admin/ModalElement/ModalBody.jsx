import {Form, Modal} from 'react-bootstrap';
import dayjs from 'dayjs';

export const ModalBody = ({
  element,
  edit,
  register,
  errors,
  categorias,
  type,
}) => {
  return (
    <Modal.Body>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="nombre"
          defaultValue={element?.nombre}
          autoFocus
          disabled={edit}
          {...register('nombre', {
            required: 'Este campo es requerido',
            minLength: {value: 3, message: 'Mínimo 3 caracteres'},
          })}
        />
        <div className="invalid-feedback d-block">{errors.nombre?.message}</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
          type="categoria"
          defaultValue={element?.categoria?.nombre}
          disabled={type === 'addElement' ? true : edit}
          {...register('categoria', {
            required: 'Este campo es requerido',
          })}
        >
          {categorias?.categorias?.map((catElement, index) => (
            <option
              key={index}
              value={catElement?._id}
              defaultValue={catElement?.nombre}
            >
              {catElement?.nombre}
            </option>
          ))}
        </Form.Select>
        <div className="invalid-feedback d-block">
          {errors.categoria?.message}
        </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="order">
        <Form.Label>Orden</Form.Label>
        <Form.Control
          defaultValue={element?.precio}
          type="number"
          min="0"
          disabled={edit}
          {...register('precio')}
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
          {...register('descripcion', {
            required: 'Este campo es requerido',
          })}
        />
        <div className="invalid-feedback d-block">
          {errors.descripcion?.message}
        </div>
      </Form.Group>

      {type === 'editElement' && (
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Subir archivo</Form.Label>
          <Form.Control type="file" disabled={edit} {...register('img')} />
        </Form.Group>
      )}

      <div className="mt-4 modalDate">
        {element?.updatedAt && (
          <>
            Actualizado el{' '}
            <span className="date">
              {dayjs(element?.updatedAt).format('DD/MM/YYYY')}
            </span>{' '}
          </>
        )}
        {element?.usuario?.nombre && (
          <>
            por <span className="author">{element?.usuario?.nombre}</span>{' '}
          </>
        )}
      </div>
    </Modal.Body>
  );
};
