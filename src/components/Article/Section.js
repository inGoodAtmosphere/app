import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';

const Section = ({ subHeader, content }) => {
  return (
    <section key={subHeader}>
      <h2>{subHeader}</h2>
      <Paragraph content={content} />
    </section>
  );
};

Section.propTypes = {
  subHeader: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Section;
