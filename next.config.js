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
              ],
              connectSrc: ["'self'", `${baseUrl}`],
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
