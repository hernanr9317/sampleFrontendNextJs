import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import Cookies from 'js-cookie';
import {getDataAxios} from './../../utils/axiosConfig';
import {AdminNavbar} from './../Admin/AdminNavbar';

export const AdminLayout = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  const router = useRouter();
  const tokenCookie = Cookies.get('token');
  const [auth, setAuth] = useState(false);

  const checkTokenAuth = async () => {
    const resp = await getDataAxios('/auth/validate-token/', tokenCookie);
    return resp;
  };

  useEffect(() => {
    try {
      checkTokenAuth().then((resp) => {
        if (!resp) {
          router.replace('/');
          setAuth(false);
        } else {
          setAuth(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!auth) return;

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <nav>
        <AdminNavbar />
      </nav>

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
