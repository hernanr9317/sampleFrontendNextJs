import {useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import Cookies from 'js-cookie';
import {getFile} from '../../../utils/axiosConfig';
import {DefaultBody} from './children/DefaultBody';
import {ArticleBody} from './children/ArticleBody';

export const ModalBody = ({
  getValues,
  element,
  edit,
  register,
  errors,
  categorias,
  type,
}) => {
  const viewFile = async () => {
    if (getValues().img) {
      const newId = Cookies.get('newId') || undefined;
      await getFile(
        `/uploads/productos/${element._id || newId}`,
        false,
        element.nombre,
      );
    }
  };

  const isNota = element.categoria.nombre === 'NOTA' ? true : false;

  const props = {
    errors: errors,
    categorias: categorias,
    type: type,
    register: register,
    edit: edit,
    element: element,
    viewFile: viewFile,
    isNota: isNota,
    getValues: getValues,
  };

  return (
    <Modal.Body>
      {!isNota && <DefaultBody {...props} />}

      {isNota && <ArticleBody {...props} />}
    </Modal.Body>
  );
};
