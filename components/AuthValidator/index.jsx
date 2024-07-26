import {useContext} from 'react';
import {AuthContext} from '../../context';
import LoginPage from '../../pages/auth/login';
import {useRouter} from 'next/router';
import {Loading} from './../Loading/index';

const withAuth = (Component) => {
  const Auth = (props) => {
    const {isLoggedIn} = useContext(AuthContext);
    const router = useRouter();

    if (isLoggedIn === false) {
      router.replace('/auth/login');
      return <LoginPage />;
    }

    if (isLoggedIn === undefined) {
      return <Loading />;
    }

    if (isLoggedIn === true) {
      return <Component {...props} />;
    }
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
