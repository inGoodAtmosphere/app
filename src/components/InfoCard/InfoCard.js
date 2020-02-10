import React from 'react';
import PropTypes from 'prop-types';
// prettier-ignore
const InfoCard = ({
  env, header, content, children, purpose, link,
}) => (
  <div className={` card ${env}__card ${env}__${purpose}`}>
    <div className="landing-page__card__content">
      <h1 className={`${env}__header`}>{header}</h1>
      <p className={` ${env}__description`}>{content}</p>
      {children[0]}
    </div>
    <a className="landing-page__svg__link" href={link}>{children[1]}</a>
  </div>
);
InfoCard.defaultProps = {
  children: <></>,
};
InfoCard.propTypes = {
  env: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  ),
};
export default InfoCard;
