import React, {useReducer, useEffect} from 'react';
import {AuthContext, authReducer} from '.';
import {postDataAxios} from '../../utils/axiosConfig';
import Cookies from 'js-cookie';

const Auth_INITIAL_STATE = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  // useEffect(() => {
  //   checkToken();
  // }, []);

  // const checkToken = async () => {};

  const loginUser = async (data) => {
    try {
      const resp = await postDataAxios('/auth/login/', data);
      Cookies.set('token', resp.data.token);
      dispatch({type: '[Auth] - Login', payload: resp.data.usuario.correo});
      return true;
    } catch (error) {
      return false;
    }
  };

  const registerUser = async (data) => {
    try {
      if (data.key === process.env.NEXT_PUBLIC_API_KEY) {
        const dataWithRol = {...data, rol: 'ADMIN_ROLE'};

        const resp = await postDataAxios('/usuarios/', dataWithRol);

        return resp;
      }
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginUser,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
