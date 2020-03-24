import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './link.module.scss';

const Link = ({ href, icon }) => {
  return (
    <a href={`/admin${href}`} className="admin__sidebar__link">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    icon: PropTypes.array,
    iconName: PropTypes.string,
    prefix: PropTypes.string,
  }).isRequired,
};

export default Link;
