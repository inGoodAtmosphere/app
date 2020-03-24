import React from 'react';
import {
  faBell,
  faHome,
  faNewspaper,
  faUsers,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import Link from './Link';
import './sidebar.module.scss';

const Sidebar = () => {
  return (
    <nav className="admin__sidebar">
      <Link href="/admin" icon={faHome} />
      <Link href="/admin/uzytkownicy" icon={faUsers} />
      <Link href="/admin/artykuly" icon={faNewspaper} />
      <Link href="/admin/mierniki" icon={faSmog} />
      <Link href="/admin/powiadomienia" icon={faBell} />
    </nav>
  );
};

export default Sidebar;
