import React from 'react';
import Patrons from './Patrons';
import Icons from './Icons';
import Links from './Links';
import './index.module.scss';

const Footer = () => {
  return (
    <footer>
      <Icons />
      <Links />
      <Patrons />
    </footer>
  );
};

export default Footer;
