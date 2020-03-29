/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './remember-user.module.scss';

const RememberUser = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <label
        htmlFor="remember"
        className="form__remember admin__form__remember"
      >
        <div className="form__remember__container">
          <input
            type="checkbox"
            aria-label="Zapamiętaj mnie"
            id="remember"
            name="remember"
            className="form__remember__checkbox"
            onClick={handleClick}
          />
          <div className="form__remember__checkbox--styled">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
        Zapamiętaj mnie
      </label>
    </>
  );
};

export default RememberUser;
