import {deleteDataAxios, putDataAxios} from '../../../utils/axiosConfig';
import Cookies from 'js-cookie';

export const editItem = (setEditForm, editForm) => {
  setEditForm(!editForm);
};

export const saveItem = async (
  data,
  setEditForm,
  editForm,
  setMessageAlert,
  setDisplay,
  id,
  isNewData,
  setNewTitle,
  setNewDescription,
) => {
  setEditForm(!editForm);

  try {
    const tokenCookie = Cookies.get('token');
    await putDataAxios(`/categorias/${id}`, data, tokenCookie);
    isNewData();
    setMessageAlert('Cambios guardados');
    setDisplay('');
    setNewTitle(data.nombre);
    setNewDescription(data.descripcion);

    setTimeout(() => {
      setDisplay('none');
    }, 3500);
  } catch (error) {}
};

export const deleteItem = async (
  setEditForm,
  setMessageAlert,
  setDisplay,
  id,
  isNewData,
) => {
  try {
    const tokenCookie = Cookies.get('token');
    await deleteDataAxios(`/categorias/${id}`, tokenCookie);
    isNewData();
    setEditForm(true);
    setMessageAlert('Categoria eliminada exitosamente');
    setDisplay('');

    setTimeout(() => {
      setDisplay('none');
    }, 3500);
  } catch (error) {}
};
