import React from 'react';
import {
  faBell,
  faNewspaper,
  faUsers,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import Link from './Link';
import './sidebar.module.scss';

const Sidebar = () => {
  return (
    <nav className="admin__sidebar">
      <Link href="/powiadomienia" icon={faBell} />
      <Link href="/uzytkownicy" icon={faUsers} />
      <Link href="/artykuly" icon={faNewspaper} />
      <Link href="/mierniki" icon={faSmog} />
    </nav>
  );
};

export default Sidebar;
