import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StickyContainer } from 'react-sticky';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../pages/LandingPage';
import AboutUs from '../pages/AboutUs';
import Campaign from '../pages/Campaign';
import Article from '../pages/Article';
import Partners from '../pages/Partners';
import Sensors from '../pages/Sensors';
import Contact from '../pages/Contact';
import Encyclopedia from '../pages/Encyclopedia';
import NotFoundPage from '../pages/NotFound';

const Routes = () => (
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
export default Routes;
