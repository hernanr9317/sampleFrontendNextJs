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
