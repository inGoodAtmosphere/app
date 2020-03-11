import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './checkbox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Checkbox = ({ unit, units, setUnits }) => {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <div className="chart__checkbox">
      {unit.toUpperCase()}
      <button
        type="button"
        className={`chart__checkbox__btn chart__checkbox__btn__${unit}`}
        onClick={() => {
          setIsSelected(!isSelected);
          setUnits({ ...units, [unit]: !isSelected });
        }}
      >
        {isSelected && <FontAwesomeIcon icon={faCheck} />}
      </button>
    </div>
  );
};
Checkbox.propTypes = {
  unit: PropTypes.string.isRequired,
  setUnits: PropTypes.func.isRequired,
  units: PropTypes.shape({
    pm25: PropTypes.bool,
    pm10: PropTypes.bool,
    caqi: PropTypes.bool,
  }).isRequired,
};
export default Checkbox;
