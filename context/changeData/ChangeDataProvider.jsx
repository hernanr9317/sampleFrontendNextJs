import {useReducer, useEffect} from 'react';
import {ChangeDataContext, changeDataReducer} from '.';
import {getDataAxios} from '../../utils/axiosConfig';

const ChangeData_INITIAL_STATE = {
  needUpload: false,
  categories: [],
  deletedCategories: [],
  products: [],
  users: [],
};

export const ChangeDataProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    changeDataReducer,
    ChangeData_INITIAL_STATE,
  );

  useEffect(() => {
    try {
      const getCategories = async () => {
        const {data} = (await getDataAxios('/categorias/')) || {data: []};
        dispatch({
          type: '[dataChange] - Categories',
          payload: data,
        });
      };
      getCategories();
    } catch (error) {}
  }, [state.needUpload]);

  useEffect(() => {
    try {
      const getDeletedCategories = async () => {
        const {data} = (await getDataAxios(
          '/categorias/deleted-categories',
        )) || {data: []};
        dispatch({
          type: '[dataChange] - Deleted categories',
          payload: data,
        });
      };
      getDeletedCategories();
    } catch (error) {}
  }, [state.needUpload]);

  useEffect(() => {
    try {
      const getCategories = async () => {
        const {data} = (await getDataAxios('/categorias/')) || {data: []};
        dispatch({
          type: '[dataChange] - Categories',
          payload: data,
        });
      };
      getCategories();
    } catch (error) {}
  }, [state.needUpload]);

  useEffect(() => {
    try {
      const getProducts = async () => {
        const {data} = (await getDataAxios('/productos/')) || {data: []};
        data?.productos.reverse();
        dispatch({
          type: '[dataChange] - Products',
          payload: data,
        });
      };
      getProducts();
    } catch (error) {}
  }, [state.needUpload]);

  const isNewData = () => {
    dispatch({
      type: '[dataChange] - Need upload',
      payload: !state.needUpload,
    });
  };

  return (
    <ChangeDataContext.Provider
      value={{
        ...state,
        isNewData,
      }}
    >
      {children}
    </ChangeDataContext.Provider>
  );
};
