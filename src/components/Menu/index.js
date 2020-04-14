import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import styles from './index.module.scss';

const Menu = ({ isActive }) => {
  const anchors = ['Kampania', 'O nas', 'Encyklopedia', 'Mierniki', 'Kontakt'];
  return (
    <nav className={`${styles.menu} ${isActive ? styles.menuIsActive : ''}`}>
      {anchors.map((anchor) => (
        <Item key={anchor} anchor={anchor} isActive={isActive} />
      ))}
    </nav>
  );
};
Menu.defaultProps = {
  isActive: false,
};
Menu.propTypes = {
  isActive: PropTypes.bool,
};
export default Menu;
