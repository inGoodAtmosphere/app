import { useState, useEffect } from 'react';
import countCaqi from '../components/Map/countCaqi';

export default (data) => {
  const caqi = countCaqi(data['pm2.5'], data.pm10);
  const [color, setColor] = useState();
  useEffect(() => {
    if (caqi < 25) setColor('#44A368');
    else if (caqi < 50) setColor('#C1E080');
    else if (caqi < 75) setColor('#C19330');
    else if (caqi < 100) setColor('#E1625A');
    else if (caqi >= 100) setColor('#7C1D7A');
    else setColor('#999999');
  }, [data]);
  return color;
};
