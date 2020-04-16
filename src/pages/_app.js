/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import CookiesBanner from '../components/CookiesBanner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GA_TRACKING_ID, logPageView } from '../utils/analytics';
import '../styles/base.scss';
import 'normalize.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'focus-visible';
import Sidebar from '../components/Admin/Sidebar';

const App = ({ Component, pageProps }) => {
  const checkProps = () =>
    'notifications' in pageProps ||
    'articles' in pageProps ||
    'users' in pageProps ||
    'sensors' in pageProps;
  const isAdminPanel = checkProps();
  const [isBannerOpen, setIsBannerOpen] = useState(Cookies.get('isBannerOpen'));
  const convertTitle = (title) => {
    if (title === '/') return 'inGoodAtmosphere';
    // [1] because / is [0] so first letter is [1]
    return title.charAt(1).toUpperCase() + title.slice(2).replace(/-/g, ' ');
  };
  const router = useRouter();
  const title = convertTitle(router.pathname);
  Router.events.on('routeChangeComplete', (url) => logPageView(url));

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
        <meta name="robots" content="index" />
        <link
          rel="canonical"
          href={`https://ingoodatmosphere.com${router.asPath}`}
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
          content={`https://ingoodatmosphere.com${router.asPath}`}
        />
        <meta key="fb:app_id" property="fb:app_id" content="695313747961456" />
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
          content="https://ingoodatmosphere.com/img/opengraph-icon.png"
        />
        <meta
          name="twitter:card"
          key="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:description"
          key="twitter:description"
          content='Realizujemy projekt w ramach olimpiady "Zwolnieni z Teorii". Celem naszego projektu, jest uświadomienie ludz o szkodliwości smogu i jego wpływu na nasze życie, organizm oraz niebezpieczeństwo dla środowiska.'
        />
        <meta
          name="twitter:title"
          key="twitter:title"
          content="inGoodAtmosphere"
        />
        <meta
          name="twitter:image"
          key="twitter:image"
          content="https://ingoodatmosphere.com/img/opengraph-icon.png"
        />
        <title key="title">{title}</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <div className="container">
        <Header />
        {isAdminPanel ? (
          <div className="admin__wrapper">
            <Sidebar />
            <Component {...pageProps} />
          </div>
        ) : (
          <Component {...pageProps} />
        )}
        {!('offline' in pageProps) && !isAdminPanel && <Footer />}
        {isBannerOpen === 'false' && !('offline' in pageProps) && (
          <CookiesBanner
            setIsBannerOpen={setIsBannerOpen}
            isBannerOpen={isBannerOpen}
          />
        )}
      </div>
    </>
  );
};
App.propTypes = {
  Component: PropTypes.func.isRequired,
};
export default App;
