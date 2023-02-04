import {useContext} from 'react';
import {AuthContext} from '../../context';
import LoginPage from '../../pages/auth/login';

const withAuth = (Component) => {
  const Auth = (props) => {
    const {isLoggedIn} = useContext(AuthContext);

    // If user is not logged in, return login component
    if (isLoggedIn === false) {
      return <LoginPage />;
    }

    // If user is logged in, return original component
    if (isLoggedIn === true) {
      return <Component {...props} />;
    }
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
