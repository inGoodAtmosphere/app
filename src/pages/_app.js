import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactGA from 'react-ga';
// import dynamic from 'next/dynamic';
import CookiesBanner from '../components/CookiesBanner/CookiesBanner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles/index.scss';
import 'normalize.css';
// const serviceWorker = dynamic(() => import('../serviceWorker'));
import 'focus-visible';

const App = ({ Component }) => {
  ReactGA.initialize('UA-156974442-1');
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
// serviceWorker.register();

export default App;
