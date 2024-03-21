const webpack = require('./webpack.config');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['changenow.io'],
  },
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  webpack: (config) => {
    Object.assign(config.resolve.alias, webpack.resolve.alias);
    return config;
  },
  baseUrl: './src',
  pageExtensions: ['p.js'],
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/((?!calculator || ?!integrate).*)*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/pro',
        destination: '/pro/exchanges',
        permanent: true,
      },
    ];
  },
};
