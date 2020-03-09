import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);
  return width;
};
export default useWindowWidth;
