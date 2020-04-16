import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

export default () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.pageYOffset);
  };
  const handleScrollThrottled = throttle(handleScroll, 100);
  useEffect(() => {
    window.addEventListener('scroll', handleScrollThrottled);

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
    };
  }, []);
  return scroll;
};
