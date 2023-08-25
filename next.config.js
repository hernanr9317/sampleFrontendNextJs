/** @type {import('next').NextConfig} */
const {createSecureHeaders} = require('next-secure-headers');

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
              defaultSrc: ["'self'"],
              connectSrc: ["'self'", 'http://localhost:3080'],
              styleSrc: ["'self'", "'unsafe-inline'"],
              scriptSrc: ["'self'", "'unsafe-eval'"],
              imgSrc: ["'self'", 'https: data:'],
              baseUri: 'self',
              formAction: 'self',
              frameAncestors: true,
            },
          },
        }),
      },
    ];
  },
};

module.exports = nextConfig;
