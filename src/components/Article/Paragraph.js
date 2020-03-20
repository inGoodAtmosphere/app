import React from 'react';
import PropTypes from 'prop-types';
import './paragraph.module.scss';

const Paragraph = ({ content }) =>
  content.split('\\n').map((text) => (
    <p className="article__paragraph" key={text.substr(0, 12)}>
      {text}
      <br />
    </p>
  ));
Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
};
export default Paragraph;
