import Head from 'next/head';
import {AdminNavbar} from './../Admin/AdminNavbar';
import {MainFooter} from './../MainFooter/index';

export const AdminLayout = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
        {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
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
      <MainFooter />
    </>
  );
};
