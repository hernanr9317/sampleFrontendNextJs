import {useEffect, useContext} from 'react';
import {Form} from 'react-bootstrap';
import RichText from '../../../Slate/RichText';
import {ModalNav} from '../modalNav';
import {useRouter} from 'next/router';
import dayjs from 'dayjs';

export const ArticleBody = ({element, edit, register, errors, isNota}) => {
  const router = useRouter();

  //FALTA ARREGLAR QUE REFRESQUE CUANDO SE GUARDA UN MEDIA PRINCIPAL NUEVO

  return (
    <>
      <ModalNav />

      {router.query.modal === 'media' && (
        <div className="media">
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
            <div className="invalid-feedback d-block">
              {errors.nombre?.message}
            </div>
          </Form.Group>

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
              defaultValue={element?.otherImgs ? element?.otherImgs?.[0] : ''}
              autoFocus
              disabled={edit}
              {...register('preview')}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="mainMedia">
            <Form.Label>Media principal</Form.Label>
            <Form.Control
              type="mainMedia"
              defaultValue={element?.otherImgs ? element?.otherImgs?.[1] : ''}
              autoFocus
              disabled={edit}
              {...register('mainMedia')}
            />
          </Form.Group>
          <div className="main-img">
            <img src={element?.otherImgs ? element?.otherImgs?.[1] : ''} />
          </div>
        </div>
      )}

      {router.query.modal === 'write' && (
        <div className="body-write">
          <div className="mb-3">
            <label>Cuerpo de la nota</label>
            <div className={edit ? 'disableDiv' : 'activeDiv'}>
              <RichText newData={element?.description} isNota={isNota} />
            </div>
          </div>
        </div>
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
    </>
  );
};
