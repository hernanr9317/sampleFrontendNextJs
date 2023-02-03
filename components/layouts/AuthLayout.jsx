import Head from 'next/head';
import {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context';
import {useRouter} from 'next/router';

export const AuthLayout = ({children, title}) => {
  const router = useRouter();
  const {isLoggedIn} = useContext(AuthContext);
  const [calledReplace, setCalledReplace] = useState(false);

  useEffect(() => {
    try {
      if (calledReplace) {
        return;
      }
      if (isLoggedIn) {
        router.replace('/admin');
        setCalledReplace(true);
      }
    } catch (error) {}
  }, [isLoggedIn]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {!isLoggedIn && (
        <main
          style={{
            margin: 'auto',
            maxWidth: '2048px',
            padding: '0px 5px',
          }}
        >
          {children}
        </main>
      )}
    </>
  );
};
