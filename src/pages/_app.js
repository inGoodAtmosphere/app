import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cookies from 'next-cookies';
import CookiesBanner from '../components/CookiesBanner/CookiesBanner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { initGA, logPageView } from '../utils/analytics';
import '../styles/index.scss';
import 'normalize.css';
import 'focus-visible';

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
