import React, { useContext } from 'react';
import useWindowWidth from '../../utils/hooks/useWindowDimensions';
import Context from '../../utils/Context';
import styles from './Image.module.scss';

const Image = () => {
  const { link, Svg } = useContext(Context);
  const { width } = useWindowWidth();
  if (width >= 1024 && link.href === 'kontakt') return <Svg />;
  return (
    width >= 1024 && (
      <a
        href={link && link.href}
        className={styles.link}
        aria-label={link && link.href}
      >
        <Svg className={styles.svg} animated={styles[link.href]} />
      </a>
    )
  );
};

export default Image;
