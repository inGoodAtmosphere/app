const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');
require('dotenv').config();

module.exports = withOffline(
  withCSS(
    withSass({
      env: {
        MAP_API_KEY: process.env.MAP_API_KEY,
        GEOCODING_API_KEY: process.env.GEOCODING_API_KEY,
      },
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
    }),
  ),
);
