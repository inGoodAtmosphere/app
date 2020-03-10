import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './checkbox.module.scss';

const Checkbox = ({ unit, units, setUnits }) => {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <label htmlFor={unit} className="chart__checkbox__label">
      {unit.toUpperCase()}
      <input
        className="chart__checkbox"
        type="checkbox"
        name={unit}
        id={unit}
        checked={isSelected}
        onChange={() => {
          setIsSelected(!isSelected);
          setUnits({ ...units, [unit]: !isSelected });
        }}
      />
    </label>
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
