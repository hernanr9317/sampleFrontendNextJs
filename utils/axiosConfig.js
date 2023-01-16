const axios = require('axios');

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getDataAxios = async (url, token = '') => {
  try {
    // const response = await axios.get(`${baseUrl}${url}`);
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

export const postDataAxios = async (url, data) => {
  try {
    const response = await axios
      .post(`${baseUrl}${url}`, {
        rol: data?.rol,
        nombre: data?.name,
        correo: data?.email,
        password: data?.password,
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
