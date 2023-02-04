import React, {useReducer, useEffect} from 'react';
import {AuthContext, authReducer} from '.';
import {postDataAxios, getDataAxios} from '../../utils/axiosConfig';
import Cookies from 'js-cookie';

const Auth_INITIAL_STATE = {
  isLoggedIn: undefined,
  user: undefined,
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const tokenCookie = Cookies.get('token');

      // if (!tokenCookie) return;

      if (!tokenCookie) {
        dispatch({type: '[Auth] - Logout'});
        return;
      }

      const resp = await getDataAxios('/auth/validate-token/', tokenCookie);

      const {
        data: {token, user},
      } = resp;

      Cookies.set('token', token);

      dispatch({type: '[Auth] - Login', payload: user});
    } catch (error) {
      Cookies.remove('token');
    }
  };

  const loginUser = async (data) => {
    try {
      const resp = await postDataAxios('/auth/login/', data);
      Cookies.set('token', resp.data.token);
      dispatch({
        type: '[Auth] - Login',
        payload: {
          correo: resp.data.usuario.correo,
          nombre: resp.data.usuario.nombre,
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  };

  const logOut = async () => {
    try {
      dispatch({type: '[Auth] - Logout'});
      Cookies.remove('token');
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
        logOut,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
