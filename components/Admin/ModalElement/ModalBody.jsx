import {Form, Modal} from 'react-bootstrap';
import dayjs from 'dayjs';
import {getFile} from '../../../utils/axiosConfig';
import RichText from './../../Slate/RichText';

export const ModalBody = ({
  element,
  edit,
  register,
  errors,
  categorias,
  type,
}) => {
  const viewFile = async () => {
    await getFile(`/uploads/productos/${element._id}`, element.nombre);
  };

  const isNota = element.categoria.nombre === 'NOTA' ? true : false;

  return (
    <Modal.Body>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Título</Form.Label>
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

      {!isNota && (
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
      )}

      {!isNota && (
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
      )}

      {!isNota && (
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
      )}

      {!isNota && type === 'editElement' && (
        <>
          <div className="fileLabel" onClick={viewFile}>
            Archivo
          </div>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Actualizar archivo pdf</Form.Label>
            <Form.Control type="file" disabled={edit} {...register('img')} />
          </Form.Group>
        </>
      )}

      {/* TODO: SI ES DE TIPO NOTA TIENE QUE APARECE ESTE EN VEZ DE EL DE ARRIBA  */}
      {isNota && (
        <>
          <Form.Group className="mb-3" controlId="subtitulo">
            <Form.Label>Bajada</Form.Label>
            <Form.Control
              type="subtitulo"
              defaultValue={element?.subtitulo}
              autoFocus
              disabled={edit}
              {...register('subtitulo')}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="preview">
            <Form.Label>Vista previa</Form.Label>
            <Form.Control
              type="preview"
              defaultValue={element?.otherImgs[0] || ''}
              autoFocus
              disabled={edit}
              {...register('preview')}
            />
          </Form.Group>
          <div className="mb-3">
            <label>Redactar</label>
            <div className={edit ? 'disableDiv' : 'activeDiv'}>
              <RichText newData={element?.description} isNota={isNota} />
            </div>
          </div>
        </>
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
