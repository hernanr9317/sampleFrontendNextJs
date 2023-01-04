import {AuthState} from './';

// type AuthActionType = {type: '[Auth] - Login'};

export const authReducer = (state, action) => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        isLoggedIn: true,
        use: action.payload,
      };

    case '[Auth] - Logout':
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };

    default:
      return state;
  }
};
