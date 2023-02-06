import {deleteDataAxios, putDataAxios} from '../../../utils/axiosConfig';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import {sweetDelete, sweetError} from '../../sweetAlert';

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
  setElementSelected,
) => {
  setEditForm(!editForm);

  try {
    const tokenCookie = Cookies.get('token');
    const resp = await putDataAxios(`/categorias/${id}`, data, tokenCookie);
    setElementSelected(resp.data);
    isNewData();
    setMessageAlert('Cambios guardados');
    setDisplay('');

    setTimeout(() => {
      setDisplay('none');
    }, 3500);
  } catch (error) {}
};

export const deleteItem = (setEditForm, id, isNewData, setElementSelected) => {
  Swal.fire(sweetDelete).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const tokenCookie = Cookies.get('token');
        await deleteDataAxios(`/categorias/${id}`, tokenCookie);
        setElementSelected([]);
        isNewData();
        setEditForm(true);

        Swal.fire(
          'Categoría eliminada',
          'La categoría ah sido eliminada correctamente.',
          'success',
        );
      } catch (error) {
        Swal.fire(sweetError);
      }
    }
  });
};
