import React from 'react';
import Carousel from 'nuka-carousel';
import Card from '../../components/AboutUsCard';
import breakpoints from '../../components/AboutUs/breakpoints';
import portraits from '../../components/AboutUs/portraits';
import useWindowWidth from '../../utils/hooks/useWindowDimensions';
import { people } from '../../../public/data/about-us.json';
import styles from './index.module.scss';

const AboutUs = () => {
  const { width } = useWindowWidth();
  const setBreakpoints = () => {
    if (width < 500) return breakpoints[0];
    if (width < 1024) return breakpoints[1];
    return breakpoints[2];
  };
  const currentBreakpoint = setBreakpoints();
  return (
    <main className={styles.wrapper}>
      <Carousel
        className={styles.slider}
        enableKeyboardControls
        cellSpacing={-40}
        slidesToShow={currentBreakpoint.slidesToShow}
        wrapAround
        transitionMode="scroll3d"
        renderCenterLeftControls={currentBreakpoint.renderCenterLeftControls}
        renderCenterRightControls={currentBreakpoint.renderCenterRightControls}
        renderBottomCenterControls={() => null}
      >
        {people.map((person, i) => (
          <Card key={person.name} value={{ ...person, image: portraits[i] }} />
        ))}
      </Carousel>
    </main>
  );
};

export default AboutUs;
