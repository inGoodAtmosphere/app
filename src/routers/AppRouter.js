import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StickyContainer } from 'react-sticky';

import 'normalize.css';
import '../styles/index.scss';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import LandingPage from '../pages/LandingPage/LandingPage';
import AboutUs from '../pages/AboutUs/AboutUs';
import Campaign from '../pages/Campaign/Campaign';
import Article from '../pages/Article/Article';
import Partners from '../pages/Partners/Partners';
import Sensors from '../pages/Sensors/Sensors';
import Contact from '../pages/Contact/Contact';
import Encyclopedia from '../pages/Encyclopedia/Encyclopedia';
import NotFoundPage from '../pages/NotFound/NotFound';

const Routes = () => {
  const history = createBrowserHistory();
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <BrowserRouter>
      <StickyContainer>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/o-nas" component={AboutUs} />
            <Route path="/kampania" component={Campaign} exact />
            <Route path="/kampania/:header" component={Article} />
            <Route path="/partnerzy" component={Partners} />
            <Route path="/czujniki" component={Sensors} />
            <Route path="/kontakt" component={Contact} />
            <Route path="/encyklopedia" component={Encyclopedia} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </StickyContainer>
    </BrowserRouter>
  );
};
export default Routes;
