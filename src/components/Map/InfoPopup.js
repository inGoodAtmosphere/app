import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import CloseButton from './CloseButton';
import Context from '../../utils/Context';

const InfoPopup = ({ switchWindow }) => {
  const { data, error } = useContext(Context);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        switchWindow();
      }}
    >
      <div className="marker__info-window">
        <CloseButton switchWindow={switchWindow} />
        {/* <h2>{data.title}</h2> */}
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            <p>{data.pm10}</p>
            <p>{data.pm25}</p>
          </>
        )}
      </div>
    </OutsideClickHandler>
  );
};

InfoPopup.propTypes = {
  switchWindow: PropTypes.func.isRequired,
};

export default InfoPopup;
