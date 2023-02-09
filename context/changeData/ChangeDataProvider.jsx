import {useReducer, useEffect} from 'react';
import {ChangeDataContext, changeDataReducer} from '.';
import {getDataAxios} from '../../utils/axiosConfig';

const ChangeData_INITIAL_STATE = {
  needUpload: false,
  categories: [],
  products: [],
  users: [],
};

export const ChangeDataProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    changeDataReducer,
    ChangeData_INITIAL_STATE,
  );

  useEffect(() => {
    const getCategories = async () => {
      const {data} = await getDataAxios('/categorias/');
      dispatch({
        type: '[dataChange] - Categories',
        payload: data,
      });
    };
    getCategories();
  }, [state.needUpload]);

  useEffect(() => {
    const getProducts = async () => {
      const {data} = await getDataAxios('/productos/');
      dispatch({
        type: '[dataChange] - Products',
        payload: data,
      });
    };
    getProducts();
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
