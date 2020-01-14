import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Hamburger from '../components/Hamburger';
import AboutUs from '../components/AboutUs';
import Mapa from '../components/Map';
import Campaign from '../components/Campaign';
import Partners from '../components/Partners';
import Sensors from '../components/Sensors';
import Contact from '../components/Contact';

const Routes = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <BrowserRouter>
      <div className="container">
        <Header
          Hamburger={
            <Hamburger isActive={isActive} setIsActive={setIsActive} />
          }
        />
        <Menu isActive={isActive} />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/o-nas" component={AboutUs} />
          <Route path="/mapa" component={Mapa} />
          <Route path="/kampania" component={Campaign} />
          <Route path="/partnerzy" component={Partners} />
          <Route path="/czujniki" component={Sensors} />
          <Route path="/kontakt" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default Routes;
