import React from 'react';
import PropTypes from 'prop-types';
// prettier-ignore
const InfoCard = ({
  className,
  header,
  content,
  link,
}) => (
  <div className={` card ${className === 'encyclopedia__card' ? '' : 'card__landing'} card__${className}`}>
    <h1 className={`${className === 'encyclopedia__card' ? '' : 'card__landing'}__header`}>{header}</h1>
    <p className={`${className === 'encyclopedia__card' ? '' : 'card__landing'}__description`}>{content}</p>
    {
      // prettier-ignore
    }
    {link.text
    && (
      <a className="card__landing__btn" href={`/${link.href}`}>
        {link.text}
      </a>
    )}
  </div>
);
InfoCard.defaultProps = {
  className: '',
  link: {},
};
InfoCard.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.shape({ href: PropTypes.string, text: PropTypes.string }),
};
export default InfoCard;
