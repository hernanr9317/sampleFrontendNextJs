import Head from 'next/head';
import {MainFooter} from '../MainFooter';
import {MainNavbar} from '../MainNavbar';

export const PublicLayout = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
  type,
  url,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta
          name="description"
          content="Busca estándares para la adquisición de equipamiento informático y obtén información sobre ciberseguridad."
        />

        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />

        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:description" content={pageDescription} />

        <meta property="og:url" content={url || ''} />

        {imageFullUrl && (
          <>
            <meta property="og:image" content={imageFullUrl} />
            <meta name="twitter:image" content={imageFullUrl} />
          </>
        )}

        {type && <meta property="og:type" content={type} />}
        {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
      </Head>

      <nav>
        <MainNavbar />
      </nav>

      <main
        style={{
          margin: 'auto',
          maxWidth: '2048px',
          minHeight: '400px',
          padding: '0px 0px',
        }}
      >
        {children}
      </main>

      <footer>
        <MainFooter />
      </footer>
    </>
  );
};
