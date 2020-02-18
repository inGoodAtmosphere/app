import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import history from '../history/history';

import 'normalize.css';
import '../styles/index.scss';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import LandingPage from '../pages/LandingPage/LandingPage';
import AboutUs from '../pages/AboutUs/AboutUs';
import Campaign from '../pages/Campaign/Campaign';
import Article from '../pages/Article/Article';
import Sensors from '../pages/Sensors/Sensors';
import Contact from '../pages/Contact/Contact';
import Encyclopedia from '../pages/Encyclopedia/Encyclopedia';
import NotFoundPage from '../pages/NotFound/NotFound';
import CookiesBanner from '../components/CookiesBanner/CookiesBanner';

const Routes = () => {
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <Router history={history}>
      <CookiesProvider>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/o-nas" component={AboutUs} />
            <Route path="/kampania" component={Campaign} exact />
            <Route path="/kampania/:header" component={Article} />
            <Route path="/mierniki" component={Sensors} />
            <Route path="/kontakt" component={Contact} />
            <Route path="/encyklopedia" component={Encyclopedia} />
            <Route component={NotFoundPage} />
          </Switch>
          <CookiesBanner />
          <Footer />
        </div>
      </CookiesProvider>
    </Router>
  );
};
export default Routes;
