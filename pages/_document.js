import Document, {Head, Html, Main, NextScript} from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
        {/* <meta http-equiv="Content-Security-Policy"
            content="default-src https://e-seguridad.chaco.gob.ar/;" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
