import React, { useState } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactLink from './Link';
import ContactCopyInfo from './CopyInfo';
import { logEvent } from '../../utils/analytics';
import './copy.module.scss';

const Copy = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard
      .writeText('ingoodatmosphere@gmail.com')
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch((err) => logEvent('Clipboard', err));
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="contact__copied__button"
      >
        <ContactLink
          icon={faEnvelope}
          link="mailto:ingoodatmosphere@gmail.com"
          purpose="mail"
        />
      </button>
      <ContactCopyInfo isCopied={isCopied} />
    </>
  );
};

export default Copy;
