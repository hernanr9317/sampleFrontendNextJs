import Head from 'next/head';

export const AuthLayout = ({children, title}) => {
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
