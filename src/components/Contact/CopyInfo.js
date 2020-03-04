import React from 'react';
import PropTypes from 'prop-types';
import './copy-info.module.scss';

const ContactCopyInfo = ({ isCopied }) => {
  return (
    <span
      className={`contact__copied__info ${isCopied &&
        'contact__copied__info--isActive'}`}
    >
      Skopiowano do schowka
    </span>
  );
};
ContactCopyInfo.propTypes = {
  isCopied: PropTypes.bool.isRequired,
};
export default ContactCopyInfo;
