import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Link = ({ href, icon }) => {
  return (
    <a href={`/admin${href}`}>
      <FontAwesomeIcon icon={icon} />
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
