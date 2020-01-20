/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useContext } from 'react';
import { withGetScreen } from 'react-getscreen';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import mapContext from '../contexts/map-context';

const Marker = ({ title, data, data: { measurement }, isMobile }) => {
  const [color, setColor] = useState('');
  const [show, setShow] = useState(false);
  const { dispatch } = useContext(mapContext);
  const switchWindow = () => {
    setShow(!show);
  };
  const handleClick = () => {
    switchWindow();
    dispatch({ type: 'SET_SELECTED_SENSOR', measurement });
  };
  useEffect(() => {
    if (measurement[0].pm25 < 10) setColor('#44A368');
    else if (measurement[0].pm25 < 20) setColor('#C1E080');
    else if (measurement[0].pm25 < 50) setColor('#C19330');
    else if (measurement[0].pm25 < 100) setColor('#E1625A');
    else if (measurement[0].pm25 >= 100) setColor('#7C1D7A');
    else setColor('#999999');
  }, [measurement]);
  return (
    <>
      <div
        onClick={handleClick}
        className="marker"
        // prettier-ignore
        style={{
          backgroundColor: color,
          boxShadow: ` 0px 0px ${color !== '#999999'
          && '28px 26px'} ${color}`,
        }}
        title={title}
      />
      {isMobile() ? (
        <div>sad</div>
      ) : (
        show && (
          <OutsideClickHandler
            onOutsideClick={() => {
              switchWindow();
            }}
          >
            <div className="marker__info-window">
              <button
                type="button"
                className="marker__info-window__close"
                onClick={handleClick}
              >
                X
              </button>
              <h2>{title}</h2>
              <p>{measurement[0].pm10}</p>
              <p>{measurement[0].pm25}</p>
            </div>
          </OutsideClickHandler>
        )
      )}
    </>
  );
};
Marker.propTypes = {
  data: PropTypes.shape({
    pm25: PropTypes.number,
    pm10: PropTypes.number,
  }).isRequired,
  title: PropTypes.string.isRequired,
  isMobile: PropTypes.func.isRequired,
};
export default withGetScreen(Marker);
