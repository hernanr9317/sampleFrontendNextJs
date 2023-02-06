import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import {
  postDataAxiosElement,
  putDataAxios,
  putImageAxios,
  deleteDataAxios,
} from '../../../utils/axiosConfig';
import {sweetDelete, sweetError} from '../../sweetAlert';

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

export const deleteItemModal = (
  setShow,
  element,
  isNewData,
  setAlertMessage,
  setEdit,
) => {
  Swal.fire(sweetDelete).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const tokenCookie = Cookies.get('token');
        await deleteDataAxios(`/productos/${element._id}`, tokenCookie);
        isNewData();
        setAlertMessage('Eliminado exitosamente');
        setEdit(true);
        setShow(false);

        Swal.fire(
          'Elemento eliminado',
          'El elemento ah sido eliminada correctamente.',
          'success',
        );
      } catch (error) {
        Swal.fire(sweetError);
      }
    }
  });
};
