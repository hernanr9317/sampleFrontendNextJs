import Head from 'next/head';
import {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context';
import {useRouter} from 'next/router';

export const AuthLayout = ({children, title}) => {
  const {isLoggedIn} = useContext(AuthContext);
  const router = useRouter();
  const [calledReplace, setCalledReplace] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      if (isLoggedIn) {
        if (calledReplace) return;
        router.replace('/admin');
        setCalledReplace(true);
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 750);
      }
    } catch (error) {}
  }, [isLoggedIn]);

  if (isLoading)
    return (
      <div
        className="d-flex justify-content-center"
        style={{marginTop: '350px'}}
      >
        <strong style={{marginRight: '10px'}}>Cargando...</strong>
        <div
          className="spinner-border ml-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );

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
