import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import {AuthProvider, ChangeDataProvider} from '../context';

function MyApp({Component, pageProps}) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <AuthProvider>
      <ChangeDataProvider>
        <Component {...pageProps} />
      </ChangeDataProvider>
    </AuthProvider>
  );
}

export default MyApp;
