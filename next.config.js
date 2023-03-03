/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  i18n: {
    locales: ['esp'],
    defaultLocale: 'esp',
  },
};

module.exports = nextConfig;
