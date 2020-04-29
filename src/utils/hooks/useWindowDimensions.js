import { useState, useEffect } from 'react';

export default () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      if (
        window.innerWidth !== dimensions.width ||
        window.innerHeight !== dimensions.height
      ) {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return dimensions;
};
