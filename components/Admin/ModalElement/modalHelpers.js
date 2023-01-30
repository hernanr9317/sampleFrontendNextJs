import Cookies from 'js-cookie';
import {
  postDataAxiosElement,
  putDataAxios,
  putImageAxios,
  deleteDataAxios,
} from '../../../utils/axiosConfig';

export const saveItemModal = async (
  data,
  type,
  element,
  isNewData,
  setAlertMessage,
  setEdit,
  setDisplay,
) => {
  try {
    const tokenCookie = Cookies.get('token');
    if (type === 'editElement') {
      await putDataAxios(`/productos/${element._id}`, data, tokenCookie);
    }

    if (type === 'addElement') {
      await postDataAxiosElement('/productos/', data, tokenCookie);
    }

    if (data.img && data.img.length > 0) {
      await putImageAxios(
        `/uploads/productos/${element._id}`,
        data.img[0],
        tokenCookie,
      );
    }
    isNewData();
    setAlertMessage('Cambios guardados');
    setEdit(true);
    setDisplay('');
  } catch (error) {}
};

export const deleteItemModal = async (
  element,
  isNewData,
  setAlertMessage,
  setEdit,
  setDisplay,
) => {
  try {
    const tokenCookie = Cookies.get('token');
    await deleteDataAxios(`/productos/${element._id}`, tokenCookie);
    isNewData();
    setAlertMessage('Eliminado exitosamente');
    setEdit(true);
    setDisplay('');
  } catch (error) {}
};
