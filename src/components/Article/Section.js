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

Section.defaultProps = {
  subHeader: '',
};
Section.propTypes = {
  subHeader: PropTypes.string,
  content: PropTypes.string.isRequired,
};
export default Section;
