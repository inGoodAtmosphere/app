import React from 'react';
import PropTypes from 'prop-types';
// prettier-ignore
const InfoCard = ({
  env, header, content, children, purpose,
}) => (
  <div className={` card ${env}__card ${env}__${purpose}`}>
    <h1 className={`${env}__header`}>{header}</h1>
    <p className={` ${env}__description`}>{content}</p>
    {children}
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
  children: PropTypes.element,
};
export default InfoCard;
