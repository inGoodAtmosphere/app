/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './link.module.scss';

const NavLink = ({ href, icon }) => {
  return (
    <Link href={href}>
      <a className="admin__sidebar__link">
        <FontAwesomeIcon icon={icon} />
      </a>
    </Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    icon: PropTypes.array,
    iconName: PropTypes.string,
    prefix: PropTypes.string,
  }).isRequired,
};

export default NavLink;
