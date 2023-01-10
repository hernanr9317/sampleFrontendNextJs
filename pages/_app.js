import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import {AuthProvider} from '../context';

function MyApp({Component, pageProps}) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
