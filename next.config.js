const withOffline = require('next-offline');
require('dotenv').config();

module.exports = withOffline({
  env: {
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
    CAPTCHA_SECRET_KEY: process.env.CAPTCHA_SECRET_KEY,
    CAPTCHA_SITE_KEY_PRODUCTION: process.env.CAPTCHA_SITE_KEY_PRODUCTION,
    CAPTCHA_SECRET_KEY_PRODUCTION: process.env.CAPTCHA_SECRET_KEY_PRODUCTION,
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
});
