import React from 'react';
import PropTypes from 'prop-types';
import './image.module.scss';

const Image = ({ className }) => {
  const imgPath = '/img/sensors/sensor-';
  return (
    <div className={`card sensors__image__bg ${className}`}>
      <img
        srcSet={`${imgPath}420.png 420w, ${imgPath}640.png 640w, ${imgPath}1280.png 1280w, ${imgPath}1920.png 1920w`}
        src={`${imgPath}640.png`}
        alt="Sensor"
        className="sensors__image"
      />
      <span className="sensors__image__text">
        Nasz czujnik pozwala mierzyć pył zawieszony w powietrzu
        <br />
        {className && 'Kliknij i dowiedz się więcej'}
      </span>
    </div>
  );
};
Image.defaultProps = {
  className: '',
};
Image.propTypes = {
  className: PropTypes.string,
};
export default Image;
