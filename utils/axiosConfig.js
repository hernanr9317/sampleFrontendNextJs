const axios = require('axios');

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getDataAxios = async (url) => {
  try {
    const response = await axios.get(`${baseUrl}${url}`);
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
        correo: data.email,
        password: data.password,
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
