import { useState, useEffect } from 'react';

export default (data) => {
  const [color, setColor] = useState();
  useEffect(() => {
    if (data.pm25 < 10) setColor('#44A368');
    else if (data.pm25 < 20) setColor('#C1E080');
    else if (data.pm25 < 50) setColor('#C19330');
    else if (data.pm25 < 100) setColor('#E1625A');
    else if (data.pm25 >= 100) setColor('#7C1D7A');
    else setColor('#999999');
  }, [data]);
  return color;
};
