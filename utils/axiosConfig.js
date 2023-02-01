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
    console.error(error);
  }
};

export const postDataAxios = async (url, data, token = '') => {
  try {
    const response = await axios
      .post(
        `${baseUrl}${url}`,
        {
          rol: data?.rol,
          nombre: data?.name,
          correo: data?.email,
          password: data?.password,
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
        console.log(error);
      });
    return response;
  } catch (error) {}
};

export const postDataAxiosElement = async (url, data, token = '') => {
  try {
    const response = await axios
      .post(
        `${baseUrl}${url}`,
        {
          nombre: data?.nombre,
          categoria: data?.categoria,
          precio: data?.precio,
          description: data?.descripcion,
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
        console.log(error);
      });
    return response;
  } catch (error) {}
};

export const putDataAxios = async (url, data, token = '') => {
  try {
    const response = await axios
      .put(
        `${baseUrl}${url}`,
        {
          nombre: data?.nombre,
          categoria: data?.categoria,
          precio: data?.precio,
          description: data?.descripcion,
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
        console.log(error);
      });
    return response;
  } catch (error) {}
};

export const putImageAxios = async (url, data, token = '') => {
  await axios
    .put(
      `${baseUrl}${url}`,
      {archivo: data},
      {
        headers: {
          'x-token': token,
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then(function (response) {
      console.log(response);
    });
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
        console.log(error);
      });
    return response;
  } catch (error) {}
};

export const getFile = async (url, nombre) =>
  axios({
    url: `${baseUrl}${url}`,
    method: 'GET',
    responseType: 'blob',
    onDownloadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total,
      );
      // console.log(percentCompleted);
    },
  }).then((response) => {
    const url = window.URL.createObjectURL(
      new Blob([response.data], {type: 'application/pdf'}),
    );
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    // link.download = `${nombre}.pdf`;
    // link.setAttribute('download', `${nombre}.pdf`);
    document.body.appendChild(link);
    link.click();
  });
