/** @type {import('next').NextConfig} */
const {SubresourceIntegrityPlugin} = require('webpack-subresource-integrity');
const {createSecureHeaders} = require('next-secure-headers');
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: [
                "'self'",
                'https://www.youtube.com/',
                'https://www.facebook.com/',
                'https://e-seguridad.chaco.gob.ar/',
                'http://172.18.0.1/',
                'https://172.18.0.1/',
                // 'http://172.18.0.1:3080/',
              ],
              connectSrc: [
                "'self'", `${baseUrl}`, 
                "https://172.18.0.1", 
                "https://172.18.0.1:3080/api/categorias/", 
                "https://172.18.0.1:3080/api/categorias/"
              ],
              styleSrc: ["'self'", "'unsafe-inline'"],
              scriptSrc: ["'self'", "'unsafe-eval'"],
              imgSrc: ["'self'", 'https: data:'],
              baseUri: 'self',
              formAction: 'self',
              frameAncestors: true,
            },
          },
          frameGuard: 'deny',
          noopen: 'noopen',
          nosniff: 'nosniff',
          xssProtection: 'sanitize',
          //TODO:HAY QUE VOLVERLO A AGREGAR CUANDO SE SOLUCIONE EL HTTPS DEL LADO DEL BACKEND
          forceHTTPSRedirect: [
            true,
            {maxAge: 60 * 60 * 24 * 360, includeSubDomains: true},
          ],
          referrerPolicy: 'same-origin',
        }),
      },
    ];
  },
  webpack(config) {
    config.output.crossOriginLoading = 'anonymous';
    config.plugins.push(
      new SubresourceIntegrityPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: environment === 'PROD',
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
