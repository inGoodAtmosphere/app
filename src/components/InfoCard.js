import React from 'react';
import PropTypes from 'prop-types';
// prettier-ignore
const InfoCard = ({
  className,
  header,
  content,
  link,
}) => (
  <div className={` card card__landing card__${className}`}>
    <h1 className="card__landing__header">{header}</h1>
    <p className="card__landing__description">{content}</p>
    <a className="card__landing__btn" href={`/${link.href}`}>
      {link.text}
    </a>
  </div>
);
InfoCard.defaultProps = {
  className: '',
};
InfoCard.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.shape({ href: PropTypes.string, text: PropTypes.string })
    .isRequired,
};
export default InfoCard;
