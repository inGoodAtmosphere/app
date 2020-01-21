import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import MapPage from '../components/MapPage';
import Campaign from '../components/Campaign';
import Partners from '../components/Partners';
import Sensors from '../components/Sensors';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';

const Routes = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <main className="content">
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/o-nas" component={AboutUs} />
          <Route path="/mapa" component={MapPage} />
          <Route path="/kampania" component={Campaign} exact />
          <Route path="/partnerzy" component={Partners} />
          <Route path="/czujniki" component={Sensors} />
          <Route path="/kontakt" component={Contact} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
export default Routes;
