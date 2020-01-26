import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../pages/LandingPage';
import AboutUs from '../pages/AboutUs';
import Map from '../pages/Map';
import Campaign from '../pages/Campaign';
import Partners from '../pages/Partners';
import Sensors from '../pages/Sensors';
import Contact from '../pages/Contact';
import NotFoundPage from '../pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/o-nas" component={AboutUs} />
        <Route path="/mapa" component={Map} />
        <Route path="/kampania" component={Campaign} exact />
        <Route path="/partnerzy" component={Partners} />
        <Route path="/czujniki" component={Sensors} />
        <Route path="/kontakt" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
export default Routes;
