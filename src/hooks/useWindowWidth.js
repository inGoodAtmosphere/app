import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
};
export default useWindowWidth;
