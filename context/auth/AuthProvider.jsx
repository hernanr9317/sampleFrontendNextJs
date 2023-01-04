import React, {useReducer} from 'react';
import {AuthContext, authReducer} from '.';

const Auth_INITIAL_STATE = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
