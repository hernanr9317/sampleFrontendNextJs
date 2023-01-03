import {useState, useEffect} from 'react';
import {getDataAxios} from '../utils/axiosConfig';

export const useGetData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataAxios(url).then((resp) => {
      setData(resp);
    });
  }, []);

  return data;
};
