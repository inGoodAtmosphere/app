import React from 'react';
import styles from './Bar.module.scss';

const Bar = () => {
  const breakpoints = ['<25', '26-50', '51-75', '76-100', '>100'];

  return (
    <div className={styles.wrapper}>
      <div className={styles.bar} />
      {breakpoints.map((breakpoint, i) => (
        <span
          className={styles.span}
          key={breakpoint}
          style={{ left: `${i * 25}%` }}
        >
          <span className={styles.line} />
          {breakpoint}
        </span>
      ))}
    </div>
  );
};

export default Bar;
