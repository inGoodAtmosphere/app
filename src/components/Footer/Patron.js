import React from 'react';
import PropTypes from 'prop-types';
import './patron.module.scss';

const Patron = ({ name, link, img }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="footer__patrons__item"
    >
      <img src={img} alt={name} className="footer__patrons__item__image" />
    </a>
  );
};

Patron.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default Patron;
