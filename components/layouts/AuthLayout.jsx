import Head from 'next/head';
import {useContext, useEffect} from 'react';
import {useRouter} from 'next/router';
import {AuthContext} from './../../context/auth/AuthContext';

export const AuthLayout = ({children, title}) => {
  const {isLoggedIn} = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/admin');
    }
  }, [isLoggedIn]);

  if (isLoggedIn === false) {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>

        <main
          style={{
            margin: 'auto',
            maxWidth: '2048px',
            padding: '0px 5px',
          }}
        >
          {children}
        </main>
      </>
    );
  }
};
