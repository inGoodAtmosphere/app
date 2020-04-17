const withOffline = require('next-offline');
const path = require('path');
require('dotenv').config();

module.exports = withOffline({
  generateSw: false,
  workboxOpts: {
    swSrc: './service-worker.js',
    swDest: path.resolve('./.next/static/service-worker.js'),
  },
  env: {
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
    CAPTCHA_SECRET_KEY: process.env.CAPTCHA_SECRET_KEY,
    CAPTCHA_SITE_KEY_PRODUCTION: process.env.CAPTCHA_SITE_KEY_PRODUCTION,
    CAPTCHA_SECRET_KEY_PRODUCTION: process.env.CAPTCHA_SECRET_KEY_PRODUCTION,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
  // experimental: {
  //   async rewrites() {
  //     return [
  //       {
  //         source: '/service-worker.js',
  //         destination: '/_next/static/service-worker.js',
  //       },
  //     ];
  //   },
  // },
});
