import React from 'react';
import PropTypes from 'prop-types';
import useWindowWidth from '../../hooks/useWindowDimensions';
import styles from './Item.module.scss';

const Item = ({ isActive, anchor }) => {
  const { width } = useWindowWidth();

  const link = anchor.replace(' ', '-').toLowerCase();
  return (
    <a
      href={`/${link}`}
      className={styles.item}
      tabIndex={isActive || width > 1024 ? 0 : -1}
    >
      {anchor}
    </a>
  );
};
Item.propTypes = {
  isActive: PropTypes.bool.isRequired,
  anchor: PropTypes.string.isRequired,
};

export default Item;
