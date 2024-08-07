import {generatePath} from '../components/helpers/helpers';

const axios = require('axios');

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getDataAxios = async (url, token = '') => {
  try {
    const response = await axios.get(`${baseUrl}${url}`, {
      headers: {
        'x-token': token,
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const postDataAxios = async (url, data, token = '') => {
  try {
    const pathname = data?.nombre ? generatePath(data?.name) : undefined;
    const response = await axios
      .post(
        `${baseUrl}${url}`,
        {
          rol: data?.rol,
          nombre: data?.name,
          correo: data?.email,
          password: data?.password,
          pathname: pathname,
        },
        {
          headers: {
            'x-token': token,
          },
        },
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {
    return error;
  }
};

export const postDataAxiosElement = async (url, data, token = '') => {
  try {
    const pathname = data?.nombre ? generatePath(data?.nombre) : undefined;
    const response = await axios
      .post(
        `${baseUrl}${url}`,
        {
          nombre: data?.nombre,
          subtitle: data?.subtitulo,
          otherImgs: [data?.preview || '', data?.mainMedia || ''],
          categoria: data?.categoria,
          precio: data?.precio,
          description: data?.descripcion,
          pathname: pathname,
          tags: data?.tags,
        },
        {
          headers: {
            'x-token': token,
          },
        },
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {}
};

export const sendEmailCode = async (data) => {
  try {
    const response = await axios
      .post(`${baseUrl}/auth/forgot-password`, {
        correo: data?.email,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {}
};

export const changePasswordWithCode = async (data) => {
  try {
    const response = await axios
      .put(`${baseUrl}/auth/confirm-password`, {
        correo: data?.email,
        password: data?.password,
        code: data?.codigo,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {}
};

export const putDataAxios = async (url, data, token = '') => {
  const pathname = generatePath(data?.nombre);
  const response = await axios
    .put(
      `${baseUrl}${url}`,
      {
        rol: 'ADMIN_ROLE',
        nombre: data?.nombre,
        subtitle: data?.subtitulo,
        otherImgs: [data?.preview || '', data?.mainMedia || ''],
        correo: data?.correo,
        password: data?.password,
        categoria: data?.categoria,
        precio: data?.precio,
        description: data?.descripcion,
        pathname: pathname,
        tags: data?.tags,
      },
      {
        headers: {
          'x-token': token,
        },
      },
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const putImageAxios = async (url, data, token = '') => {
  try {
    await axios.put(
      `${baseUrl}${url}`,
      {archivo: data},
      {
        headers: {
          'x-token': token,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  } catch (error) {}
};

export const deleteDataAxios = async (url, token = '') => {
  try {
    const response = await axios
      .delete(`${baseUrl}${url}`, {
        headers: {
          'x-token': token,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
    return response;
  } catch (error) {}
};

export const getFile = async (url, isMobile, nombre) =>
  axios({
    url: `${baseUrl}${url}`,
    method: 'GET',
    responseType: 'blob',
  }).then((response) => {
    const url = window.URL.createObjectURL(
      new Blob([response.data], {type: 'application/pdf'}),
    );
    const link = document.createElement('a');
    if (isMobile) {
      link.href = url;
      link.download = `${nombre}.pdf`;
      link.setAttribute('download', `${nombre}.pdf`);
    } else {
      link.href = url;
      link.target = '_blank';
    }
    document.body.appendChild(link);
    link.click();
  });
