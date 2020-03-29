/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './checkbox.module.scss';

const Checkbox = ({ name }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <label htmlFor="checkbox" className="form__checkbox">
        <div className="form__checkbox__container">
          <input
            type="checkbox"
            name={name}
            className="form__checkbox__check"
            onClick={handleClick}
          />
          <div className="form__checkbox__check--styled">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
        Zapamiętaj mnie
      </label>
    </>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Checkbox;
