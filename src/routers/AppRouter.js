import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const routes = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
export default routes;
