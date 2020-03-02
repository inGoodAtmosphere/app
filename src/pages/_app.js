import React, { useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';
import cookies from 'next-cookies';
import Head from 'next/head';
import CookiesBanner from '../components/CookiesBanner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { initGA, logPageView } from '../utils/analytics';
import '../styles/index.scss';
import 'normalize.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'focus-visible';

config.autoAddCss = false;

const App = ({ Component, isBannerOpen }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  initGA();
  return (
    <>
      <Head>
        <meta key="charset" charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap&subset=latin-ext"
          rel="preload"
          as="font"
          type="font/woff2"
        />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          key="description"
          name="description"
          content="inGoodAtmosphere ma na celu stworzenie przyjaznej atmosfery wolnej od smogu w całej Polsce!"
        />
        <link rel="icon" href="/icons/favicon-32.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="icons/favicon-180.png" />
        <meta key="theme-color" name="theme-color" content="#1C233C" />
        <meta
          key="apple-mobile-web-app-status-bar"
          name="apple-mobile-web-app-status-bar"
          content="#1c233c"
        />
        <meta
          key="og:url"
          property="og:url"
          content="https://www.ingoodatmosphere.com/"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:title" property="og:title" content="inGoodAtmosphere" />
        <meta
          key="og:description"
          property="og:description"
          content='Realizujemy projekt w ramach olimpiady "Zwolnieni z Teorii". Celem naszego projektu, jest uświadomienie ludzi o szkodliwości smogu i jego wpływu na nasze życie, organizm oraz niebezpieczeństwo dla środowiska.'
        />
        <meta
          key="og:image"
          property="og:image"
          content="https://ingoodatmosphere.com/img/opengraph-homepage.jpg"
        />
        <title>inGoodAtmosphere</title>
      </Head>
      <div className="container">
        <Header />
        <Component />
        <CookiesBanner isBannerOpen={isBannerOpen} />
        <Footer />
      </div>
    </>
  );
};
App.getInitialProps = ({ ctx }) => {
  return {
    isBannerOpen: cookies(ctx).isBannerOpen || '',
  };
};
App.propTypes = {
  Component: PropTypes.func.isRequired,
  isBannerOpen: PropTypes.string.isRequired,
};
export default App;
