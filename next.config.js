const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withSass({
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
    exportPathMap() {
      return {
        '/': { page: '/' },
        '/kampania': { page: '/kampania' },
        '/kampania/Naturalne-wskazniki-zanieczyszczenia-powietrza': {
          page: '/kampania/Naturalne-wskazniki-zanieczyszczenia-powietrza',
        },
        '/o-nas': { page: '/o-nas' },
        '/encyklopedia': { page: '/encyklopedia' },
        '/mierniki': { page: '/mierniki' },
        '/kontakt': { page: '/kontakt' },
        '/polityka-prywatnosci': { page: '/polityka-prywatnosci' },
      };
    },
    target: 'server',
  }),
);
