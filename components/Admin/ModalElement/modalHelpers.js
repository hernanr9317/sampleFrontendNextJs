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
  setType,
) => {
  try {
    const tokenCookie = Cookies.get('token');
    const newId = Cookies.get('newId') || undefined;
    if (type === 'editElement') {
      await putDataAxios(
        `/productos/${element._id || newId}`,
        data,
        tokenCookie,
      ).then((resp) => {
        if (resp.status === 200) {
          setAlertMessage({
            msg: 'Cambios guardados',
            variant: 'success',
          });
        } else {
          const formatMsg = resp.response.data.msg.replace(
            /\bproducto\b/g,
            'elemento',
          );
          setAlertMessage({
            msg: formatMsg || 'Error al crear la nueva categoría',
            variant: 'danger',
          });
        }
      });
    }

    if (type === 'addElement') {
      await postDataAxiosElement('/productos/', data, tokenCookie).then(
        (resp) => {
          if (resp.status === 201) {
            Cookies.set('newId', resp.data._id);
            setAlertMessage({
              msg: 'Cambios guardados',
              variant: 'success',
            });
            setType('editElement');
          } else {
            const formatMsg = resp.response.data.msg.replace(
              /\bproducto\b/g,
              'elemento',
            );
            setAlertMessage({
              msg: formatMsg || 'Error al crear la nueva categoría',
              variant: 'danger',
            });
          }
        },
      );
    }

    if (data.img && data.img.length > 0) {
      await putImageAxios(
        `/uploads/productos/${element._id || newId}`,
        data.img[0],
        tokenCookie,
      );
    }
    isNewData();
    setEdit(true);
    setDisplay('');
  } catch (error) {
    return error;
  }
};

export const deleteItemModal = (
  setShow,
  element,
  isNewData,
  setAlertMessage,
  setEdit,
  router,
) => {
  Swal.fire(sweetDelete).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const tokenCookie = Cookies.get('token');
        const newId = Cookies.get('newId') || undefined;

        if (element?.img?.length > 0) {
          await deleteDataAxios(
            `/uploads/productos/${element._id || newId}`,
            tokenCookie,
          );
        }

        await deleteDataAxios(
          `/productos/${element._id || newId}`,
          tokenCookie,
        );

        isNewData();
        setAlertMessage('Eliminado exitosamente');
        setEdit(true);
        setShow(false);

        Swal.fire(
          'Elemento eliminado',
          'El elemento ah sido eliminada correctamente.',
          'success',
        );

        router.push(
          {
            pathname: router.pathname,
            query: {},
          },
          undefined,
          {scroll: false},
        );
      } catch (error) {
        Swal.fire(sweetError);
      }
    }
  });
};
