import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Hamburger from '../components/Hamburger';

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
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default Routes;
