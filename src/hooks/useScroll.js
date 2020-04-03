import { useState, useEffect } from 'react';

export default () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return scroll;
};
