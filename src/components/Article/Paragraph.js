import React from 'react';
import PropTypes from 'prop-types';
import './paragraph.module.scss';

const Paragraph = ({ content }) => {
  return <p className="article__paragraph">{content}</p>;
};

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
};
export default Paragraph;
