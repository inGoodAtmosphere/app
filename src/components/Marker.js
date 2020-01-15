/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { withGetScreen } from 'react-getscreen';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';

const Marker = ({ title, data: { pm25 }, isMobile }) => {
  const [color, setColor] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  useEffect(() => {
    if (pm25 < 10) setColor('#44A368');
    else if (pm25 < 20) setColor('#C1E080');
    else if (pm25 < 50) setColor('#C19330');
    else if (pm25 < 100) setColor('#E1625A');
    else if (pm25 >= 100) setColor('#7C1D7A');
    else setColor('#999999');
  }, [pm25]);
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
              handleClick();
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                background: '#f11',
              }}
            >
              <button type="button" onClick={handleClick}>
                X
              </button>
              <h2>{title}</h2>
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
  }).isRequired,
  title: PropTypes.string.isRequired,
  isMobile: PropTypes.func.isRequired,
};
export default withGetScreen(Marker);
