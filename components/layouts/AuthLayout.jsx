import Head from 'next/head';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../../context';
import {useRouter} from 'next/router';
import {useState} from 'react';

export const AuthLayout = ({children, title}) => {
  const router = useRouter();
  const {isLoggedIn} = useContext(AuthContext);
  const [redirectPage, setRedirectPage] = useState(false);

  useEffect(() => {
    try {
      if (isLoggedIn) {
        router.replace('/admin');
        setRedirectPage(true);
      } else {
        setRedirectPage(false);
      }
    } catch (error) {}
  }, [isLoggedIn]);

  if (redirectPage) return;

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
};
