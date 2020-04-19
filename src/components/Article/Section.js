import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';

const Section = ({ subHeader, content, className }) => {
  return (
    <section>
      <h2>{subHeader}</h2>
      <Paragraph content={content} className={className} />
    </section>
  );
};

Section.propTypes = {
  subHeader: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Section;
