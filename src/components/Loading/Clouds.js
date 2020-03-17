import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Cloud from './Cloud';
import Kitty from './Kitty';
import './clouds.module.scss';

const Clouds = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const elements = wrapper.current;
    const clouds = elements.querySelectorAll('svg');
    const kitty = elements.querySelector('img');
    const tl = gsap.timeline({
      defaults: { ease: 'slow(0.1, 0.4, false)' },
      repeat: -1,
    });
    tl.fromTo([...clouds], { scale: 0.9 }, { scale: 1.1, stagger: 0.2 }).fromTo(
      [...clouds],
      { scale: 1.1 },
      {
        scale: 0.9,
        stagger: 0.2,
        reversed: true,
      },
    );
    gsap.set(kitty, { autoAlpha: 0 });
    const kittyTl = gsap.timeline({
      defaults: { ease: 'none', x: '+=5rem', rotation: '+=360', duration: 0.8 },
      repeat: 1,
      yoyo: true,
    });
    kittyTl
      .to(kitty, {
        autoAlpha: 1,
        delay: 5,
        y: '50%',
      })
      .to(kitty, { y: '-50%' })
      .to(kitty, { y: '50%' })
      .to(kitty, { y: '-50%' });
  }, []);
  return (
    <>
      <div
        className="loading__clouds"
        style={{ alignItems: 'center' }}
        ref={wrapper}
      >
        <Cloud />
        <Cloud />
        <Cloud />
        <Kitty />
      </div>
    </>
  );
};

export default Clouds;
