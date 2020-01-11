import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const Routes = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <BrowserRouter>
      <div className="container">
        <Header isActive={isActive} setActive={setIsActive} />
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
