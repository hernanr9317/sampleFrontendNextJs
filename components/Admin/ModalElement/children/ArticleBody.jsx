import {Form} from 'react-bootstrap';
import RichText from '../../../Slate/RichText';
import {ModalNav} from './../ModalNav';
import {useRouter} from 'next/router';
import dayjs from 'dayjs';

export const ArticleBody = ({
  element,
  edit,
  register,
  errors,
  isNota,
  getValues,
}) => {
  const router = useRouter();

  // Dividir el string en tags individuales
  const tagsArray = getValues()
    .tags?.split('#')
    .filter((tag) => tag?.trim() !== '');

  // Mapear cada tag a un elemento <span>
  const tagSpans = tagsArray?.map((tag, index) => (
    <span key={index} className="tag">
      {tag}
    </span>
  ));

  return (
    <>
      <ModalNav />

      <div
        className="media"
        style={
          router.query.modal === 'media' ? {display: ''} : {display: 'none'}
        }
      >
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="nombre"
            defaultValue={getValues().nombre}
            autoFocus
            disabled={edit}
            {...register('nombre', {
              required: 'Este campo es requerido',
              minLength: {value: 3, message: 'Mínimo 3 caracteres'},
            })}
          />
          <div className="invalid-feedback d-block">
            {errors.nombre?.message}
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="subtitulo">
          <Form.Label>Bajada</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            type="subtitulo"
            defaultValue={getValues().subtitulo}
            autoFocus
            disabled={edit}
            {...register('subtitulo')}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tags">
          <Form.Label>
            Tags <div className="tags-container">{tagSpans}</div>
          </Form.Label>
          <Form.Control
            type="tags"
            defaultValue={getValues().tags}
            autoFocus
            disabled={edit}
            {...register('tags')}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="preview">
          <Form.Label>Vista previa</Form.Label>
          <Form.Control
            type="preview"
            defaultValue={getValues().preview ? getValues().mainMedia : ''}
            autoFocus
            disabled={edit}
            {...register('preview')}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="mainMedia">
          <Form.Label>Media principal</Form.Label>
          <Form.Control
            type="mainMedia"
            defaultValue={getValues().mainMedia ? getValues().mainMedia : ''}
            autoFocus
            disabled={edit}
            {...register('mainMedia')}
          />
        </Form.Group>
        <div className="main-img">
          <img src={getValues().mainMedia} />
        </div>
        <Form.Group className="mb-3" controlId="url">
          <Form.Label>Url</Form.Label>
          <Form.Control
            type="url"
            defaultValue={
              getValues().pathname ? `/blog/${getValues().pathname}` : ''
            }
            //TODO: FALTA HACER QUE SE ACTUALICE LA URL SIN TENER QUE CERRAR Y VOLVER A ABRIR
            autoFocus
            disabled={true}
          />
        </Form.Group>
      </div>

      <div
        className="body-write"
        style={
          router.query.modal === 'write' ? {display: ''} : {display: 'none'}
        }
      >
        <div className="mb-3">
          <label>Cuerpo de la nota</label>
          <div className={edit ? 'disableDiv' : 'activeDiv'}>
            <RichText isNota={isNota} />
          </div>
        </div>
      </div>

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
    </>
  );
};
