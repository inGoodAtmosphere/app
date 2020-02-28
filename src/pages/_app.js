import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CookiesProvider } from 'react-cookie';
import CookiesBanner from '../components/CookiesBanner/CookiesBanner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { initGA, logPageView } from '../utils/analytics';
import '../styles/index.scss';
import 'normalize.css';
import 'focus-visible';

const App = ({ Component }) => {
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
      <CookiesProvider>
        <div className="container">
          <Header />
          <Component />
          <CookiesBanner />
          <Footer />
        </div>
      </CookiesProvider>
    </>
  );
};
App.propTypes = {
  Component: PropTypes.func.isRequired,
};
export default App;
