import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScroll from '../../utils/hooks/useScroll';
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';
import useFetch from '../../utils/hooks/useFetch';
import styles from './index.module.scss';

const Popup = ({ articleHeight }) => {
  const [isOpen, setIsOpen] = useState(true);
  const scroll = useScroll();
  const { height } = useWindowDimensions();
  const isScrolled = scroll > articleHeight - height / 1.9;
  const { data, isLoaded, error } = useFetch('/api/interestingFact');
  return (
    <div
      className={`${styles.card} ${
        isScrolled && isOpen && !error && !isLoaded
          ? styles.cardVisible
          : styles.cardInvisible
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className={styles.close}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h2 className={styles.header}>Czy wiesz, że...</h2>
      {!isLoaded && <p>{data.content}</p>}
    </div>
  );
};

Popup.propTypes = {
  articleHeight: PropTypes.number.isRequired,
};

export default Popup;
