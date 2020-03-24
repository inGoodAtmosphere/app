import { useEffect, useState } from 'react';
import { logEvent } from '../utils/analytics';

export default (markers, deviceId) => {
  const [title, setTitle] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);
  const { lat, lng } = markers.find((marker) => marker.id === deviceId);
  useEffect(() => {
    const setKey = (obj) => {
      const possibleKeys = ['city', 'village', 'town'];
      for (let i = 0; i < possibleKeys.length; i += 1) {
        if (possibleKeys[i] in obj) {
          return possibleKeys[i];
        }
      }
      return 'state';
    };
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}5&key=1d2ffa7c477b4f74a270d58298b257aa`,
        );
        const json = await res.json();
        const key = setKey(json.results[0].components);
        setTitle(json.results[0].components[key]);
        setIsLoaded(false);
      } catch (err) {
        logEvent('Error', err);
      }
    };
    fetchData();
  }, [deviceId]);
  return { title, isLoaded };
};
