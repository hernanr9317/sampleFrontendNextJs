import {useReducer} from 'react';
import {ChangeDataContext, changeDataReducer} from '.';

const ChangeData_INITIAL_STATE = {
  needUpload: false,
};

export const ChangeDataProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    changeDataReducer,
    ChangeData_INITIAL_STATE,
  );

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
