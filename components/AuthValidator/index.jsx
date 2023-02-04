import {useContext} from 'react';
import {AuthContext} from '../../context';
import HomeScreen from './../../pages/index';

const withAuth = (Component) => {
  const Auth = (props) => {
    const {isLoggedIn} = useContext(AuthContext);

    // If user is not logged in, return login component
    if (!isLoggedIn) {
      return <HomeScreen />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
