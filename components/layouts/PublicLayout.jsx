import Head from 'next/head';
import {MainFooter} from '../MainFooter';
import {MainNavbar} from '../MainNavbar';

export const PublicLayout = ({
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
      </Head>

      <nav>
        <MainNavbar />
      </nav>

      <main
        style={{
          margin: 'auto',
          maxWidth: '2048px',
          minHeight: '400px',
          padding: '0px 5px',
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
